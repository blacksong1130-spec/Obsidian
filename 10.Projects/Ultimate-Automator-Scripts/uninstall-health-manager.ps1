# uninstall-health-manager.ps1 — 卸载健康管家

Write-Host "🗑 正在卸载健康管家..."

$tasks = @("Water","Stand","Eyes","Bathroom","Breakfast","Lunch","Snack","Dinner")
foreach ($t in $tasks) {
    schtasks /delete /tn "HealthManager\$t" /f 2>$null | Out-Null
    Write-Host "  ✓ 已删除: $t"
}

Write-Host "✅ 健康管家已卸载。"
