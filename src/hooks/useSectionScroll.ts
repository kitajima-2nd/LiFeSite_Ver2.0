/**
 * スクロールに応じてセクションの表示を制御するカスタムフック
 * 
 * このフックは、スクロール位置に基づいて、どのセクションを表示するかを決定し、
 * フェードイン/フェードアウトのアニメーションを管理します。
 * 
 * 仕様：
 * - スクロール位置に応じて、ビューポート中央に最も近いセクションを特定
 * - 現在表示中のセクションが完全にフェードアウトしてから、次のセクションをフェードイン
 * - SlideShowが表示されている間は、すべてのセクションを非表示にする
 * 
 * @param sectionMarkersRef - 各セクションの位置を検出するためのマーカー要素の参照配列
 * @param isSlideShowVisible - SlideShowが表示されているかどうかの状態
 * @returns セクションの透明度配列、現在のセクションインデックス、固定コンテナの参照
 */
import { useState, useEffect, useRef } from 'react';

interface UseSectionScrollReturn {
  sectionOpacities: number[];
  currentSectionIndex: number | null;
  fixedContainerRef: React.RefObject<HTMLDivElement>;
}

export const useSectionScroll = (
  sectionMarkersRef: React.MutableRefObject<(HTMLDivElement | null)[]>,
  isSlideShowVisible: boolean
): UseSectionScrollReturn => {
  // セクションの透明度を管理（0: Information, 1: Service, 2: Company, 3: Contact, 4: News）
  // 各セクションの透明度は0（非表示）から1（完全表示）の間の値
  const [sectionOpacities, setSectionOpacities] = useState<number[]>([0, 0, 0, 0, 0]);
  
  // 現在表示中のセクションのインデックス（nullの場合は表示なし）
  const [currentSectionIndex, setCurrentSectionIndex] = useState<number | null>(null);
  
  // セクション切り替えのトランジション中かどうか
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // 固定ビューコンテナの参照（フッター高さに応じて位置を調整するために使用）
  const fixedContainerRef = useRef<HTMLDivElement | null>(null);
  
  // トランジション用のタイムアウトID
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // 最新の状態を参照するためのref（イベントリスナー内で最新の状態を参照するため）
  const currentSectionIndexRef = useRef<number | null>(null);
  const isTransitioningRef = useRef<boolean>(false);
  const isSlideShowVisibleRef = useRef<boolean>(true);

  // SlideShowの表示状態をrefに同期
  useEffect(() => {
    isSlideShowVisibleRef.current = isSlideShowVisible;
  }, [isSlideShowVisible]);

  // 現在のセクションインデックスをrefに同期
  useEffect(() => {
    currentSectionIndexRef.current = currentSectionIndex;
  }, [currentSectionIndex]);

  // トランジション状態をrefに同期
  useEffect(() => {
    isTransitioningRef.current = isTransitioning;
  }, [isTransitioning]);

  // スクロール量に応じてセクションの透明度を計算
  useEffect(() => {
    /**
     * 現在のビューポート中央に最も近いセクションのインデックスを計算する関数
     * 
     * 処理の流れ：
     * 1. 各セクションマーカーの位置を取得
     * 2. ビューポート中央の位置を計算
     * 3. 各マーカーとビューポート中央の距離を計算
     * 4. 最も近いマーカーのインデックスを返す
     * 
     * @returns 表示すべきセクションのインデックス、またはnull（マーカーが見つからない場合）
     */
    const calculateTargetSection = (): number | null => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const viewportCenter = scrollY + windowHeight / 2;

      // 各セクションマーカーの位置を取得
      const sectionPositions: number[] = [];
      for (let i = 0; i < sectionMarkersRef.current.length; i++) {
        const marker = sectionMarkersRef.current[i];
        if (marker) {
          const rect = marker.getBoundingClientRect();
          // マーカーの中央位置を計算（絶対位置）
          const markerCenter = rect.top + scrollY + rect.height / 2;
          sectionPositions.push(markerCenter);
        }
      }

      if (sectionPositions.length === 0) return null;

      // 現在のビューポート中央に最も近いセクションを特定
      let targetIndex = 0;
      let minDistance = Math.abs(viewportCenter - sectionPositions[0]);

      for (let i = 1; i < sectionPositions.length; i++) {
        const distance = Math.abs(viewportCenter - sectionPositions[i]);
        if (distance < minDistance) {
          minDistance = distance;
          targetIndex = i;
        }
      }

      return targetIndex;
    };

    /**
     * スクロールイベントを処理する関数
     * 
     * 処理の流れ：
     * 1. SlideShowが表示されている場合は、すべてのセクションを非表示にして終了
     * 2. トランジション中は処理をスキップ（重複処理を防ぐ）
     * 3. 表示すべきセクションを計算
     * 4. 現在のセクションと異なる場合、フェードアウト→フェードインの順で切り替え
     */
    const handleScroll = () => {
        // SlideShowが表示されている場合はすべて非表示
        if (isSlideShowVisibleRef.current) {
          const currentIndex = currentSectionIndexRef.current;
          if (currentIndex !== null) {
            setSectionOpacities((prev) => {
              const newOpacities = [...prev];
              newOpacities[currentIndex] = 0;
              return newOpacities;
            });
            setCurrentSectionIndex(null);
            setIsTransitioning(false);
          }
          return;
        }

        // トランジション中は処理をスキップ（重複処理を防ぐ）
        if (isTransitioningRef.current) {
          return;
        }

        const targetIndex = calculateTargetSection();
        if (targetIndex === null) {
          return;
        }

        const currentIndex = currentSectionIndexRef.current;

        // 現在のセクションと異なる場合のみ切り替え
        if (currentIndex !== targetIndex) {
          setIsTransitioning(true);

          // 既存のタイムアウトをクリア（連続スクロール時の重複を防ぐ）
          if (transitionTimeoutRef.current) {
            clearTimeout(transitionTimeoutRef.current);
            transitionTimeoutRef.current = null;
          }

          // 現在のセクションをフェードアウト
          if (currentIndex !== null) {
            setSectionOpacities((prev) => {
              const newOpacities = [...prev];
              newOpacities[currentIndex] = 0;
              return newOpacities;
            });

            // 0.5秒後に次のセクションをフェードイン（CSSトランジション時間に合わせる）
            transitionTimeoutRef.current = setTimeout(() => {
              // トランジション完了時に再度スクロール位置をチェック
              // （スクロールが続いている場合に備える）
              const latestTargetIndex = calculateTargetSection();
              if (latestTargetIndex !== null) {
                setSectionOpacities((prev) => {
                  const newOpacities = [...prev];
                  newOpacities[latestTargetIndex] = 1;
                  return newOpacities;
                });
                setCurrentSectionIndex(latestTargetIndex);
                setIsTransitioning(false);
              } else {
                setIsTransitioning(false);
              }
              transitionTimeoutRef.current = null;
            }, 500); // トランジション時間（0.5s）に合わせる
          } else {
            // 初回表示時は即座に表示（フェードアウト不要）
            setSectionOpacities((prev) => {
              const newOpacities = [...prev];
              newOpacities[targetIndex] = 1;
              return newOpacities;
            });
            setCurrentSectionIndex(targetIndex);
            setIsTransitioning(false);
          }
        } else {
          // セクション変更なしの場合でも、opacityが1でない場合は1に設定
          setSectionOpacities((prev) => {
            if (prev[targetIndex] !== 1) {
              const newOpacities = [...prev];
              newOpacities[targetIndex] = 1;
              return newOpacities;
            }
            return prev;
          });
        }
    };

    // 初回実行（ページ読み込み時に適切なセクションを表示）
    handleScroll();

    // スクロールイベントリスナーを追加（throttleでパフォーマンス最適化）
    // requestAnimationFrameを使用して、ブラウザの描画タイミングに合わせて処理を実行
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', handleScroll);
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
        transitionTimeoutRef.current = null;
      }
    };
  }, [isSlideShowVisible, sectionMarkersRef]);

  return {
    sectionOpacities,
    currentSectionIndex,
    fixedContainerRef,
  };
};

