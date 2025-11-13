# セットアップガイド

## 初回セットアップ

### 1. 依存関係をインストール

```bash
npm install
```

### 2. 画像ファイルの準備

テンプレートの画像ファイルを public/images/ ディレクトリに配置してください。
- PowerShell スクリプトで実行する場合：
```powershell
.\setup-images.ps1
```

- 手動で配置する場合：  - images/ ディレクトリから必要な画像ファイルを  - public/images/ ディレクトリに配置

### 3. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで http://localhost:3000 を開いて確認してください。

## カスタマイズ方法

### 会社情報・メニュー
src/app/layout.tsx の companyName と menuItems を変更してください。
```tsx
const menuItems = [
  { label: 'HOME', path: '/' },
  {
    label: 'SERVICE',
    path: '',
    children: [
      { label: 'サービス1', path: '/service' },
      { label: 'サービス2', path: '/service' },
    ],
  },
  { label: 'COMPANY', path: '/company' },
  { label: 'CONTACT', path: '/contact' },
];
```

### トップページのコンテンツ変更
src/app/page.tsx の slides / infoItems / newsItems 配列を変更してください。

### サービス内容の変更
src/app/service/page.tsx の serviceItems を変更してください。

### 会社概要・お問い合わせ
- src/app/company/page.tsx
- src/app/contact/page.tsx

### カスタムCSS
src/app/globals.css のCSS変数を変更してください。
```css
:root {
  --text-color: #eee;
  --primary-color: #02354e;
  --primary-inverse-color: #eee;
  --global-space: 5vw;
}
```

## ビルド→デプロイ

```bash
npm run build
npm run start
```


npm run build で .next/ にビルド成果物が生成されます。

## トラブルシューティング

### 画像が表示されない
1. public/images/ に画像ファイルを配置
2. コンポーネントで /images/... として参照（public は含めない）

### コンポーネントが表示されない
1. ブラウザの開発者ツール
2. 開発サーバーを再起動

### アニメーションが動作しない
1. ブラウザの開発者ツールでエラーを確認
2. npm run dev のコンソールにエラーがないか確認

## その他のドキュメント
- [README.md](./README.md) で詳細情報を確認してください。
- コンポーネントを確認して、各機能の実装を理解してください。
