import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body, *{
  font-family:UnileverShilling;
}

  html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    // padding: 80px 65px 0;
    font-family: 'Calibri';
    //background: blueviolet;
    background-image: url("https://www.unilever.pl/resources/7.16.54/images/phoenix/careers-swimlane-bg.png") !important;
  }
  button {
    padding: 0;
    cursor: pointer;
    font-family: 'Calibri';
  }
  p {
    font-size: 16px;
  }
  ul {
    padding: 0;
    margin: 0;
  }
`;


export default GlobalStyle;