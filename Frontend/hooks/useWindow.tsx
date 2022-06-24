import { useEffect, useState } from 'react';

export const useWindow = () => {
  const [width, setWidth] = useState<number>(0);

  const isMobile = width <= 767;
  const isTablet = width <= 960 && width > 767;
  const isDesktop = width > 960;

  // eslint-disable-next-line space-before-function-paren
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return { isMobile, isTablet, isDesktop };
};
