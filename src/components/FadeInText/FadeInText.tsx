'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface FadeInTextProps {
  children: React.ReactNode;
  className?: string;
}

export const FadeInText: React.FC<FadeInTextProps> = ({ children, className = '' }) => {
  const [elementRef, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });
  const [animated, setAnimated] = useState<boolean>(false);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (isIntersecting && !animated && textRef.current) {
      const text = textRef.current.textContent || '';
      if (!text) return;
      
      textRef.current.textContent = '';
      textRef.current.innerHTML = '';
      
      const fragment = document.createDocumentFragment();
      for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.className = 'char';
        span.style.animationDelay = `${i * 0.2}s`;
        span.textContent = text[i];
        fragment.appendChild(span);
      }

      textRef.current.appendChild(fragment);
      textRef.current.style.visibility = 'visible';
      setAnimated(true);
    }
  }, [isIntersecting, animated]);

  return (
    <span
      ref={(el) => {
        if (el) {
          (elementRef as React.MutableRefObject<HTMLElement | null>).current = el;
          textRef.current = el;
        }
      }}
      className={`fade-in-text ${className}`}
    >
      {!animated && children}
    </span>
  );
};
