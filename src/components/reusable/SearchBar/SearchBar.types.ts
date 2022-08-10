import React from 'react';

export interface ISearchBarOwnProps {
  value: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type ISearchBarProps = ISearchBarOwnProps;
