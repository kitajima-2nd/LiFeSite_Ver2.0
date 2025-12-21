# アーキテクチャドキュメント

このプロジェクトのファイル構成と設計思想について説明します。

## フォルダ構成

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # ルートレイアウト
│   ├── page.tsx           # ホームページ
│   ├── company/            # 会社概要ページ
│   ├── contact/            # お問い合わせページ
│   └── service/            # サービスページ
│
├── components/             # 再利用可能なコンポーネント
│   ├── layout/             # レイアウトコンポーネント
│   │   ├── Header/         # ヘッダー
│   │   ├── Footer/         # フッター
│   │   └── TopPage/        # トップページヒーロー
│   │
│   └── ui/                 # 汎用UIコンポーネント
│       ├── TextAnimation/  # テキストアニメーション
│       └── ScrollToTop/    # スクロールトップボタン
│
├── features/               # 機能別コンポーネント（Feature-based Architecture）
│   └── home/                # ホーム機能
│       ├── components/      # ホーム専用コンポーネント
│       │   ├── HeroSection/
│       │   └── InfoSection/
│       └── data/            # ホーム専用データ
│           └── homeData.ts
│
├── hooks/                  # カスタムフック
│   ├── useSectionScroll.ts
│   ├── useFooterHeight.ts
│   └── ...
│
├── lib/                    # ライブラリ・ユーティリティ
│   └── hooks/              # フックのエクスポート
│       └── index.ts
│
├── types/                  # 型定義（機能別に分離）
│   ├── home.ts             # ホーム関連の型
│   ├── navigation.ts       # ナビゲーション関連の型
│   ├── animation.ts        # アニメーション関連の型
│   └── index.ts            # 型定義のエクスポート
│
├── constants/              # 定数定義
│   └── sections.ts         # セクション関連の定数
│
├── config/                 # 設定値
│   ├── site.ts             # サイト設定
│   └── navigation.ts       # ナビゲーション設定
│
└── data/                   # データ定義（レガシー、段階的に移行予定）
    └── homePageData.ts
```

## 設計原則

### 1. Feature-based Architecture

機能ごとにコンポーネントをグループ化します。これにより、関連するコードが一箇所に集約され、メンテナンスが容易になります。

```
features/
  └── home/
      ├── components/    # ホーム専用コンポーネント
      ├── data/         # ホーム専用データ
      └── hooks/        # ホーム専用フック（必要に応じて）
```

### 2. コンポーネントの分類

- **Layout Components** (`components/layout/`): サイト全体のレイアウトに関わるコンポーネント
  - Header, Footer, TopPage など

- **UI Components** (`components/ui/`): 汎用的に使用できるUIコンポーネント
  - TextAnimation, ScrollToTop など

- **Feature Components** (`features/`): 特定の機能に特化したコンポーネント
  - InfoSection, ServiceSection など

### 3. 型定義の分離

型定義は機能ごとに分離し、`types/index.ts`でエクスポートします。

```typescript
// types/home.ts
export interface SlideItem { ... }

// types/navigation.ts
export interface MenuItem { ... }

// types/index.ts
export * from './home';
export * from './navigation';
```

### 4. 設定値の分離

設定値は`config/`フォルダに集約します。

```typescript
// config/site.ts
export const SITE_CONFIG = {
  companyName: '株式会社LiFe',
  headerHeight: 80,
} as const;
```

### 5. 定数の分離

定数は`constants/`フォルダに集約します。

```typescript
// constants/sections.ts
export const SECTION_CONFIG = [
  { index: 0, id: null },
  { index: 1, id: 'service' },
] as const;
```

## パスエイリアス

`tsconfig.json`で`@/`エイリアスを設定しています。

```typescript
// 使用例
import { SlideItem } from '@/types/home';
import { Header } from '@/components/layout';
import { SITE_CONFIG } from '@/config/site';
```

## 命名規則

- **コンポーネント**: PascalCase（例: `InfoSection.tsx`）
- **ファイル名**: コンポーネント名と一致
- **フォルダ名**: PascalCase（コンポーネント）または kebab-case（機能）
- **型定義**: PascalCase（例: `SlideItem`, `MenuItem`）
- **定数**: UPPER_SNAKE_CASE（例: `SITE_CONFIG`, `SECTION_CONFIG`）

## エクスポートの統一

各コンポーネントフォルダには`index.ts`を配置し、エクスポートを統一します。

```typescript
// components/layout/Header/index.ts
export { Header } from './Header';
export { Navigation } from './Navigation';
```

## 今後の改善点

1. **残りのコンポーネントの移行**
   - `components/HomeSections/` → `features/home/components/`
   - `components/NewsSection/` → `features/home/components/`
   - `components/SectionContainer/` → `components/ui/`
   - `components/SectionBackground/` → `components/ui/`

2. **データの移行**
   - `data/homePageData.ts` → `features/home/data/homeData.ts`（完了）

3. **フックの整理**
   - 機能固有のフックは`features/`配下に移動

4. **テストファイルの追加**
   - 各コンポーネントにテストファイルを追加

