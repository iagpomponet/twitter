// globalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *{
    box-sizing: border-box;
    }

  textarea {
    resize: none;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    height: 100%;
  }

  html { 
    height: 100%;
  }

  button {
    border: 0;
  }

  .flex {
    display: flex;
  }

`;

export default GlobalStyle;
