import { createGlobalStyle } from 'styled-components';
import CifRedShape from '../../assets/images/cif-red-shape.png'
import CifRedShapeNext from '../../assets/images/cif-red-shape-right.png'
import CifRedShapeBefore from '../../assets/images/cif-red-shape-left.png'

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
      /* font-size:10px !important;
      color: white !important;
      border: solid 2px #ed1c24; */
      border-radius: 50%;
      z-index: 9;
      content: url(${CifRedShape});
      transform: scale(.5);
    }
    
    .carousel-cif .slick-dots li.slick-active button:before{
      /* color: #ed1c24 !important;
      background: #ed1c24 !important; */
      opacity: 1 !important;
    }

    .slick-prev {
      left: -50px !important;
    }

    .carousel-cif .slick-next:before{
      /* color: #ed1c24; */
      opacity: 1 !important;
      font-size: 40px !important;
      content: url(${CifRedShapeNext});
    }

    .carousel-cif .slick-prev:before{
      /* color: #ed1c24; */
      opacity: 1 !important;
      font-size: 40px !important;
      content: url(${CifRedShapeBefore});
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