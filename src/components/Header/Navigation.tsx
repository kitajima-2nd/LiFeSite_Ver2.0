'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MenuItem } from '../../types';

interface NavigationProps {
  items: MenuItem[];
  isOpen: boolean;
  onLinkClick: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ items, isOpen, onLinkClick }) => {
  const [mobileDropdownIndex, setMobileDropdownIndex] = useState<number | null>(null);

  const toggleMobileDropdown = (index: number) => {
    setMobileDropdownIndex((prev) => (prev === index ? null : index));
  };

  const handleNavigation = () => {
    setMobileDropdownIndex(null);
    onLinkClick();
  };

  return (
    <>
      <nav className="hidden items-center gap-6 text-sm font-medium text-neutral-700 md:flex">
        {items.map((item, index) =>
          item.children ? (
            <div key={index} className="relative group">
              <button
                type="button"
                className="inline-flex items-center gap-1 rounded-full border border-transparent px-4 py-2 text-neutral-700 transition hover:border-primary/40 hover:bg-primary/5 hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {item.label}
                <svg
                  className="h-3 w-3 transition-transform group-hover:rotate-180"
                  viewBox="0 0 12 12"
                  aria-hidden="true"
                >
                  <path
                    d="M2.47 4.22a.75.75 0 0 1 1.06 0L6 6.69l2.47-2.47a.75.75 0 0 1 1.06 1.06L6.53 8.78a.75.75 0 0 1-1.06 0L2.47 5.28a.75.75 0 0 1 0-1.06Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
              <div className="invisible absolute left-1/2 top-full z-40 mt-3 w-52 -translate-x-1/2 rounded-2xl border border-white/60 bg-white/95 p-3 text-sm shadow-xl shadow-primary/10 opacity-0 backdrop-blur transition-all duration-200 group-hover:visible group-hover:translate-y-1 group-hover:opacity-100">
                <div className="flex flex-col gap-2">
                  {item.children.map((child, childIndex) => (
                    <Link
                      key={childIndex}
                      href={child.path}
                      onClick={handleNavigation}
                      className="rounded-xl px-3 py-2 text-start text-neutral-600 transition hover:bg-primary/10 hover:text-neutral-900"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <Link
              key={index}
              href={item.path}
              onClick={handleNavigation}
              className="rounded-full px-4 py-2 transition hover:bg-primary/10 hover:text-neutral-900"
            >
              {item.label}
            </Link>
          )
        )}
      </nav>

      <div
        className={`absolute left-0 top-[calc(100%+1rem)] z-40 w-screen px-4 transition-opacity duration-200 md:hidden ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <nav className="mx-auto max-w-6xl space-y-3 rounded-3xl border border-white/60 bg-white/95 p-6 text-sm shadow-2xl shadow-primary/10 backdrop-blur">
          {items.map((item, index) =>
            item.children ? (
              <div key={index} className="rounded-2xl border border-neutral-200/70">
                <button
                  type="button"
                  onClick={() => toggleMobileDropdown(index)}
                  className="flex w-full items-center justify-between gap-3 rounded-2xl px-4 py-3 font-medium text-neutral-800 transition hover:bg-primary/10"
                >
                  {item.label}
                  <svg
                    className={`h-3 w-3 transition-transform ${
                      mobileDropdownIndex === index ? 'rotate-180' : ''
                    }`}
                    viewBox="0 0 12 12"
                    aria-hidden="true"
                  >
                    <path
                      d="M2.47 4.22a.75.75 0 0 1 1.06 0L6 6.69l2.47-2.47a.75.75 0 0 1 1.06 1.06L6.53 8.78a.75.75 0 0 1-1.06 0L2.47 5.28a.75.75 0 0 1 0-1.06Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-200 ${
                    mobileDropdownIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="space-y-2 px-4 pb-4 pt-0 text-neutral-600">
                    {item.children.map((child, childIndex) => (
                      <Link
                        key={childIndex}
                        href={child.path}
                        onClick={handleNavigation}
                        className="block rounded-xl px-3 py-2 transition hover:bg-primary/10 hover:text-neutral-900"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={index}
                href={item.path}
                onClick={handleNavigation}
                className="block rounded-2xl border border-transparent px-4 py-3 font-medium text-neutral-800 transition hover:border-primary/40 hover:bg-primary/10"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </>
  );
};
