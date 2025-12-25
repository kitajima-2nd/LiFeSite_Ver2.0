/**
 * ホームページコンポーネント
 * 
 * このコンポーネントは、トップページのメインコンテンツを表示します。
 * 
 * 主な機能：
 * - スライドショーの表示
 * - 各セクション（Information、Service、Company、Contact、News）の表示
 * 
 * アーキテクチャ：
 * - データは src/features/home/data/homeData.ts から取得
 * - 各セクションは個別のコンポーネントに分離
 */
'use client';

import React, { useState } from 'react';
import { TopPage } from '@/components/layout';
import { InfoSection } from '@/features/home/components/InfoSection';
import { NewsSection } from '@/components/NewsSection/NewsSection';
import { ServiceSection } from '@/components/HomeSections/ServiceSection';
import { CompanySection } from '@/components/HomeSections/CompanySection';
import { ContactSection } from '@/components/HomeSections/ContactSection';
import {
  slides,
  infoItems,
  newsItems,
  serviceItems,
  companyDetails,
  businessContents,
} from '@/features/home/data/homeData';

export default function HomePage() {
  // お問い合わせフォームのデータを管理
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  /**
   * お問い合わせフォームの送信処理
   * 現在はコンソールに出力するのみ（実際の実装ではAPIに送信）
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: 実際の送信処理を実装
  };

  /**
   * お問い合わせフォームの入力値変更処理
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      {/* トップページのヒーローセクション */}
      <TopPage slides={slides} />
      
      {/* メインコンテンツ：すべてのセクションを通常のスクロールフローで表示 */}
      <main className="flex flex-col">
        {/* Information Section（ご案内） */}
        <InfoSection items={infoItems} />

        {/* Service Section（サービスのご案内） */}
        <ServiceSection serviceItems={serviceItems} />

        {/* Company Section（会社概要） */}
        <CompanySection
          companyDetails={companyDetails}
          businessContents={businessContents}
        />

        {/* News Section（お知らせ） */}
        <NewsSection newsItems={newsItems} />

        {/* Contact Section（お問い合わせ） */}
        <ContactSection
          formData={formData}
          onFormChange={handleChange}
          onFormSubmit={handleSubmit}
        />
      </main>
    </>
  );
}
