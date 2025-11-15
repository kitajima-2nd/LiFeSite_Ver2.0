# 変更ログ

このプロジェクトのすべての重要な変更は、このファイルに記録されます。

フォーマットは [Keep a Changelog](https://keepachangelog.com/ja/1.0.0/) に基づいており、
このプロジェクトは [Semantic Versioning](https://semver.org/lang/ja/spec/v2.0.0.html) に準拠しています。

## [未リリース]

### 削除
- **FadeInTextコンポーネント**: カスタムFadeInTextアニメーションコンポーネントと関連コードをすべて削除
  - `src/components/FadeInText/FadeInText.tsx` を削除
  - すべてのセクションコンポーネントからFadeInTextのインポートと使用を削除:
    - `NewsSection.tsx`
    - `InfoSection.tsx`
    - `ContactSection.tsx`
    - `CompanySection.tsx`
    - `ServiceSection.tsx`
    - `src/app/service/page.tsx`
    - `src/app/company/page.tsx`
  - `globals.css` からアニメーション関連のCSSクラスを削除:
    - `.fade-in-text` クラス
    - `.char` クラス
    - `@keyframes fadeIn` アニメーション
  - `tailwind.config.js` からfadeInアニメーションを削除:
    - `keyframes.fadeIn`
    - `animation.fadeIn`

### 変更
- すべてのセクションタイトルをアニメーションなしのプレーンテキスト表示に変更
- GSAPアニメーション実装に向けた準備を完了

### 備考
- この変更により、GSAPベースのテキストアニメーション実装の準備が整いました
- すべてのセクションコンポーネントは、将来のアニメーション統合のために `isVisible` プロップを維持しています
