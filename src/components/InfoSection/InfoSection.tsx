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
        <h2 className="font-semibold text-gray-700 text-5xl md:text-8xl lg:text-8xl">
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

      {/* コンテンツ部分 */}
      <div className="p-6 md:p-10">
        <div className="container flex flex-col-reverse items-start gap-6 md:flex-row">
          <div className="flex-1 text-gray-900 text-2xl bold" dangerouslySetInnerHTML={{ __html: items[0].description }} />
        </div>
      </div>
    </section>
  );
};
