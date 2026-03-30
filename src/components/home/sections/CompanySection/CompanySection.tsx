/**
 * Companyセクションコンポーネント
 *
 * 会社概要セクションを表示します。
 * 会社詳細情報とGoogleマップを表示します。
 */
'use client';

import React from 'react';
import { TextAnimation } from '@/components/ui/TextAnimation';

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
  // 所在地の住所を取得
  const address = companyDetails.find((detail) => detail.label === '所在地')?.value || '';
  // GoogleMapのURLを生成
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  return (
    <section id="company" className="relative mx-auto flex max-w-6xl flex-col gap-2 overflow-x-hidden px-1 py-14 md:px-10 md:py-20">
      <header className="">
        <h2 className="font-semibold text-gray-700 text-5xl md:text-8xl lg:text-8xl">
          <TextAnimation isVisible={true} stagger={0.06} delay={0.05}>
            Company.
          </TextAnimation>
        </h2>
        <p className="text-primary text-xl md:text-2xl lg:text-3xl">
          <TextAnimation isVisible={true} stagger={0.06} delay={0.05}>
            会社概要
          </TextAnimation>
        </p>
      </header>

      {/* コンテンツ部分 */}
      <div className="flex w-full flex-col gap-4 md:flex-row md:gap-12">
        {/* テーブル部分 */}
        <div className="w-full overflow-x-auto md:w-1/2">
          <table className="w-full table-fixed">
            <tbody>
              {companyDetails.map((detail) => (
                <tr key={detail.label} className="border-b border-gray-600">
                  <td className="w-24 py-4 text-gray-900 text-sm md:w-32 md:text-base ">{detail.label}</td>
                  <td className="break-words py-4 text-gray-900 text-sm md:text-base ">{detail.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* GoogleMap部分 */}
        <div className="w-full md:w-1/2">
          <div className="h-60 w-full overflow-hidden md:h-80">
            <iframe
              src={mapUrl}
              className="h-full w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="株式会社LiFe所在地地図"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
