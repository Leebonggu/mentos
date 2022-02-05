import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

export const useDdayCounter = (baseline: dayjs.Dayjs) => {
  const [state, setState ] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      const now = dayjs()
      const diff = dayjs(baseline).diff(now, "millisecond", true);
      return setState(diff)
    } , 1000);
    return () => clearInterval(id);
  }, [state]);
  return state;
}

export default useDdayCounter;
