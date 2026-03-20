#!/bin/bash
# ============================================
# AITuber Radio CLI — ワンコマンドで番組録画
# ============================================
#
# 使い方:
#   bash tools/radio-cli.sh news_morning       # 朝イチニュース
#   bash tools/radio-cli.sh ohayou             # おはようラジオ
#   bash tools/radio-cli.sh zatsugaku          # 雑学タイム
#   bash tools/radio-cli.sh news_morning --no-convert  # WebMのみ
#
# 必要:
#   - Chrome + AITuber Radio 拡張機能がインストール済み
#   - ~/.aituber-radio-ext-id に拡張機能IDが保存済み
#     (初回: echo "YOUR_EXTENSION_ID" > ~/.aituber-radio-ext-id)
#   - ffmpeg (MP4変換時)
#

set -e

# 引数
CARD=${1:-news_morning}
NO_CONVERT=false
if [ "$2" = "--no-convert" ]; then
  NO_CONVERT=true
fi

# 拡張機能ID
EXT_ID_FILE="$HOME/.aituber-radio-ext-id"
if [ ! -f "$EXT_ID_FILE" ]; then
  echo "❌ 拡張機能IDが見つかりません"
  echo "   echo 'YOUR_EXTENSION_ID' > $EXT_ID_FILE"
  echo "   (chrome://extensions で確認)"
  exit 1
fi
EXT_ID=$(cat "$EXT_ID_FILE" | tr -d '[:space:]')

DOWNLOAD_DIR="$HOME/Downloads"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

echo "📻 AITuber Radio CLI"
echo "━━━━━━━━━━━━━━━━━━━━"
echo "  カード: $CARD"
echo "  拡張ID: ${EXT_ID:0:8}..."
echo ""

# 既存の最新WebMを記録
BEFORE=$(ls -1t "$DOWNLOAD_DIR"/*.webm 2>/dev/null | head -1)

# Chrome でビューワーを開く（URLパラメータで自動再生+録画）
VIEWER_URL="chrome-extension://${EXT_ID}/viewer/index.html?card=${CARD}&record=true"
echo "🚀 番組を開始中..."
open -a "Google Chrome" "$VIEWER_URL"

# 録画完了を待つ（新しいWebMファイルの出現を監視）
echo "⏳ 録画完了を待機中... (Ctrl+C で中断)"
WEBM_FILE=""
while true; do
  LATEST=$(ls -1t "$DOWNLOAD_DIR"/*.webm 2>/dev/null | head -1)

  # 新しいファイルが出現
  if [ -n "$LATEST" ] && [ "$LATEST" != "$BEFORE" ]; then
    # ファイルサイズが安定するまで待つ（書き込み完了確認）
    sleep 3
    SIZE1=$(stat -f%z "$LATEST" 2>/dev/null || stat --format=%s "$LATEST" 2>/dev/null)
    sleep 3
    SIZE2=$(stat -f%z "$LATEST" 2>/dev/null || stat --format=%s "$LATEST" 2>/dev/null)

    if [ "$SIZE1" = "$SIZE2" ] && [ "$SIZE1" -gt 0 ]; then
      WEBM_FILE="$LATEST"
      break
    fi
  fi

  sleep 5
done

SIZE_MB=$(echo "scale=1; $SIZE2 / 1048576" | bc)
echo "📹 録画完了: $(basename "$WEBM_FILE") (${SIZE_MB}MB)"

# MP4 変換
if [ "$NO_CONVERT" = false ] && command -v ffmpeg &>/dev/null; then
  echo "🔄 MP4 に変換中..."
  bash "$SCRIPT_DIR/webm2mp4.sh" "$WEBM_FILE"

  MP4_FILE="${WEBM_FILE%.webm}.mp4"
  if [ -f "$MP4_FILE" ]; then
    MP4_SIZE=$(echo "scale=1; $(stat -f%z "$MP4_FILE" 2>/dev/null || stat --format=%s "$MP4_FILE" 2>/dev/null) / 1048576" | bc)
    echo ""
    echo "✅ 完了！"
    echo "  WebM: $(basename "$WEBM_FILE") (${SIZE_MB}MB)"
    echo "  MP4:  $(basename "$MP4_FILE") (${MP4_SIZE}MB)"
    echo "  場所: $DOWNLOAD_DIR/"
  fi
elif [ "$NO_CONVERT" = true ]; then
  echo ""
  echo "✅ 完了！ (WebMのみ)"
  echo "  ファイル: $(basename "$WEBM_FILE")"
else
  echo "⚠️ ffmpeg が見つかりません。WebMのまま保存。"
  echo "  brew install ffmpeg"
fi
