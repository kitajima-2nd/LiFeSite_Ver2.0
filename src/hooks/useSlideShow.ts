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
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideCount);
    }, interval);

    return () => clearInterval(timer);
  }, [slideCount, interval, autoPlay]);

  const goToSlide = (index: number) => {
    if (index >= 0 && index < slideCount) {
      setCurrentIndex(index);
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slideCount);
  };

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
