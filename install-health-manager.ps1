# install-health-manager.ps1
# 一键安装健康管家 — 创建所有 Windows 任务计划

$scriptPath = Join-Path $PSScriptRoot "health-notify.ps1"
$psExe      = "powershell.exe"
$runArg     = "-WindowStyle Hidden -NonInteractive -ExecutionPolicy Bypass -File `"$scriptPath`""

function New-HealthTask {
    param(
        [string]$Name,        # 任务名
        [string]$Type,        # 通知类型
        [string]$Schedule,    # MINUTE / DAILY / ONCE
        [int]   $Interval,    # 间隔分钟（仅 MINUTE 有效）
        [string]$StartTime,   # 开始时间 HH:mm
        [string]$EndTime = "" # 结束时间（可选）
    )

    $taskName = "HealthManager\$Name"
    $action   = "$runArg -Type $Type"

    # 先删除旧任务（如果存在）
    schtasks /delete /tn $taskName /f 2>$null | Out-Null

    if ($Schedule -eq "MINUTE") {
        if ($EndTime) {
            schtasks /create /tn $taskName /tr "$psExe $action" `
                /sc MINUTE /mo $Interval /st $StartTime /et $EndTime `
                /ru (whoami) /f | Out-Null
        } else {
            schtasks /create /tn $taskName /tr "$psExe $action" `
                /sc MINUTE /mo $Interval /st $StartTime `
                /ru (whoami) /f | Out-Null
        }
    } elseif ($Schedule -eq "DAILY") {
        schtasks /create /tn $taskName /tr "$psExe $action" `
            /sc DAILY /st $StartTime `
            /ru (whoami) /f | Out-Null
    }

    $exists = schtasks /query /tn $taskName 2>$null
    if ($LASTEXITCODE -eq 0) {
        Write-Host "  ✓ $Name  ($Type)"
    } else {
        Write-Host "  ✗ $Name 创建失败"
    }
}

Write-Host ""
Write-Host "🏃 正在安装健康管家..."
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# 创建任务文件夹
schtasks /create /tn "HealthManager\__init__" /tr "cmd /c echo init" /sc ONCE /st 00:00 /ru (whoami) /f 2>$null | Out-Null
schtasks /delete /tn "HealthManager\__init__" /f 2>$null | Out-Null

Write-Host ""
Write-Host "⏱ 周期性提醒"
New-HealthTask -Name "Water"    -Type "water"    -Schedule "MINUTE" -Interval 45  -StartTime "09:00" -EndTime "22:00"
New-HealthTask -Name "Stand"    -Type "stand"    -Schedule "MINUTE" -Interval 60  -StartTime "09:00" -EndTime "22:00"
New-HealthTask -Name "Eyes"     -Type "eyes"     -Schedule "MINUTE" -Interval 25  -StartTime "09:00" -EndTime "22:00"
New-HealthTask -Name "Bathroom" -Type "bathroom" -Schedule "MINUTE" -Interval 120 -StartTime "09:00" -EndTime "22:00"

Write-Host ""
Write-Host "🍽 饮食提醒"
New-HealthTask -Name "Breakfast" -Type "breakfast" -Schedule "DAILY" -StartTime "08:30"
New-HealthTask -Name "Lunch"     -Type "lunch"     -Schedule "DAILY" -StartTime "12:30"
New-HealthTask -Name "Snack"     -Type "snack"     -Schedule "DAILY" -StartTime "15:30"
New-HealthTask -Name "Dinner"    -Type "dinner"    -Schedule "DAILY" -StartTime "19:00"

Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
Write-Host "✅ 健康管家安装完成！"
Write-Host ""
Write-Host "提醒时间表："
Write-Host "  💧 喝水      每 45 分钟 (09:00–22:00)"
Write-Host "  🚶 起立走走  每 60 分钟 (09:00–22:00)"
Write-Host "  👀 护眼      每 25 分钟 (09:00–22:00)"
Write-Host "  🚽 厕所      每 2 小时  (09:00–22:00)"
Write-Host "  🌅 早饭      08:30"
Write-Host "  🍳 午饭      12:30"
Write-Host "  🍎 下午茶    15:30"
Write-Host "  🍽  晚饭      19:00"
Write-Host ""
Write-Host "卸载：运行 uninstall-health-manager.ps1"
