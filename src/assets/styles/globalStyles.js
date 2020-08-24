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
  @media(max-width:850px){.slick-slider{max-width:450px !important; margin:auto;}}


  //end slick slider
  // tabs
  .react-tabs__tab--selected{
    background:red !important;
    border:3px solid #fff;
    border-radius:20px !important;
  }
  .react-tabs__tab-panel--selected{
    display:flex;
    align-items:center;
    justify-content:center;
  }
  .react-tabs__tab-panel--selected img{
    max-width:110px;
  }
  .react-tabs{
    max-width:600px;
    min-height:200px;
    margin:auto;
    background:#005EEF;
    border-radius:14px;
    margin-top:20px;
    padding:15px;
  }
  .react-tabs__tab{
    padding:15px 25px !important;
    border-radius:10px;
    transform: scale(1.1);
  }
  .react-tabs__tab-list{
    border-bottom:0px !important;
    text-align:center;
    @media(max-width:768px){
      display:flex;
      flex-direction:column;
    }
  }
  .react-tabs__tab{
    color:#fff;
    font-weight:bold;
    transition:.4s;
      &:hover{
        transform: scale(1.1);
      }
  }
  #react-tabs-0{
    background:orange !important;
    margin-right:15px;
    @media(max-width:768px){
     margin-left:15px;
     margin-top:10px;
    }
  }
  #react-tabs-2{
    background:#c21916 !important;
    margin-right:15px;
    @media(max-width:768px){
      margin-left:15px;
      margin-top:10px;
     }
  }
  #react-tabs-4{
    background:pink !important;
    margin-right:15px;
    @media(max-width:768px){
      margin-left:15px;
      margin-top:10px;
     }
  }
  #react-tabs-6{
    background:green !important;
    @media(max-width:768px){
      margin-left:15px;
      margin-right:15px;
      margin-top:10px;
     }
  }
  // end tabs
`;

export default GlobalStyle;