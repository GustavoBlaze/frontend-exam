import React from 'react';

import AppProvider from './context';
import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <AppProvider>
      <Routes />
      <GlobalStyle />
    </AppProvider>
  );
}

export default App;
