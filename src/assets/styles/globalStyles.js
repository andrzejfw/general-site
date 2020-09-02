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
  .slick-slider {
    z-index:1;
  }
  .slick-dots li button:before{
    font-size:14px !important;
  }
  .slick-dots{
    bottom:-47px !important;
  }
  .slick-dots li.slick-active button:before{
    color: red !important;
  }
  .slick-prev:before, .slick-next:before{
    color:red;
    font-size: 30px !important;
  }
  .Carousel__SliderDiv-dxiygc{
    margin:0 10px;
    @media(max-width:992px){
      margin: 0 !important;
    }
  }
  .slick-prev, .slick-next{
    top:120% !important;
    z-index:99;
  }
  .slick-next{
    right:37% !important;
  }
  .slick-prev{
    left:37% !important;
  }
  @media(max-width:1470px){
    .slick-slider{
      max-width:1100px; margin:auto;
    }
    .slick-next{
      right:34% !important;
    }
    .slick-prev{
      left:34% !important;
    }
  }
  @media(max-width:992px){
    .slick-prev, .slick-next{
      top:128% !important;
    }
  }
  @media(max-width:850px){
    .slick-slider{
      max-width:450px !important; 
      margin:auto;
    }
    .slick-next{
      right:32% !important;
    }
    .slick-prev{
      left:32% !important;
    }
  }
  @media(max-width:650px){
    .slick-next{
      right:28% !important;
    }
    .slick-prev{
      left:28% !important;
    }
  }
  @media(max-width:1170px){.slick-slider{max-width:768px !important; margin:auto;}}
  //end slick slider
  // tabs
  .react-tabs{
    margin:auto;
    background:transparent;
    border-radius:14px;
    margin-top:40px;
    padding:15px;
    position:relative;
    width:100%;
  }
  .react-tabs__tab{
    padding:15px 25px !important;
    border-radius:50%;
    transform: scale(1.1);
    color:transparent;
    position:relative;
    font-weight:bold;
    transition:.4s;
      &:hover{
        transform: scale(1.1);
        box-shadow:0px 0px 30px -12px rgba(0,0,0,0.75);
      }
      &:after{
        position:absolute;
        content:"";
        left:0;
        top:0;
        width:100%;
        height:100%;
        background-color:rgba(0, 0, 0, 0.3);
        border-radius:50%;
      }
  }
  .react-tabs__tab--selected{
    background:red !important;
    border:3px solid #005EEF;
    &:after{
      position:absolute;
      content:"";
      left:0;
      top:0;
      width:100%;
      height:100%;
      background-color:rgba(0, 0, 0, 0) !important;
      border-radius:50%;
    }
  }
  .react-tabs__tab-panel--selected{
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:70px;
    img{
      margin-right:10px;
    }
    img{
      max-width:110px;
    }
  }
  .react-tabs__tab-list{
    border-bottom:0px !important;
    text-align:center;
    position:relative;

    @media(max-width:768px){
      display:flex;
      flex-direction:column;
    }
  }
  #react-tabs-0{
    background-image:url("https://www.unilever.com/Images/SL-Brands-990_tcm244-537766.jpg") !important;
    background-size:cover !important;
    width:150px;
    height:150px;
    margin-right:25px;
    @media(max-width:768px){
     margin-left:15px;
     margin-top:10px;
    }
  }
  #react-tabs-2{
    // background:#c21916 !important;
    background-image:url("https://www.pngitem.com/pimgs/m/421-4217857_visi-produktai-unilever-food-solutions-products-hd-png.png") !important;
    background-size:cover !important;
    width:150px;
    height:150px;
    margin-right:25px;
    @media(max-width:768px){
      margin-left:15px;
      margin-top:10px;
     }
  }
  #react-tabs-4{
    // background:pink !important;
    background-image:url("https://2.bp.blogspot.com/-7ZppMc26zLw/VOnU2s4ahWI/AAAAAAAACU8/U2yPIiOFy4s/s1600/70300_unilever.jpg") !important;
    background-size:cover !important;
    width:150px;
    height:150px;
    margin-right:25px;
    @media(max-width:768px){
      margin-left:15px;
      margin-top:10px;
     }
  }
  #react-tabs-6{
    // background:green !important;
    background-image:url("https://www.unilever.pl/Images/global-love-beauty-planet-image_tcm1346-536334_w400.jpg") !important;
    background-size:cover !important;
    width:150px;
    height:150px;
    margin-right:25px;
    @media(max-width:768px){
      margin-left:15px;
      margin-right:15px;
      margin-top:10px;
     }
  }
  #react-tabs-8{
    background-image:url("https://media.nationthailand.com/images/news/2018/02/23/30339546/800_ba5c9e2cecdcc42e888c5df325b14267.jpeg") !important;
    background-size:cover !important;
    width:150px;
    height:150px;
  }
  .react-tabs__tab-list span{
    position:absolute;
    top:-20%;
    transform: translateX(40%);
    font-weight:bold;
  }
  // end tabs
`;

export default GlobalStyle;