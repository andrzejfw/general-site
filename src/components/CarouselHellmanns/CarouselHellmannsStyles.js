import { createGlobalStyle } from 'styled-components';

const CarouselStyleHellmanns = createGlobalStyle`
.carousel-hellmanns {
    margin:50px auto 75px;
    max-width: 1000px;
    text-align: center;
  }

  .carousel-hellmanns h2 {
    color: #06154b;
    font-weight: 700;
  }

  .carousel-hellmanns .slick-dots li button:before{
      font-size:10px !important;
      color: white !important;
      border: solid 2px #06154b;
      border-radius: 50%;
      z-index: 9;
    }
    
    .carousel-hellmanns .slick-dots li.slick-active button:before{
      color: #06154b !important;
      background: #06154b !important;
      opacity: 1 !important;
    }

    .slick-prev {
        left: -50px !important;
    }

    .carousel-hellmanns .slick-prev:before, .carousel-hellmanns .slick-next:before{
      color: #06154b;
      opacity: 1 !important;
      font-size: 40px !important;
    }
    .carousel-hellmanns .Carousel__SliderDiv-dxiygc{
      margin:0 10px;
      @media(max-width:992px){
        margin: 0 !important;
      }
    }
    /* .carousel-lipton .slick-prev, .carousel-lipton .slick-next{
      z-index:99;
    } */

    .carousel-hellmanns .slick-slider{
        margin:40px auto;
      }

    @media(max-width:1470px){
      .carousel-hellmanns .slick-slider{
        max-width:1100px; 
      }
    }
    
    @media(max-width:1170px){.carousel-hellmanns .slick-slider{max-width:768px !important;}}
  `;

  export default CarouselStyleHellmanns;