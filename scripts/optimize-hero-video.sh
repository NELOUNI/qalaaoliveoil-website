#!/usr/bin/env bash
# Generate web-optimized hero assets from public/hero-video.mp4 (source master).
# Run from repo root: ./scripts/optimize-hero-video.sh

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="${ROOT}/public/hero-video.mp4"
POSTER="${ROOT}/public/images/hero/hero-poster.webp"
MP4="${ROOT}/public/hero-desktop.mp4"

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "Install ffmpeg first: brew install ffmpeg"
  exit 1
fi

if [[ ! -f "$SRC" ]]; then
  echo "Missing source: public/hero-video.mp4"
  echo "Place your master file there, then re-run this script."
  exit 1
fi

mkdir -p "${ROOT}/public/images/hero"

echo "→ Poster (WebP, ~1920px wide)…"
TMP_POSTER="${ROOT}/public/images/hero/.hero-poster-tmp.jpg"
ffmpeg -y -ss 1 -i "$SRC" -vframes 1 -vf "scale=1920:-2" -q:v 2 -update 1 "$TMP_POSTER"
cwebp -q 82 "$TMP_POSTER" -o "$POSTER"
rm -f "$TMP_POSTER"

echo "→ Desktop MP4 (H.264, faststart, no audio)…"
ffmpeg -y -i "$SRC" -an \
  -vf "scale='min(1920,iw)':-2" \
  -c:v libx264 -preset slow -crf 28 -pix_fmt yuv420p \
  -movflags +faststart \
  "$MP4"

echo "Done:"
ls -lh "$POSTER" "$MP4"
