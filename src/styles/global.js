import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif !important;
  }

  body {
    background-color: #FFF;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, textarea {
    font-family: 'Roboto', sans-serif !important;
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
  }
`;
