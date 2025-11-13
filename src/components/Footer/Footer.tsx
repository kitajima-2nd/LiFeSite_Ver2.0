/**
 * フッターコンポーネント
 * 
 * このコンポーネントは、サイト全体で使用されるフッターを表示します。
 * 
 * 主な機能：
 * - ナビゲーションメニューの表示（親メニューと子メニューをフラット化）
 * - コピーライトの表示
 * - レスポンシブ対応（モバイル：縦並び、デスクトップ：横並び）
 * 
 * @param companyName - 会社名（コピーライトに表示）
 * @param menuItems - ナビゲーションメニューのアイテム配列
 * @param showTemplateCredit - テンプレートクレジットを表示するかどうか（未使用）
 */
import React from 'react';
import Link from 'next/link';
import { MenuItem } from '../../types';

interface FooterProps {
  companyName: string;
  menuItems: MenuItem[];
  showTemplateCredit?: boolean;
}

export const Footer: React.FC<FooterProps> = ({
  companyName,
  menuItems,
  showTemplateCredit = true,
}) => {
  // メニューアイテムをフラット化（親メニューと子メニューを1つの配列に統合）
  // これにより、フッターにはすべてのメニューリンクが表示されます
  const flatMenuItems: MenuItem[] = [];
  menuItems.forEach((item) => {
    // 親メニューにパスがある場合は追加
    if (item.path) {
      flatMenuItems.push(item);
    }
    // 子メニューがある場合は、パスを持つ子メニューのみを追加
    if (item.children) {
      flatMenuItems.push(
        ...item.children.filter((child) => child.path)
      );
    }
  });

  return (
    <footer className="mt-12 border-t border-neutral-200 bg-neutral-50/80 relative z-0">
      <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-6 text-sm text-neutral-600">
        <div className="flex flex-col items-center gap-3 md:flex-row md:items-center md:justify-between">
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-medium text-neutral-700 md:justify-start">
            {flatMenuItems.map((item, index) => (
              <Link
                key={`${item.label}-${index}`}
                href={item.path}
                className="transition hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="text-xs text-neutral-500">
            &copy; {new Date().getFullYear()}&nbsp;
            <Link href="/" className="font-medium text-neutral-700 hover:text-primary">
              株式会社LiFe
            </Link>
            &nbsp;All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
