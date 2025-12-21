/**
 * ホームページのデータ定義
 */

import { SlideItem, InfoItem, NewsItem, CompanyDetail, ServiceItem } from '@/types/home';

/**
 * トップページのスライドショーに表示するスライドデータ
 */
export const slides: SlideItem[] = [
  {
    id: 1,
    title: 'NO LiFe NO Solution',
    description: '技術で挑戦し、情報で変革を。',
    videoUrl: '/videos/Top動画_1280x720.mov',
    linkUrl: '#service',
  },
];

/**
 * Informationセクションに表示する情報アイテムのリスト
 */
export const infoItems: InfoItem[] = [
  {
    id: 1,
    title: 'The core of LiFe .',
    description: '私たちが向き合っているのは、<br>プロダクトやサービスそのものではなく、<br>その先にある"人の人生の選択"です。<br>選ばれる理由も、頼られる理由も、<br>すべては「人生をより良い方向へ動かすため」に存在するもの。<br>だからこそLiFeという社名には、<br>"人生に深く関わる存在でありたい"<br>という想いを込めています。',
    imageUrl: '/images/image1.png',
    linkUrl: '#',
  },
];

/**
 * お知らせセクションに表示するニュースアイテムのリスト
 */
export const newsItems: NewsItem[] = [
  {
    date: '2024/05/19',
    category: 'その他',
    content: 'トップのスライドショーをcssスライドショーからjQuery+cssタイプに変更。',
    url: '#',
    imageUrl: '/images/image1.png',
  },
  {
    date: '2024/05/15',
    category: 'その他',
    content: '企業・ビジネス向け シンプル無料ホームページテンプレート tp_biz62公開。',
    url: '#',
    imageUrl: '/images/image2.png',
  },
  {
    date: '20XX/00/00',
    category: '重要',
    content: 'サンプルテキスト。サンプルテキスト。サンプルテキスト。',
    isImportant: true,
    url: '#',
    imageUrl: '/images/image3.png',
  },
  {
    date: '20XX/00/00',
    category: 'サービス',
    content: 'サンプルテキスト。サンプルテキスト。サンプルテキスト。',
    url: '#',
    imageUrl: '/images/image1.png',
  },
  {
    date: '20XX/00/00',
    category: 'サービス',
    content: 'サンプルテキスト。サンプルテキスト。サンプルテキスト。',
    url: '#',
    imageUrl: '/images/image1.png',
  },
];

/**
 * Serviceセクションに表示するサービスアイテムのリスト
 */
export const serviceItems: ServiceItem[] = [
  {
    id: 1,
    imageUrl: '/images/sample1.jpg',
    title: 'HP制作',
    titleEn: 'Web Production',
    summary: 'コーポレートサイトからLPまで、ブランドイメージに合わせたデザインとストーリーで構築します。',
    details: 'コーポレートサイト制作 / ランディングページ制作 / ECサイト構築',
    linkUrl: '/contact',
  },
  {
    id: 2,
    imageUrl: '/images/image1.png',
    title: 'SNS運用サポート',
    titleEn: 'SNS Management Support',
    summary: 'コンテンツ企画から投稿管理・分析まで、SNS運用を総合的に伴走します。',
    details: 'SNS運用代行 / コンテンツ制作 / 分析レポート作成',
    linkUrl: '/contact',
  },
  {
    id: 3,
    imageUrl: '/images/image2.png',
    title: '動画作成',
    titleEn: 'Video Production',
    summary: 'プロモーション動画や採用動画など、目的に合わせた映像制作をワンストップで提供します。',
    details: 'プロモーション動画 / 採用動画 / 商品紹介動画',
    linkUrl: '/contact',
  },
  {
    id: 4,
    imageUrl: '/images/image3.png',
    title: '営業代行',
    titleEn: 'Sales Outsourcing',
    summary: 'リード獲得からアポイント獲得まで、営業活動を専門チームが代行します。',
    details: 'リード獲得 / アポイント獲得 / 営業活動代行',
    linkUrl: '/contact',
  },
];

/**
 * Companyセクションに表示する会社詳細情報
 */
export const companyDetails: CompanyDetail[] = [
  { label: '会社名', value: '株式会社LiFe' },
  { label: '所在地', value: '東京都品川区西五反田1丁目28-4 田口ビル3F' },
  { label: '設立', value: '2025年4月1日' },
  { label: '代表取締役', value: '本間 昇吾' },
  { label: '電話番号', value: '03-6820-7062' },
];

/**
 * Companyセクションに表示する事業内容のリスト
 */
export const businessContents = ['HP制作', 'SNS運用サポート', '動画作成', '営業代行'];

