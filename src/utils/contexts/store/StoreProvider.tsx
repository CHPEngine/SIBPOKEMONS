import { FC, ReactNode, useEffect, useMemo, useState } from 'react';

import { useAuthState } from '@utils/firebase';

import type { StoreContextProps } from './StoreContext';
import { StoreContext } from './StoreContext';

interface StoreProviderProps {
  children: ReactNode;
}

export const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  const authState = useAuthState();
  const [store, setStore] = useState<StoreContextProps['store']>({
    session: {
      isLoginIn: false
    }
  });

  useEffect(() => {
    if (authState.data) {
      setStore({
        ...store,
        session: {
          isLoginIn: true
        }
      });
    }
  }, [authState.data]);

  const value = useMemo(
    () => ({
      store,
      setStore
    }),
    [store]
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};
