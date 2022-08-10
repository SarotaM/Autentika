import styled from 'styled-components';

import { device } from './../../../config/breakpoints';

export const StyledCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-basis: calc(50% - 8px);
  border: 4px solid transparent;
  border-image: linear-gradient(
    90deg,
    #ff1b69,
    #ff0,
    #2196f3,
    #9c27b0,
    #ff1b69
  );
  border-image-slice: 1;
  min-height: 450px;
  cursor: pointer;

  @media ${device.laptop} {
    flex-basis: calc(25% - 12px);
  }
`;

export const StyledCardImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const StyledCardTitle = styled.h2`
  font-size: 2em;
  text-align: center;
  width: 100%;
  padding: 8px;
`;

export const StyledCardDescription = styled.p`
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 8px;
`;
