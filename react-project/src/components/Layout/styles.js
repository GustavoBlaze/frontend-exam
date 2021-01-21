import styled from 'styled-components';

import PageContainer from '../PageContainer';

export const Container = styled(PageContainer)`
  display: flex;
  flex-direction: row;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  background: ${({ theme }) => theme.contentBackground};
`;
