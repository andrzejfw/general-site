import { createGlobalStyle } from 'styled-components';
import RexonaDot from '../../assets/images/rexona-carousel-dot.png'


const CarouselStyleRexona = createGlobalStyle`
.carousel-rexona {
    margin:0 auto 75px;
    max-width: 1000px;
    text-align: center;
  }

  .carousel-rexona h2 {
    color: #103073;
    font-weight: 700;
  }

  .carousel-rexona .slick-dots li button:before{
      font-size:10px !important;
      color:white !important;
      border: solid 2px #103073;
      border-radius: 50%;
      z-index: 9;
    }
    
    .carousel-rexona .slick-dots li.slick-active button:before{
      color: transparent !important;
      /* background: transparent !important; */
      opacity: 1 !important;
      background-image: url(${RexonaDot});
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 12px;
    }

    .slick-prev {
        left: -50px !important;
    }

    .slick-dots {
      bottom:-40px;
    }

    .carousel-rexona .slick-prev:before, .carousel-rexona .slick-next:before{
      color: #103073;
      opacity: 1 !important;
      font-size: 40px !important;
    }
    .slick-next, .slick-prev {
      @media (max-width:870px){
        display: none !important;
      }
    }
    .carousel-rexona .Carousel__SliderDiv-dxiygc{
      margin:0 10px;
      @media(max-width:992px){
        margin: 0 !important;
      }
    }
    /* .carousel-lipton .slick-prev, .carousel-lipton .slick-next{
      z-index:99;
    } */

    .carousel-rexona .slick-slider{
        margin:40px auto;
      }

    @media(max-width:1470px){
      .carousel-rexona .slick-slider{
        max-width:1100px; 
      }
    }
    
    @media(max-width:1170px){.carousel-rexona .slick-slider{max-width:768px !important;}}
  `;

  export default CarouselStyleRexona;