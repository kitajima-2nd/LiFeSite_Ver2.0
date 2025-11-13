/**
 * ホームページコンポーネント
 * 
 * このコンポーネントは、トップページのメインコンテンツを表示します。
 * 
 * 主な機能：
 * - スライドショーの表示
 * - スクロールに応じたセクションのフェードイン/フェードアウト
 * - 各セクション（Information、Service、Company、Contact、News）の表示
 * 
 * アーキテクチャ：
 * - データは src/data/homePageData.ts から取得
 * - スクロール処理は src/hooks/useSectionScroll.ts で管理
 * - フッター高さは src/hooks/useFooterHeight.ts で取得
 * - 各セクションは個別のコンポーネントに分離
 */
'use client';

import { useState, useRef } from 'react';
import { SlideShow } from '../components/SlideShow/SlideShow';
import { InfoSection } from '../components/InfoSection/InfoSection';
import { NewsSection } from '../components/NewsSection/NewsSection';
import { SectionContainer } from '../components/SectionContainer/SectionContainer';
import { ServiceSection } from '../components/HomeSections/ServiceSection';
import { CompanySection } from '../components/HomeSections/CompanySection';
import { ContactSection } from '../components/HomeSections/ContactSection';
import { useSectionScroll } from '../hooks/useSectionScroll';
import { useFooterHeight } from '../hooks/useFooterHeight';
import { useSlideShowVisibility } from '../hooks/useSlideShowVisibility';
import {
  slides,
  infoItems,
  newsItems,
  serviceItems,
  companyDetails,
  businessContents,
} from '../data/homePageData';

export default function HomePage() {
  // お問い合わせフォームのデータを管理
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // セクションマーカーの参照配列（スクロール位置検出用）
  // 各セクションの位置を検出するために使用される非表示のマーカー要素
  const sectionMarkersRef = useRef<(HTMLDivElement | null)[]>([]);

  // SlideShowの表示状態を取得
  const isSlideShowVisible = useSlideShowVisibility();

  // スクロール処理とセクション表示制御
  const { sectionOpacities, fixedContainerRef } = useSectionScroll(
    sectionMarkersRef,
    isSlideShowVisible
  );

  // フッターの高さを取得（セクションとフッターの重なりを防ぐため）
  const footerHeight = useFooterHeight();

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
      {/* スライドショー（トップページのヒーローセクション） */}
      <SlideShow slides={slides} />

      {/* セクションマーカー（スクロール検出用、非表示） */}
      {/* 
        各セクションの位置を検出するために使用されるマーカー要素。
        実際には表示されず、スクロール位置の計算にのみ使用されます。
      */}
      <main className="flex flex-col">
        {[0, 1, 2, 3, 4].map((index) => (
          <div
            key={index}
            ref={(el) => {
              sectionMarkersRef.current[index] = el;
            }}
            className="min-h-screen"
            aria-hidden="true"
          />
        ))}
      </main>

      {/* 固定ビューコンテナ（全セクションを同じ位置に配置） */}
      {/* 
        このコンテナは固定位置（fixed）で表示され、すべてのセクションを
        同じ位置に重ねて配置します。透明度を制御することで、1つのセクションのみを表示します。
      */}
      <div
        ref={fixedContainerRef}
        className="pointer-events-none fixed top-20 left-0 right-0 z-10"
        style={{
          pointerEvents: 'none',
          bottom: `${footerHeight}px`, // フッターの高さに応じて位置を調整
        }}
      >
        {/* Information Section（ご案内） */}
        <SectionContainer opacity={sectionOpacities[0]}>
          <div className="flex items-center justify-center py-24">
            <InfoSection title="Information" subtitle="ご案内" items={infoItems} />
          </div>
        </SectionContainer>

        {/* Service Section（サービスのご案内） */}
        <SectionContainer opacity={sectionOpacities[1]}>
          <ServiceSection serviceItems={serviceItems} />
        </SectionContainer>

        {/* Company Section（会社概要） */}
        <SectionContainer opacity={sectionOpacities[2]}>
          <CompanySection
            companyDetails={companyDetails}
            businessContents={businessContents}
          />
        </SectionContainer>

        {/* Contact Section（お問い合わせ） */}
        <SectionContainer opacity={sectionOpacities[3]}>
          <ContactSection
            formData={formData}
            onFormChange={handleChange}
            onFormSubmit={handleSubmit}
          />
        </SectionContainer>

        {/* News Section（お知らせ） */}
        {/* 
          お知らせセクションは、フッターとの重なりを防ぐため、
          他のセクションより上（top: 35%）に配置されています。
        */}
        <SectionContainer opacity={sectionOpacities[4]} top="35%">
          <div className="flex items-center justify-center py-20">
            <NewsSection title="What's New" subtitle="お知らせ" newsItems={newsItems} />
          </div>
        </SectionContainer>
      </div>
    </>
  );
}
