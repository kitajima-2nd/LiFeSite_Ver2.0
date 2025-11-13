# Next.js + TypeScript 企業向けホームページテンプレート

企業・ビジネス向けHTMLテンプレートを Next.js (App Router) と TypeScript で構築したものです。

## セットアップ

### 1. 依存関係をインストール

```bash
npm install
```

### 2. 開発サーバーを起動

```bash
npm run dev
```

ブラウザで http://localhost:3000 を開いて確認してください。

### 3. ビルド

```bash
npm run build
```

### 4. ビルド結果を起動

```bash
npm run start
```

## プロジェクト構造

```
src/
├── app/
│   ├── layout.tsx          # ルートレイアウト（ヘッダー/フッター共通）
│   ├── page.tsx            # トップページ
│   ├── company/page.tsx    # 会社概要ページ
│   ├── contact/page.tsx    # お問い合わせページ
│   └── service/page.tsx    # サービスページ
├── components/             # 再利用可能なUIコンポーネント
│   ├── Header/
│   ├── Footer/
│   ├── SlideShow/
│   └── ...
├── hooks/                  # カスタムフック
├── types/                  # 型定義
└── app/globals.css         # グローバルスタイル
```

## 主な機能

- **Next.js App Router** による最新のルーティング
- **レスポンシブデザイン** によるモバイル/タブレット/デスクトップ対応
- **アニメーション** によるスムーズなUI体験
- **TypeScript** による型安全な開発

## カスタマイズ方法

### 会社情報・メニューの変更
src/app/layout.tsx の menuItems と companyName を変更してください。

### トップページのコンテンツ変更
src/app/page.tsx の slides / infoItems / newsItems 配列を変更してください。

### サービス内容の変更
src/app/service/page.tsx の serviceItems を変更してください。

### 会社概要・お問い合わせページ
- src/app/company/page.tsx
- src/app/contact/page.tsx

### 画像の追加
public/images/ に画像を追加して、/images/your-image.jpg としてコンポーネントで使用してください。

## 使用技術

- Next.js 14
- React 18
- TypeScript 5
- ESLint (Next.js 推奨設定)

## 注意

- 画像ファイルを追加する場合は setup-images.ps1 を実行してください。
- スライドショーの画像やコンテンツを変更する場合は、各コンポーネントを編集してください。
