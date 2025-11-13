/**
 * フェードインテキストコンポーネント
 * 
 * このコンポーネントは、テキストを1文字ずつ順番にフェードインさせる
 * アニメーション効果を提供します。
 * 
 * 主な機能：
 * - 要素が画面内に入った時にアニメーションを開始
 * - テキストを1文字ずつ分割して、順番にフェードイン
 * - 各文字に遅延を設定して、流れるようなアニメーションを実現
 * 
 * 仕様：
 * - IntersectionObserverを使用して要素の表示を検出
 * - アニメーションは1回のみ実行（再実行されない）
 * - 各文字のアニメーション遅延は0.2秒ずつ
 * 
 * @param children - アニメーションを適用するテキスト
 * @param className - 追加のCSSクラス名（オプション）
 */
'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface FadeInTextProps {
  children: React.ReactNode;
  className?: string;
}

export const FadeInText: React.FC<FadeInTextProps> = ({ children, className = '' }) => {
  // IntersectionObserverを使用して要素が画面内に入ったかを検出
  const [elementRef, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });
  
  // アニメーションが既に実行されたかを管理（1回のみ実行するため）
  const [animated, setAnimated] = useState<boolean>(false);

  /**
   * テキストを1文字ずつ分割してアニメーションを適用する処理
   * 要素が画面内に入り、まだアニメーションが実行されていない場合に実行
   */
  useEffect(() => {
    const element = (elementRef as React.MutableRefObject<HTMLElement | null>).current;
    if (isIntersecting && !animated && element) {
      const text = element.textContent || '';
      if (!text) return;
      
      // 既存の内容をクリア
      element.textContent = '';
      element.innerHTML = '';
      
      // テキストを1文字ずつ分割して、各文字をspan要素でラップ
      const fragment = document.createDocumentFragment();
      for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.className = 'char'; // CSSアニメーション用のクラス
        span.style.animationDelay = `${i * 0.2}s`; // 各文字に0.2秒ずつ遅延を設定
        span.textContent = text[i];
        fragment.appendChild(span);
      }

      element.appendChild(fragment);
      element.style.visibility = 'visible';
      setAnimated(true); // アニメーション実行済みフラグを立てる
    }
  }, [isIntersecting, animated, elementRef]);

  return (
    <span
      ref={(el) => {
        // elementRefに要素を設定
        (elementRef as React.MutableRefObject<HTMLElement | null>).current = el;
      }}
      className={`fade-in-text ${className}`}
    >
      {!animated && children}
    </span>
  );
};
