/**
 * お知らせセクションコンポーネント
 * 
 * このコンポーネントは、「お知らせ」セクションを表示します。
 * 
 * 主な機能：
 * - タイトルとサブタイトルの表示
 * - お知らせアイテムをリスト形式で表示
 * - 日付、カテゴリ、内容を表示
 * 
 * @param title - セクションのタイトル
 * @param subtitle - セクションのサブタイトル（オプション）
 * @param newsItems - 表示するお知らせアイテムの配列
 */
'use client';

import React from 'react';
import Image from 'next/image';
import { NewsItem } from '@/types/home';
import { TextAnimation } from '@/components/ui/TextAnimation';

interface NewsSectionProps {
  newsItems: NewsItem[];
  isVisible?: boolean; // セクションが表示されているかどうか（固定ビューで使用）
}

export const NewsSection: React.FC<NewsSectionProps> = ({ newsItems, isVisible }) => {
  const title = "What's New";
  const subtitle = "お知らせ";
  return (
    <section id="news" className="relative mx-auto flex max-w-6xl flex-col gap-4 overflow-x-hidden px-4 py-7 md:px-10 md:py-20">
      <header className="mt-16 md:mt-24">
        <h2 className="font-semibold text-gray-700 text-5xl md:text-8xl lg:text-8xl">
          <TextAnimation isVisible={isVisible} stagger={0.06} delay={0.05}>
            {title}
          </TextAnimation>
        </h2>
        {subtitle && (
          <p className="text-primary text-xl md:text-2xl lg:text-3xl">
            <TextAnimation isVisible={isVisible} stagger={0.06} delay={0.05}>
              {subtitle}
            </TextAnimation>
          </p>
        )}
      </header>

      {/* コンテンツ部分 */}
      <div className="w-full">
        <div className="w-full overflow-x-auto">
          <table className="w-full table-fixed">
            <tbody>
              {newsItems.map((item, index) => (
                <tr key={`${item.date}-${index}`} className="border-b border-gray-600">
                  <td className="w-24 py-4 text-gray-900 text-sm md:w-32 md:text-base">
                    <div className="flex flex-col gap-1">
                      <span>{item.date}</span>
                      <span className="text-primary text-xs">{item.category}</span>
                      {item.url && (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 inline-block w-fit rounded border border-primary px-2 py-1 text-xs text-primary transition hover:bg-primary hover:text-white"
                        >
                          詳細
                        </a>
                      )}
                    </div>
                  </td>
                  <td className="break-words py-4 text-gray-900 text-sm md:text-base">{item.content}</td>
                  {item.imageUrl && (
                    <td className="w-16 py-4 md:w-20">
                      <div className="relative h-12 w-12 overflow-hidden rounded md:h-16 md:w-16">
                        <Image
                          src={item.imageUrl}
                          alt={item.content}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 48px, 64px"
                        />
                      </div>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
