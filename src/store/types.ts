import { Dispatch, ReactNode } from 'react';
import {
  ICharacter,
  IInfo,
  ISingleCharacter,
} from '../graphql/characters/types';

export interface IGlobalStateInterface {
  characters: {
    page: number;
    search: string;
    data: ICharacter[];
    meta: IInfo;
  };
  character: ISingleCharacter;
}

export type ActionType = {
  type: string;
  payload?: any;
};

export type ContextType = {
  state: IGlobalStateInterface;
  dispatch: Dispatch<ActionType>;
};

export interface IGlobalStoreProps {
  children: ReactNode;
}
