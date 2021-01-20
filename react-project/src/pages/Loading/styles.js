import styled, { keyframes } from 'styled-components';

// eslint-disable-next-line no-unused-vars
const turnIntoRed = (props) => keyframes`
  from {
    fill: ${props.theme.colors.loadingIconEmpty};
  } to {
    fill: ${props.theme.colors.red};
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  background: ${({ theme }) => theme.colors.loadingBackground};

  svg {
    height: 6.5rem;

    path {
      fill: ${({ theme }) => theme.colors.loadingIconEmpty};
      animation: ${turnIntoRed} 0.35s ease both;

      &:nth-child(3) {
        animation-delay: 0.6s;
      }

      &:nth-child(1) {
        animation-delay: 1.2s;
      }

      &:nth-child(2) {
        animation-delay: 1.8s;
      }
    }
  }
`;
