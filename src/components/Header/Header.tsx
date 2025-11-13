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
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', isMenuOpen);
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMenuOpen]);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

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
