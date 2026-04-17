# install-mail-sync.ps1  v2
# 以管理员身份运行一次即可
# 安装两个定时任务：① 每15分钟抓取 ② 每日20:00发日报

param(
    [string]$GmailAppPassword = ""   # 在这里填入，或安装后手动设置环境变量
)

$scriptPath = "D:\iCloudDrive\.obsidian\IRP Management\Claudian\sync-rca-mail.ps1"
$gmailPass  = $GmailAppPassword

# ── 任务1：每15分钟抓取邮件 ──────────────────────────────────
$task1 = "Obsidian-Mail-Sync"
Unregister-ScheduledTask -TaskName $task1 -Confirm:$false -ErrorAction SilentlyContinue

$trigger1 = New-ScheduledTaskTrigger -RepetitionInterval (New-TimeSpan -Minutes 15) -Once -At (Get-Date)
$action1  = New-ScheduledTaskAction `
    -Execute "powershell.exe" `
    -Argument "-WindowStyle Hidden -NonInteractive -ExecutionPolicy Bypass -File `"$scriptPath`""
$env1 = New-ScheduledTaskSettingsSet -ExecutionTimeLimit (New-TimeSpan -Minutes 5) -StartWhenAvailable

# 如果有 Gmail 密码，注入为环境变量
if ($gmailPass) {
    $envVar = [System.Environment]::SetEnvironmentVariable("GMAIL_APP_PASSWORD", $gmailPass, "User")
}

Register-ScheduledTask -TaskName $task1 -Trigger $trigger1 -Action $action1 -Settings $env1 -RunLevel Limited -Force
Write-Host "✅ 任务1 已安装：$task1（每15分钟）"

# ── 任务2：每日20:00发日报 ───────────────────────────────────
$task2    = "Obsidian-Mail-DailyReport"
Unregister-ScheduledTask -TaskName $task2 -Confirm:$false -ErrorAction SilentlyContinue

$trigger2 = New-ScheduledTaskTrigger -Daily -At "20:00"
$action2  = New-ScheduledTaskAction `
    -Execute "powershell.exe" `
    -Argument "-WindowStyle Hidden -NonInteractive -ExecutionPolicy Bypass -File `"$scriptPath`" -SendDailyReport"
$env2 = New-ScheduledTaskSettingsSet -ExecutionTimeLimit (New-TimeSpan -Minutes 5) -StartWhenAvailable

Register-ScheduledTask -TaskName $task2 -Trigger $trigger2 -Action $action2 -Settings $env2 -RunLevel Limited -Force
Write-Host "✅ 任务2 已安装：$task2（每日20:00）"

Write-Host ""
Write-Host "══════════════════════════════════════"
Write-Host "  安装完成！以下是常用管理命令："
Write-Host "══════════════════════════════════════"
Write-Host ""
Write-Host "  立即同步邮件："
Write-Host "  Start-ScheduledTask -TaskName '$task1'"
Write-Host ""
Write-Host "  立即发送日报（测试）："
Write-Host "  & '$scriptPath' -SendDailyReport -GmailAppPass '你的16位密码'"
Write-Host ""
Write-Host "  查看任务状态："
Write-Host "  Get-ScheduledTask | Where Name -like 'Obsidian*'"
Write-Host ""
Write-Host "  卸载所有任务："
Write-Host "  'Obsidian-Mail-Sync','Obsidian-Mail-DailyReport' | ForEach { Unregister-ScheduledTask `$_ -Confirm:`$false }"
