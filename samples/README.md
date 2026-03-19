# サンプル台本

AITuber Radio で使えるサンプルセットリストです。  
朗読なし・30分構成のフリートーク番組を3パターン収録しています。

## 台本一覧

| ファイル | テーマ | トーン |
|---|---|---|
| `setlist_yofukashi.md` | 夜更かしラジオ | ゆるい雑談 × リスナー交流 |
| `setlist_ohayou.md` | おはようラジオ | 朝のテンション高め × 豆知識 |
| `setlist_hitorigoto.md` | 真夜中のひとりごと | しっとり哲学系 × 一人語り |

## ⚠️ 使い方（重要）

台本中の `[file:]` や `[bgm:]` で参照しているメディアファイルは **同梱されていません**。  
使う前に、以下のファイルを自分で用意して `media/` フォルダに配置してください。

### 必要なメディアファイル

```
media/
├── jingle1.mp3         ← OP/EDジングル音声
├── jingle2.mp3         ← コーナージングル音声
├── bgm_chill.mp3       ← 通常BGM
├── opening.jpg         ← OPオーバーレイ画像
└── ending.jpg          ← EDオーバーレイ画像
```

### おすすめの素材サイト（フリー素材）

- **BGM・ジングル**
  - [YouTube オーディオライブラリ](https://studio.youtube.com/channel/UC/music) — YouTube 配信でそのまま使える。収益化OK多数
  - [DOVA-SYNDROME](https://dova-s.jp/) — フリーBGM。ジャンル豊富
  - [甘茶の音楽工房](https://amachamusic.chagasi.com/) — 落ち着いた雰囲気のBGMが多い
  - [効果音ラボ](https://soundeffect-lab.info/) — ジングル・SE
  - [魔王魂](https://maou.audio/) — BGM・SE。商用利用可
- **画像**
  - [いらすとや](https://www.irasutoya.com/) — イラスト（オーバーレイ向き）
  - [Unsplash](https://unsplash.com/) — 高品質写真素材（背景向き）
  - [Pixabay](https://pixabay.com/) — 写真・イラスト。商用利用可

### フォルダ構成の例

```
my-radio/
├── setlist_yofukashi.md    ← このフォルダの台本をコピー
├── media/
│   ├── jingle1.mp3
│   ├── jingle2.mp3
│   ├── bgm_chill.mp3
│   ├── opening.jpg
│   └── ending.jpg
└── readings/               ← 朗読を使う場合のみ
    └── (台本.md)
```

ポップアップの「📂 フォルダ」から `my-radio/` を読み込めば、すぐに使えます。
