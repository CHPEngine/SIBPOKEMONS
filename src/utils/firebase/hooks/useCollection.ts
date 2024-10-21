import { onSnapshot, Query } from 'firebase/firestore';

import { usePromise } from '../../hooks/usePromise';
import { useEffect } from 'react';

export const useCollection = <T>(query: Query<T>) => {
  const { data, setData, isLoading, isError, setError, error } = usePromise<T[]>();

  useEffect(() => {
    const unsub = onSnapshot(
      query,
      (querySnapshot) => {
        const data: T[] = [];
        querySnapshot.forEach((doc) => {
          data.push(doc.data());
        });

        setData(data);
      },
      (error) => setError(error.message)
    );

    return () => unsub();
  }, []);

  return { data, isLoading, isError, error };
};
