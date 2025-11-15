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
          <h2 className="text-9xl font-semibold md:text-9xl">
            {title}
          </h2>
          {subtitle && (
            <p className="text-white/70">
              {subtitle}
            </p>
          )}
        </header>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white/95 p-6 text-neutral-800 shadow-lg shadow-primary/20 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30"
            >
              {item.imageUrl && (
                <figure className="relative overflow-hidden rounded-xl">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={640}
                    height={360}
                    className="h-40 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </figure>
              )}
              <div className="mt-5 flex flex-1 flex-col gap-4">
                <h3 className="text-lg font-semibold text-neutral-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-600">{item.description}</p>
                {item.linkUrl && (
                  <div className="mt-auto">
                    <Link
                      href={item.linkUrl}
                      className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-md shadow-primary/40 transition hover:shadow-lg hover:shadow-primary/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                    >
                      詳しくみる
                    </Link>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
    </section>
  );
};
