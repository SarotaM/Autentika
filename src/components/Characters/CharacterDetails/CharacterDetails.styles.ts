import { device } from './../../../config/breakpoints/index';
import styled from 'styled-components';

export const ContainerCharacterDetails = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`;

export const CardContainer = styled.div`
  flex-basis: 100%;

  @media ${device.laptop} {
    flex-basis: 25%;
  }
`;

export const EpisodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
