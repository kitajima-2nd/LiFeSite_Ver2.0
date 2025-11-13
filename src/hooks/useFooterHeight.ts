/**
 * フッターの高さを取得・監視するカスタムフック
 * 
 * このフックは、フッターが画面内に表示されている場合に、
 * その表示されている部分の高さを動的に取得します。
 * 
 * 用途：
 * - 固定ビューコンテナのbottom位置を調整して、セクションとフッターの重なりを防ぐ
 * 
 * @returns {number} フッターが画面内に表示されている部分の高さ（px）
 *                   フッターが画面外にある場合は0を返す
 */
import { useState, useEffect } from 'react';

export const useFooterHeight = (): number => {
  const [footerHeight, setFooterHeight] = useState<number>(0);

  useEffect(() => {
    /**
     * フッターの高さを更新する関数
     * フッターが画面内に表示されている場合のみ、その高さを計算します。
     */
    const updateFooterHeight = () => {
      const footer = document.querySelector('footer');
      if (footer) {
        const rect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // フッターが画面下部に表示されている場合のみ高さを考慮
        // フッターの上端が画面の下部より上にある場合（フッターが表示されている）
        if (rect.top < windowHeight) {
          // フッターが画面内に表示されている部分の高さを計算
          const visibleFooterHeight = Math.max(0, windowHeight - rect.top);
          setFooterHeight(visibleFooterHeight);
        } else {
          // フッターが画面外にある場合は0
          setFooterHeight(0);
        }
      }
    };

    // 初回実行（少し遅延させてフッターがレンダリングされるのを待つ）
    const timeoutId = setTimeout(updateFooterHeight, 100);

    // スクロール時にも更新
    const handleScroll = () => {
      updateFooterHeight();
    };

    // リサイズ時にも更新
    window.addEventListener('resize', updateFooterHeight, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // MutationObserverでフッターの内容変更を監視
    // フッターの内容が動的に変更された場合にも高さを再計算します
    const footer = document.querySelector('footer');
    if (footer) {
      const observer = new MutationObserver(updateFooterHeight);
      observer.observe(footer, {
        childList: true, // 子要素の追加・削除を監視
        subtree: true, // 子孫要素も監視
        attributes: true, // 属性の変更を監視
        attributeFilter: ['class', 'style'], // classとstyle属性のみ監視
      });

      return () => {
        clearTimeout(timeoutId);
        window.removeEventListener('resize', updateFooterHeight);
        window.removeEventListener('scroll', handleScroll);
        observer.disconnect();
      };
    }

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', updateFooterHeight);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return footerHeight;
};

