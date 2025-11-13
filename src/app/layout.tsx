/**
 * ルートレイアウトコンポーネント
 * 
 * このコンポーネントは、Next.jsのルートレイアウトとして機能し、
 * すべてのページで共通して使用される構造を定義します。
 * 
 * 主な機能：
 * - サイト全体のメタデータ（タイトル、説明）の定義
 * - ヘッダーとフッターの配置
 * - スクロールトップボタンの配置
 * - スムーズスクロール機能の有効化（ClientWrapper経由）
 * 
 * 構造：
 * - Header: 固定ヘッダー（全ページ共通）
 * - children: 各ページのコンテンツ
 * - Footer: フッター（全ページ共通）
 * - ScrollToTop: ページトップへ戻るボタン
 */
import type { Metadata } from 'next';
import React from 'react';
import './globals.css';

import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { ScrollToTop } from '../components/ScrollToTop/ScrollToTop';
import ClientWrapper from '../components/ClientWrapper';
import { MenuItem } from '../types';

/**
 * サイト全体のメタデータ
 * SEO対策として、タイトルと説明を設定します
 */
export const metadata: Metadata = {
  title: 'SAMPLE COMPANY',
  description: 'ここにサイト説明を入れます',
};

/**
 * ナビゲーションメニューのアイテム定義
 * ヘッダーとフッターで使用されます
 */
const menuItems: MenuItem[] = [
  { label: 'HOME', path: '/' },
  {
    label: 'SERVICE',
    path: '',
    children: [
      { label: 'メニューメニューメニュー', path: '/service' },
      { label: 'メニュー', path: '/service' },
      { label: 'メニュー', path: '/service' },
      { label: 'メニュー', path: '/service' },
    ],
  },
  { label: 'COMPANY', path: '/company' },
  { label: 'CONTACT', path: '/contact' },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="text-neutral-900">
        <ClientWrapper>
          <div className="flex min-h-screen flex-col">
            <Header 
              companyName="株式会社LiFe" 
              logoUrl="/images/Logo_image.png" 
              menuItems={menuItems} 
            />
            <div className="flex-1">
              {children}
            </div>
            <Footer companyName="SAMPLE COMPANY" menuItems={menuItems} />
          </div>
          <ScrollToTop />
        </ClientWrapper>
      </body>
    </html>
  );
}
