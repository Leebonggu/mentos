import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
  *{ 
    box-sizing: border-box;
  }
  body {
    font-family: 'Spoqa Han Sans', 'Nanum Gothic', sans-serif;
  }
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
