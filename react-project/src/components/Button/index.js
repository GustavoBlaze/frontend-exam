import styled from 'styled-components';
import { lighten } from 'polished';

const Button = styled.button`
  background: transparent;
  font-size: 1.4rem;
  line-height: 1.6rem;
  padding: 1.1rem 2.7rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => lighten('0.2', theme.colors.primary)};
    color: ${({ theme }) => lighten('0.2', theme.colors.primary)};
  }

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
    background: rgba(0, 0, 0, 0.3);
  }
`;

export default Button;
