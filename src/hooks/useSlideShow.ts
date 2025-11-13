/**
 * スライドショー制御用カスタムフック
 * 
 * このフックは、スライドショーの自動再生と手動制御を提供します。
 * 
 * 主な機能：
 * - 指定された間隔でスライドを自動的に切り替え
 * - 特定のスライドへ移動
 * - 次のスライド/前のスライドへ移動
 * - 自動再生の有効/無効を制御
 * 
 * @param slideCount - スライドの総数
 * @param interval - スライドの切り替え間隔（ミリ秒、デフォルト: 4000ms）
 * @param autoPlay - 自動再生を有効にするかどうか（デフォルト: true）
 * @returns 現在のスライドインデックスと制御関数
 */
import { useState, useEffect } from 'react';

interface UseSlideShowOptions {
  slideCount: number;
  interval?: number;
  autoPlay?: boolean;
}

export const useSlideShow = ({
  slideCount,
  interval = 4000,
  autoPlay = true,
}: UseSlideShowOptions) => {
  // 現在表示中のスライドのインデックス（0から始まる）
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  /**
   * 自動再生の処理
   * 指定された間隔でスライドを自動的に切り替えます
   */
  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      // 次のスライドへ移動（最後のスライドの場合は最初に戻る）
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideCount);
    }, interval);

    return () => clearInterval(timer);
  }, [slideCount, interval, autoPlay]);

  /**
   * 指定されたインデックスのスライドへ移動する関数
   * 
   * @param index - 移動先のスライドインデックス
   */
  const goToSlide = (index: number) => {
    if (index >= 0 && index < slideCount) {
      setCurrentIndex(index);
    }
  };

  /**
   * 次のスライドへ移動する関数
   * 最後のスライドの場合は最初に戻ります
   */
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slideCount);
  };

  /**
   * 前のスライドへ移動する関数
   * 最初のスライドの場合は最後に移動します
   */
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slideCount) % slideCount);
  };

  return {
    currentIndex,
    goToSlide,
    nextSlide,
    prevSlide,
  };
};
