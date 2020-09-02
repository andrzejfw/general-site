import { createGlobalStyle } from 'styled-components';

const CarouselStyle = createGlobalStyle`
.slick-dots li button:before{
    font-size:30px !important;
    color: white !important;
    opacity: 0.6 !important;
  }
  
  .slick-dots{
    top:118% !important;
  }
  .slick-dots li.slick-active button:before{
    color: white !important;
    opacity: 1 !important;
  }
  .slick-prev:before, .slick-next:before{
    color: white;
    opacity: 1 !important;
    font-size: 40px !important;
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
  `;

  export default CarouselStyle;