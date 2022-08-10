import React from 'react';

import { IPageContentProps } from './PageContent.types';
import { StyledContainer } from './PageContent.styles';

const PageContent = ({ children }: IPageContentProps) => (
  <StyledContainer>{children}</StyledContainer>
);

export default PageContent;
