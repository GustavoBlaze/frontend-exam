import styled, { keyframes } from 'styled-components';

import PageContainer from '../PageContainer';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled(PageContainer)`
  display: flex;
  flex-direction: row;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  animation: ${fadeIn} 2s ease backwards;
  animation-delay: 0.5s;

  background: ${({ theme }) => theme.contentBackground};
`;
