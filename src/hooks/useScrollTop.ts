import { useEffect } from 'react';


export function useScrollTop() {
  useEffect(() => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'auto',
      })
  }, []);

  return null;
}