/**
 * Serviceセクションコンポーネント
 * 
 * サービスのご案内セクションを表示します。
 * 各サービスをカード形式で表示し、ホバー時にアニメーションを適用します。
 */
import React from 'react';
import Image from 'next/image';
import { InfoItem } from '../../types';

interface ServiceSectionProps {
  serviceItems: InfoItem[];
  isVisible?: boolean; // セクションが表示されているかどうか（固定ビューで使用）
}

export const ServiceSection: React.FC<ServiceSectionProps> = ({ serviceItems, isVisible }) => {
  return (
    <section id="service" className="flex w-full flex-col items-center justify-center gap-10 py-24">
      <header className="text-center">
        <h2 className="text-3xl font-semibold text-neutral-900 md:text-4xl">
          Service
        </h2>
        <p className="mt-3 text-sm uppercase tracking-[0.3em] text-neutral-500 md:text-base">
          サービスのご案内
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {serviceItems.map((item) => (
          <article
            key={item.id}
            className="group flex flex-col overflow-hidden rounded-3xl border border-neutral-200/70 bg-white/95 shadow-lg shadow-primary/10 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20"
          >
            {item.imageUrl && (
              <figure className="relative overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={640}
                  height={360}
                  className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </figure>
            )}
            <div className="flex flex-1 flex-col gap-4 p-6">
              <h3 className="text-lg font-semibold text-neutral-900">{item.title}</h3>
              <p className="text-sm leading-relaxed text-neutral-600">{item.description}</p>
              <a
                href={item.linkUrl}
                className="mt-auto inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-md shadow-primary/40 transition hover:shadow-lg hover:shadow-primary/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
              >
                お問い合わせ
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

