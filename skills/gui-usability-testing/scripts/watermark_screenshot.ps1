param(
    [string]$ImageFolder = "screenshots/watermarked",
    [string]$Email = "23120355@student.hcmus.edu.vn",
    [string]$StudentId = "23120355",
    [string]$Name = "Vo Huu Thang"
)

Add-Type -AssemblyName System.Drawing

if (-not (Test-Path $ImageFolder)) {
    Write-Host "Directory $ImageFolder does not exist."
    exit 0
}

$images = Get-ChildItem -Path $ImageFolder -Recurse -File | Where-Object { $_.Extension -match '^\.(png|jpe?g)$' }

if ($images.Count -eq 0) {
    Write-Host "No images found in $ImageFolder."
    exit 0
}

Write-Host "Watermarking $($images.Count) images in $ImageFolder..."

$dateStr = (Get-Date).ToString("yyyy-MM-dd HH:mm")
$watermarkText = "$StudentId - $Name | $Email | HW03 Testing Evidence | $dateStr"

foreach ($img in $images) {
    try {
        # Read image bytes to avoid locking the original file
        $bytes = [System.IO.File]::ReadAllBytes($img.FullName)
        $ms = New-Object System.IO.MemoryStream($bytes, 0, $bytes.Length)
        $srcBmp = [System.Drawing.Bitmap]::FromStream($ms)
        $bmp = New-Object System.Drawing.Bitmap($srcBmp.Width, $srcBmp.Height)
        $graphics = [System.Drawing.Graphics]::FromImage($bmp)
        $graphics.DrawImage($srcBmp, 0, 0, $srcBmp.Width, $srcBmp.Height)
        $srcBmp.Dispose()
        $ms.Dispose()

        # Draw semi-transparent header bar
        $brushBg = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(190, 0, 0, 0))
        $graphics.FillRectangle($brushBg, 0, 0, $bmp.Width, 40)

        # Draw gold watermark text
        $font = New-Object System.Drawing.Font("Arial", 12, [System.Drawing.FontStyle]::Bold)
        $brushText = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 255, 215, 0))
        $graphics.DrawString($watermarkText, $font, $brushText, 14, 10)

        $graphics.Dispose()

        # Save back to file
        $bmp.Save($img.FullName, [System.Drawing.Imaging.ImageFormat]::Png)
        $bmp.Dispose()

        Write-Host "  [OK] Watermarked: $($img.Name)"
    }
    catch {
        Write-Warning "  [FAIL] Could not process $($img.Name): $($_.Exception.Message)"
    }
}

Write-Host "Finished applying watermarks successfully!"
