/**
 * ナビゲーション関連の型定義
 */

export interface MenuItem {
  label: string;
  path: string;
  children?: MenuItem[];
}

