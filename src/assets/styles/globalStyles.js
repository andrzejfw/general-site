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
    bottom:-47px !important;
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
    @media(max-width:992px){
      margin: 0 !important;
    }
  }
  @media(max-width:1470px){.slick-slider{max-width:1100px; margin:auto;}}
  @media(max-width:1170px){.slick-slider{max-width:768px !important; margin:auto;}}

  //end slick slider
  // tabs
  .react-tabs__tab--selected{
    background:red !important;
    border:3px solid #fff;
    border-radius:5px !important;
  }
  .react-tabs{
    max-width:600px;
    margin:auto;
    background:#005EEF;
    border-radius:5px;
    margin-top:20px;
  }
  .react-tabs__tab{
    padding:10px 20px !important;
    border-radius:10px;
  }
  .react-tabs__tab-list{
    border-bottom:none !important;
    text-align:center;
  }
  .react-tabs__tab{
    color:#fff;
    font-weight:bold;
  }
  #react-tabs-0{
    background:orange !important;
    margin-right:10px;
  }
  #react-tabs-2{
    background:#c21916 !important;
    margin-right:10px;
  }
  #react-tabs-4{
    background:pink !important;
    margin-right:10px;
  }
  #react-tabs-6{
    background:green !important;
  }
  // end tabs
`;

export default GlobalStyle;