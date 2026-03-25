/**
 * ホームページ関連の型定義
 */

export interface SlideItem {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  linkUrl?: string;
}

export interface InfoItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
}

export interface NewsItem {
  date: string;
  category: string;
  content: string;
  isImportant?: boolean;
  url?: string;
  imageUrl?: string;
}

export interface CompanyDetail {
  label: string;
  value: string;
}

export interface ServiceItem {
  id: number;
  imageUrl: string;
  title: string; // 事業名
  titleEn: string; // 事業名の英語表記
  summary: string; // 事業内容の簡易説明(1行)
  details: string; // 事業の詳細名
  linkUrl?: string;
}

