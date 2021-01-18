import { createGlobalStyle } from 'styled-components';
// import RexonaDot from '../../assets/images/rexona-carousel-dot.png'


const CarouselStyleKnorr = createGlobalStyle`
.carousel-knorr {
    margin:0 auto 75px;
    max-width: 1000px;
    text-align: center;
  }

  .carousel-knorr h2 {
    color: #007a33;
    font-weight: 700;
  }

  .carousel-knorr .slick-dots li button:before{
      font-size:10px !important;
      color:white !important;
      border: solid 2px #007a33;
      border-radius: 50%;
      z-index: 9;
    }
    
    .carousel-knorr .slick-dots li.slick-active button:before{
      color: transparent !important;
      background: #007a33 !important;
      opacity: 1 !important;
    }

    .slick-prev {
        left: -50px !important;
    }

    .slick-dots {
      bottom:-40px;
    }

    .carousel-knorr .slick-prev:before, .carousel-knorr .slick-next:before{
      color: #007a33;
      opacity: 1 !important;
      font-size: 40px !important;
    }
    .slick-next, .slick-prev {
      @media (max-width:870px){
        display: none !important;
      }
    }
    .carousel-knorr .Carousel__SliderDiv-dxiygc{
      margin:0 10px;
      @media(max-width:992px){
        margin: 0 !important;
      }
    }
    /* .carousel-lipton .slick-prev, .carousel-lipton .slick-next{
      z-index:99;
    } */

    .carousel-knorr .slick-slider{
        margin:40px auto;
      }

    @media(max-width:1470px){
      .carousel-knorr .slick-slider{
        max-width:1100px; 
      }
    }
    
    @media(max-width:1170px){.carousel-knorr .slick-slider{max-width:768px !important;}}
  `;

  export default CarouselStyleKnorr;