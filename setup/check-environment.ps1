$ErrorActionPreference = "SilentlyContinue"

Write-Host "=== Automation Testing Environment Check ==="
Write-Host ""

function Check-Command($name, $versionArgs) {
    $cmd = Get-Command $name -ErrorAction SilentlyContinue
    if ($null -eq $cmd) {
        Write-Host "[MISSING] $name"
        return $false
    }

    $version = & $name $versionArgs 2>$null
    Write-Host "[OK] $name -> $version"
    return $true
}

$nodeOk = Check-Command "node" "-v"
$npmOk  = Check-Command "npm" "-v"
$gitOk  = Check-Command "git" "--version"

Write-Host ""
if (-not $gitOk) {
    Write-Host "Git is optional in the first learning round."
}

if ($nodeOk -and $npmOk) {
    Write-Host ""
    Write-Host "Node.js environment is ready."
    Write-Host "Next step: cd exercises\playwright; npm install"
} else {
    Write-Host ""
    Write-Host "Install Node.js LTS from https://nodejs.org/ and reopen PowerShell."
}
