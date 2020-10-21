import React from 'react';
import styled from 'styled-components';
import { default as SliderLiptonRecipe } from 'react-slick'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CarouselLiptonRecipe.css';
import LiptonGreenTea from '../../assets/images/lipton-green-tea.jpg';
import ButtonRadius from '../Button';

const SliderDiv = styled.div`
    outline:none;
`;

const SliderTextCenter = styled.h3`
    text-align:center;
    background:#fade4c;
    opacity: 0.8;
    border: solid 2px #fade4c;
    border-radius:14px;
    margin-right:10px;
    margin-left:10px;
    padding:0;
    color:#004cc2;
    transition:.2s;
    position:relative;
    &:hover{
      box-shadow: 0px 0px 30px -12px rgba(0,0,0,0.75);
      /* transform: scale(1.05); */
    }
    @media(max-width:992px){
      margin:0 10px 0 10px!important;
    }
`;

const ImageSlider = styled.img`
    border-radius:14px;
    width: 80%;
    height: 120px;
    object-fit: cover;
    margin: 10% auto 5%;
`;

const TextSlider = styled.span`
    color:white;
    text-shadow: 2px 2px 10px black;
`;

const StyledButtonLipton = styled(ButtonRadius)`
    width: 80% !important;
    margin: 0 !important;
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
        <div class="carousel-lipton-recipe">
          <h2>Explore World of Tea</h2>
          <SliderLiptonRecipe {...settings}>
            <SliderDiv>
              <SliderTextCenter>
                <ImageSlider src={LiptonGreenTea}/>
                <TextSlider>Green Tea</TextSlider>
                <StyledButtonLipton></StyledButtonLipton>
              </SliderTextCenter>
            </SliderDiv>
            <SliderDiv>
            <SliderTextCenter>
                <ImageSlider src={LiptonGreenTea}/>
                <TextSlider>Green Tea</TextSlider>
                <ButtonRadius></ButtonRadius>
              </SliderTextCenter>
            </SliderDiv>
            <SliderDiv>
            <SliderTextCenter>
                <ImageSlider src={LiptonGreenTea}/>
                <TextSlider>Green Tea</TextSlider>
              </SliderTextCenter>
            </SliderDiv>
            <SliderDiv>
            <SliderTextCenter>
                <ImageSlider src={LiptonGreenTea}/>
                <TextSlider>Green Tea</TextSlider>
              </SliderTextCenter>
            </SliderDiv>
            <SliderDiv>
            <SliderTextCenter>
                <ImageSlider src={LiptonGreenTea}/>
                <TextSlider>Green Tea</TextSlider>
              </SliderTextCenter>
            </SliderDiv>
            <SliderDiv>
            <SliderTextCenter>
                <ImageSlider src={LiptonGreenTea}/>
                <TextSlider>Green Tea</TextSlider>
              </SliderTextCenter>
            </SliderDiv> 
            <SliderDiv>
            <SliderTextCenter>
                <ImageSlider src={LiptonGreenTea}/>
                <TextSlider>Green Tea</TextSlider>
              </SliderTextCenter>
            </SliderDiv>
          </SliderLiptonRecipe>
        </div>
      );
    }
  }
