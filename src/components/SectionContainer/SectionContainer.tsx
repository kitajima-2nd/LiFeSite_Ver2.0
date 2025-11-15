/**
 * セクションコンテナコンポーネント
 * 
 * このコンポーネントは、固定ビューで表示される各セクションのラッパーです。
 * セクションの位置、透明度、ポインターイベントを制御します。
 * 
 * CSS変数を使用してopacityを制御することで、transitionの適用を柔軟に管理します。
 * 
 * @param opacity - セクションの透明度（0: 完全に透明、1: 完全に不透明）
 * @param top - セクションの垂直位置（CSSのtop値、例: '50%', '35%'）
 * @param children - セクション内に表示するコンテンツ
 */
'use client';

import React from 'react';

interface SectionContainerProps {
  opacity: number;
  top?: string;
  children: React.ReactNode;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  opacity,
  top = '50%',
  children,
}) => {
  return (
    <div
      style={{
        opacity,
        transition: 'opacity 0.5s ease-in-out',
        pointerEvents: opacity > 0 ? 'auto' : 'none',
        position: 'absolute',
        top,
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        maxWidth: '72rem',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
      }}
    >
      {children}
    </div>
  );
};

