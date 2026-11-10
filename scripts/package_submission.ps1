[CmdletBinding()]
param(
    [switch]$ValidateOnly,
    [switch]$CheckFilesOnly,
    [switch]$Force,
    [string]$OutputPath
)
$ErrorActionPreference = "Stop"
if ($CheckFilesOnly -and -not $ValidateOnly) {
    throw "-CheckFilesOnly is available only with -ValidateOnly."
}
$root = [System.IO.Path]::GetFullPath((Join-Path $PSScriptRoot ".."))
$manifestText = & node (Join-Path $PSScriptRoot "submission_manifest.cjs")
$manifestExit = $LASTEXITCODE
if (-not $manifestText) { throw "Could not build submission manifest." }
$manifest = ($manifestText -join [Environment]::NewLine) | ConvertFrom-Json
if ($manifestExit -ne 0 -or $manifest.missing.Count -gt 0) {
    throw ("Required files or linked evidence missing: " + ($manifest.missing -join ", "))
}
Write-Host ("Files: {0}; total: {1:N2} MB; grade: {2}/100" -f $manifest.files.Count, ($manifest.bytes / 1MB), $manifest.grade)
Write-Host ("Archive name: " + $manifest.filename)
if ($manifest.stalePdfs.Count -gt 0) {
    $message = "Re-export current Markdown to PDF before packaging: " + ($manifest.stalePdfs -join ", ")
    if ($ValidateOnly -and $CheckFilesOnly) { Write-Warning $message }
    else { throw $message }
}
if ($ValidateOnly) {
    Write-Host "File manifest and local evidence links validated. No ZIP created."
    return
}
if (-not $OutputPath) { $OutputPath = Join-Path $root $manifest.filename }
$target = [System.IO.Path]::GetFullPath($OutputPath)
if (-not $target.StartsWith($root + [System.IO.Path]::DirectorySeparatorChar, [StringComparison]::OrdinalIgnoreCase)) {
    throw "ZIP output must stay within the homework workspace."
}
if ([System.IO.Path]::GetExtension($target) -ne ".zip") { throw "Output must have .zip extension." }
if ((Test-Path -LiteralPath $target) -and -not $Force) {
    throw "ZIP already exists. Choose -OutputPath or explicitly pass -Force to replace it."
}
Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem
# Write a new temporary file first; keep the existing archive if packaging fails.
$tempArchive = Join-Path $root (".hw03-package-" + [Guid]::NewGuid().ToString("N") + ".tmp")
try {
    $stream = [System.IO.File]::Open($tempArchive, [System.IO.FileMode]::CreateNew)
    try {
        $archive = New-Object System.IO.Compression.ZipArchive($stream, [System.IO.Compression.ZipArchiveMode]::Create, $true)
        try {
            foreach ($relative in $manifest.files) {
                $source = [System.IO.Path]::GetFullPath((Join-Path $root $relative))
                if (-not $source.StartsWith($root + [System.IO.Path]::DirectorySeparatorChar, [StringComparison]::OrdinalIgnoreCase)) {
                    throw "Source escaped workspace: $relative"
                }
                [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile(
                    $archive, $source, $relative.Replace("\", "/"),
                    [System.IO.Compression.CompressionLevel]::Optimal
                ) | Out-Null
            }
        } finally { $archive.Dispose() }
    } finally { $stream.Dispose() }
    $check = [System.IO.Compression.ZipFile]::OpenRead($tempArchive)
    try {
        if ($check.Entries.Count -ne $manifest.files.Count) { throw "ZIP entry count mismatch." }
    } finally { $check.Dispose() }
    Move-Item -LiteralPath $tempArchive -Destination $target -Force:$Force
    Write-Host ("Created: " + $target)
} finally {
    # Only this unique, workspace-local temporary file is removed.
    if (Test-Path -LiteralPath $tempArchive) { Remove-Item -LiteralPath $tempArchive -Force }
}
