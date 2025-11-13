'use client';

import React, { ReactNode, useRef, useEffect, useState, forwardRef, useImperativeHandle } from 'react';

interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  opacity?: number; // 外部から制御する場合
  onIntersectionChange?: (is30PercentVisible: boolean) => void; // 30%表示の検出を親に通知
  isFixed?: boolean; // セクションを固定するかどうか
}

export interface FadeInSectionRef {
  element: HTMLDivElement | null;
}

export const FadeInSection = forwardRef<FadeInSectionRef, FadeInSectionProps>(({ 
  children, 
  className = '',
  delay = 0,
  opacity: controlledOpacity,
  onIntersectionChange,
  isFixed = false
}, ref) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [internalOpacity, setInternalOpacity] = useState(0);

  useImperativeHandle(ref, () => ({
    element: elementRef.current
  }));

  useEffect(() => {
    const element = elementRef.current;
    if (!element || controlledOpacity !== undefined) return; // 外部制御の場合は内部ロジックをスキップ

    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio;
        const calculatedOpacity = ratio < 0.5 ? (ratio / 0.5) : 1;
        setInternalOpacity(calculatedOpacity);
      },
      {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
        rootMargin: '0px'
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [controlledOpacity]);

  // 30%表示の検出（外部制御時も動作）
  useEffect(() => {
    const element = elementRef.current;
    if (!element || !onIntersectionChange) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        onIntersectionChange(entry.intersectionRatio >= 0.3);
      },
      {
        threshold: [0, 0.3, 1],
        rootMargin: '0px'
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [onIntersectionChange]);

  const opacity = controlledOpacity !== undefined ? controlledOpacity : internalOpacity;

  return (
    <>
      {/* 固定されている場合のプレースホルダー（元の位置に高さを確保） */}
      {isFixed && (
        <div 
          style={{ 
            minHeight: '100vh',
            visibility: 'hidden',
            pointerEvents: 'none'
          }}
        />
      )}
      <div
        ref={elementRef}
        className={className}
        style={{ 
          opacity: opacity,
          transitionDelay: `${delay}ms`,
          transitionDuration: '300ms',
          transitionProperty: 'opacity',
          transitionTimingFunction: 'ease-in-out',
          ...(isFixed ? {
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            maxWidth: '72rem', // max-w-6xlと同じ
            paddingLeft: '1.5rem', // px-6と同じ
            paddingRight: '1.5rem',
            zIndex: 10
          } : {
            position: 'relative'
          })
        }}
      >
        {children}
      </div>
    </>
  );
});

FadeInSection.displayName = 'FadeInSection';