import { IInfo } from '../../../graphql/characters/types';

interface IPaginationOwnProps {
  meta: IInfo;
  activePage: number;
  onPrevPageClick: () => void;
  onNextPageClick: () => void;
}

export type IPaginationProps = IPaginationOwnProps;
