import { useCallback, useEffect, useState } from 'react';

interface UseSectionVisibilityResult {
  sectionRef: (node: HTMLElement | null) => void;
  isVisible: boolean;
}

export const useSectionVisibility = (threshold = 0.25): UseSectionVisibilityResult => {
  const [sectionElement, setSectionElement] = useState<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useCallback((node: HTMLElement | null) => {
    setSectionElement(node);
  }, []);

  useEffect(() => {
    if (!sectionElement) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(sectionElement);
    return () => observer.disconnect();
  }, [sectionElement, threshold]);

  return { sectionRef, isVisible };
};
