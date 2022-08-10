import React from 'react';

import { ISearchBarProps } from './SearchBar.types';
import {
  SearchBarContainer,
  SearchBarBorder,
  SearchBarInput,
  SearchBarPlaceholder,
} from './SearchBar.styles';

const SearchBar = ({ value, onChange, placeholder }: ISearchBarProps) => {
  return (
    <SearchBarContainer>
      <SearchBarInput
        type={'text'}
        value={value}
        onChange={onChange}
        required={true}
      />
      {placeholder && (
        <SearchBarPlaceholder>{placeholder}</SearchBarPlaceholder>
      )}
      <SearchBarBorder />
    </SearchBarContainer>
  );
};

export default SearchBar;
