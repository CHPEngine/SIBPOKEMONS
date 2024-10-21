import { Store, StoreContext } from './StoreContext';
import { useContext } from 'react';

export const useStore = () => {
  const { setStore, ...storeContext } = useContext(StoreContext);

  return {
    setStore: (data: Partial<Store>) => setStore({ ...storeContext.store, ...data }),
    ...storeContext.store
  };
};
