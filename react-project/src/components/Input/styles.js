import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;

  label {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.4rem;
    line-height: 1.6rem;
    position: absolute;
    bottom: 0.8rem;
    left: 0;
  }

  input {
    width: 100%;
    background: none;
    border: 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
    padding: 0.2rem 0 0.8rem 0;
    font-size: 1.4rem;
    line-height: 1.6rem;
  }

  ${(props) =>
    (props.isFocused || props.isFilled) &&
    css`
      label {
        bottom: 2.7rem;
        font-size: 1.1rem;
        line-height: 1.3rem;
      }
    `}
`;
