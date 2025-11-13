/**
 * クライアントラッパーコンポーネント
 * 
 * このコンポーネントは、クライアントサイドで実行する必要がある機能を
 * 有効化するためのラッパーです。
 * 
 * 主な機能：
 * - スムーズスクロール機能の有効化
 * - サーバーサイドレンダリング（SSR）とクライアントサイドの橋渡し
 * 
 * 用途：
 * - Next.jsのApp Routerでは、クライアントサイドの機能（イベントリスナーなど）を
 *   使用する場合、'use client'ディレクティブが必要です
 * - このコンポーネントを使用することで、レイアウトコンポーネントを
 *   サーバーコンポーネントのままに保ちつつ、クライアント機能を有効化できます
 * 
 * @param children - ラップする子コンポーネント
 */
'use client';

import { ReactNode } from 'react';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

interface ClientWrapperProps {
  children: ReactNode;
}

const ClientWrapper = ({ children }: ClientWrapperProps) => {
  // スムーズスクロール機能を有効化
  useSmoothScroll();
  return <>{children}</>;
};

export default ClientWrapper;
