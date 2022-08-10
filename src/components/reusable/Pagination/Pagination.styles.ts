import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  margin-top: 24px;
  align-items: center;
`;

export const PaginationButton = styled.button`
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
  background: transparent;
  padding: 16px;
  cursor: pointer;
`;

export const PaginationInfo = styled.span`
  width: 30px;
  text-align: center;
`;
