import React, { createContext, useReducer } from 'react';
import Reducer from './reducer';
import { ContextType, IGlobalStateInterface, IGlobalStoreProps } from './types';

export function GlobalStore({ children }: IGlobalStoreProps) {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
export const GlobalContext = createContext({} as ContextType);

export const initialState: IGlobalStateInterface = {
  characters: {
    page: 1,
    search: '',
    data: [],
    meta: {
      count: 0,
      pages: 0,
      next: null,
      prev: null,
    },
  },
  character: {
    image: '',
    location: {
      name: '',
    },
    name: '',
    gender: '',
    episode: [],
    species: '',
    status: '',
  },
};
