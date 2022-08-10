import React, { useContext, useCallback, useState, useRef } from 'react';
import _ from 'lodash';

import SearchBar from '../../reusable/SearchBar';
import Pagination from '../../reusable/Pagination';
import { GlobalContext } from '../../../store';
import { HANDLE_PAGE_CHANGE, HANDLE_SEARCH } from '../../../store/constants';
import CharacterListItem from '../CharacterListItem';
import { CharacterListContainer, EmptyText } from './CharacterList.styles';

const SEARCH_TEXT = 'Wpisz słowo kluczowe';
const EMPTY_TEXT = 'Brak wyników';

const CharactersList = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const [searchText, setSearchText] = useState(state.characters.search);

  const handleOnNextPageClick = useCallback(() => {
    dispatch({ type: HANDLE_PAGE_CHANGE, payload: state.characters.page + 1 });
  }, [state.characters.page, dispatch]);

  const handleOnPrevPageClick = useCallback(() => {
    dispatch({ type: HANDLE_PAGE_CHANGE, payload: state.characters.page - 1 });
  }, [state.characters.page, dispatch]);

  const search = (text: string) => {
    dispatch({ type: HANDLE_SEARCH, payload: text });
  };

  const setSearchValueDebounced = useRef(_.debounce(search, 1000));

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    setSearchValueDebounced.current(e.target.value);
  }, []);

  return (
    <div>
      <SearchBar
        value={searchText}
        onChange={handleSearch}
        placeholder={SEARCH_TEXT}
      />
      <CharacterListContainer>
        {state.characters.data.length ? (
          state.characters.data.map((character) => (
            <CharacterListItem key={character.id} character={character} />
          ))
        ) : (
          <EmptyText>{EMPTY_TEXT}</EmptyText>
        )}
      </CharacterListContainer>
      <Pagination
        meta={state.characters.meta}
        activePage={state.characters.page}
        onNextPageClick={handleOnNextPageClick}
        onPrevPageClick={handleOnPrevPageClick}
      />
    </div>
  );
};

export default CharactersList;
