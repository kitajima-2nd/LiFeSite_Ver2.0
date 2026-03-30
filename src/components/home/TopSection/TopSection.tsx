/**
 * スライドショーコンポーネント（ホームトップセクション）
 *
 * このコンポーネントは、トップページのヒーローセクションとして使用される
 * スライドショーを表示します。
 *
 * 主な機能：
 * - 複数のスライドを自動的に切り替え表示
 * - 画像を背景として表示
 * - スライドインジケーターの表示
 * - フェードイン/フェードアウトのアニメーション
 *
 * @param slides - スライドアイテムの配列（タイトル、説明、画像URLなど）
 * @param interval - スライドの切り替え間隔（ミリ秒、デフォルト: 4000ms）
 */
'use client';

import React from 'react';
import Image from 'next/image';
import { useSlideShow } from '@/lib/hooks';
import { SlideItem } from '@/types/home';

interface TopSectionProps {
  slides: SlideItem[];
  interval?: number;
}

export const TopSection: React.FC<TopSectionProps> = ({ slides, interval = 4000 }) => {
  const { currentIndex } = useSlideShow({
    slideCount: slides.length,
    interval,
    autoPlay: true,
  });

  return (
    <aside className="relative min-h-screen w-screen overflow-hidden bg-white text-gray-900 shadow-2xl shadow-primary/20">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 flex flex-col items-center justify-center gap-6 px-6 text-center transition-opacity duration-[1200ms] ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={index !== currentIndex}
        >
          <div className="absolute inset-0">
            {slide.imageUrl ? (
              <Image
                src={slide.imageUrl}
                alt={slide.title}
                fill
                priority={index === 0}
                sizes="(min-width: 1280px) 960px, (min-width: 768px) 90vw, 100vw"
                className="object-cover"
              />
            ) : null}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          </div>
          <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6">
            <h1
              className="text-gray-900 font-display text-3xl font-semibold leading-snug md:text-5xl"
              style={{
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), -1px -1px 2px rgba(255, 255, 255, 0.3)'
              }}
            >
              {slide.title}
            </h1>
            <p
              className="max-w-2xl text-base leading-relaxed text-gray-700 md:text-lg"
              style={{
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), -1px -1px 2px rgba(255, 255, 255, 0.3)'
              }}
              dangerouslySetInnerHTML={{ __html: slide.description }}
            />
            {slide.linkUrl && (
              <a
                href={slide.linkUrl}
                className="inline-flex items-center rounded-full border border-gray-900 px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-900 hover:text-white animate-bounce-gentle"
              >
                ↓SCROLL↓
              </a>
            )}
          </div>
        </div>
      ))}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 z-20 flex justify-center gap-2">
        {slides.map((slide, index) => (
          <span
            key={`indicator-${slide.id}`}
            className={`h-2 w-10 rounded-full transition ${
              index === currentIndex ? 'bg-gray-900' : 'bg-gray-900/40'
            }`}
          />
        ))}
      </div>
    </aside>
  );
};
