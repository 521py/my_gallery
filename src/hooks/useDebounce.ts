/* eslint-disable import/prefer-default-export */
import { useEffect, useState } from 'react';

export const useDebounce = (value: string, ms = 900) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, ms);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [ms, value]);

  return debouncedValue;
};
