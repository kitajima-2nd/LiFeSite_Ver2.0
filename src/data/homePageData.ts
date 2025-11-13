/**
 * ホームページで使用するデータ定義
 * 
 * このファイルには、トップページに表示する各種データ（スライド、情報、ニュースなど）を定義します。
 * データとロジックを分離することで、データの管理と更新が容易になります。
 */

import { SlideItem, InfoItem, NewsItem } from '../types';

/**
 * トップページのスライドショーに表示するスライドデータ
 * 各スライドには、タイトル、説明、動画/画像URL、リンクURLを設定できます。
 */
export const slides: SlideItem[] = [
  {
    id: 1,
    title: '挑戦を楽しむ。',
    description: '限界を超えて、前進。常に新しい挑戦を求め、未知の領域に挑む企業です。',
    videoUrl: '/videos/Top動画_1280x720.mov',
    linkUrl: '#service',
  },
];

/**
 * Informationセクション（ご案内）に表示する情報アイテムのリスト
 * 各アイテムには、タイトル、説明、画像URL、リンクURLを設定できます。
 */
export const infoItems: InfoItem[] = [
  {
    id: 1,
    title: 'ここにタイトルを入れます',
    description: 'ここに説明を入れます。サンプルテキスト。',
    imageUrl: '/images/sample1.jpg',
    linkUrl: '/service',
  },
  {
    id: 2,
    title: 'ここにタイトルを入れます',
    description: 'ここに説明を入れます。サンプルテキスト。',
    imageUrl: '/images/sample1.jpg',
    linkUrl: '/service',
  },
  {
    id: 3,
    title: 'ここにタイトルを入れます',
    description:
      'ここに説明を入れます。サンプルテキスト。ここに説明を入れます。サンプルテキスト。ここに説明を入れます。サンプルテキスト。',
    imageUrl: '/images/sample1.jpg',
    linkUrl: '/service',
  },
];

/**
 * お知らせセクションに表示するニュースアイテムのリスト
 * 各ニュースには、日付、カテゴリ、内容、重要フラグを設定できます。
 */
export const newsItems: NewsItem[] = [
  {
    date: '2024/05/19',
    category: 'その他',
    content: 'トップのスライドショーをcssスライドショーからjQuery+cssタイプに変更。',
  },
  {
    date: '2024/05/15',
    category: 'その他',
    content: '企業・ビジネス向け シンプル無料ホームページテンプレート tp_biz62公開。',
  },
  {
    date: '20XX/00/00',
    category: '重要',
    content: 'サンプルテキスト。サンプルテキスト。サンプルテキスト。',
    isImportant: true,
  },
  {
    date: '20XX/00/00',
    category: 'サービス',
    content: 'サンプルテキスト。サンプルテキスト。サンプルテキスト。',
  },
  {
    date: '20XX/00/00',
    category: 'その他',
    content: 'サンプルテキスト。サンプルテキスト。サンプルテキスト。',
  },
  {
    date: '20XX/00/00',
    category: 'その他',
    content:
      'サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。',
  },
];

/**
 * Serviceセクション（サービスのご案内）に表示するサービスアイテムのリスト
 * 各サービスには、タイトル、説明、画像URL、リンクURLを設定できます。
 */
export const serviceItems: InfoItem[] = [
  {
    id: 1,
    title: 'HP制作',
    description: 'コーポレートサイトからLPまで、ブランドイメージに合わせたデザインとストーリーで構築します。',
    imageUrl: '/images/sample1.jpg',
    linkUrl: '/contact',
  },
  {
    id: 2,
    title: 'SNS運用サポート',
    description: 'コンテンツ企画から投稿管理・分析まで、SNS運用を総合的に伴走します。',
    imageUrl: '/images/sample1.jpg',
    linkUrl: '/contact',
  },
  {
    id: 3,
    title: '動画作成',
    description: 'プロモーション動画や採用動画など、目的に合わせた映像制作をワンストップで提供します。',
    imageUrl: '/images/sample1.jpg',
    linkUrl: '/contact',
  },
  {
    id: 4,
    title: '営業代行',
    description: 'リード獲得からアポイント獲得まで、営業活動を専門チームが代行します。',
    imageUrl: '/images/sample1.jpg',
    linkUrl: '/contact',
  },
];

/**
 * Companyセクション（会社概要）に表示する会社詳細情報
 * ラベルと値のペアで構成されます。
 */
export const companyDetails = [
  { label: '会社名', value: '株式会社LiFe' },
  { label: '所在地', value: '東京都品川区西五反田1丁目28-4 田口ビル3F' },
  { label: '設立', value: '2025年3月1日' },
  { label: '代表取締役', value: '本間 昇吾' },
  { label: '電話番号', value: '03-0000-0000' },
];

/**
 * Companyセクションに表示する事業内容のリスト
 */
export const businessContents = ['HP制作', 'SNS運用サポート', '動画作成', '営業代行'];

