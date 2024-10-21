import { useState } from 'react';

export const usePromise = <T>() => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);

  return {
    error,
    isError: !!error,
    setError,
    data,
    isLoading,
    setIsLoading,
    setData: (data: T) => {
      setIsLoading(false);
      setData(data);
    }
  };
};
