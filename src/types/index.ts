export interface NewsItem {
  date: string;
  category: string;
  content: string;
  isImportant?: boolean;
}

export interface InfoItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
}

export interface MenuItem {
  label: string;
  path: string;
  children?: MenuItem[];
}

export interface SlideItem {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;  // オプショナルに
  videoUrl?: string;  // 新規追加
  linkUrl?: string;
}

export type AnimationType = 'up' | 'down' | 'transform1' | 'transform2' | 'transform3' | 'blur' | 'fade';
