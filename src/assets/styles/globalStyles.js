import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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
    font-family: 'Montserrat';
  }
  button {
    padding: 0;
    cursor: pointer;
    font-family: 'Montserrat';
  }
  p {
    font-size: 16px;
  }
  ul {
    padding: 0;
    margin: 0;
  }
  // SLick slider style
  .slick-dots li button:before{
    font-size:30px !important;
  }
  .slick-dots{
    bottom:-45px !important;
  }
  .slick-dots li.slick-active button:before{
    color: red !important;
  }
  .slick-prev:before, .slick-next:before{
    color:red;
    font-size:30px !important;
  }
  .Carousel__SliderDiv-dxiygc{
    margin:0 10px;
  }
`;

export default GlobalStyle;