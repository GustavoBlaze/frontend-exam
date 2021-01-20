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
    min-height: 100vh;
    overflow-x: hidden;
  }

  #root {
    display: flex;
    align-items: stretch;
    justify-content: stretch;
    width: 100vw;

    * {
      transition: all .35s ease;
    }
  }

  html {
    font-size: 62.5%;
  }

  body, button {
    font-family: 'Roboto Condensed', sans-serif;
    -webkit-font-smoothing: antialiased !important;
  }
`;
