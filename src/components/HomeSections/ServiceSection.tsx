/**
 * Serviceセクションコンポーネント
 * 
 * サービスのご案内セクションを表示します。
 * 左側にタイトルを縦に並べ、右側に対応する画像を表示します。
 * タイトルをホバーすると、右側の画像が切り替わります。
 */
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { InfoItem } from '../../types';
import { TextAnimation } from '../animation/TextAnimation';

interface ServiceSectionProps {
  serviceItems: InfoItem[];
  isVisible?: boolean; // セクションが表示されているかどうか（固定ビューで使用）
}

export const ServiceSection: React.FC<ServiceSectionProps> = ({ serviceItems, isVisible }) => {
  // 現在ホバーされている（表示されている）アイテムのインデックス
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);

  return (
    <section id="service" className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-14 md:px-10 md:py-20">
      <header className="">
        <h2 className="font-semibold text-gray-700 text-5xl md:text-8xl lg:text-8xl">
          <TextAnimation isVisible={isVisible} stagger={0.06} delay={0.05}>
            Service.
          </TextAnimation>
        </h2>
        <p className="text-primary text-xl md:text-2xl lg:text-3xl">
          <TextAnimation isVisible={isVisible} stagger={0.06} delay={0.05} >
            サービスのご案内
          </TextAnimation>
        </p>
      </header>

      {/* コンテンツエリア：左側にタイトル、右側に画像 */}
      <div className="flex flex-col gap-8 md:flex-row md:gap-12 ">
        {/* 左側：タイトルリスト */}
        <div className="flex flex-col gap-4 md:w-1/2">
          {serviceItems.map((item, index) => (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredIndex(index)}
              className="cursor-pointer"
            >
              <h3
                className={`text-gray-700 text-xl md:text-2xl lg:text-3xl font-semibold transition-all duration-300 origin-left ${
                  hoveredIndex === index
                    ? 'text-primary scale-105'
                    : 'opacity-50 scale-100'
                }`}
              >
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* 右側：descriptionと画像表示エリア */}
        <div className="flex flex-col gap-6 md:w-1/2">
          {/* 上側：description表示エリア */}
          <div className="relative min-h-[120px]">
            {serviceItems.map((item, index) => (
              <div
                key={`desc-${item.id}`}
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  pointerEvents: hoveredIndex === index ? 'auto' : 'none',
                }}
              >
                <p className="text-gray-900 text-base md:text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* 下側：画像表示エリア */}
          <div className="relative aspect-video opacity-50">
            {serviceItems.map((item, index) => (
              <div
                key={`img-${item.id}`}
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  pointerEvents: hoveredIndex === index ? 'auto' : 'none',
                }}
              >
                {item.imageUrl && (
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover rounded-2xl"
                    sizes="(min-width: 768px) 50vw, 100vw"
                    priority={index === 0}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

