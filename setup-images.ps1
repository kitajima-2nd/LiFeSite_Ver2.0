# 画像ファイルをpublicディレクトリにコピーするスクリプト
# PowerShellで実行: .\setup-images.ps1

if (Test-Path "images") {
    if (-not (Test-Path "public\images")) {
        New-Item -ItemType Directory -Path "public\images" -Force
    }
    Copy-Item -Path "images\*" -Destination "public\images\" -Recurse -Force
    Write-Host "画像ファイルをpublic/imagesにコピーしました。"
} else {
    Write-Host "imagesディレクトリが見つかりません。"
}
