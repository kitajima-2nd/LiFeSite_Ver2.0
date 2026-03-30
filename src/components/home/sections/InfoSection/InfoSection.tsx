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
 */
'use client';

import React from 'react';
import Image from 'next/image';
import { InfoItem } from '@/types/home';
import { TextAnimation } from '@/components/ui/TextAnimation';
import * as THREE from "three"

interface InfoSectionProps {
  items: InfoItem[];
}

const SUBTITLE = "  私たちについて .";

export const InfoSection: React.FC<InfoSectionProps> = ({ items }) => {
  return (
    <section className="relative mx-auto flex max-w-6xl flex-col gap-10 px-1 py-14 md:px-4 md:py-20">
      <header className="relative z-10">
        <h2 className="font-semibold text-gray-700 text-5xl md:text-8xl lg:text-8xl">
          <span className="inline-flex flex-wrap">
            <TextAnimation isVisible={true} stagger={0.06} delay={0.05}>
              {"What is "}
            </TextAnimation>
            <TextAnimation isVisible={true} stagger={0.06} delay={0.05 + 8 * 0.06} className="text-primary">
              {"LiFe"}
            </TextAnimation>
            <TextAnimation isVisible={true} stagger={0.06} delay={0.05 + (8 + 4) * 0.06}>
              {" ."}
            </TextAnimation>
          </span>
        </h2>
        {SUBTITLE && (
          <p className=" text-xl md:text-2xl lg:text-3xl">
            <TextAnimation isVisible={true} stagger={0.06} delay={0.05} className="text-primary">
              {SUBTITLE}
            </TextAnimation>
          </p>
        )}
      </header>

      {/* コンテンツ部分 */}
      <div className="relative z-10 p-6 md:p-10">
        <div className="container flex flex-col-reverse items-start gap-6 md:flex-row">
          <p className="text-gray-900 text-sm md:text-base lg:text-lg">
            私たちが向き合っているのは、<br />
            プロダクトやサービスそのものではなく、その先にある<br />
            <span className="text-primary font-bold text-base md:text-xl lg:text-2xl">"人の人生の選択"</span> です。<br />
            選ばれる理由も、頼られる理由も、すべては<br />
            <em className="font-bold">「人生をより良い方向へ動かすため」</em>に存在するもの。<br />
            だからこそLiFeという社名には、<br />
            <span className='text-primary font-bold text-base md:text-xl lg:text-2xl'>「人生に深く関わる存在でありたい」</span><br />
            という想いを込めています。
          </p>
        </div>
      </div>
    </section>
  );
};
