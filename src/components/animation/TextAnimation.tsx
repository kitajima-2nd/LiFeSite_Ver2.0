'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

type Props = {
  children: string;
  className?: string;
  stagger?: number;
  delay?: number;
  once?: boolean;
  isVisible?: boolean; // 追加: 親から可視制御
};

export const TextAnimation: React.FC<Props> = ({
  children,
  className = '',
  stagger = 0.05,
  delay = 0,
  once = true,
  isVisible,
}) => {
    const container: Variants = {
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: delay,
            staggerChildren: stagger,
          },
        },
    };
      

  const char: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: [0.2, 0.65, 0.3, 0.9], // 型適合のcubic-bezier
      },
    },
  };

  const parts = children.split('').map((c) => (c === ' ' ? '\u00A0' : c));

  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      // isVisible が指定されたらそれで制御、未指定なら whileInView でフォールバック
      animate={isVisible === undefined ? undefined : (isVisible ? 'visible' : 'hidden')}
      whileInView={isVisible === undefined ? 'visible' : undefined}
      viewport={isVisible === undefined ? { once, amount: 0.6 } : undefined}
      style={{ display: 'inline-block' }}
      aria-label={children}
    >
      {parts.map((ch, i) => (
        <motion.span
          key={i}
          variants={char}
          style={{ display: 'inline-block', willChange: 'transform, opacity' }}
          aria-hidden="true"
        >
          {ch}
        </motion.span>
      ))}
    </motion.span>
  );
};