import React from 'react';

import {
  PaginationContainer,
  PaginationButton,
  PaginationInfo,
} from './Pagination.styles';
import { IPaginationProps } from './Pagination.types';

const NEXT_TEXT = 'Następna';
const PREV_TEXT = 'Poprzednia';

const Pagination = ({
  meta,
  activePage,
  onPrevPageClick,
  onNextPageClick,
}: IPaginationProps) => {
  return (
    <PaginationContainer>
      {meta.prev && (
        <PaginationButton onClick={onPrevPageClick}>
          {PREV_TEXT}
        </PaginationButton>
      )}
      {meta.pages && (
        <PaginationInfo>
          {activePage}/{meta.pages}
        </PaginationInfo>
      )}
      {meta.next && (
        <PaginationButton onClick={onNextPageClick}>
          {NEXT_TEXT}
        </PaginationButton>
      )}
    </PaginationContainer>
  );
};

export default Pagination;
