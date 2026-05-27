# sync-rca-mail.ps1 v3 (ASCII-safe)
param(
    [string]$VaultPath    = "D:\iCloudDrive\.obsidian\IRP Management",
    [string]$OutputFolder = "00.Inbox\Emails",
    [string]$GmailFrom    = "blacksong1130@gmail.com",
    [string]$GmailAppPass = "",
    [int]$MaxPerBox       = 30,
    [switch]$SendDailyReport
)

$ErrorActionPreference = "SilentlyContinue"
$outputDir     = Join-Path $VaultPath $OutputFolder
$processedFile = Join-Path $VaultPath "Claudian\.mail-processed.txt"
$gmailPass     = if ($GmailAppPass) { $GmailAppPass } else { $env:GMAIL_APP_PASSWORD }

if (-not (Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir -Force | Out-Null
}

$processed = @{}
if (Test-Path $processedFile) {
    Get-Content $processedFile -Encoding UTF8 | ForEach-Object {
        if ($_) { $processed[$_] = $true }
    }
}

function Get-Category {
    param($subject, $sender, $body)
    $s = "$subject $sender $body".ToLower()
    if ($s -match "irp|dissertation|proposal|submission|tutor|supervisor|viva") {
        return "IRP-Academic", "P0", "graduation"
    }
    if ($s -match "deadline|due date|urgent|action required") {
        return "Urgent", "P0", "alert-circle"
    }
    if ($s -match "rca|royal college|network\.rca|student|course|module|timetable") {
        return "RCA-School", "P1", "school"
    }
    if ($s -match "invoice|payment|bill|receipt|order|amazon|apple|google") {
        return "Finance", "P2", "credit-card"
    }
    if ($s -match "unsubscribe|newsletter|noreply|no-reply|marketing|promotion") {
        return "Newsletter", "P3", "mail"
    }
    return "General", "P2", "inbox"
}

try {
    $outlook   = New-Object -ComObject Outlook.Application
    $namespace = $outlook.GetNamespace("MAPI")
    Write-Host "Connected to Outlook OK"
} catch {
    Write-Host "ERROR: Cannot connect to Outlook. Please open Outlook first."
    exit 1
}

$inboxes = @()
foreach ($store in $namespace.Stores) {
    $displayName = $store.DisplayName
    try {
        $root = $store.GetRootFolder()
        foreach ($folder in $root.Folders) {
            $fn = $folder.Name.ToLower()
            if ($fn -eq "inbox" -or $fn -eq "收件箱") {
                $inboxes += [PSCustomObject]@{ Name = $displayName; Folder = $folder }
                Write-Host "  Found mailbox: $displayName"
                break
            }
        }
    } catch {}
}

if ($inboxes.Count -eq 0) {
    $inboxes += [PSCustomObject]@{ Name = "Default"; Folder = $namespace.GetDefaultFolder(6) }
    Write-Host "  Using default inbox"
}

$totalNew   = 0
$todayMails = [System.Collections.ArrayList]@()
$today      = (Get-Date).Date

foreach ($box in $inboxes) {
    $boxName = $box.Name
    $items   = $box.Folder.Items
    $items.Sort("[ReceivedTime]", $true)
    $boxNew  = 0
    Write-Host "`n--- $boxName ---"

    for ($i = 1; $i -le $items.Count -and $boxNew -lt $MaxPerBox; $i++) {
        try { $mail = $items.Item($i) } catch { continue }
        if ($mail.Class -ne 43) { continue }

        $entryId = $mail.EntryID
        if ($processed.ContainsKey($entryId)) { continue }

        $receivedTime = $mail.ReceivedTime
        $subject      = if ($mail.Subject) { $mail.Subject } else { "(no subject)" }
        $senderName   = $mail.SenderName
        $senderAddr   = $mail.SenderEmailAddress
        $bodyText     = ($mail.Body -replace "`r`n`r`n`r`n+", "`n`n").Trim()

        $category, $priority, $icon = Get-Category $subject $senderAddr $bodyText

        $dateStr     = $receivedTime.ToString("yyyy-MM-dd")
        $timeStr     = $receivedTime.ToString("HHmm")
        $safeSubject = ($subject -replace '[\\/:*?"<>|#\[\]]', '_').Trim()
        if ($safeSubject.Length -gt 40) { $safeSubject = $safeSubject.Substring(0, 40) }
        $safeBox     = ($boxName -replace '[\\/:*?"<>|#\[\]]', '_')
        if ($safeBox.Length -gt 20) { $safeBox = $safeBox.Substring(0, 20) }
        $fileName    = "${dateStr}_${timeStr}_${safeBox}_${safeSubject}.md"
        $filePath    = Join-Path $outputDir $fileName

        $content = "---`ntags:`n  - email`n  - $($category.ToLower())`ncategory: $category`npriority: $priority`nmailbox: `"$boxName`"`nfrom: `"$senderName <$senderAddr>`"`ndate: $dateStr`ntime: $($receivedTime.ToString('HH:mm'))`nsubject: `"$($subject -replace '"', "'")`"`nread: false`n---`n`n# $subject`n`n> **Mailbox:** $boxName`n> **From:** $senderName <$senderAddr>`n> **Date:** $($receivedTime.ToString('yyyy-MM-dd HH:mm'))`n> **Category:** $category - $priority`n`n---`n`n$bodyText"

        try {
            [System.IO.File]::WriteAllText($filePath, $content, [System.Text.Encoding]::UTF8)
            $processed[$entryId] = $true
            $boxNew++
            $totalNew++
            Write-Host "  [$priority] $senderName : $($subject.Substring(0, [Math]::Min($subject.Length,50)))"

            if ($receivedTime.Date -eq $today) {
                $null = $todayMails.Add([PSCustomObject]@{
                    Subject  = $subject
                    From     = "$senderName <$senderAddr>"
                    Category = $category
                    Priority = $priority
                    Mailbox  = $boxName
                    Time     = $receivedTime.ToString("HH:mm")
                })
            }
        } catch {
            Write-Host "  WARN: Failed to write $subject"
        }
    }
    Write-Host "  -> $boxNew new"
}

$processed.Keys | Set-Content $processedFile -Encoding UTF8
Write-Host "`nDone: $totalNew new email notes saved"

if ($totalNew -gt 0) {
    try {
        Push-Location $VaultPath
        git add "00.Inbox/Emails/" 2>&1 | Out-Null
        git commit -m "mail-sync: +$totalNew emails [$(Get-Date -Format 'yyyy-MM-dd')]" 2>&1 | Out-Null
        git push 2>&1 | Out-Null
        Pop-Location
        Write-Host "Git push done"
    } catch {
        Pop-Location
        Write-Host "Git push skipped"
    }
}

function Send-DailyReport {
    if (-not $gmailPass) {
        Write-Host "WARN: No GMAIL_APP_PASSWORD set, skipping report"
        return
    }

    $allToday = Get-ChildItem $outputDir -Filter "$(Get-Date -Format 'yyyy-MM-dd')*.md" -ErrorAction SilentlyContinue
    if (-not $allToday -or $allToday.Count -eq 0) {
        Write-Host "No emails today, skipping report"
        return
    }

    $rows = ($allToday | ForEach-Object {
        $c = Get-Content $_.FullName -Encoding UTF8 -Raw
        $subj = if ($c -match 'subject: "(.+)"') { $Matches[1] } else { $_.BaseName }
        $from = if ($c -match 'from: "(.+)"')    { $Matches[1] } else { "" }
        $cat  = if ($c -match 'category: (.+)')  { $Matches[1].Trim() } else { "General" }
        $pri  = if ($c -match 'priority: (.+)')  { $Matches[1].Trim() } else { "P2" }
        $mbox = if ($c -match 'mailbox: "(.+)"') { $Matches[1] } else { "" }
        $color = switch ($pri) { "P0" { "#dc3545" } "P1" { "#fd7e14" } "P2" { "#ffc107" } default { "#6c757d" } }
        "<tr><td style='padding:8px;border-bottom:1px solid #eee'><span style='background:$color;color:white;padding:2px 6px;border-radius:4px;font-size:11px'>$pri</span></td><td style='padding:8px;border-bottom:1px solid #eee'>$($from -replace '<','&lt;' -replace '>','&gt;')</td><td style='padding:8px;border-bottom:1px solid #eee'>$subj</td><td style='padding:8px;border-bottom:1px solid #eee;color:#888;font-size:12px'>$mbox</td></tr>"
    }) -join "`n"

    $dateDisplay = (Get-Date).ToString("yyyy-MM-dd")
    $total = $allToday.Count

    $html = "<!DOCTYPE html><html><body style='font-family:sans-serif;max-width:700px;margin:0 auto;padding:20px'><div style='background:linear-gradient(135deg,#667eea,#764ba2);padding:20px;border-radius:12px;color:white;margin-bottom:24px'><h2 style='margin:0'>Daily Email Report</h2><p style='margin:8px 0 0;opacity:.9'>$dateDisplay - $total emails</p></div><table style='width:100%;border-collapse:collapse;font-size:14px'><tr style='background:#f8f9fa'><th style='padding:8px;text-align:left'>Priority</th><th style='padding:8px;text-align:left'>From</th><th style='padding:8px;text-align:left'>Subject</th><th style='padding:8px;text-align:left'>Mailbox</th></tr>$rows</table><p style='color:#999;font-size:12px;margin-top:20px;text-align:center'>Generated by Obsidian Claudian - Notes in 00.Inbox/Emails/</p></body></html>"

    try {
        $smtp             = New-Object Net.Mail.SmtpClient("smtp.gmail.com", 587)
        $smtp.EnableSsl   = $true
        $smtp.Credentials = New-Object System.Net.NetworkCredential($GmailFrom, $gmailPass)
        $msg              = New-Object Net.Mail.MailMessage
        $msg.From         = $GmailFrom
        $msg.To.Add($GmailFrom)
        $msg.Subject      = "Email Report $dateDisplay - $total emails"
        $msg.Body         = $html
        $msg.IsBodyHtml   = $true
        $smtp.Send($msg)
        Write-Host "Daily report sent to $GmailFrom"
    } catch {
        Write-Host "ERROR sending report: $_"
    }
}

$hour = (Get-Date).Hour
if ($SendDailyReport -or ($hour -eq 20 -and (Get-Date).Minute -lt 30)) {
    Send-DailyReport
}

