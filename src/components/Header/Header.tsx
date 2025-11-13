/**
 * ヘッダーコンポーネント
 * 
 * このコンポーネントは、サイト全体で使用される固定ヘッダーを表示します。
 * 
 * 主な機能：
 * - ロゴと会社名の表示
 * - ナビゲーションメニューの表示（デスクトップ/モバイル対応）
 * - ハンバーガーメニューの開閉制御
 * - メニューが開いている間、背景のスクロールを無効化
 * 
 * @param companyName - 会社名（ロゴの横に表示）
 * @param logoUrl - ロゴ画像のURL（オプション）
 * @param menuItems - ナビゲーションメニューのアイテム配列
 */
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from './Navigation';
import { HamburgerMenu } from './HamburgerMenu';
import { MenuItem } from '../../types';

interface HeaderProps {
  companyName: string;
  logoUrl?: string;
  menuItems: MenuItem[];
}

export const Header: React.FC<HeaderProps> = ({ companyName, logoUrl, menuItems }) => {
  // モバイルメニューの開閉状態を管理
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // メニューが開いている間、背景のスクロールを無効化
  // これにより、メニューが開いている時に背景がスクロールしないようにします
  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', isMenuOpen);
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMenuOpen]);

  /**
   * ハンバーガーメニューの開閉を切り替える関数
   */
  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  /**
   * メニュー内のリンクがクリックされた時にメニューを閉じる関数
   */
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-white/80 backdrop-blur-md">
      <div className="relative flex h-20 items-center justify-between px-6">
      <h1 className="font-display text-lg font-semibold text-neutral-900 md:text-xl">
        <Link href="/" className="inline-flex items-center gap-3">
          {logoUrl && (
            <Image src={logoUrl} alt={companyName} width={160} height={40} className="h-10 w-auto" />
          )}
          <span className="text-base md:text-lg">{companyName}</span>
        </Link>
      </h1>
        <Navigation items={menuItems} isOpen={isMenuOpen} onLinkClick={handleLinkClick} />
        <HamburgerMenu isOpen={isMenuOpen} onClick={handleMenuToggle} />
      </div>
    </header>
  );
};
