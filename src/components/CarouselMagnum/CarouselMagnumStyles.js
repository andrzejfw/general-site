import { createGlobalStyle } from 'styled-components';

const CarouselStyleMagnum = createGlobalStyle`
.carousel-magnum {
    margin:50px auto 75px;
    max-width: 1000px;
  }

  .carousel-magnum h2 {
    color: #523022;
    text-align: center;
    font-weight: 700;
  }

  .carousel-magnum .slick-dots li button:before{
      font-size:10px !important;
      color: white !important;
      border: solid 2px #523022;
      border-radius: 50%;
      z-index: 9;
    }
    
    .carousel-magnum .slick-dots li.slick-active button:before{
      color: #523022 !important;
      background: #523022 !important;
      opacity: 1 !important;
    }

    .slick-prev {
        left: -50px !important;
    }

    .carousel-magnum .slick-prev:before, .carousel-magnum .slick-next:before{
      color: #523022;
      opacity: 1 !important;
      font-size: 40px !important;
    }
    .carousel-magnum .Carousel__SliderDiv-dxiygc{
      margin:0 10px;
      @media(max-width:992px){
        margin: 0 !important;
      }
    }
    /* .carousel-lipton .slick-prev, .carousel-lipton .slick-next{
      z-index:99;
    } */

    .carousel-magnum .slick-slider{
        margin:40px auto;
      }

    @media(max-width:1470px){
      .carousel-magnum .slick-slider{
        max-width:1100px; 
      }
    }
    
    @media(max-width:1170px){.carousel-magnum .slick-slider{max-width:768px !important;}}
  `;

  export default CarouselStyleMagnum;