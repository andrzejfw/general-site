import React from 'react';
import styled from 'styled-components';
import { default as SliderKnorr } from 'react-slick'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderDiv = styled.div`
    outline:none;
    background: rgb(0 122 51 / 10%);
    width: 90% !important;
`;

const SliderTextCenter = styled.h3`
    text-align:center;
    background: transparent;
    margin-right:10px;
    margin-left:10px;
    padding:0;
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
    color:#000;
    font-size: 1.2rem;
    margin-bottom: 20px;
    min-height: 50px;

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
        <div className="carousel-knorr">
          <h2>Other products you may like</h2>
          <SliderKnorr {...settings}>
            <SliderDiv>
              <SliderTextCenter>
                <ImageSlider src="https://asset-americas.unileversolutions.com/content/dam/unilever/knorr_world/global/other_foods/all/knorr_us_homestylestock_chicken-792329.png.ulenscale.400x400.png"/>
                <TextSlider>Dove Shower</TextSlider>
              </SliderTextCenter>
            </SliderDiv>
            <SliderDiv>
            <SliderTextCenter>
                <ImageSlider src="https://asset-americas.unileversolutions.com/content/dam/unilever/knorr_world/global/other_foods/all/knorr-sabor-soup-stars-796815.png.ulenscale.400x400.png"/>
                <TextSlider>Dove shower gel for men</TextSlider>
              </SliderTextCenter>
            </SliderDiv>
            <SliderDiv>
            <SliderTextCenter>
                <ImageSlider src="https://asset-americas.unileversolutions.com/content/dam/unilever/knorr_world/united_states_of_america/pack_shot/048001004979-1128418-png.png.ulenscale.400x400.png"/>
                <TextSlider>Dove shower gel</TextSlider>
              </SliderTextCenter>
            </SliderDiv>
            <SliderDiv>
            <SliderTextCenter>
                <ImageSlider src="https://asset-americas.unileversolutions.com/content/dam/unilever/knorr_world/global/other_foods/all/knorr_us_sauces_garlicherb-792353.png.ulenscale.400x400.png"/>
                <TextSlider>Dove soap bar</TextSlider>
              </SliderTextCenter>
            </SliderDiv>
          </SliderKnorr>
        </div>
      );
    }
  }
