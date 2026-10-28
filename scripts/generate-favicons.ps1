Add-Type -AssemblyName System.Drawing

$sourceRelPath = "public/brand/logo-emblem-light.png"
$sourcePath = Join-Path (Get-Location) $sourceRelPath

if (-not (Test-Path $sourcePath)) {
    Write-Error "Source emblem not found at $sourcePath"
    exit 1
}

$sourceBmp = New-Object System.Drawing.Bitmap($sourcePath)
$srcW = $sourceBmp.Width
$srcH = $sourceBmp.Height

Write-Host "Source Image: $srcW x $srcH"

function Generate-Square-Icon($targetSize, $outputPath, $scaleRatio = 0.80) {
    $targetBmp = New-Object System.Drawing.Bitmap($targetSize, $targetSize, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($targetBmp)
    
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $g.Clear([System.Drawing.Color]::Transparent)

    # Calculate scaled dimensions maintaining aspect ratio
    $destW = [Math]::Round($targetSize * $scaleRatio)
    $destH = [Math]::Round($destW * ($srcH / $srcW))

    # Center horizontally and vertically
    $destX = [Math]::Round(($targetSize - $destW) / 2)
    $destY = [Math]::Round(($targetSize - $destH) / 2)

    $destRect = New-Object System.Drawing.Rectangle($destX, $destY, $destW, $destH)
    $g.DrawImage($sourceBmp, $destRect, 0, 0, $srcW, $srcH, [System.Drawing.GraphicsUnit]::Pixel)

    $g.Dispose()

    $targetBmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $targetBmp.Dispose()

    Write-Host "Generated: $outputPath (${targetSize}x${targetSize}) [Content: ${destW}x${destH} at ($destX, $destY)]"
}

# 16x16 and 32x32 for legacy / tab icons
Generate-Square-Icon 16 (Join-Path (Get-Location) "public/favicon-16x16.png") 0.85
Generate-Square-Icon 32 (Join-Path (Get-Location) "public/favicon-32x32.png") 0.85

# Google Search Favicon multiples of 48px:
Generate-Square-Icon 48 (Join-Path (Get-Location) "public/favicon-48x48.png") 0.80
Generate-Square-Icon 96 (Join-Path (Get-Location) "public/favicon-96x96.png") 0.80
Generate-Square-Icon 192 (Join-Path (Get-Location) "public/favicon-192x192.png") 0.80
Generate-Square-Icon 512 (Join-Path (Get-Location) "public/favicon-512x512.png") 0.80

# Primary Google favicon target /favicon.png (192x192, a square multiple of 48)
Generate-Square-Icon 192 (Join-Path (Get-Location) "public/favicon.png") 0.80

# Apple Touch Icon (180x180)
Generate-Square-Icon 180 (Join-Path (Get-Location) "public/apple-touch-icon.png") 0.80

$sourceBmp.Dispose()
Write-Host "All PNG favicon variants generated successfully."
