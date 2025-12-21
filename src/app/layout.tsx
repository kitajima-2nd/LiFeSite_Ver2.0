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
import { Noto_Serif_JP } from 'next/font/google';
import './globals.css';

import { Header, Footer } from '@/components/layout';
import { ScrollToTop } from '@/components/ui/ScrollToTop';
import ClientWrapper from '@/components/ClientWrapper';
import { SITE_CONFIG } from '@/config/site';
import { MENU_ITEMS } from '@/config/navigation';

// フォントの設定
const NotoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-noto-serif-jp',
  display: 'swap',
});

/**
 * サイト全体のメタデータ
 * SEO対策として、タイトルと説明を設定します
 */
export const metadata: Metadata = {
  title: SITE_CONFIG.companyName,
  description: `${SITE_CONFIG.companyName}のホームページ`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={NotoSerifJP.variable}>
      <body className="text-neutral-900">
        <ClientWrapper>
          <div className="flex min-h-screen flex-col">
            <Header 
              companyName={SITE_CONFIG.companyName}
              logoUrl={SITE_CONFIG.logoUrl}
              menuItems={MENU_ITEMS} 
            />
            <div className="flex-1">
              {children}
            </div>
            <Footer companyName={SITE_CONFIG.companyName} menuItems={MENU_ITEMS} />
          </div>
          <ScrollToTop />
        </ClientWrapper>
      </body>
    </html>
  );
}
