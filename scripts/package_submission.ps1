# Script to package HW03 submission zip file cleanly without node_modules
$ErrorActionPreference = "Stop"
$ProgressPreference = "SilentlyContinue"

$cwd = Get-Location
$staging = Join-Path $env:TEMP "hw03_staging_23120355"

if (Test-Path $staging) {
    Remove-Item -Recurse -Force $staging
}
New-Item -ItemType Directory -Path $staging -Force | Out-Null

$files = @(
    "README.md",
    "HW03_Main_Report.md",
    "HW03_AI_Audit_Report.md",
    "HW03_Bug_Report.md",
    "HW03_Cross_Platform_Report.md",
    "HW03_Usability_Evaluation_Report.md",
    "HW03_Usability_Plan_and_Instruments.md",
    "HW03_GUI_Checklist.xls",
    "HW03_GUI_Checklist.csv",
    "HW03_GUI_Checklist_Summary.md",
    "git_commit_log.txt",
    "checklist_data.json",
    "sus_participants.json",
    "interview.md"
)

Write-Host "Copying root files to staging..."
foreach ($file in $files) {
    $src = Join-Path $cwd $file
    if (Test-Path $src) {
        Copy-Item -Path $src -Destination $staging
    }
}

Write-Host "Copying screenshots..."
Copy-Item -Recurse -Path (Join-Path $cwd "screenshots") -Destination (Join-Path $staging "screenshots")

Write-Host "Copying scripts..."
Copy-Item -Recurse -Path (Join-Path $cwd "scripts") -Destination (Join-Path $staging "scripts")

Write-Host "Copying skills (excluding node_modules)..."
$skillsDest = Join-Path $staging "skills"
New-Item -ItemType Directory -Path $skillsDest -Force | Out-Null

Get-ChildItem -Path (Join-Path $cwd "skills") -Directory | ForEach-Object {
    $dest = Join-Path $skillsDest $_.Name
    Copy-Item -Path $_.FullName -Destination $dest -Recurse
    $nm = Join-Path $dest "node_modules"
    if (Test-Path $nm) {
        Remove-Item -Recurse -Force $nm
    }
}

$zipTarget = Join-Path $cwd "23120355_HW03_AI_GUIUsability_100.zip"
if (Test-Path $zipTarget) {
    Remove-Item -Force $zipTarget
}

Write-Host "Compressing archive to $zipTarget..."
Compress-Archive -Path "$staging\*" -DestinationPath $zipTarget -Force

Remove-Item -Recurse -Force $staging

$zipInfo = Get-Item $zipTarget
Write-Host "Done! Archive size: $($zipInfo.Length) bytes ($([math]::Round($zipInfo.Length / 1MB, 2)) MB)"
