import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html,
  body,
  #root {
    min-height: 100%;
    overflow-x: hidden;
  }

  html {
    font-size: 62.5%;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Roboto Condensed', sans-serif;
  }
`;
