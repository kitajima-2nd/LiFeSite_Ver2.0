/**
 * お知らせセクションコンポーネント
 * 
 * このコンポーネントは、「お知らせ」セクションを表示します。
 * 
 * 主な機能：
 * - タイトルとサブタイトルの表示
 * - お知らせアイテムをリスト形式で表示
 * - 日付、カテゴリ、内容を表示
 * - カテゴリに応じたバッジの色分け（重要、サービス、その他）
 * 
 * @param title - セクションのタイトル
 * @param subtitle - セクションのサブタイトル（オプション）
 * @param newsItems - 表示するお知らせアイテムの配列
 */
import React from 'react';
import { NewsItem } from '../../types';

interface NewsSectionProps {
  title: string;
  subtitle?: string;
  newsItems: NewsItem[];
  isVisible?: boolean; // セクションが表示されているかどうか（固定ビューで使用）
}

/**
 * お知らせアイテムのカテゴリに応じたバッジのCSSクラスを取得する関数
 * 
 * @param item - お知らせアイテム
 * @returns バッジに適用するCSSクラス名
 */
const getBadgeClasses = (item: NewsItem) => {
  // 重要なお知らせは赤色
  if (item.isImportant) {
    return 'bg-red-500/90 text-white';
  }
  // サービスカテゴリはプライマリカラー
  if (item.category === 'サービス') {
    return 'bg-primary text-white';
  }
  // その他はグレー
  return 'bg-neutral-200 text-neutral-700';
};

export const NewsSection: React.FC<NewsSectionProps> = ({ title, subtitle, newsItems, isVisible }) => {
  return (
    <section className="mx-auto mt-24 max-w-5xl px-6 md:px-0">
      <header className="text-center">
        <h2 className="text-3xl font-semibold text-neutral-900 md:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 text-sm uppercase tracking-[0.3em] text-neutral-500 md:text-base">
            {subtitle}
          </p>
        )}
      </header>

      <div className="mt-12 overflow-hidden rounded-3xl border border-neutral-200/80 bg-white/95 shadow-lg shadow-primary/10">
        <dl className="divide-y divide-neutral-200/70">
          {newsItems.map((item, index) => (
            <div
              key={`${item.date}-${index}`}
              className="grid gap-4 px-6 py-5 text-sm text-neutral-700 md:grid-cols-[8rem,1fr] md:items-center md:gap-8 md:px-10 md:py-6"
            >
              <dt className="flex flex-col gap-2 md:items-start">
                <span className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                  {item.date}
                </span>
                <span
                  className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold ${getBadgeClasses(
                    item
                  )}`}
                >
                  {item.category}
                </span>
              </dt>
              <dd className="text-base text-neutral-700 md:text-lg">{item.content}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
