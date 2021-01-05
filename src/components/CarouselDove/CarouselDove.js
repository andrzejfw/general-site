import React from 'react';
import styled from 'styled-components';
import { default as SliderDove } from 'react-slick'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderDiv = styled.div`
    outline:none;
`;

const SliderTextCenter = styled.h3`
    text-align:center;
    background: transparent;
    margin-right:10px;
    margin-left:10px;
    padding:0;
    color:#666;
    transition:.2s;
    position:relative;
    &:hover{
      /* box-shadow: 0px 0px 30px -12px rgba(0,0,0,0.75); */
      /* transform: scale(1.05); */
    }
    @media(max-width:992px){
      margin:0 10px 0 10px!important;
    }
`;

const ImageSlider = styled.img`
    border-radius:6px;
    width: 100%;
    padding: 20px;
`;

const TextSlider = styled.div`
    color:#666;
    font-size: 1.5rem;
    margin-top: 10px;
    margin-bottom: 20px;

    @media(max-width:992px){
        margin-bottom: 15px;
    }
`;

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }


 export default class extends React.Component{
    render() {
    const  settings = {
        dots: true,
        infinite: true,
        arrows:true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows:true
              }
            },
            {
              breakpoint: 520,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows:false
              }
            },
          ]
      };
      return (
        <div className="carousel-dove">
          <h2>Other products you may like</h2>
          <SliderDove {...settings}>
            <SliderDiv>
              <SliderTextCenter>
                <ImageSlider src="https://media.estorecontent.com/cache/fb/73/fb73a2a42f71cdf427b0de4311ff833b.png"/>
                <TextSlider>Dove Shower</TextSlider>
              </SliderTextCenter>
            </SliderDiv>
            <SliderDiv>
            <SliderTextCenter>
                <ImageSlider src="https://media.estorecontent.com/cache/57/60/5760bc2f51183bffa52cf619531dd351.png"/>
                <TextSlider>Dove shower gel for men</TextSlider>
              </SliderTextCenter>
            </SliderDiv>
            <SliderDiv>
            <SliderTextCenter>
                <ImageSlider src="https://media.estorecontent.com/cache/d7/53/d753abf36f99fcdf77eadc8b3d794b2f.png"/>
                <TextSlider>Dove shower gel</TextSlider>
              </SliderTextCenter>
            </SliderDiv>
            <SliderDiv>
            <SliderTextCenter>
                <ImageSlider src="https://media.estorecontent.com/cache/39/21/39217c6c1da0c1ecf0142dccadaab6cb.png"/>
                <TextSlider>Dove soap bar</TextSlider>
              </SliderTextCenter>
            </SliderDiv>
          </SliderDove>
        </div>
      );
    }
  }
