# AITuber Radio v0.8.0

**Chrome Extension だけで AITuber ラジオを配信・収録できるツール。**

VRM / PNGTuber キャラクター × VOICEVOX / SBV2 / ブラウザ内蔵TTS × LLM AI で、  
**台本がすべてをドライブ**する設計。再生・朗読・AI雑談・ニュース・天気予報・録画まで、台本ファイル1つで完結します。

**[📻 Radio Station](https://k3peta.github.io/aituber-radio-station/)** — Web から番組をワンクリック再生

---

## 目次

- [クイックスタート](#-クイックスタート)
- [基本的な使い方](#-基本的な使い方)
- [セットリスト（台本）の書き方](#-セットリスト台本の書き方)
- [動的コンテンツセグメント](#-動的コンテンツセグメント)
- [録画機能](#-録画機能)
- [PNGTuber](#-pngtuber)
- [WebM → MP4 変換ツール](#-webm--mp4-変換ツール)
- [CLI 自動録画](#-cli-自動録画)
- [Radio Station 連携](#-radio-station-連携)
- [プロジェクトフォルダの構成](#-プロジェクトフォルダの構成)
- [TTS エンジン設定](#-tts-エンジン設定)
- [AI 機能](#-ai-機能)
- [コメント連携（わんコメ）](#-コメント連携わんコメ)
- [ショートカットキー](#-ショートカットキー)
- [データソース](#-データソース)
- [ビルド](#-ビルド)
- [更新履歴](#-更新履歴)

---

## 🚀 クイックスタート

### 必要なもの

| ソフト | 用途 | 必須 |
|---|---|---|
| Google Chrome | Extension 実行環境 | ✅ |
| [VOICEVOX](https://voicevox.hiroshiba.jp/) or [SBV2](https://github.com/litagin02/Style-Bert-VITS2) | 音声合成 (TTS) | △（ブラウザTTSも可） |
| OBS Studio | 配信 | 配信時のみ |
| [わんコメ](https://onecomme.com/) | コメント取得 | コメント機能使う時 |
| LLM API キー | AI フリートーク・動的コンテンツ | AI 機能使う時 |

> **VOICEVOX なしでも使えます！** ブラウザ内蔵TTS（Web Speech API）を選択すれば、インストール不要で音声再生できます。

### インストール手順

1. Chrome で `chrome://extensions` を開く
2. 「**デベロッパーモード**」を ON
3. 「**パッケージ化されていない拡張機能を読み込む**」→ このフォルダを選択
4. ツールバーの 📻 アイコンをクリック → ポップアップが開く

---

## 📖 基本的な使い方

### Step 1: ビューワーを起動

ポップアップの「🖥️ ビューワーを開く」をクリック。  
VRM キャラクターが表示されるタブが開きます。

### Step 2: コンテンツを読み込む

#### A. プロジェクトフォルダごと読み込む（推奨）

1. ポップアップの「📂 フォルダ」をクリック
2. プロジェクトフォルダを選択
3. フォルダ内の台本（`.md`）、朗読台本（`readings/`）、メディア（`media/`）を一括認識
4. 台本が複数ある場合は**プルダウン**で選択可能

#### B. 台本ファイルを直接読み込む

1. ポップアップの「📖 台本 (.md)」をクリック
2. セットリストまたは台本の `.md` ファイルを直接選択

#### C. Radio Station から再生

1. [Radio Station](https://k3peta.github.io/aituber-radio-station/) にアクセス
2. 拡張機能IDを接続（ポップアップの📋コピー → Station に貼り付け）
3. 番組カードの ▶ ボタンをクリック

### Step 3: 再生する

- **▶️ 再生** — 選択中の台本を再生
- **⏹️ 停止** — 再生停止
- **🎬 動画保存** — チェックを入れると再生時に自動録画（全再生に適用）
- **⏱️ X秒後** — カウントダウン後に再生開始（OBS切替用）

### ポップアップの構成

| セクション | 内容 |
|-----------|------|
| **ラジオ** | 📂 フォルダ / 📖 台本 / ▶️ 再生 / ⏹️ 停止 / 🎬 動画保存 / ⏱️ 開始ウェイト |
| **セットアップ** | VRM モデル / 背景画像 / ⚙️ AI 接続設定 / 🔊 TTS設定 / 🎭 キャラクター設定 |
| **詳細設定** | カメラ位置 / テスト発話・表情 / プリフェッチ |
| **自動化** | 定期自動実行 + 時刻設定 |

> **設計思想**: 「何を」「どう演出するか」は**台本が決定**。ポップアップは「どのAIで」「どのTTSで」の**設定のみ**。

---

## 🎵 セットリスト（台本）の書き方

セットリストは Markdown ベースの台本形式です。フロントマターで全体設定、各セグメントでトーク・ジングル・AI雑談などを指定します。

### 基本構造

```markdown
---
title: 番組名
speaker: 38
speed: 0.95
loop: false
pause_between: 1200
---

# オープニングジングル
[type: jingle]
[file: media/jingle1.mp3]
[overlay: media/opening.jpg]
[duration: 10]
[fadeOut: 2]
[speakAt: 2.5]
[speakText: こんばんは〜！番組はじまるよ！]

# オープニング
[type: talk]
[bgm: media/bgm.mp3]
[emotion: happy]
こんにちは！今日も楽しくいきましょう！

# フリートーク
[type: freetalk]
[topic: 好きな食べ物]

# 朗読
[type: script]
[file: readings]
[bgm: media/bgm_horror.mp3]

# エンディングジングル
[type: jingle]
[file: media/jingle1.mp3]
[overlay: media/ending.jpg]
[duration: 12]
[fadeOut: 3]
```

### セグメントタイプ一覧

| タイプ | 説明 | AI |
|--------|------|-----|
| `talk` | 固定セリフの読み上げ | 不要 |
| `jingle` | ジングル再生（オーバーレイ・speakAt対応） | 不要 |
| `script` | 指定ファイル/フォルダから朗読 | △（AI要約オプション） |
| `freetalk` | AIによるフリートーク | 必須 |
| `reaction` | 直前の朗読へのAI感想 | 必須 |
| `comments` | コメント読み上げ（わんコメ連携） | 不要 |
| `audio` | 音声ファイル再生 | 不要 |
| `auto-news` | リアルタイムニュース取得＋AIトーク | 必須 |
| `auto-weather` | 全国天気予報取得＋AIトーク | 必須 |
| `auto-today` | 今日は何の日取得＋AIトーク | 必須 |

### フロントマター

```yaml
title:         番組名
speaker:       VOICEVOX 話者ID（デフォルト: 38）
speed:         読み上げ速度（デフォルト: 0.95）
loop:          true で無限ループ
pause_between: セグメント間の無音(ms)（デフォルト: 1000）
size:          ウィンドウサイズ（例: 1080x1920 で縦動画）
splash:        録画開始時のスプラッシュ画像
```

### 共通プロパティ

```
[speaker: 38]          話者ID（セグメント単位で上書き）
[bgm: media/bgm.mp3]   BGM開始（前のBGMは自動停止）
[bgmVolume: 0.25]       BGM音量 0.0〜1.0
[bgmstop: true]         BGMを明示停止
```

### talk 専用

```
[emotion: neutral|happy|sad|surprised|relaxed]
[intensity: 0.8]       表情の強さ 0.0〜1.0
[bg: media/bg.jpeg]    背景画像の変更
```

### jingle 専用

```
[file: media/jingle.mp3]          音声ファイル（必須）
[overlay: media/opening.jpg]      オーバーレイ画像
[duration: 30]                    再生秒数（省略=最後まで）
[fadeOut: 3]                      フェードアウト秒数
[speakAt: 3.5]                    発話開始タイミング（秒）
[speakText: こんばんは！]          発話テキスト
[speakSpeaker: 38]                発話の話者ID
[duckTo: 0.15]                    発話中のジングル音量
[keepBgm: true]                   BGMを止めずにジングル再生
```

### script 専用

```
[file: readings/雪女.md]          単一ファイル指定
[file: readings]                  フォルダからランダム選択
[ai: true]                        AI要約+感情タグ付与
```

### freetalk 専用

```
[topic: 深夜のコンビニ]            話題（省略=ランダム）
[hook: 変な常連客がいた話]          話のきっかけ
```

---

## 🌐 動的コンテンツセグメント

v0.8 で追加された台本駆動の動的セグメント。再生時にリアルタイムでデータを取得し、AIがトークを生成します。

### auto-news — ニュース

```markdown
# ニュースコーナー
[type: auto-news]
[bgm: media/bgm.mp3]
```

Google News RSS から最新5件のニュースを取得。AIがニュースを紹介し、感想を付けて読み上げます。

### auto-weather — 天気予報

```markdown
# 全国天気予報
[type: auto-weather]
[bgm: media/bgm.mp3]
```

気象庁API から全国10地域（北海道〜沖縄）の天気を取得。AIが天気と傘・服装アドバイスを読み上げます。

### auto-today — 今日は何の日

```markdown
# 今日は何の日
[type: auto-today]
[bgm: media/bgm.mp3]
```

記念日・誕生花・偉人誕生日を取得。AIが楽しく紹介します。

### テンプレート例

Radio Station の「朝イチニュース」はこれらを組み合わせた番組です：

```
🎵 オープニングジングル → 🎙️ 挨拶
🎵 コーナージングル → 📅 今日は何の日 [auto-today]
🎵 コーナージングル → 📰 ニュース [auto-news]
🎵 コーナージングル → 🌤️ 天気予報 [auto-weather]
🎙️ エンディング → 🎵 エンディングジングル
```

---

## 📹 録画機能

OBS なしで番組を動画として録画できます。

### 自動録画（推奨）

1. ポップアップの再生ボタン横の「🎬 動画保存」にチェック
2. ▶️ 再生を押す
3. **自動で録画開始 → 放送終了時に自動停止 → WebM 自動ダウンロード**

`chrome.tabCapture` API により、ダイアログなしで完全自動化。録画中はステータスバー・カーソルが自動で非表示になります。

### 録画 Tips

- **開始ディレイを活用**: 「⏱️ 5秒後」で録画開始後のクリーンな待機画面を録る
- **縦動画モード**: 台本ヘッダーに `size: 1080x1920` で自動リサイズ
- 形式: WebM（VP9 + Opus）、4 Mbps
- **YouTube にはそのまま投稿可能**（WebM対応）

---

## 🖼️ PNGTuber

VRM モデルの代わりに、PNG 画像でキャラクターを表示できます。

### 使い方

ビューワーに **PNG 画像をドラッグ&ドロップ** するだけ。

| ドロップ | 結果 |
|---------|------|
| 画像 **2枚** | idle + talk で PNGTuber モード |
| 画像 **3枚** | idle + talk + blink（瞬き付き） |
| **Shift+ドロップ** 1枚 | PNGTuber モード（口パクなし） |
| 画像 1枚 | 背景変更 |
| **.vrm** ファイル | VRM モードに戻る |

### ファイル名の命名規則

| キーワード | 役割 |
|-----------|------|
| `talk`, `open`, `speak` | 口を開けた画像 |
| `blink`, `close` | 目を閉じた画像（瞬き） |
| 上記以外 | 通常（idle）画像 |

### クロマキー処理

グリーンバック画像は読み込み時に自動で透過処理されます。

### サンプル画像

`viewer/pngtuber/` に怪談ちゃんのサンプル画像（3枚）が同梱されています。

---

## 🔄 WebM → MP4 変換ツール

X (Twitter) や TikTok 用に MP4 が必要な場合、同梱の変換ツールが使えます。

### GUIツール（macOS）

デスクトップの「**WebM→MP4**」アプリに WebM ファイルをドラッグ&ドロップ。  
円形プログレスバー付きで変換状況が確認できます。

```bash
# アプリを再生成する場合
python3 tools/webm2mp4_gui.py
```

### CLIツール

```bash
bash tools/webm2mp4.sh *.webm
```

- **GPU加速**: macOS では `h264_videotoolbox` で高速変換
- **VFR→CFR 変換**: 30fps 固定フレームレートで音ズレを防止
- `+faststart` でストリーミング最適化

> 要件: ffmpeg がインストールされていること（`brew install ffmpeg`）

---

## 🤖 CLI 自動録画

コマンドひとつで **番組再生 → 録画 → MP4変換** を自動実行。AIエージェントからの呼び出しにも対応。

### セットアップ

```bash
# 拡張機能IDを保存（初回のみ）
echo "YOUR_EXTENSION_ID" > ~/.aituber-radio-ext-id
# chrome://extensions でIDを確認
```

### 使い方

```bash
# Station カードから録画
bash tools/radio-cli.sh news_morning      # 朝イチニュース
bash tools/radio-cli.sh short_trivia      # 雑学60秒
bash tools/radio-cli.sh ohayou            # おはようラジオ

# ローカル台本から録画
bash tools/radio-cli.sh --local ~/project/setlist.md

# WebMのみ（MP4変換なし）
bash tools/radio-cli.sh short_trivia --no-convert
```

### パイプライン

```
CLI → ローカルHTTPサーバー起動
  → ランチャーHTML → chrome.runtime.sendMessage
  → background.js → ビューワータブ作成
  → 台本+メディア取得 → 自動再生+Canvas録画
  → 放送終了 → WebM自動ダウンロード
  → WebM→MP4変換 → 完了
```

### 同梱ファイル

| ファイル | 説明 |
|---------|------|
| `tools/radio-cli.sh` | メインCLIスクリプト |
| `tools/cors-server.py` | CORS対応HTTPサーバー |
| `tools/cli-launcher.html` | 拡張機能連携ランチャー |
| `tools/webm2mp4.sh` | WebM→MP4変換 |
| `tools/webm2mp4_gui.py` | GUI変換ツール生成 |

---

## 🌐 Radio Station 連携

[Radio Station](https://k3peta.github.io/aituber-radio-station/) は、Web 上の番組カタログです。

### 接続方法

1. 拡張機能ポップアップの 📋 でIDをコピー
2. Station のテキストボックスに貼り付けて「接続」
3. 番組カードの ▶ で再生

### 番組ラインナップ

| 番組 | AI | テーマ |
|------|-----|-------|
| 📰 朝イチニュース | 🤖 必須 | ニュース×天気×今日は何の日（毎日異なる内容） |
| 🌙 夜更かしラジオ | 🤖 必須 | 深夜雑談×リスナー交流 |
| ☀️ おはようラジオ | 🤖 必須 | 朝の豆知識 |
| 🌃 真夜中のひとりごと | 🤖 必須 | しっとり哲学系 |
| 📚 雑学タイム | 📝 台本 | 食べ物・動物・宇宙・日本語 |
| 🏯 なるほどヒストリー | 📝 台本 | 古代〜江戸の歴史 |
| ⛩️ 旅ラジオ 京都編 | 📝 台本 | 路地裏・グルメ・穴場 |
| 🌊 旅ラジオ 沖縄編 | 📝 台本 | 海・ソーキそば・島文化 |
| ❄️ 旅ラジオ 北海道編 | 📝 台本 | 大自然・海鮮・温泉 |
| 🎤 VOICEVOX音色カタログ | 📝 台本 | 30+キャラ聴き比べ |
| ☕ ひるまちラジオ | 📝 台本 | お便り紹介・まったり雑談 |
| ⚡ 知らないと損する雑学60秒 | 📝 台本 | TikTok向け縦動画サンプル |

---

## 📁 プロジェクトフォルダの構成

```
my_project/
├── default_setlist.md   # メインの台本（セットリスト形式）
├── news_morning.md      # 別の台本（フォルダ読み込みで選択可能）
├── media/
│   ├── jingle1.mp3      # オープニング/エンディング曲
│   ├── jingle2.mp3      # コーナージングル
│   ├── bgm.mp3          # BGM
│   ├── opening.jpg      # オープニング画像
│   └── ending.jpg       # エンディング画像
└── readings/
    ├── 雪女.md           # 朗読用台本
    └── 耳無し芳一.md
```

フォルダを読み込むと、台本・メディア・朗読素材がすべて自動認識されます。  
台本内で `media/jingle1.mp3` のように参照すれば、そのファイルが使われます。  
ファイルが見つからない場合はスキップされます（エラーにはなりません）。

---

## 🔊 TTS エンジン設定

ポップアップの「🔊 TTS エンジン設定」で選択。

| エンジン | 説明 |
|---------|------|
| **VOICEVOX** | 高品質な日本語音声合成（デフォルト :50021） |
| **Style-Bert-VITS2** | 多彩な声質（:5000） |
| **カスタム** | 任意のTTSサーバー |
| **ブラウザ内蔵** | Web Speech API（インストール不要） |

---

## 🤖 AI 機能

ポップアップの「⚙️ AI 接続設定」で設定。

| プロバイダー | 説明 |
|-------------|------|
| **Google Gemini** | デフォルト。gemini-2.0-flash |
| **OpenAI** | GPT-4o-mini 等 |
| **Claude** | Anthropic |
| **Ollama** | ローカル LLM |
| **カスタム** | 任意の OpenAI互換 API |

### AI が使われる機能

- `freetalk` セグメント（フリートーク生成）
- `reaction` セグメント（朗読の感想生成）
- `auto-news` / `auto-weather` / `auto-today`（動的コンテンツ）
- `script` の `[ai: true]`（朗読のAI要約）
- AI 読み変換（漢字の誤読防止）

---

## 💬 コメント連携（わんコメ）

[わんコメ](https://onecomme.com/) のローカルサーバー（`localhost:11180`）からコメントを取得して読み上げます。

- `comments` セグメントでコメントコーナーを設定
- セグメント間でもコメントキューがあれば自動読み上げ

---

## ⌨️ ショートカットキー

| キー | 動作 |
|-----|------|
| `Alt+Shift+S` | 再生 |
| `Alt+Shift+P` | 停止 |

---

## 📊 データソース

| データ | API | 備考 |
|--------|-----|------|
| ニュース | Google News RSS | 最新5件、日本語 |
| 天気予報 | 気象庁 | 全国10地域（北海道〜沖縄） |
| 今日は何の日 | whatistoday.cyou | 記念日・誕生花・偉人誕生日 |

---

## 🔨 ビルド

```bash
npm run build
```

`esbuild` で viewer.js をバンドル → `viewer/viewer.bundle.js` を生成。

---

## 更新履歴

### v0.8.0 (2026-03-20)

**台本駆動アーキテクチャ**

- **設計刷新**: すべての再生動作を台本（セットリスト）がドライブする設計に
- **動的コンテンツセグメント**: 台本から呼び出せる3種の動的セグメント
  - `[type: auto-news]` — Google News RSS からニュース取得＋AIトーク生成
  - `[type: auto-weather]` — 気象庁API で全国天気取得＋AIトーク生成
  - `[type: auto-today]` — 今日は何の日取得＋AIトーク生成
- **自動録画の汎用化**: 全再生に適用される「🎬 動画保存」チェックボックス
- **ポップアップ簡素化**: 台本に集約したため不要なUI要素を削除
  - おはようラジオ専用ボタン → 台本で代替
  - 朗読順設定 → 台本の `[file: readings]` で指定
  - ファイルリスト表示 → 不要
  - ビューワー録画ボタン → 自動録画チェックに統合
- **ブラウザ内蔵TTS**: Web Speech API 対応（インストール不要）
- **縦動画モード**: `size: 1080x1920` で YouTube Shorts 対応
- **AI 読み変換**: 漢字の誤読防止（方→かた/ほう、時→どき 等）
- **WebM→MP4 GPU加速**: `h264_videotoolbox` で高速変換（macOS）
- **録画 A/V同期改善**: 無音トーンで音声ストリーム維持
- **CLI 自動録画パイプライン**: コマンド一発で再生→録画→MP4変換
  - `bash tools/radio-cli.sh <card>` で Station カードから録画
  - `bash tools/radio-cli.sh --local <file>` でローカル台本から録画
  - 合成Canvas録画方式（権限ダイアログ不要・完全自動）
  - CORS対応ローカルHTTPサーバー同梱
  - `readings/index.json` 自動生成
  - ループ台本でも録画は1周で自動停止
- **Radio Station**: 朝イチニュース番組を追加

### v0.7.0 (2026-03-19)

- **PNGTuber モード**: PNG画像ドロップでキャラ表示、音声連動口パク+瞬き
- **クロマキー処理**: グリーンバック画像の自動透過
- **録画機能**: タブキャプチャでWebM動画保存、UI自動非表示
- **SBV2 対応**: Style-Bert-VITS2 をTTSエンジンとして選択可能
- **TTS エンジン設定UI**: VOICEVOX / SBV2 / カスタムの切替+ポート設定
- **Radio Station 連携**: Web から番組をワンクリック再生
- **全台本番組追加**: 旅ラジオ3本 + 雑学 + 歴史 + 音色カタログ

### v0.6.0 (2026-03-19)

- プロダクト名を「AITuber Radio」に確定
- ポップアップ UI 全面刷新
- プロジェクトフォルダ一括読み込み
- 台本プルダウン選択
- 再生開始ウェイト

### v0.5.1 (2026-03-18)

- わんコメ連携
- `comments` / `reaction` セグメント
- LLM マルチプロバイダー対応
- キャラクタープロンプトカスタマイズ
- ローカルチャット機能

### v0.4.2

- 初回リリース

---

## ライセンス

MIT License
