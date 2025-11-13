'use client';

import React, { useEffect, useState } from 'react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 320);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    toggleVisibility();
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={handleScrollToTop}
      aria-label="ページトップへ移動"
      className={`fixed bottom-6 right-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-xl shadow-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
        isVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M10 3a1 1 0 0 1 .8.4l5 6.5a1 1 0 1 1-1.6 1.2L11 6.86V16a1 1 0 1 1-2 0V6.86L5.8 11.1a1 1 0 1 1-1.6-1.2l5-6.5A1 1 0 0 1 10 3Z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
};
