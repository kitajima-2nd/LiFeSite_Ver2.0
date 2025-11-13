/**
 * Companyセクションコンポーネント
 * 
 * 会社概要セクションを表示します。
 * 会社詳細情報とGoogleマップを表示します。
 */
import React from 'react';
import { FadeInText } from '../FadeInText/FadeInText';

interface CompanyDetail {
  label: string;
  value: string;
}

interface CompanySectionProps {
  companyDetails: CompanyDetail[];
  businessContents: string[];
}

export const CompanySection: React.FC<CompanySectionProps> = ({
  companyDetails,
  businessContents,
}) => {
  return (
    <section id="company" className="flex w-full flex-col items-center justify-center gap-10 py-24">
      <header className="text-center">
        <h2 className="text-3xl font-semibold text-neutral-900 md:text-4xl">
          <FadeInText>Company</FadeInText>
        </h2>
        <p className="mt-3 text-sm uppercase tracking-[0.3em] text-neutral-500 md:text-base">
          会社概要
        </p>
      </header>
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-4 rounded-3xl border border-neutral-200/70 bg-white/95 p-8 shadow-lg shadow-primary/10">
          <div className="mb-4">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-neutral-400">
              会社概要
            </p>
          </div>
          <dl className="space-y-4">
            {companyDetails.map((detail) => (
              <div
                key={detail.label}
                className="flex flex-col gap-2 rounded-2xl border border-neutral-200/70 bg-white px-4 py-3 md:flex-row md:items-center"
              >
                <dt className="text-sm font-semibold text-neutral-500 md:w-32">{detail.label}</dt>
                <dd className="text-base text-neutral-800 md:flex-1">{detail.value}</dd>
              </div>
            ))}
            <div className="flex flex-col gap-3 rounded-2xl border border-neutral-200/70 bg-white px-4 py-4">
              <dt className="text-sm font-semibold text-neutral-500">事業内容</dt>
              <dd>
                <ul className="grid gap-2 text-base text-neutral-800 md:grid-cols-2">
                  {businessContents.map((content) => (
                    <li key={content} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {content}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </div>
        <div className="overflow-hidden rounded-3xl border border-neutral-200/70 shadow-lg shadow-primary/10">
          <iframe
            src="https://www.google.com/maps?q=%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%93%81%E5%B7%9D%E5%8C%BA%E8%A5%BF%E4%BA%94%E5%8F%8D%E7%94%B01%E4%B8%81%E7%9B%AE28-4%20%E7%94%B0%E5%8F%A3%E3%83%93%E3%83%AB3F&output=embed"
            className="h-80 w-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="株式会社LiFe所在地地図"
          />
        </div>
      </div>
    </section>
  );
};

