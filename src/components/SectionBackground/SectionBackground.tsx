/**
 * セクション用の背景画像コンポーネント
 * 
 * 画面全体に固定表示される背景画像を表示します。
 * 透明度のアニメーションに対応しています。
 * 
 * @param opacity - 背景画像の透明度（0: 完全に透明、1: 完全に不透明）
 * @param imageSrc - 背景画像のパス
 * @param imageAlt - 背景画像のaltテキスト
 * @param overlayOpacity - オーバーレイの透明度（デフォルト: 0.3）
 * @param objectPosition - 画像の位置（デフォルト: 'center top'）
 */
'use client';

import React from 'react';
import Image from 'next/image';

interface SectionBackgroundProps {
  opacity: number;
  imageSrc: string;
  imageAlt: string;
  overlayOpacity?: number;
  objectPosition?: string;
}

export const SectionBackground: React.FC<SectionBackgroundProps> = ({
  opacity,
  imageSrc,
  imageAlt,
  overlayOpacity = 0.3,
  objectPosition = 'center top',
}) => {
  return (
    <>
      <div 
        className="fixed inset-0 z-0" 
        style={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          opacity,
          transition: 'opacity 0.5s ease-in-out',
          pointerEvents: 'none',
        }}
      >
        {/* 背景画像 */}
        <div className="absolute inset-0 w-full h-full opacity-30">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover object-center"
            style={{ objectPosition }}
            sizes="100vw"
            priority
            quality={90}
          />
        </div>
      </div>
    </>
  );
};

