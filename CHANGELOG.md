# 変更ログ

このプロジェクトのすべての重要な変更は、このファイルに記録されます。

フォーマットは [Keep a Changelog](https://keepachangelog.com/ja/1.0.0/) に基づいており、
このプロジェクトは [Semantic Versioning](https://semver.org/lang/ja/spec/v2.0.0.html) に準拠しています。

## [未リリース]

### 追加
- **ServiceSection**: サービスアイテム用の画像ファイルを追加
  - `public/images/image2.png` - 動画作成サービスの画像
  - `public/images/image3.png` - 営業代行サービスの画像

### 変更
- **InfoSection**: 背景画像の実装とスタイリング調整
  - h2タグ以降のコンテンツエリアに背景画像（image1.png）を適用
  - オーバーレイの透明度を調整（bg-neutral-900/60 → bg-neutral-900/30）
  - 背景画像の配置とサイズ調整

- **ServiceSection**: レイアウトとスタイリングの改善
  - タイトルのフォントサイズを調整（text-3xl → text-xl、md:text-4xl → md:text-2xl、lg:text-5xl → lg:text-3xl）
  - タイトル間の縦方向の間隔を調整（gap-6 → gap-4）
  - ホバー時のエフェクトを改善
    - ホバー時に色を`text-primary`に変更
    - ホバー時に約5%拡大（scale-105）
    - 拡大の基準点を左側に設定（origin-left）
    - 非ホバー時は元のサイズを維持（scale-100）
  - 画像表示エリアにopacity-50を追加

- **homePageData.ts**: サービスアイテムの画像URLを更新
  - 動画作成サービスに`image2.png`を設定
  - 営業代行サービスに`image3.png`を設定

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
