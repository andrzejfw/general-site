import { createGlobalStyle } from 'styled-components';

const CarouselStyleDove = createGlobalStyle`
.carousel-dove {
    margin:0 auto 75px;
    max-width: 1000px;
    text-align: center;
  }

  .carousel-dove h2 {
    color: #054281;
    font-weight: 700;
  }

  .carousel-dove .slick-dots li button:before{
      font-size:10px !important;
      color: white !important;
      border: solid 2px #666;
      border-radius: 50%;
      z-index: 9;
    }
    
    .carousel-dove .slick-dots li.slick-active button:before{
      color: #f4f4f4 !important;
      background: #f4f4f4 !important;
      opacity: 1 !important;
    }

    .slick-prev {
        left: -50px !important;
    }

    .carousel-dove .slick-prev:before, .carousel-dove .slick-next:before{
      color: #666;
      opacity: 1 !important;
      font-size: 40px !important;
    }
    .carousel-dove .Carousel__SliderDiv-dxiygc{
      margin:0 10px;
      @media(max-width:992px){
        margin: 0 !important;
      }
    }
    /* .carousel-lipton .slick-prev, .carousel-lipton .slick-next{
      z-index:99;
    } */

    .carousel-dove .slick-slider{
        margin:40px auto;
      }

    @media(max-width:1470px){
      .carousel-dove .slick-slider{
        max-width:1100px; 
      }
    }
    
    @media(max-width:1170px){.carousel-dove .slick-slider{max-width:768px !important;}}
  `;

  export default CarouselStyleDove;