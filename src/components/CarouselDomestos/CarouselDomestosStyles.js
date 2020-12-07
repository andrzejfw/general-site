import { createGlobalStyle } from 'styled-components';

const CarouselStyleDomestos = createGlobalStyle`
.carousel-domestos {
    margin:50px auto 75px;
    max-width: 1000px;
    text-align: center;
  }

  .carousel-domestos h2 {
    color: #06154b;
    font-weight: 700;
  }

  .carousel-domestos .slick-dots li button:before{
      font-size:10px !important;
      color: white !important;
      border: solid 2px #06154b;
      border-radius: 50%;
      z-index: 9;
    }
    
    .carousel-domestos .slick-dots li.slick-active button:before{
      color: #06154b !important;
      background: #06154b !important;
      opacity: 1 !important;
    }

    .slick-prev {
        left: -50px !important;
    }

    .carousel-domestos .slick-prev:before, .carousel-domestos .slick-next:before{
      color: #06154b;
      opacity: 1 !important;
      font-size: 40px !important;
    }
    .carousel-domestos .Carousel__SliderDiv-dxiygc{
      margin:0 10px;
      @media(max-width:992px){
        margin: 0 !important;
      }
    }
    /* .carousel-lipton .slick-prev, .carousel-lipton .slick-next{
      z-index:99;
    } */

    .carousel-domestos .slick-slider{
        margin:40px auto;
      }

    @media(max-width:1470px){
      .carousel-domestos .slick-slider{
        max-width:1100px; 
      }
    }
    
    @media(max-width:1170px){.carousel-domestos .slick-slider{max-width:768px !important;}}
  `;

  export default CarouselStyleDomestos;