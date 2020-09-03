import { createGlobalStyle } from 'styled-components';

const CarouselStyle = createGlobalStyle`
.carousel .slick-dots li button:before{
    font-size:30px !important;
    color: white !important;
    opacity: 0.6 !important;
  }
  
  .carousel .slick-dots{
    top:118% !important;
  }
  .carousel .slick-dots li.slick-active button:before{
    color: white !important;
    opacity: 1 !important;
  }
  .carousel .slick-prev:before, .carousel .slick-next:before{
    color: white;
    opacity: 1 !important;
    font-size: 40px !important;
  }
  .carousel .Carousel__SliderDiv-dxiygc{
    margin:0 10px;
    @media(max-width:992px){
      margin: 0 !important;
    }
  }
  .carousel .slick-prev, .carousel .slick-next{
    top:120% !important;
    z-index:99;
  }
  .carousel .slick-next{
    right:37% !important;
  }
  .carousel .slick-prev{
    left:37% !important;
  }
  @media(max-width:1470px){
    .carousel .slick-slider{
      max-width:1100px; margin:auto;
    }
    .carousel .slick-next{
      right:34% !important;
    }
    .carousel .slick-prev{
      left:34% !important;
    }
  }
  @media(max-width:992px){
    .carousel .slick-prev, .carousel .slick-next{
      top:128% !important;
    }
  }
  @media(max-width:850px){
    .carousel .slick-slider{
      max-width:450px !important; 
      margin:auto;
    }
    .carousel .slick-next{
      right:32% !important;
    }
    .carousel .slick-prev{
      left:32% !important;
    }
  }
  @media(max-width:650px){
    .carousel .slick-next{
      right:28% !important;
    }
    .carousel .slick-prev{
      left:28% !important;
    }
  }
  @media(max-width:1170px){.carousel .slick-slider{max-width:768px !important; margin:auto;}}
  `;

  export default CarouselStyle;