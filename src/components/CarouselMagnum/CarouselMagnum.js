import React from 'react';
import styled from 'styled-components';
import { default as SliderLipton } from 'react-slick'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MagnumIceCream from '../../assets/images/magnum-ice-cream-pdp.png';
import MagnumIceCream2 from '../../assets/images/magnum-ice-cream-pdp2.png';

const SliderDiv = styled.div`
    outline:none;
`;

const SliderTextCenter = styled.h3`
    text-align:center;
    background:white;
    /* border: solid 2px #fade4c; */
    /* border-radius:6px; */
    margin-right:10px;
    margin-left:10px;
    padding:0;
    color:#004cc2;
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
    background:linear-gradient(60deg,#fff9c7 0,#fffef9 50%,#fffef9 55%,#fff9c7 100%);
    padding: 20px;
`;

const TextSlider = styled.div`
    color:#523022;
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
        <div className="carousel-magnum">
          <h2>Other products you may like</h2>
          <SliderLipton {...settings}>
            <SliderDiv>
              <SliderTextCenter>
                <ImageSlider src={MagnumIceCream}/>
                <TextSlider>Magnum Classic Ice Cream</TextSlider>
              </SliderTextCenter>
            </SliderDiv>
            <SliderDiv>
            <SliderTextCenter>
                <ImageSlider src={MagnumIceCream2}/>
                <TextSlider>Magnum Tub Classic Ice Cream</TextSlider>
              </SliderTextCenter>
            </SliderDiv>
            <SliderDiv>
            <SliderTextCenter>
                <ImageSlider src={MagnumIceCream}/>
                <TextSlider>Magnum Mini Classic Ice Cream</TextSlider>
              </SliderTextCenter>
            </SliderDiv>
            <SliderDiv>
            <SliderTextCenter>
                <ImageSlider src={MagnumIceCream}/>
                <TextSlider>Magnum Classic Ice Cream</TextSlider>
              </SliderTextCenter>
            </SliderDiv>
          </SliderLipton>
        </div>
      );
    }
  }
