#!/bin/bash
# ============================================
# AITuber Radio CLI — ワンコマンドで番組録画
# ============================================
#
# 使い方:
#   # Station カードから
#   bash tools/radio-cli.sh news_morning
#   bash tools/radio-cli.sh ohayou
#
#   # ローカル台本から
#   bash tools/radio-cli.sh --local /path/to/project/setlist.md
#   bash tools/radio-cli.sh --local ~/怪談ちゃん/viewer/default_setlist.md
#
#   # オプション
#   bash tools/radio-cli.sh news_morning --no-convert  # WebMのみ
#
# 必要:
#   - Chrome + AITuber Radio 拡張機能がインストール済み
#   - ~/.aituber-radio-ext-id に拡張機能IDが保存済み
#     (初回: echo "YOUR_EXTENSION_ID" > ~/.aituber-radio-ext-id)
#   - ffmpeg (MP4変換時)
#   - python3 (ローカルモード時)
#

set -e

# 引数パース
MODE="card"
CARD=""
LOCAL_FILE=""
NO_CONVERT=false
LOCAL_PORT=18923
SERVER_PID=""

for arg in "$@"; do
  case "$arg" in
    --local)  MODE="local" ;;
    --no-convert) NO_CONVERT=true ;;
    *)
      if [ "$MODE" = "local" ] && [ -z "$LOCAL_FILE" ]; then
        LOCAL_FILE="$arg"
      elif [ -z "$CARD" ]; then
        CARD="$arg"
      fi
      ;;
  esac
done

# デフォルト
if [ "$MODE" = "card" ] && [ -z "$CARD" ]; then
  CARD="news_morning"
fi

# クリーンアップ
cleanup() {
  if [ -n "$SERVER_PID" ]; then
    kill "$SERVER_PID" 2>/dev/null || true
    echo "🔌 ローカルサーバー停止"
  fi
  # 一時生成したindex.jsonを削除
  if [ -n "$READINGS_DIR" ] && [ -f "$READINGS_DIR/index.json" ]; then
    rm -f "$READINGS_DIR/index.json"
  fi
  # コピーしたランチャーを削除
  if [ "$COPIED_LAUNCHER" = true ] && [ -n "$SERVE_DIR" ]; then
    rm -f "$SERVE_DIR/cli-launcher.html"
  fi
}
trap cleanup EXIT

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

# ビューワーURL生成
if [ "$MODE" = "local" ]; then
  # ローカルモード: 一時HTTPサーバーで台本+メディアを配信
  if [ -z "$LOCAL_FILE" ] || [ ! -f "$LOCAL_FILE" ]; then
    echo "❌ 台本ファイルが見つかりません: $LOCAL_FILE"
    echo "   使い方: bash radio-cli.sh --local /path/to/setlist.md"
    exit 1
  fi

  # 台本のあるディレクトリをルートにする（media/ readings/ も配信）
  LOCAL_DIR="$(cd "$(dirname "$LOCAL_FILE")" && pwd)"
  LOCAL_NAME="$(basename "$LOCAL_FILE")"

  # 親ディレクトリにmedia/があるかチェック（viewer/setlist.md → 親=プロジェクトルート）
  if [ -d "$LOCAL_DIR/media" ] || [ -d "$LOCAL_DIR/readings" ]; then
    SERVE_DIR="$LOCAL_DIR"
  elif [ -d "$(dirname "$LOCAL_DIR")/media" ]; then
    SERVE_DIR="$(dirname "$LOCAL_DIR")"
    LOCAL_NAME="$(basename "$LOCAL_DIR")/$LOCAL_NAME"
  else
    SERVE_DIR="$LOCAL_DIR"
  fi

  echo "  モード: ローカル"
  echo "  台本:   $LOCAL_FILE"
  echo "  配信:   $SERVE_DIR (port $LOCAL_PORT)"
  echo "  拡張ID: ${EXT_ID:0:8}..."
  echo ""

  # readings/ フォルダがあれば index.json を生成
  READINGS_DIR="$SERVE_DIR/readings"
  if [ -d "$READINGS_DIR" ]; then
    echo "📚 readings/ ファイル一覧を生成中..."
    (cd "$READINGS_DIR" && ls -1 *.md *.txt 2>/dev/null | python3 -c "import sys,json; print(json.dumps([l.strip() for l in sys.stdin if l.strip()]))" > index.json)
    echo "   $(cat "$READINGS_DIR/index.json" | python3 -c "import sys,json; print(len(json.load(sys.stdin)),'件')")"
  fi

  # CORS対応HTTPサーバーをバックグラウンドで起動
  python3 "$SCRIPT_DIR/cors-server.py" "$LOCAL_PORT" "$SERVE_DIR" &>/dev/null &
  SERVER_PID=$!
  sleep 1

  # サーバー確認
  if ! kill -0 "$SERVER_PID" 2>/dev/null; then
    echo "❌ ローカルサーバーの起動に失敗（ポート$LOCAL_PORT使用中？）"
    exit 1
  fi

  SETLIST_URL="http://127.0.0.1:${LOCAL_PORT}/${LOCAL_NAME}"

else
  # カードモード
  echo "  モード: Station カード"
  echo "  カード: $CARD"
  echo "  拡張ID: ${EXT_ID:0:8}..."
  echo ""

  # ランチャー用の一時サーバーを起動（カードモードでも必要）
  LAUNCHER_DIR="$SCRIPT_DIR"
  python3 "$SCRIPT_DIR/cors-server.py" "$LOCAL_PORT" "$LAUNCHER_DIR" &>/dev/null &
  SERVER_PID=$!
  sleep 1

  if ! kill -0 "$SERVER_PID" 2>/dev/null; then
    echo "❌ ローカルサーバーの起動に失敗（ポート$LOCAL_PORT使用中？）"
    exit 1
  fi

  LAUNCHER_URL="http://127.0.0.1:${LOCAL_PORT}/cli-launcher.html?ext=${EXT_ID}&card=${CARD}&record=true"
fi

# ローカルモードのランチャーURL
if [ "$MODE" = "local" ]; then
  LAUNCHER_URL="http://127.0.0.1:${LOCAL_PORT}/cli-launcher.html?ext=${EXT_ID}&setlist=${SETLIST_URL}&record=true"

  # cli-launcher.html がなければツールディレクトリからコピー
  if [ ! -f "$SERVE_DIR/cli-launcher.html" ]; then
    cp "$SCRIPT_DIR/cli-launcher.html" "$SERVE_DIR/cli-launcher.html"
    COPIED_LAUNCHER=true
  fi
fi

# 既存の最新WebMを記録
BEFORE=$(ls -1t "$DOWNLOAD_DIR"/*.webm 2>/dev/null | head -1)

# ランチャー経由でbackground.jsにタブ作成+録画を指示
echo "🚀 番組を開始中..."
open -a "Google Chrome" "$LAUNCHER_URL"

# 録画完了を待つ
echo "⏳ 録画完了を待機中... (Ctrl+C で中断)"
WEBM_FILE=""
while true; do
  LATEST=$(ls -1t "$DOWNLOAD_DIR"/*.webm 2>/dev/null | head -1)

  if [ -n "$LATEST" ] && [ "$LATEST" != "$BEFORE" ]; then
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
