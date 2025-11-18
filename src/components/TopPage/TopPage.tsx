/**
 * スライドショーコンポーネント
 * 
 * このコンポーネントは、トップページのヒーローセクションとして使用される
 * スライドショーを表示します。
 * 
 * 主な機能：
 * - 複数のスライドを自動的に切り替え表示
 * - 動画と画像の両方に対応
 * - スライドインジケーターの表示
 * - フェードイン/フェードアウトのアニメーション
 * 
 * @param slides - スライドアイテムの配列（タイトル、説明、動画/画像URLなど）
 * @param interval - スライドの切り替え間隔（ミリ秒、デフォルト: 4000ms）
 */
'use client';

import React from 'react';
import Image from 'next/image';
import { useSlideShow } from '../../hooks/useSlideShow';
import { SlideItem } from '../../types';

interface TopPageProps {
  slides: SlideItem[];
  interval?: number;
}

export const TopPage: React.FC<TopPageProps> = ({ slides, interval = 4000 }) => {
  // スライドショーの自動再生を制御するカスタムフック
  // 指定された間隔でスライドを自動的に切り替えます
  const { currentIndex } = useSlideShow({
    slideCount: slides.length,
    interval,
    autoPlay: true,
  });

  return (
    // メインコンテナ: 画面全体を覆う、背景色・影・オーバーフロー制御
    <aside className="relative min-h-screen w-screen overflow-hidden bg-neutral-900 text-white shadow-2xl shadow-primary/30">
      {/* 各スライドのループ */}
      {slides.map((slide, index) => (
        // スライドコンテナ: 全画面絶対配置、中央揃え、フェードアニメーション（1.2秒）
        <div
          key={slide.id}
          className={`absolute inset-0 flex flex-col items-center justify-center gap-6 px-6 text-center transition-opacity duration-[1200ms] ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={index !== currentIndex}
        >
          {/* 背景メディアコンテナ: 動画/画像を全画面に配置 */}
          <div className="absolute inset-0">
            {slide.videoUrl ? (
              // 動画: 全画面、カバー表示
              <video
                src={slide.videoUrl}
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              />
            ) : slide.imageUrl ? (
              // 画像: Next.js Image、全画面、カバー表示
              <Image
                src={slide.imageUrl}
                alt={slide.title}
                fill
                priority={index === 0}
                sizes="(min-width: 1280px) 960px, (min-width: 768px) 90vw, 100vw"
                className="object-cover"
              />
            ) : null}
            {/* オーバーレイ: 画像の場合のみ、暗めの背景＋ぼかし効果 */}
            {!slide.videoUrl && (
              <div className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm" />
            )}
          </div>
          {/* コンテンツエリア: テキストとボタンを配置、z-indexで前面に */}
          <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6">
            {/* タイトル: レスポンシブフォントサイズ（モバイル3xl、デスクトップ5xl）、左手前側から光が当たる影効果 */}
            <h1 
              className="text-white font-display text-3xl font-semibold leading-snug md:text-5xl"
              style={{
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), -1px -1px 2px rgba(255, 255, 255, 0.3)'
              }}
            >
              {slide.title}
            </h1>
            {/* 説明文: 最大幅制限、レスポンシブフォントサイズ、半透明白 */}
            <p
              className="max-w-2xl text-base leading-relaxed text-white/80 md:text-lg"
              style={{
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), -1px -1px 2px rgba(255, 255, 255, 0.3)'
              }}
              dangerouslySetInnerHTML={{ __html: slide.description }}
            />
            {/* CTAボタン: 丸角、白背景、ホバー効果、影、波打つアニメーション */}
            {slide.linkUrl && (
              <a
                href={slide.linkUrl}
                className="inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:bg-white animate-bounce-gentle"
              >
                ↓SCROLL↓
              </a>
            )}
          </div>
        </div>
      ))}
      {/* スライドインジケーター: 画面下部中央、現在のスライドを白で表示 */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 z-20 flex justify-center gap-2">
        {slides.map((slide, index) => (
          // インジケーター: 丸角、現在のスライドは白、それ以外は半透明
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
