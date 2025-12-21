/**
 * テキストアニメーションコンポーネント
 * 文字を1文字ずつアニメーション表示する
 */
'use client';

import React from 'react';
import { AnimationType } from '@/types/animation';

interface TextAnimationProps {
  children: string;
  isVisible?: boolean;
  stagger?: number;
  delay?: number;
  className?: string;
  animationType?: AnimationType;
}

export const TextAnimation: React.FC<TextAnimationProps> = ({
  children,
  isVisible = false,
  stagger = 0.05,
  delay = 0,
  className = '',
  animationType = 'fade',
}) => {
  const chars = children.split('');

  return (
    <span className={className}>
      {chars.map((char, index) => {
        const charDelay = delay + index * stagger;
        const isSpace = char === ' ';

        return (
          <span
            key={index}
            className={`inline-block ${isSpace ? 'w-2' : ''}`}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: `opacity 0.3s ease ${charDelay}s, transform 0.3s ease ${charDelay}s`,
            }}
          >
            {isSpace ? '\u00A0' : char}
          </span>
        );
      })}
    </span>
  );
};

