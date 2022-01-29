import { MOBILE_BREAKPOINT } from '@/constants';
import { useEffect, useState } from 'react';

function useMobileMode() {
  const [isMobile, setIsMobile] = useState(false);

  const getScreenSizeIsMobile = () => {
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
  };

  useEffect(() => {
    window.addEventListener('resize', getScreenSizeIsMobile);
    return () => window.removeEventListener('resize', getScreenSizeIsMobile);
  }, [window.innerWidth]);

  return isMobile;
}

export default useMobileMode;
