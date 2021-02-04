import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
  }
  body {
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #E69742;
      color: #FFF;
      -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-family: 'Roboto', serif;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }
`;
