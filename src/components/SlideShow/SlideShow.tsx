'use client';

import React from 'react';
import Image from 'next/image';
import { useSlideShow } from '../../hooks/useSlideShow';
import { SlideItem } from '../../types';

interface SlideShowProps {
  slides: SlideItem[];
  interval?: number;
}

export const SlideShow: React.FC<SlideShowProps> = ({ slides, interval = 4000 }) => {
  const { currentIndex } = useSlideShow({
    slideCount: slides.length,
    interval,
    autoPlay: true,
  });

  return (
    <aside className="relative min-h-screen snap-start w-screen overflow-hidden bg-neutral-900 text-white shadow-2xl shadow-primary/30">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 flex flex-col items-center justify-center gap-6 px-6 text-center transition-opacity duration-[1200ms] ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={index !== currentIndex}
        >
          <div className="absolute inset-0">
            {slide.videoUrl ? (
              <video
                src={slide.videoUrl}
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              />
            ) : slide.imageUrl ? (
              <Image
                src={slide.imageUrl}
                alt={slide.title}
                fill
                priority={index === 0}
                sizes="(min-width: 1280px) 960px, (min-width: 768px) 90vw, 100vw"
                className="object-cover"
              />
            ) : null}
            {/* 動画の場合はぼかしを表示しない、画像の場合は表示 */}
            {!slide.videoUrl && (
              <div className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm" />
            )}
          </div>
          <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6">
            <h1 className="font-display text-3xl font-semibold leading-snug md:text-5xl">
              {slide.title}
            </h1>
            <p
              className="max-w-2xl text-base leading-relaxed text-white/80 md:text-lg"
              dangerouslySetInnerHTML={{ __html: slide.description }}
            />
            {slide.linkUrl && (
              <a
                href={slide.linkUrl}
                className="inline-flex items-center rounded-full bg-white/90 px-6 py-3 text-sm font-semibold text-neutral-900 shadow-lg shadow-neutral-900/30 transition hover:bg-white"
              >
                もっと詳しくみる
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
              index === currentIndex ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </aside>
  );
};
