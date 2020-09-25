import React from "react"
import styled from 'styled-components';
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Quotes/Quotes.css"
import Quotesimg from "../../assets/images/quotes.png"
import Person from "../../assets/images/bii-gates.jpg"


const QuotesDiv = styled.div`
    outline:none;
`;

const SliderTextCenter = styled.h3`
    text-align:center;
    background:transparent;
    margin-right:10px;
    margin-left:10px;
    padding:60px;
    color:#fff;
    transition:.2s;
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
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows:false
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
        <div class="quotes">
            <Slider class="quotes" {...settings}>
                <QuotesDiv>
                    <SliderTextCenter>
                        <div class="container">
                            <div class="row header-users">
                                <div class="col-12">
                                    <h2>Users opinion</h2>
                                </div>
                            </div>
                            <div class="row align-items-center">
                                <div class="col-lg-8 col-md-12 col-sm-12 order-lg-1 order-md-2 order-sm-2 order-2 left-quotes-section">
                                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

                                  <p><b>Bill Gates</b></p>
                                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                  <img src={Quotesimg} alt="Quotesimg" />
                                </div>
                                <div class="col-lg-4 col-md-12 col-sm-12 order-lg-2 order-md-1 order-sm-1 order-1 right-quotes-section">
                                  <img src={Person} alt="Person" />
                                </div>
                            </div>
                        </div>
                    </SliderTextCenter>
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
        </div>
      );
    }
  }

    