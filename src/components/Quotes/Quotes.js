import React from "react"
import styled from 'styled-components';
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Quotes/Quotes.css"


const QuotesDiv = styled.div`
    outline:none;
`;

const SliderTextCenter = styled.h3`
    text-align:center;
    background:red;
    margin-right:10px;
    margin-left:10px;
    padding:60px;
    color:#fff;
    transition:.2s;
    &:hover{
      box-shadow: 0px 0px 30px -12px rgba(0,0,0,0.75);
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
        slidesToShow: 1,
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
        <Slider class="quotes" {...settings}>
          <QuotesDiv>
            <SliderTextCenter>1</SliderTextCenter>
          </QuotesDiv>
          <QuotesDiv>
            <SliderTextCenter>2</SliderTextCenter>
          </QuotesDiv>
          <QuotesDiv>
            <SliderTextCenter>3</SliderTextCenter>
          </QuotesDiv>
          <QuotesDiv>
            <SliderTextCenter>4</SliderTextCenter>
          </QuotesDiv>
          <QuotesDiv>
            <SliderTextCenter>5</SliderTextCenter>
          </QuotesDiv>
          <QuotesDiv>
            <SliderTextCenter>6</SliderTextCenter>
          </QuotesDiv>
        </Slider>
      );
    }
  }

    