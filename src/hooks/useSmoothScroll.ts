/**
 * スムーズスクロール機能を提供するカスタムフック
 * 
 * このフックは、ページ内リンク（アンカーリンク）をクリックした時に、
 * スムーズにスクロールする機能を提供します。
 * 
 * 主な機能：
 * - #で始まるリンク（アンカーリンク）のクリックを検出
 * - ヘッダーの高さを考慮したスクロール位置の調整
 * - スムーズスクロールアニメーション
 * 
 * 仕様：
 * - href="#の場合はページトップへスクロール
 * - href="#section"の場合は該当セクションへスクロール
 * - ヘッダーの高さとマージンを考慮して、セクションがヘッダーに隠れないように調整
 */
import { useEffect } from 'react';

export const useSmoothScroll = () => {
  useEffect(() => {
    /**
     * アンカーリンクのクリックを処理する関数
     * 
     * @param e - クリックイベント
     */
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // クリックされた要素またはその親要素から、#で始まるリンクを検索
      const anchor = target.closest('a[href^="#"]');
      
      if (!anchor) return;
      
      const href = anchor.getAttribute('href');
      
      // hrefが"#"または空の場合は、ページトップへスクロール
      if (!href || href === '#') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      // リンク先の要素を取得
      const targetElement = document.querySelector(href);
      if (targetElement) {
        e.preventDefault();
        
        // ヘッダーの高さを取得（スクロール位置の調整に使用）
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 0;
        const headerMargin = header ? parseInt(window.getComputedStyle(header).marginTop) : 0;
        const totalHeaderHeight = headerHeight + headerMargin;
        
        // ターゲット要素の位置を計算し、ヘッダーの高さを考慮して調整
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - totalHeaderHeight;

        // スムーズスクロールを実行
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
};
