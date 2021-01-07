import { createGlobalStyle } from 'styled-components';

const CarouselStyleCif = createGlobalStyle`
.carousel-cif {
    margin:50px auto 75px;
    max-width: 1000px;
    text-align: center;
  }

  .carousel-cif h2 {
    color: #165648;
    font-weight: 700;
  }

  .carousel-cif .slick-dots li button:before{
      font-size:10px !important;
      color: white !important;
      border: solid 2px #165648;
      border-radius: 50%;
      z-index: 9;
    }
    
    .carousel-cif .slick-dots li.slick-active button:before{
      color: #165648 !important;
      background: #165648 !important;
      opacity: 1 !important;
    }

    .slick-prev {
        left: -50px !important;
    }

    .carousel-cif .slick-prev:before, .carousel-cif .slick-next:before{
      color: #165648;
      opacity: 1 !important;
      font-size: 40px !important;
    }
    .carousel-cif .Carousel__SliderDiv-dxiygc{
      margin:0 10px;
      @media(max-width:992px){
        margin: 0 !important;
      }
    }

    .carousel-cif .slick-slider{
        margin:40px auto;
      }

    @media(max-width:1470px){
      .carousel-cif .slick-slider{
        max-width:1100px; 
      }
    }
    
    @media(max-width:1170px){.carousel-cif .slick-slider{max-width:768px !important;}}

    .slick-next, .slick-prev {
    @media (max-width:870px){
      display: none !important;
    }
  }
  `;

  export default CarouselStyleCif;