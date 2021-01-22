import styled, { css, keyframes } from 'styled-components';

import LogoWithTheme from '../LogoWithTheme';
import Button from '../Button';
import DefaultOverlay from '../DefaultOverlay';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 420px;
  min-width: 320px;
  width: 30%;

  padding: 8rem 2.5rem;
  align-items: center;

  border-right: 1px solid ${({ theme }) => theme.colors.primary};
`;

export const Logo = styled(LogoWithTheme)`
  width: 70%;
  max-width: 274px;
  margin-bottom: 40px;
  animation: ${fadeIn} 1.5s ease backwards;
`;

export const Option = styled(Button)`
  width: 65%;
  max-width: 254px;
  animation: ${fadeIn} 2s ease backwards;
  animation-delay: 0.5s;

  &:not(:first-of-type) {
    margin-top: 1.6rem;
  }

  ${(props) =>
    !props.selected &&
    css`
      &:not(:hover) {
        border: 1px solid transparent;
        color: ${({ theme }) => theme.colors.text};
      }

      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    `}
`;

export const Overlay = styled(DefaultOverlay)`
  ${(props) =>
    !props.show &&
    css`
      opacity: 0;
      pointer-events: none;
      visibility: hidden;
    `}
`;
