import styled, { css } from 'styled-components';

import LogoWithTheme from '../LogoWithTheme';
import Button from '../Button';

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
`;

export const Option = styled(Button)`
  width: 65%;
  max-width: 254px;

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
