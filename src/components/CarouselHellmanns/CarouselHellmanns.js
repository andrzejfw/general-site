import React from 'react';
import styled from 'styled-components';
import { default as SliderHellmanns } from 'react-slick'; 
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
    color:#004976;
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
    color:#004976;
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
        <div className="carousel-hellmanns">
          <h2>Other products you may like</h2>
          <SliderHellmanns {...settings}>
            <SliderDiv>
              <SliderTextCenter>
                <ImageSlider src="https://media.estorecontent.com/cache/e1/5d/e15d5773dfcb0071edd017cc3c2aa836.png"/>
                <TextSlider>Majonees super extra 10kg</TextSlider>
              </SliderTextCenter>
            </SliderDiv>
            <SliderDiv>
            <SliderTextCenter>
                <ImageSlider src="https://media.estorecontent.com/cache/9c/c1/9cc12b545162bb9880eaf07313ee17f4.png"/>
                <TextSlider>Ketšup more red than tomatoes 3kg</TextSlider>
              </SliderTextCenter>
            </SliderDiv>
            <SliderDiv>
            <SliderTextCenter>
                <ImageSlider src="https://media.estorecontent.com/cache/c0/d2/c0d2c830019d025df547558327e75283.png"/>
                <TextSlider>Kastmed the best ever made 200g</TextSlider>
              </SliderTextCenter>
            </SliderDiv>
            <SliderDiv>
            <SliderTextCenter>
                <ImageSlider src="https://media.estorecontent.com/cache/49/78/497854acb797aa49c0ac99c165436f61.png"/>
                <TextSlider>Garlic Sauce which you won't be able to stop eating 1kg</TextSlider>
              </SliderTextCenter>
            </SliderDiv>
          </SliderHellmanns>
        </div>
      );
    }
  }
