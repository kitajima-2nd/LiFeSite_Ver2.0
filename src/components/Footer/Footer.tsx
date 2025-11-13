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
  const flatMenuItems: MenuItem[] = [];
  menuItems.forEach((item) => {
    if (item.path) {
      flatMenuItems.push(item);
    }
    if (item.children) {
      flatMenuItems.push(
        ...item.children.filter((child) => child.path)
      );
    }
  });

  return (
    <footer className="snap-start mt-24 border-t border-neutral-200 bg-neutral-50/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 text-sm text-neutral-600">
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 font-medium text-neutral-700">
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
        <div className="flex flex-col items-center gap-3 text-xs text-neutral-500 md:flex-row md:justify-between">
          <p className="order-2 md:order-1">
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
