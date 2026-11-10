#!/usr/bin/env bash
set -euo pipefail
script_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
args=()
for arg in "$@"; do
  case "$arg" in
    --validate-only) args+=(-ValidateOnly) ;;
    --check-files-only) args+=(-CheckFilesOnly) ;;
    --force) args+=(-Force) ;;
    *) printf 'Unknown option: %s\n' "$arg" >&2; exit 2 ;;
  esac
done
if command -v powershell.exe >/dev/null 2>&1; then
  script_path="$script_dir/package_submission.ps1"
  if command -v wslpath >/dev/null 2>&1; then script_path="$(wslpath -w "$script_path")"; fi
  exec powershell.exe -NoProfile -ExecutionPolicy Bypass -File "$script_path" "${args[@]}"
elif command -v pwsh >/dev/null 2>&1; then
  exec pwsh -NoProfile -File "$script_dir/package_submission.ps1" "${args[@]}"
else
  printf 'PowerShell is required (powershell.exe on Windows, or pwsh).\n' >&2
  exit 1
fi
