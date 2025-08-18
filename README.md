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
- GitHub Contributions（obsidian-vaultリポジトリ）
- SNS & 連絡先

## セットアップ

### 依存関係のインストール

```bash
npm install
```

### 環境変数の設定

#### GitHub API Token（必須）

GitHubの草を表示するために、Personal Access Tokenが必要です：

1. [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens) にアクセス
2. "Generate new token (classic)" をクリック
3. 以下の設定でトークンを作成：
   - Note: `portfolio-contributions`
   - Expiration: 推奨は90日以上
   - Scopes: `public_repo` にチェック（公開リポジトリの情報を取得するため）
4. 生成されたトークンをコピー

#### ローカル開発環境

プロジェクトルートに `.env.local` ファイルを作成：

```bash
# .env.local
NEXT_PUBLIC_GITHUB_TOKEN=your_github_token_here
```

#### 本番環境（Vercel/Cloudflare Pages等）

デプロイ先の環境変数設定で以下を追加：

- 変数名: `NEXT_PUBLIC_GITHUB_TOKEN`
- 値: 上記で生成したGitHubトークン

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
5. 環境変数で `NEXT_PUBLIC_GITHUB_TOKEN` を設定

### Vercel

1. Vercelでリポジトリをインポート
2. 環境変数で `NEXT_PUBLIC_GITHUB_TOKEN` を設定
3. デプロイ

## カスタマイズ

- `src/components/` 内のコンポーネントを編集して内容を変更
- `src/lib/note.ts` でnoteのRSS URLを設定
- `src/components/ContactSection.tsx` でSNSリンクを更新
- `src/components/BrainSection.tsx` でGitHubリポジトリを変更
- `public/` 内の画像を実際の画像に置き換え

## トラブルシューティング

### GitHubの草が表示されない場合

1. 環境変数 `NEXT_PUBLIC_GITHUB_TOKEN` が正しく設定されているか確認
2. ブラウザのコンソールでエラーメッセージを確認
3. GitHubトークンの権限（`public_repo`）が正しく設定されているか確認
4. リポジトリ名とユーザー名が正しいか確認

## ライセンス

MIT
