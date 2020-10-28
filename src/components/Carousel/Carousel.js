import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const SliderDiv = styled.div`
    outline:none;
`;

const SliderTextCenter = styled.h3`
    text-align:center;
    background:white;
    opacity: 0.8;
    border-radius:14px;
    margin-right:10px;
    margin-left:10px;
    padding:60px;
    color:#004cc2;
    transition:.2s;
    &:hover{
      box-shadow: 0px 0px 30px -12px rgba(0,0,0,0.75);
      transform: scale(1.05);
    }
    @media(max-width:992px){
      margin:0 10px 0 10px!important;
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
        slidesToShow: 4,
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
        <div className="carousel">
          <Slider {...settings}>
            <SliderDiv>
              <SliderTextCenter>Slider 1</SliderTextCenter>
            </SliderDiv>
            <SliderDiv>
              <SliderTextCenter>Slider 2</SliderTextCenter>
            </SliderDiv>
            <SliderDiv>
              <SliderTextCenter>Slider 3</SliderTextCenter>
            </SliderDiv>
            <SliderDiv>
              <SliderTextCenter>Slider 4</SliderTextCenter>
            </SliderDiv>
            <SliderDiv>
              <SliderTextCenter>Slider 5</SliderTextCenter>
            </SliderDiv>
            <SliderDiv>
              <SliderTextCenter>Slider 6</SliderTextCenter>
            </SliderDiv>
          </Slider>
        </div>
      );
    }
  }
