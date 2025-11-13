'use client';

import { ReactNode } from 'react';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

interface ClientWrapperProps {
  children: ReactNode;
}

const ClientWrapper = ({ children }: ClientWrapperProps) => {
  useSmoothScroll();
  return <>{children}</>;
};

export default ClientWrapper;
