/**
 * Serviceセクションコンポーネント
 *
 * サービスのご案内セクションを表示します。
 * カードタイプの事業説明を表示します。
 */
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ServiceItem } from '@/types/home';
import { TextAnimation } from '@/components/ui/TextAnimation';
import { useSectionVisibility } from '@/lib/hooks';

interface ServiceSectionProps {
  serviceItems: ServiceItem[];
}

export const ServiceSection: React.FC<ServiceSectionProps> = ({ serviceItems }) => {
  const { sectionRef, isVisible } = useSectionVisibility(0.25);

  return (
    <section ref={sectionRef} id="service" className="relative mx-auto flex max-w-6xl flex-col gap-10 px-1 py-14 md:px-4 md:py-20">
      <header className="">
        <h2 className="font-semibold text-gray-700 text-5xl md:text-8xl lg:text-8xl">
          <TextAnimation isVisible={isVisible} stagger={0.06} delay={0.05}>
            Service.
          </TextAnimation>
        </h2>
        <p className="text-primary text-xl md:text-2xl lg:text-3xl">
          <TextAnimation isVisible={isVisible} stagger={0.06} delay={0.05}>
            サービスのご案内
          </TextAnimation>
        </p>
      </header>

      {/* コンテンツエリア：カードタイプの事業説明 */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
        {serviceItems.map((item) => (
          <Link
            key={item.id}
            href={item.linkUrl || '#'}
            className="overflow-hidden border border-neutral-200/70 bg-white/95 shadow-lg shadow-primary/10 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20"
          >
            {/* 上部：画像 */}
            <div className="relative aspect-video w-full overflow-hidden">
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
              />
            </div>

            {/* 下部：説明 */}
            <div className="flex flex-1 flex-col gap-3 p-6">
              {/* 事業名 */}
              <h3 className="font-semibold text-gray-900 text-xl md:text-2xl">
                {item.title}
              </h3>

              {/* 事業名の英語表記 */}
              <p className="text-primary text-sm font-medium uppercase tracking-wide md:text-base">
                {item.titleEn}
              </p>

              {/* 事業内容の簡易説明(1行) */}
              <p className="flex-1 text-gray-700 text-sm leading-relaxed md:text-base">
                {item.summary}
              </p>

              {/* 事業の詳細名 */}
              <p className="text-primary text-xs font-medium md:text-sm">
                {item.details}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
