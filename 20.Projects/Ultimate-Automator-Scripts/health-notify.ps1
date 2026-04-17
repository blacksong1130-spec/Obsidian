param(
    [Parameter(Mandatory=$true)]
    [ValidateSet("water","stand","eyes","bathroom","breakfast","lunch","snack","dinner")]
    [string]$Type
)

Add-Type @"
using System; using System.Runtime.InteropServices;
public class IdleChecker {
    [StructLayout(LayoutKind.Sequential)]
    public struct LASTINPUTINFO { public uint cbSize; public uint dwTime; }
    [DllImport("user32.dll")]
    public static extern bool GetLastInputInfo(ref LASTINPUTINFO plii);
    public static double GetIdleMinutes() {
        var info = new LASTINPUTINFO();
        info.cbSize = (uint)Marshal.SizeOf(info);
        GetLastInputInfo(ref info);
        return (Environment.TickCount - info.dwTime) / 60000.0;
    }
}
"@

$idleMinutes = [IdleChecker]::GetIdleMinutes()
if ($idleMinutes -gt 12 -and $Type -notin @("lunch","dinner","breakfast")) { exit 0 }

$water_t     = [System.Text.Encoding]::UTF8.GetString([byte[]](0xF0,0x9F,0x92,0xA7,0x20)) + "   Drink Water"
$stand_t     = [System.Text.Encoding]::UTF8.GetString([byte[]](0xF0,0x9F,0x9A,0xB6,0x20)) + "   Stand Up & Move!"
$eyes_t      = [System.Text.Encoding]::UTF8.GetString([byte[]](0xF0,0x9F,0x91,0x80,0x20)) + "   Eye Break  20-20-20"
$bathroom_t  = [System.Text.Encoding]::UTF8.GetString([byte[]](0xF0,0x9F,0x9A,0xBD,0x20)) + "   Bathroom Break"
$breakfast_t = [System.Text.Encoding]::UTF8.GetString([byte[]](0xF0,0x9F,0x8C,0x85,0x20)) + "   Breakfast Time!"
$lunch_t     = [System.Text.Encoding]::UTF8.GetString([byte[]](0xF0,0x9F,0x8D,0xB3,0x20)) + "   Lunch Time!"
$snack_t     = [System.Text.Encoding]::UTF8.GetString([byte[]](0xF0,0x9F,0x8D,0x8E,0x20)) + "   Afternoon Snack"
$dinner_t    = [System.Text.Encoding]::UTF8.GetString([byte[]](0xF0,0x9F,0x8D,0xBD,0x20)) + "   Dinner Time!"

$messages = @{
    "water"     = @{ title=$water_t;     body="45 min passed. Have a glass of water!" }
    "stand"     = @{ title=$stand_t;     body="You've been sitting for ~1 hour. Stand up and stretch for 5 min." }
    "eyes"      = @{ title=$eyes_t;      body="Look at something 20 feet away for 20 seconds. Relax your eyes." }
    "bathroom"  = @{ title=$bathroom_t;  body="2 hours in. Good time for a bathroom break!" }
    "breakfast" = @{ title=$breakfast_t; body="Good morning! Don't skip breakfast." }
    "lunch"     = @{ title=$lunch_t;     body="12:30 - Go make lunch or order food!" }
    "snack"     = @{ title=$snack_t;     body="3:30pm - Grab a healthy snack to keep your energy up." }
    "dinner"    = @{ title=$dinner_t;    body="7pm - Time to prepare dinner. Take care of yourself!" }
}

$msg = $messages[$Type]

Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing

$notify = New-Object System.Windows.Forms.NotifyIcon
$notify.Icon = [System.Drawing.SystemIcons]::Information
$notify.BalloonTipIcon  = [System.Windows.Forms.ToolTipIcon]::Info
$notify.BalloonTipTitle = $msg.title
$notify.BalloonTipText  = $msg.body
$notify.Visible = $true
$notify.ShowBalloonTip(9000)
Start-Sleep -Seconds 10
$notify.Dispose()