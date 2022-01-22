import { useState, useEffect } from 'react';

export function useSticky(postion: number): boolean {
  const [isSticky, setIsSticky] = useState<boolean>(false);

  const getScrollPosition = () => {
    setIsSticky(window.scrollY > postion)
  }

  useEffect(() => {
    window.addEventListener('scroll', getScrollPosition)
    return () => window.removeEventListener('scroll', getScrollPosition);
  }, [window.screenY]);

  return isSticky;
}