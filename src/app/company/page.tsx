import { FadeInText } from '../../components/FadeInText/FadeInText';

const companyDetails = [
  { label: '会社名', value: '株式会社LiFe' },
  { label: '所在地', value: '東京都品川区西五反田1丁目28-4 田口ビル3F' },
  { label: '設立', value: '2025年3月1日' },
  { label: '代表取締役', value: '本間 昇吾' },
  { label: '電話番号', value: '03-0000-0000' },
];

const businessContents = ['HP制作', 'SNS運用サポート', '動画作成', '営業代行'];

export default function CompanyPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <section className="flex flex-col gap-10">
        <header className="text-center">
          <h2 className="text-3xl font-semibold text-neutral-900 md:text-4xl">
            <FadeInText>Company</FadeInText>
          </h2>
          <p className="mt-3 text-sm uppercase tracking-[0.3em] text-neutral-500 md:text-base">
            会社概要
          </p>
        </header>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)]">
          <div className="space-y-4 rounded-3xl border border-neutral-200/70 bg-white/95 p-8 shadow-lg shadow-primary/10">
            <div className="mb-4">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-neutral-400">
                Profile
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
    </main>
  );
}
