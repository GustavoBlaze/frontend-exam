import React, {
  useState,
  useEffect,
  useCallback,
  useContext,
  createContext,
} from 'react';

import PropTypes from 'prop-types';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(
    () => localStorage.getItem('@Witcher:authenticated') === 'true',
  );

  useEffect(() => {
    localStorage.setItem('@Witcher:authenticated', authenticated);
  }, [authenticated]);

  const doLogin = useCallback(() => setAuthenticated(true), []);
  const doLogout = useCallback(() => setAuthenticated(false), []);

  return (
    <AuthContext.Provider value={{ authenticated, doLogin, doLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
}

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

export { AuthProvider, useAuth };
