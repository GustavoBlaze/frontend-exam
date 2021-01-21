import React, { useState, useCallback } from 'react';

import { useAuth } from '../../hooks/useAuth';

import {
  Container,
  Logo,
  Form,
  EmailInput,
  PasswordInput,
  SubmitButton,
} from './styles';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const { doLogin } = useAuth();

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      doLogin({ email, password });
      setLoading(false);
    },
    [doLogin, email, password],
  );

  return (
    <Container>
      <Logo />

      <Form onSubmit={handleSubmit}>
        <EmailInput
          name="email"
          title="Email"
          value={email}
          onChange={setEmail}
          type="email"
          initFocused
          isRequired
        />
        <PasswordInput
          name="password"
          title="Password"
          value={password}
          onChange={setPassword}
          type="password"
          isRequired
        />
        <SubmitButton
          disabled={loading || undefined}
          as="input"
          type="submit"
          value={loading ? 'SENDING...' : 'LOGIN'}
        />
      </Form>
    </Container>
  );
}

export default Login;
