import React, { useMemo } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import { AuthProvider } from '../hooks/useAuth';
import usePersistedTheme from '../hooks/usePersistedTheme';
import { dark, light } from '../styles/themes';

import ContextProvider from './contextProvider';

const AppProvider = ({ children }) => {
  const [theme] = usePersistedTheme('dark');

  const currentTheme = useMemo(() => (theme === 'dark' ? dark : light), [
    theme,
  ]);

  const providers = useMemo(
    () => [
      <AuthProvider />,
      <ThemeProvider theme={currentTheme} />,
      <BrowserRouter />,
    ],
    [currentTheme],
  );

  return (
    <ContextProvider contextProviders={providers}>{children}</ContextProvider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default AppProvider;
