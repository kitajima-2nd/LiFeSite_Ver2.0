'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { SlideShow } from '../components/SlideShow/SlideShow';
import { InfoSection } from '../components/InfoSection/InfoSection';
import { NewsSection } from '../components/NewsSection/NewsSection';
import { FadeInText } from '../components/FadeInText/FadeInText';
import { FadeInSection } from '../components/FadeInSection/FadeInSection';
import { SlideItem, InfoItem, NewsItem } from '../types';

const slides: SlideItem[] = [
  {
    id: 1,
    title: '挑戦を楽しむ。',
    description: '限界を超えて、前進。常に新しい挑戦を求め、未知の領域に挑む企業です。',
    videoUrl: '/videos/Top動画_1280x720.mov',  // 動画ファイルのパス
    linkUrl: '#service',
  },
];

const infoItems: InfoItem[] = [
  {
    id: 1,
    title: 'ここにタイトルを入れます',
    description: 'ここに説明を入れます。サンプルテキスト。',
    imageUrl: '/images/sample1.jpg',
    linkUrl: '/service',
  },
  {
    id: 2,
    title: 'ここにタイトルを入れます',
    description: 'ここに説明を入れます。サンプルテキスト。',
    imageUrl: '/images/sample1.jpg',
    linkUrl: '/service',
  },
  {
    id: 3,
    title: 'ここにタイトルを入れます',
    description:
      'ここに説明を入れます。サンプルテキスト。ここに説明を入れます。サンプルテキスト。ここに説明を入れます。サンプルテキスト。',
    imageUrl: '/images/sample1.jpg',
    linkUrl: '/service',
  },
];

const newsItems: NewsItem[] = [
  {
    date: '2024/05/19',
    category: 'その他',
    content: 'トップのスライドショーをcssスライドショーからjQuery+cssタイプに変更。',
  },
  {
    date: '2024/05/15',
    category: 'その他',
    content: '企業・ビジネス向け シンプル無料ホームページテンプレート tp_biz62公開。',
  },
  {
    date: '20XX/00/00',
    category: '重要',
    content: 'サンプルテキスト。サンプルテキスト。サンプルテキスト。',
    isImportant: true,
  },
  {
    date: '20XX/00/00',
    category: 'サービス',
    content: 'サンプルテキスト。サンプルテキスト。サンプルテキスト。',
  },
  {
    date: '20XX/00/00',
    category: 'その他',
    content: 'サンプルテキスト。サンプルテキスト。サンプルテキスト。',
  },
  {
    date: '20XX/00/00',
    category: 'その他',
    content:
      'サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。',
  },
];

const serviceItems: InfoItem[] = [
  {
    id: 1,
    title: 'HP制作',
    description: 'コーポレートサイトからLPまで、ブランドイメージに合わせたデザインとストーリーで構築します。',
    imageUrl: '/images/sample1.jpg',
    linkUrl: '/contact',
  },
  {
    id: 2,
    title: 'SNS運用サポート',
    description: 'コンテンツ企画から投稿管理・分析まで、SNS運用を総合的に伴走します。',
    imageUrl: '/images/sample1.jpg',
    linkUrl: '/contact',
  },
  {
    id: 3,
    title: '動画作成',
    description: 'プロモーション動画や採用動画など、目的に合わせた映像制作をワンストップで提供します。',
    imageUrl: '/images/sample1.jpg',
    linkUrl: '/contact',
  },
  {
    id: 4,
    title: '営業代行',
    description: 'リード獲得からアポイント獲得まで、営業活動を専門チームが代行します。',
    imageUrl: '/images/sample1.jpg',
    linkUrl: '/contact',
  },
];

const companyDetails = [
  { label: '会社名', value: '株式会社LiFe' },
  { label: '所在地', value: '東京都品川区西五反田1丁目28-4 田口ビル3F' },
  { label: '設立', value: '2025年3月1日' },
  { label: '代表取締役', value: '本間 昇吾' },
  { label: '電話番号', value: '03-0000-0000' },
];

const businessContents = ['HP制作', 'SNS運用サポート', '動画作成', '営業代行'];

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // セクションの透明度を管理（0: Information, 1: Service, 2: Company, 3: Contact, 4: News）
  const [sectionOpacities, setSectionOpacities] = useState<number[]>([0, 0, 0, 0, 0]);
  const [is30PercentVisible, setIs30PercentVisible] = useState<boolean[]>([false, false, false, false, false]);
  const [currentActiveSection, setCurrentActiveSection] = useState<number | null>(null);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [isSlideShowVisible, setIsSlideShowVisible] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const footerRef = useRef<HTMLElement | null>(null);
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // SlideShowの表示検出（完全に見えなくなったらfalse）
  useEffect(() => {
    const slideShow = document.querySelector('aside');
    if (!slideShow) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // 完全に見えなくなったらfalse
        setIsSlideShowVisible(entry.intersectionRatio > 0);
      },
      {
        threshold: [0, 0.01, 1],
        rootMargin: '0px'
      }
    );

    observer.observe(slideShow);

    return () => {
      if (slideShow) {
        observer.unobserve(slideShow);
      }
    };
  }, []);

  // フッターの表示検出
  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer) return;

    footerRef.current = footer as HTMLElement;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    observer.observe(footer);

    return () => {
      if (footer) {
        observer.unobserve(footer);
      }
    };
  }, []);

  // セクションの30%表示検出とフェードイン・フェードアウト処理
  useEffect(() => {
    // クリーンアップ関数
    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
        transitionTimeoutRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (isFooterVisible || isTransitioning) return;

    // 既存のタイムアウトをクリア
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
      transitionTimeoutRef.current = null;
    }

    // Topページ（SlideShowが表示されている）に戻った場合、すべてのセクションを非表示
    if (currentActiveSection !== null && isSlideShowVisible) {
      setIsTransitioning(true);
      
      // 現在のセクションをフェードアウト（0.3秒）
      setSectionOpacities((prev) => {
        const newOpacities = [...prev];
        newOpacities[currentActiveSection] = 0;
        return newOpacities;
      });

      // 0.3秒後にすべてのセクションを非表示
      transitionTimeoutRef.current = setTimeout(() => {
        setSectionOpacities([0, 0, 0, 0, 0]);
        setCurrentActiveSection(null);
        setIsTransitioning(false);
        transitionTimeoutRef.current = null;
      }, 300);

      return;
    }

    // SlideShowが完全に見えなくなってから、最初のセクションが30%見えたら表示
    if (!isSlideShowVisible && is30PercentVisible[0] && currentActiveSection === null) {
      setCurrentActiveSection(0);
      setSectionOpacities([1, 0, 0, 0, 0]);
      return;
    }

    // 下にスクロール：次のセクションが30%見えたら、現在のセクションをフェードアウトしてから次のセクションをフェードイン
    if (currentActiveSection !== null && currentActiveSection < is30PercentVisible.length - 1) {
      const nextIndex = currentActiveSection + 1;
      if (is30PercentVisible[nextIndex] && currentActiveSection === nextIndex - 1) {
        setIsTransitioning(true);
        
        // 現在のセクションをフェードアウト（0.3秒）
        setSectionOpacities((prev) => {
          const newOpacities = [...prev];
          newOpacities[currentActiveSection] = 0;
          return newOpacities;
        });

        // 0.3秒後に次のセクションをフェードイン
        transitionTimeoutRef.current = setTimeout(() => {
          setSectionOpacities((prev) => {
            const newOpacities = [...prev];
            newOpacities[nextIndex] = 1;
            return newOpacities;
          });
          setCurrentActiveSection(nextIndex);
          setIsTransitioning(false);
          transitionTimeoutRef.current = null;
        }, 300);

        return;
      }
    }

    // 上にスクロール：前のセクションが30%見えたら、現在のセクションをフェードアウトしてから前のセクションをフェードイン
    if (currentActiveSection !== null && currentActiveSection > 0) {
      const prevIndex = currentActiveSection - 1;
      // 現在のセクションが30%未満で、前のセクションが30%以上見えている場合
      if (!is30PercentVisible[currentActiveSection] && is30PercentVisible[prevIndex]) {
        setIsTransitioning(true);
        
        // 現在のセクションをフェードアウト（0.3秒）
        setSectionOpacities((prev) => {
          const newOpacities = [...prev];
          newOpacities[currentActiveSection] = 0;
          return newOpacities;
        });

        // 0.3秒後に前のセクションをフェードイン
        transitionTimeoutRef.current = setTimeout(() => {
          setSectionOpacities((prev) => {
            const newOpacities = [...prev];
            newOpacities[prevIndex] = 1;
            return newOpacities;
          });
          setCurrentActiveSection(prevIndex);
          setIsTransitioning(false);
          transitionTimeoutRef.current = null;
        }, 300);

        return;
      }
    }
  }, [is30PercentVisible, currentActiveSection, isFooterVisible, isSlideShowVisible, isTransitioning]);

  const handleSection30PercentChange = (index: number) => (isVisible: boolean) => {
    setIs30PercentVisible((prev) => {
      const newState = [...prev];
      newState[index] = isVisible;
      return newState;
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <SlideShow slides={slides} />
      <main className="mx-auto flex max-w-6xl flex-col px-6">
        <FadeInSection 
          opacity={sectionOpacities[0]}
          onIntersectionChange={handleSection30PercentChange(0)}
          isFixed={currentActiveSection === 0 && !isFooterVisible}
        >
          <div className="flex min-h-screen items-center justify-center py-24">
            <InfoSection title="Information" subtitle="ご案内" items={infoItems} />
          </div>
        </FadeInSection>

        <FadeInSection 
          opacity={sectionOpacities[1]}
          onIntersectionChange={handleSection30PercentChange(1)}
          isFixed={currentActiveSection === 1 && !isFooterVisible}
        >
          <section id="service" className="flex min-h-screen flex-col items-center justify-center gap-10 py-24">
          <header className="text-center">
            <h2 className="text-3xl font-semibold text-neutral-900 md:text-4xl">
              <FadeInText>Service</FadeInText>
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
        </FadeInSection>

        <FadeInSection 
          opacity={sectionOpacities[2]}
          onIntersectionChange={handleSection30PercentChange(2)}
          isFixed={currentActiveSection === 2 && !isFooterVisible}
        >
          <section id="company" className="flex min-h-screen flex-col items-center justify-center gap-10 py-24">
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
        </FadeInSection>

        <FadeInSection 
          opacity={sectionOpacities[3]}
          onIntersectionChange={handleSection30PercentChange(3)}
          isFixed={currentActiveSection === 3 && !isFooterVisible}
        >
          <section id="contact" className="flex min-h-screen flex-col items-center justify-center gap-10 py-24">
          <header className="text-center">
            <h2 className="text-3xl font-semibold text-neutral-900 md:text-4xl">
              <FadeInText>Contact</FadeInText>
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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm font-medium text-neutral-700">
                  お名前<span className="text-primary">*</span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                  onChange={handleChange}
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
        </FadeInSection>

        <FadeInSection 
          opacity={sectionOpacities[4]}
          onIntersectionChange={handleSection30PercentChange(4)}
          isFixed={currentActiveSection === 4 && !isFooterVisible}
        >
          <div className="flex min-h-screen items-center justify-center py-24">
            <NewsSection title="What's New" subtitle="お知らせ" newsItems={newsItems} />
          </div>
        </FadeInSection>
      </main>
    </>
  );
}
