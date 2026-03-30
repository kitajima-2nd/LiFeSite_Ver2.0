/**
 * Contactセクションコンポーネント
 *
 * お問い合わせセクションを表示します。
 * お問い合わせフォームを表示します。
 */
'use client';

import React from 'react';
import { TextAnimation } from '@/components/ui/TextAnimation';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ContactSectionProps {
  formData: ContactFormData;
  onFormChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  formData,
  onFormChange,
  onFormSubmit,
}) => {
  return (
    <section id="contact" className="relative mx-auto flex max-w-6xl flex-col gap-6 overflow-x-hidden px-4 py-8 md:px-10 md:py-12">
      <header className="">
        <h2 className="font-semibold text-gray-700 text-5xl md:text-8xl lg:text-8xl">
          <TextAnimation isVisible={true} stagger={0.06} delay={0.05}>
            Contact.
          </TextAnimation>
        </h2>
        <p className="text-primary text-xl md:text-2xl lg:text-3xl">
          <TextAnimation isVisible={true} stagger={0.06} delay={0.05}>
            お問い合わせ
          </TextAnimation>
        </p>
      </header>

      {/* コンテンツ部分 */}
      <div className="w-full">
        {/* 会社情報テーブル */}
        <div className="mb-4 w-full overflow-x-auto">
          <table className="w-full table-fixed">
            <tbody>
              <tr className="border-b border-gray-600">
                <td className="w-24 py-3 text-gray-900 text-sm md:w-32 md:text-base">会社名</td>
                <td className="break-words py-3 text-gray-900 text-sm md:text-base">株式会社LiFe</td>
              </tr>
              <tr className="border-b border-gray-600">
                <td className="w-24 py-3 text-gray-900 text-sm md:w-32 md:text-base">電話番号</td>
                <td className="break-words py-3 text-gray-900 text-sm md:text-base">03-6820-7062（平日10:00〜18:00）</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* お問い合わせフォーム */}
        <form onSubmit={onFormSubmit} className="w-full space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-gray-200">
              <span className="text-gray-900 text-sm md:text-base">
                お名前<span className="text-primary">*</span>
              </span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={onFormChange}
                required
                className="rounded-lg border border-gray-600 bg-transparent px-4 py-2 text-gray-200 placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="お名前を入力してください"
              />
            </label>
            <label className="flex flex-col gap-2 text-gray-200">
              <span className="text-gray-900 text-sm md:text-base">
                メールアドレス<span className="text-primary">*</span>
              </span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={onFormChange}
                required
                className="rounded-lg border border-gray-600 bg-transparent px-4 py-2 text-gray-200 placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="メールアドレスを入力してください"
              />
            </label>
          </div>
          <label className="flex flex-col gap-2 text-gray-200">
            <span className="text-gray-900 text-sm md:text-base">
              お問い合わせ詳細<span className="text-primary">*</span>
            </span>
            <textarea
              name="message"
              value={formData.message}
              onChange={onFormChange}
              rows={4}
              required
              className="rounded-lg border border-gray-600 bg-transparent px-4 py-2 text-gray-200 placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              placeholder="お問い合わせ内容を入力してください"
            />
          </label>
          <div className="flex justify-center">
            <button
              type="submit"
              className="inline-flex items-center rounded-lg bg-primary px-8 py-2.5 text-base font-semibold text-white transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/70"
            >
              内容を確認する
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
