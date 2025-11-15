/**
 * Contactセクションコンポーネント
 * 
 * お問い合わせセクションを表示します。
 * お問い合わせフォームを表示します。
 */
import React from 'react';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ContactSectionProps {
  formData: ContactFormData;
  onFormChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isVisible?: boolean; // セクションが表示されているかどうか（固定ビューで使用）
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  formData,
  onFormChange,
  onFormSubmit,
  isVisible,
}) => {
  return (
    <section id="contact" className="flex w-full flex-col items-center justify-center gap-10 py-24">
      <header className="text-center">
        <h2 className="text-3xl font-semibold text-neutral-900 md:text-4xl">
          Contact
        </h2>
        <p className="mt-3 text-sm uppercase tracking-[0.3em] text-neutral-500 md:text-base">
          お問い合わせ
        </p>
      </header>
      <div className="space-y-8 rounded-3xl border border-neutral-200/80 bg-white/95 p-8 shadow-lg shadow-primary/10 md:p-12">
        <div className="flex flex-col gap-2 rounded-2xl border border-primary/20 bg-primary/5 px-6 py-5 text-neutral-700 md:flex-row md:items-center md:justify-between">
          <p className="text-lg font-semibold text-neutral-900">株式会社LiFe</p>
          <p className="text-sm font-medium text-neutral-600">
            電話番号：03-0000-0000（平日10:00〜18:00）
          </p>
        </div>
        <form onSubmit={onFormSubmit} className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium text-neutral-700">
              お名前<span className="text-primary">*</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={onFormChange}
                required
                className="rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-base text-neutral-800 shadow-inner shadow-neutral-900/5 transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-neutral-700">
              メールアドレス<span className="text-primary">*</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={onFormChange}
                required
                className="rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-base text-neutral-800 shadow-inner shadow-neutral-900/5 transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </label>
          </div>
          <label className="flex flex-col gap-2 text-sm font-medium text-neutral-700">
            お問い合わせ詳細<span className="text-primary">*</span>
            <textarea
              name="message"
              value={formData.message}
              onChange={onFormChange}
              rows={6}
              required
              className="rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-base text-neutral-800 shadow-inner shadow-neutral-900/5 transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </label>
          <div className="flex justify-center">
            <button
              type="submit"
              className="inline-flex items-center rounded-full bg-primary px-8 py-3 text-base font-semibold text-white shadow-lg shadow-primary/40 transition hover:shadow-xl hover:shadow-primary/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
            >
              内容を確認する
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

