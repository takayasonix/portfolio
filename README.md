# ポートフォリオサイト

Next.js 14（App Router）を使用したポートフォリオサイトです。

## 技術スタック

- Next.js 14（App Router）
- TypeScript
- Tailwind CSS
- Cloudflare Pages
- ESLint + Prettier

## 機能

- ヒーローセクション（名前・肩書き・キャッチコピー）
- 自己紹介セクション
- 学歴・職歴（年表風デザイン）
- 社会人スキル（アイコン＋キーワード表示）
- 趣味・興味
- 作品・プロジェクト（カード表示）
- 最新note記事一覧（RSS取得）
- SNS & 連絡先

## セットアップ

### 依存関係のインストール

```bash
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて結果を確認してください。

### ビルド

```bash
npm run build
```

### 静的エクスポート

```bash
npm run export
```

## デプロイ

### Cloudflare Pages

このプロジェクトはCloudflare Pagesにデプロイすることを想定しています。

1. Cloudflare Pagesで新しいプロジェクトを作成
2. リポジトリを接続
3. ビルドコマンド: `npm run build`
4. ビルド出力ディレクトリ: `out`

## カスタマイズ

- `src/components/` 内のコンポーネントを編集して内容を変更
- `src/lib/note.ts` でnoteのRSS URLを設定
- `src/components/ContactSection.tsx` でSNSリンクを更新
- `public/` 内の画像を実際の画像に置き換え

## ライセンス

MIT
