import { createContext, Dispatch, SetStateAction } from 'react';

export type Store = {
  session: {
    isLoginIn: boolean;
  };
};

export interface StoreContextProps {
  store: Store;
  setStore: Dispatch<SetStateAction<Store>>;
}

export const INITIAL_STORE: Store = {
  session: {
    isLoginIn: false
  }
};

export const StoreContext = createContext<StoreContextProps>({
  store: INITIAL_STORE,
  setStore: () => {}
});
