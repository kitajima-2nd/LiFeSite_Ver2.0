/**
 * SlideShowの表示状態を監視するカスタムフック
 * 
 * このフックは、IntersectionObserverを使用してSlideShow要素が
 * 画面内に表示されているかどうかを監視します。
 * 
 * @returns {boolean} SlideShowが表示されている場合はtrue、非表示の場合はfalse
 */
import { useState, useEffect } from 'react';

export const useSlideShowVisibility = (): boolean => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    const slideShow = document.querySelector('aside');
    if (!slideShow) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // intersectionRatioが0より大きい場合、要素が画面内に表示されている
        const isVisible = entry.intersectionRatio > 0;
        setIsVisible(isVisible);
      },
      {
        threshold: [0, 0.01, 1], // 0%、1%、100%の時点でコールバックを実行
        rootMargin: '0px',
      }
    );

    observer.observe(slideShow);

    return () => {
      if (slideShow) {
        observer.unobserve(slideShow);
      }
    };
  }, []);

  return isVisible;
};

