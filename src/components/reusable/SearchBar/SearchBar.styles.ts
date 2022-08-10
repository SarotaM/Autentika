import styled, { keyframes } from 'styled-components';

const animate = keyframes`
  from {
    background-position-x: 0;
  }

  to {
    background-position-x: 250px;
  }
`;

export const SearchBarContainer = styled.div`
  position: relative;
  width: 250px;
`;
export const SearchBarInput = styled.input`
  width: 100%;
  background: transparent;
  color: #fff;
  border: none;
  outline: none;
  box-shadow: none;
  font-size: 1em;
  letter-spacing: 0.1em;
  padding: 10px 0 5px;

  &:valid,
  &:focus {
    & ~ span {
      color: #2196f3;
      transform: translateY(-16px);
      font-size: 0.65em;
    }

    & ~ i {
      &::before {
        left: 0;
      }
    }
  }
`;
export const SearchBarPlaceholder = styled.span`
  position: absolute;
  left: 0;
  padding: 10px 0 5px;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  pointer-events: none;
  letter-spacing: 0.1em;
  transition: 0.5s;
`;
export const SearchBarBorder = styled.i`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: #fff;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      #ff1b69,
      #ff0,
      #2196f3,
      #9c27b0,
      #ff1b69
    );
    animation: ${animate} 2s linear infinite;
    transition: 0.5s;
  }
`;
