import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Roboto;
    font-size: 14px;
    line-height: 19px;
    color: #003566;
  }

  h1 {
    font-weight: bold;
    font-size: 25px;
    line-height: 31px;
    color: #fff
  }
`;

export default GlobalStyle;
