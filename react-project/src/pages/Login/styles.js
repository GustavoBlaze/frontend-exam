import styled from 'styled-components';
import { lighten } from 'polished';
import PageContainer from '../../components/PageContainer';
import LogoWithTheme from '../../components/LogoWithTheme';

export const Container = styled(PageContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Logo = styled(LogoWithTheme)`
  width: 90%;
  max-width: 274px;
  margin-bottom: 51px;
`;

export const Button = styled.button`
  background: transparent;
  font-size: 1.4rem;
  line-height: 1.6rem;
  padding: 1.1rem 2.7rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => lighten('0.2', theme.colors.primary)};
    color: ${({ theme }) => lighten('0.2', theme.colors.primary)};
  }
`;
