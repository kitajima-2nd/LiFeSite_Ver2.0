/**
 * Informationセクションコンポーネント
 * 
 * このコンポーネントは、「ご案内」などの情報セクションを表示します。
 * 
 * 主な機能：
 * - タイトルとサブタイトルの表示
 * - 情報アイテムをカード形式で表示
 * - 各カードに画像、タイトル、説明、リンクを表示
 * - ホバー時のアニメーション効果
 * 
 * @param title - セクションのタイトル
 * @param subtitle - セクションのサブタイトル（オプション）
 * @param items - 表示する情報アイテムの配列
 */
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { InfoItem } from '../../types';
import { TextAnimation } from '../animation/TextAnimation';

interface InfoSectionProps {
  title: string;
  subtitle?: string;
  items: InfoItem[];
  isVisible?: boolean; // セクションが表示されているかどうか（固定ビューで使用）
}

export const InfoSection: React.FC<InfoSectionProps> = ({ title, subtitle, items, isVisible }) => {
  return (
    <section className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-14 md:px-10 md:py-20">
        <header className="">
          <h2 className="text-9xl font-semibold text-gray-200 md:text-9xl ">
            <TextAnimation isVisible={isVisible} stagger={0.06} delay={0.05}>
              {title}
            </TextAnimation>
          </h2>
            {subtitle && (
              <p className="text-white/70">
                <TextAnimation isVisible={isVisible} stagger={0.06} delay={0.05}>
                  {subtitle}
                </TextAnimation>
              </p>
          )}
        </header>

        <div className="container flex flex-col-reverse items-start gap-6 md:flex-row">
          <div className="flex-1 text-neutral-200" dangerouslySetInnerHTML={{ __html: items[0].description }} />
          <div className="w-full md:w-[300px] lg:w-[336px] shrink-0">
            <Image
              src={items[0].imageUrl}
              alt={items[0].title}
              width={960}
              height={540}
              className="h-auto w-full rounded-xl object-cover"
              sizes="(min-width: 1024px) 336px, (min-width: 768px) 300px, 100vw"
              priority
            />
          </div>
        </div>
    </section>
  );
};
