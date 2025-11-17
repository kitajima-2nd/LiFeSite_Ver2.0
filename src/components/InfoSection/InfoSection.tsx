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
        <h2 className="font-semibold text-gray-200 text-5xl md:text-8xl lg:text-8xl">
          <span className="inline-flex flex-wrap">
            <TextAnimation isVisible={isVisible} stagger={0.06} delay={0.05}>
              {"What is "}
            </TextAnimation>
            <TextAnimation isVisible={isVisible} stagger={0.06} delay={0.05 + 8 * 0.06} className="text-primary">
              {/* "What is " の8文字ぶん待って開始 */}
              {"LiFe"}
            </TextAnimation>
            <TextAnimation isVisible={isVisible} stagger={0.06} delay={0.05 + (8 + 4) * 0.06}>
              {/* 先頭+LiFeの合計12文字ぶん待って開始 */}
              {" ."}
            </TextAnimation>
          </span>
        </h2>
        {subtitle && (
          <p className=" text-xl md:text-2xl lg:text-3xl">
            <TextAnimation isVisible={isVisible} stagger={0.06} delay={0.05} className="text-primary">
              {subtitle}
            </TextAnimation>
          </p>
        )}
      </header>

      {/* h2タグ以降のコンテンツ部分（背景画像を適用） */}
      {/* <div className=" overflow-hidden rounded-2xl"> */}
        {/* 背景画像（3つの画像を横並びに段違いで配置） */}
        <div className="absolute inset-0 -z-10 flex">
          {/* image1: 上に配置 */}
          <div className=" flex-1 h-full">
            <Image
              src="/images/image1.png"
              alt="Background image 1"
              fill
              className="object-cover"
              sizes="(min-width: 1280px) 1200px,
                    (min-width: 1024px) 1024px,
                    (min-width: 768px) 768px,
                    100vw"
              priority
              quality={90}
            />
          </div>
          {/* オーバーレイ（テキストの可読性向上） */}
          <div className="absolute inset-0 bg-neutral-900/30 backdrop-blur-sm" />
        </div>

        {/* コンテンツ（前面に表示） */}
        <div className="relative z-10 p-6 md:p-10">
          <div className="container flex flex-col-reverse items-start gap-6 md:flex-row">
            <div className="flex-1 text-neutral-200 text-2xl bold" dangerouslySetInnerHTML={{ __html: items[0].description }} />
          </div>
        </div>
      {/* </div> */}
    </section>
  );
};
