import React from 'react';
import styled from 'styled-components';
import { default as SliderCif } from 'react-slick'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderDiv = styled.div`
    outline:none;
`;

const SliderTextCenter = styled.h3`
    text-align:center;
    background:white;
    margin-right:10px;
    margin-left:10px;
    padding:0;
    color:#165648;
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
    color:#165648;
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
        <div className="carousel-cif">
          <h2>Other products you may like</h2>
          <SliderCif {...settings}>
            <SliderDiv>
              <SliderTextCenter>
                <ImageSlider src="https://media.estorecontent.com/packshots/packshot/image/36/14/1f/36141f85222bdfd0.png"/>
                <TextSlider>Domestos Power 5+ Active Blue Water Ocean WC-värskendaja 53 g</TextSlider>
              </SliderTextCenter>
            </SliderDiv>
            <SliderDiv>
            <SliderTextCenter>
                <ImageSlider src="https://media.estorecontent.com/packshots/packshot/image/36/14/1f/36141f85222bdfd0.png"/>
                <TextSlider>Domestos Power 5+ Active Blue Water Ocean WC-värskendaja 53 g</TextSlider>
              </SliderTextCenter>
            </SliderDiv>
            <SliderDiv>
            <SliderTextCenter>
                <ImageSlider src="https://media.estorecontent.com/packshots/packshot/image/36/14/1f/36141f85222bdfd0.png"/>
                <TextSlider>Domestos Power 5+ Active Blue Water Ocean WC-värskendaja 53 g</TextSlider>
              </SliderTextCenter>
            </SliderDiv>
            <SliderDiv>
            <SliderTextCenter>
                <ImageSlider src="https://media.estorecontent.com/packshots/packshot/image/36/14/1f/36141f85222bdfd0.png"/>
                <TextSlider>Domestos Power 5+ Active Blue Water Ocean WC-värskendaja 53 g</TextSlider>
              </SliderTextCenter>
            </SliderDiv>
          </SliderCif>
        </div>
      );
    }
  }
