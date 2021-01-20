import styled from 'styled-components';
import background from '../../assets/background.png';

const PageContainer = styled.div`
  width: 100%;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${background}) center center no-repeat;
    background-color: ${({ theme }) => theme.colors.loadingBackground};
    filter: ${({ theme }) => theme.backgroundBrightness};
  }

  > * {
    z-index: 1;
  }
`;

export default PageContainer;
