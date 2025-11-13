import React from 'react';

interface HamburgerMenuProps {
  isOpen: boolean;
  onClick: () => void;
}

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="メニューを開閉"
      aria-expanded={isOpen}
      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-white/90 text-neutral-900 shadow-lg shadow-primary/10 transition hover:border-primary hover:shadow-primary/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary md:hidden"
    >
      <span className="sr-only">メニュー</span>
      <span
        className={`relative block h-4 w-6 origin-center transition-transform ${
          isOpen ? 'rotate-45' : ''
        }`}
      >
        <span
          className={`absolute left-0 top-0 block h-0.5 w-full rounded bg-neutral-900 transition-transform ${
            isOpen ? 'translate-y-2 rotate-90' : ''
          }`}
        />
        <span
          className={`absolute left-0 top-1/2 block h-0.5 w-full -translate-y-1/2 rounded bg-neutral-900 transition-opacity ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <span
          className={`absolute left-0 bottom-0 block h-0.5 w-full rounded bg-neutral-900 transition-transform ${
            isOpen ? '-translate-y-2 rotate-90' : ''
          }`}
        />
      </span>
    </button>
  );
};
