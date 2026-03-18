# AITuber Radio v0.6.0

**Chrome Extension だけで AITuber ラジオを配信・収録できるツール。**

VRM キャラクター × VOICEVOX 音声合成 × LLM AI フリートークで、  
台本再生・朗読・AI雑談・コメント読み上げをすべてローカルで実現します。

---

## 目次

- [クイックスタート](#-クイックスタート)
- [基本的な使い方](#-基本的な使い方)
- [プロジェクトフォルダの構成](#-プロジェクトフォルダの構成)
- [セットリスト（台本）の書き方](#-セットリスト台本の書き方)
- [AI 機能](#-ai-機能)
- [コメント連携（わんコメ）](#-コメント連携わんコメ)
- [VOICEVOX スピーカー一覧](#-voicevox-スピーカー一覧)
- [ショートカットキー](#-ショートカットキー)
- [ビルド](#-ビルド)
- [ファイル構成](#-ファイル構成)
- [更新履歴](#-更新履歴)

---

## 🚀 クイックスタート

### 必要なもの

| ソフト | 用途 | 必須 |
|---|---|---|
| Google Chrome | Extension 実行環境 | ✅ |
| [VOICEVOX](https://voicevox.hiroshiba.jp/) | 音声合成 (TTS) | ✅ |
| OBS Studio | 配信・録画 | 配信/録画時 |
| [わんコメ](https://onecomme.com/) | コメント取得 | コメント機能使う時 |
| LLM API キー | AI フリートーク・コメント返し | AI 機能使う時 |

### インストール手順

1. **VOICEVOX** をインストールして起動（`http://localhost:50021` で待機）
2. Chrome で `chrome://extensions` を開く
3. 「**デベロッパーモード**」を ON
4. 「**パッケージ化されていない拡張機能を読み込む**」→ このフォルダを選択
5. ツールバーの 📻 アイコンをクリック → ポップアップが開く

---

## 📖 基本的な使い方

### Step 1: ビューワーを起動

ポップアップの「🖥️ ビューワーを開く」をクリック。  
VRM キャラクターが表示されるタブが開きます。

### Step 2: コンテンツを読み込む

2通りの方法があります。

#### A. プロジェクトフォルダごと読み込む（推奨）

1. ポップアップの「📂 フォルダ」をクリック
2. プロジェクトフォルダを選択
3. フォルダ内の台本（`.md`）、朗読台本（`readings/`）、メディア（`media/`）を一括認識
4. 台本が複数ある場合は**プルダウン**で選択可能

#### B. 台本ファイルを直接読み込む

1. ポップアップの「📖 台本 (.md)」をクリック
2. セットリストまたは台本の `.md` ファイルを直接選択
3. 即座に再生が始まります

### Step 3: 再生する

- **▶️ 再生** — 選択中の台本を再生（台本未選択時はデフォルト台本を使用）
- **⏹️ 停止** — 再生中の台本を停止
- **⏱️ 開始ウェイト** — 0〜60秒のカウントダウン後に再生開始（OBS切替用）

### Step 4: 録画/配信する（OBS）

1. ポップアップで開始ウェイトを設定（例: 5秒）
2. 「▶️ 再生」をクリック → カウントダウン開始
3. OBS に切り替えて録画/配信開始
4. カウントダウン完了 → 台本再生が自動スタート

> **Tip:** OBS のブラウザソースにビューワータブの URL を設定すれば、キャラクターを直接取り込めます。

### 台本なしで使う

- **🗣️ フリートーク** — AI がランダムなトピックで雑談を開始
- **💬 ローカルチャット** — ビューワー上にチャットボックスを表示。文字を入力するとキャラが返事

---

## 📁 プロジェクトフォルダの構成

プロジェクトフォルダは以下の構造を推奨します。

```
my-radio-project/
├── setlist_night.md      ← セットリスト（台本）
├── setlist_morning.md    ← 複数台本OK → プルダウンで選択
├── readings/             ← 朗読台本
│   ├── 雪女.md
│   ├── むじな.md
│   └── 耳なし芳一.md
└── media/                ← BGM・ジングル・画像
    ├── bgm_chill.mp3
    ├── bgm_horror.mp3
    ├── jingle_op.mp3
    └── opening.jpg
```

### メディアファイルの解決順序

1. **フォルダから読み込んだファイル**（メモリ上）
2. **拡張機能内蔵ファイル**（`viewer/` 配下のファイル）

---

## 📻 セットリスト（台本）の書き方

Markdown ベースの台本ファイルで番組を構成します。

### ヘッダー（YAML frontmatter）

```markdown
---
title: 怪談ちゃんの怪談ラジオ
speaker: 19          # VOICEVOX スピーカー ID（デフォルト）
speed: 0.95          # 読み上げ速度
loop: true           # 全体ループ（24時間配信向け）
loop: true 5000      # ループ間に5秒ウェイト
pause_between: 1500  # セグメント間の間隔 (ms)
---
```

### セグメントタイプ一覧

---

#### 🗣️ talk — トーク

キャラクターにセリフを喋らせます。

```markdown
# オープニング
[type: talk]
[bgm: media/bgm_chill.mp3]
[emotion: happy]
はーい！ラジオの時間だよ！
今日も配信してるっすよ。
```

| プロパティ | 説明 | 例 |
|---|---|---|
| `emotion` | 表情 | `neutral`, `happy`, `sad`, `surprised`, `relaxed` |
| `intensity` | 表情の強さ (0.0〜1.0) | `0.8` |
| `bg` | 背景画像の変更 | `media/bg.jpeg` |

---

#### 📖 script — 朗読

テキストファイルを朗読します。

```markdown
# 朗読コーナー
[type: script]
[bgm: media/bgm_horror.mp3]
[speaker: 38]
[file: readings/雪女.md]
```

**フォルダ指定でランダム選択：**

```markdown
[type: script]
[file: readings]
```

`readings/` フォルダからランダムに1つ選択。既読トラッキング付きで重複を回避します。

---

#### 🗣️ freetalk — AI フリートーク

AI がランダムな話題（または指定トピック）で雑談します。

```markdown
# フリートーク
[type: freetalk]
[bgm: media/bgm_chill.mp3]

# 話題指定の例
[type: freetalk]
[topic: 深夜のコンビニ]
[hook: 深夜にコンビニ行ったら変な常連客がいた話]
```

| プロパティ | 説明 |
|---|---|
| `topic` | 話題（省略=ランダム） |
| `hook` | 話のきっかけ |

---

#### 💭 reaction — AI 朗読感想

直前の `script` セグメントで読んだ内容に対して、AI が感想を自動生成します。

```markdown
# 朗読の感想
[type: reaction]
[bgm: media/bgm_chill.mp3]
```

---

#### 💬 comments — コメント読み上げ

わんコメから受信したコメントを読み上げ、AI が返事をします。

```markdown
# お便りコーナー
[type: comments]
[bgm: media/bgm_chill.mp3]
```

- コメントがなければ「コメントはまだ来てないっすね」とスキップ
- `comments` セグメントがある場合、セグメント間の自動コメントチェックは無効化
- `comments` セグメントがない場合は従来通りセグメント間で自動チェック

---

#### 🎵 jingle — ジングル

音声ファイル再生 + オーバーレイ画像表示。コーナー遷移やオープニング/エンディングに。

```markdown
# コーナージングル
[type: jingle]
[file: media/jingle1.mp3]
[overlay: media/kaidan_corner.jpg]
[duration: 10]
[fadeOut: 3]
[speakAt: 4]
[speakText: 今夜の怪談朗読、いくっすよ……]
```

| プロパティ | 説明 | デフォルト |
|---|---|---|
| `file` | 音声ファイル（必須） | — |
| `overlay` | オーバーレイ画像 | なし |
| `duration` | 再生秒数 | 最後まで |
| `fadeOut` | フェードアウト秒数 | `1.5` |
| `speakAt` | 発話開始タイミング（秒） | — |
| `speakText` | 発話テキスト | — |
| `speakSpeaker` | 発話の話者ID | `38` |
| `duckTo` | 発話中のジングル音量 | `0.15` |
| `keepBgm` | BGMを止めずにジングル再生 | `false` |

---

### セグメント共通プロパティ

| プロパティ | 説明 | 例 |
|---|---|---|
| `bgm` | BGM ファイル（そのセグメント中のみ再生） | `media/bgm.mp3` |
| `bgmVolume` | BGM 音量 (0.0〜1.0) | `0.25` |
| `bgmstop` | BGMを明示停止 | `true` |
| `speaker` | VOICEVOX スピーカー ID（セグメント単位で変更可） | `38` |
| `emotion` | 初期表情 | `happy` |

### BGM の動作

- **`[bgm:]` 指定あり** → そのセグメント中再生 → 終了時フェードアウト (1.5秒)
- **指定なし** → 前のBGMは自動停止
- 発話中は自動ダッキング（BGM音量を自動で下げる）

---

## 🧠 AI 機能

### AI 接続設定

ポップアップの「⚙️ AI 接続設定」から設定します。

| 設定 | 説明 |
|---|---|
| プロバイダー | LLM サービス選択 |
| API URL | エンドポイント（プロバイダー選択で自動入力） |
| API Key | 認証キー |
| Model | モデル名（プロバイダー選択で自動入力） |

### 対応プロバイダー

| プロバイダー | 備考 |
|---|---|
| ✨ Google Gemini | デフォルト |
| 🤖 OpenAI | gpt-4o-mini 等 |
| 🟠 Claude (Anthropic) | claude-sonnet-4-20250514 等 |
| 🦙 Ollama | ローカル LLM（API キー不要） |
| ⚙️ カスタム | 任意の OpenAI 互換 API |

### キャラクター設定

ポップアップの「🎭 キャラクター設定」で、キャラクターの性格・口調・設定を自由にカスタマイズできます。

- 設定は自動保存され、フリートーク・朗読感想・コメント返信すべてに反映
- 「🔄 デフォルト」ボタンで初期設定に戻せます

### プリフェッチ

詳細設定の「プリフェッチ（先読み生成）」を ON にすると、フリートークの内容をバックグラウンドで事前生成。次のフリートークセグメントで待ち時間ゼロ。

---

## 💬 コメント連携（わんコメ）

わんコメが起動していれば、HTTP API (`http://localhost:11180/api/comments`) で5秒間隔のポーリングにより自動取得します。

### 動作

- コメントはキューに蓄積
- `[type: comments]` セグメントがあれば **そこで読み上げ**
- `comments` セグメントがなければ **セグメント間** で自動チェック
- LLM 設定があれば AI が返事を生成
- LLM 未設定でもテンプレート返事で対応
- `!` や `#` で始まるコメントは除外

### ローカルチャット

ポップアップの「💬 ローカルチャット」ボタンで、ビューワー上にフローティングチャットボックスを表示。  
わんコメなしでもキャラクターと直接会話できます。

- **セットリスト再生中**: コメントキューに追加され、コメントセグメントで読まれる
- **未再生時**: 即座に AI が返事を生成して読み上げ

---

## 🎤 VOICEVOX スピーカー一覧（抜粋）

### 四国めたん

| ID | スタイル |
|:---:|---|
| 2 | ノーマル |
| 0 | あまあま |
| 6 | ツンツン |
| 4 | セクシー |
| 36 | ささやき |
| 37 | ヒソヒソ |

### ずんだもん

| ID | スタイル |
|:---:|---|
| 3 | ノーマル |
| 1 | あまあま |
| 7 | ツンツン |
| 5 | セクシー |
| 22 | ささやき |
| 38 | ヒソヒソ |

### 九州そら

| ID | スタイル |
|:---:|---|
| 16 | ノーマル |
| 15 | あまあま |
| 18 | ツンツン |
| 17 | セクシー |
| 19 | ささやき |

### 春日部つむぎ

| ID | スタイル |
|:---:|---|
| 8 | ノーマル |

### 冥鳴ひまり

| ID | スタイル |
|:---:|---|
| 14 | ノーマル |

### 小夜/SAYO

| ID | スタイル |
|:---:|---|
| 46 | ノーマル |

> **全スピーカー一覧:** VOICEVOX 起動後 `http://localhost:50021/speakers` で確認できます。

---

## ⌨️ ショートカットキー

| キー | 機能 |
|---|---|
| `Alt+Shift+S` | 台本再生 |
| `Alt+Shift+P` | 再生停止 |

---

## 🔧 ビルド

```bash
npm install
npm run build     # index.json 自動生成 + バンドル
npm run watch     # 開発用（自動ビルド）
```

---

## 📁 ファイル構成

```
aituber-radio/
├── manifest.json          # Extension 設定
├── background.js          # Service Worker（ショートカット処理）
├── popup.html / popup.js  # ポップアップ UI
├── package.json           # 依存関係
├── generate-index.js      # index.json 自動生成スクリプト
├── viewer/
│   ├── index.html         # ビューワー画面
│   ├── viewer.js          # メインロジック（ソース）
│   ├── viewer.bundle.js   # ビルド済みバンドル
│   ├── default_model.vrm  # デフォルト VRM モデル
│   ├── default_bg.jpeg    # デフォルト背景画像
│   ├── default_setlist.md # デフォルト台本
│   ├── media/             # BGM・ジングル・画像
│   └── readings/          # 朗読台本 + index.json
└── icons/                 # Extension アイコン
```

---

## ポップアップ UI 構成

ポップアップは日常操作を優先したレイアウトです。

```
📻 AITuber Radio  v0.6.0
━━━━━━━━━━━━━━━━━━━━━━━
[🖥️ ビューワーを開く]

── ラジオ ──
[📂 フォルダ] [📖 台本]      ← コンテンツ読み込み
[▼ 台本プルダウン]           ← 複数台本から選択
[▶️ 再生]  [⏹️ 停止]
⏱️ [  ] 秒後に開始           ← OBS切替用カウントダウン
🗣️ フリートーク
💬 ローカルチャット

── セットアップ ──
📂 VRM モデル  🖼️ 背景画像
▸ ⚙️ AI 接続設定
▸ 🎭 キャラクター設定

▸ 🔧 詳細設定
  朗読順 / カメラ / テスト / プリフェッチ

● VOICEVOX 状態  ● AI 状態
```

---

## 📻 構成例（24時間配信）

```markdown
---
title: 怪談ちゃんの怪談ラジオ
speaker: 19
loop: true 3000
pause_between: 1500
---

# オープニングジングル
[type: jingle]
[file: media/jingle_op.mp3]
[overlay: media/opening.jpg]
[duration: 10]
[fadeOut: 3]
[speakAt: 4]
[speakText: こんばんは〜！怪談ラジオ始まるっすよ！]

# オープニングトーク
[type: talk]
[bgm: media/bgm_chill.mp3]
はーい！ラジオの時間だよ！
先輩方、こんばんは。

# フリートーク
[type: freetalk]
[bgm: media/bgm_chill.mp3]

# 怪談コーナージングル
[type: jingle]
[file: media/jingle_kaidan.mp3]
[overlay: media/kaidan_corner.jpg]
[duration: 10]
[fadeOut: 3]
[speakAt: 4]
[speakText: 今夜の怪談、いくっすよ……]

# 朗読（ランダム）
[type: script]
[bgm: media/bgm_horror.mp3]
[bgmVolume: 0.15]
[speaker: 38]
[file: readings]

# 朗読の感想
[type: reaction]
[bgm: media/bgm_chill.mp3]

# お便りコーナー
[type: comments]
[bgm: media/bgm_chill.mp3]

# エンディングトーク
[type: talk]
[bgm: media/bgm_chill.mp3]
[emotion: relaxed]
はい、今回も聴いてくれてありがとうっす。
次のお話も楽しみにしててね。

# エンディングジングル
[type: jingle]
[file: media/jingle_ed.mp3]
[overlay: media/ending.jpg]
[duration: 15]
[fadeOut: 3]
[speakAt: 3]
[speakText: 怪談ラジオ、また会おうね！]
```

---

## 更新履歴

### v0.6.0 (2026-03-19)

- プロダクト名を「AITuber Radio」に確定
- ポップアップ UI 全面刷新（日常操作優先レイアウト）
- プロジェクトフォルダ一括読み込み（readings / media / 台本を統合認識）
- 台本プルダウン選択（複数台本対応）
- 再生開始ウェイト（カウントダウン機能、OBS切替用）
- BGM 手動操作を廃止（セットリストの `[bgm:]` で制御）

### v0.5.1 (2026-03-18)

- わんコメ連携: WebSocket → HTTP API ポーリングに変更
- `[type: comments]` セグメント追加
- `[type: reaction]` セグメント追加
- LLM マルチプロバイダー対応（Gemini / OpenAI / Claude / Ollama）
- キャラクタープロンプトのカスタマイズ機能
- ローカルチャット機能
- ループ間ウェイト対応
- 字幕フォントサイズ拡大
- 感情タグの読み上げ防止

### v0.4.2

- 初回リリース

---

## ライセンス

MIT License
