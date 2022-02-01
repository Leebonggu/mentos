import { MOBILE_BREAKPOINT } from '@/constants';
import { useEffect, useState } from 'react';

export const useMobileMode = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < MOBILE_BREAKPOINT);

  const getScreenSizeIsMobile = () => {
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
  };

  useEffect(() => {
    window.addEventListener('resize', getScreenSizeIsMobile);
    return () => window.removeEventListener('resize', getScreenSizeIsMobile);
  }, [window.innerWidth]);

  return isMobile;
}
