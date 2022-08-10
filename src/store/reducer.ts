import { initialState } from './index';
import { ActionType, IGlobalStateInterface } from './types';
import * as CONST from './constants';

const Reducer = (
  state: IGlobalStateInterface,
  action: ActionType
): IGlobalStateInterface => {
  switch (action.type) {
    case CONST.HANDLE_PAGE_CHANGE:
      return {
        ...state,
        characters: {
          ...state.characters,
          page: action.payload,
        },
      };
    case CONST.HANDLE_SEARCH:
      return {
        ...state,
        characters: {
          ...state.characters,
          search: action.payload,
          page: 1,
        },
      };
    case CONST.SET_CHARACTERS:
      return {
        ...state,
        characters: {
          ...state.characters,
          data: action.payload.results,
          meta: action.payload.info,
        },
      };
    case CONST.SET_CHARACTER:
      return {
        ...state,
        character: action.payload,
      };
    case CONST.RESET_CHARACTERS:
      return {
        ...state,
        characters: initialState.characters,
      };
    default:
      return state;
  }
};

export default Reducer;
