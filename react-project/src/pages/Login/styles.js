import styled from 'styled-components';

import PageContainer from '../../components/PageContainer';
import LogoWithTheme from '../../components/LogoWithTheme';
import Input from '../../components/Input';
import Button from '../../components/Button';

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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 275px;
  align-items: stretch;
`;

export const EmailInput = styled(Input)`
  margin-bottom: 2.4rem;
`;

export const PasswordInput = styled(Input)`
  margin-bottom: 5.1rem;
`;

export const SubmitButton = styled(Button)`
  align-self: center;
`;
