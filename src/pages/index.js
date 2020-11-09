import React from "react"
import styled from 'styled-components'
// import { graphql, useStaticQuery } from "gatsby"
// import Slider from "../components/Carousel/Carousel"
import ButtonRadius from "../components/Button"
import Tabs from "../components/TabBrand/TabBrand"
// import Popup from "../components/Popup/Popup"
// import RichText from "../components/RichText/RichText"
// import Example from "../components/Modal/Modal"
// import Quotes from "../components/Quotes/Quotes"
// import Accordion from '../components/Accordion/Accordion'
// import CustomerChat from "../components/Messenger/Messenger"
import SEO from '../components/Seo/Seo'
import Hero from "../assets/images/World-farmer-logo-scene1.jpg"
import Image from '../assets/images/world-sustainability-hands-scene.jpg'
import { Link } from "gatsby"


const Section = styled.section`
    /* width:100%; */
    /* max-width:1200px; */
    margin:auto;
`;

const HeroSection = styled.div`
  position: relative;
  @media(max-width:992px){
        margin-bottom: 70px;
    }
`;

const HeroImage = styled.img`
  width:100%;
  height: auto;
  margin: 0 auto;
  object-fit:cover;
  object-position: 0 55%;
  height: 400px;

    @media(max-width:992px){
        height: 200px;
    }

    @media(min-width:1400px){
        height: 500px;
    }
`;

const ButtonSection = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translateX(-50%);
  font-size: .8rem;
  @media(max-width:992px){
    font-size: .6rem;
    top: 46%;
    width: 90vw;
    }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Heading = styled.h1`
  text-align: center;
  color: #1f36c7;
  margin: 40px 20px 20px;
  font-weight: bold;
`;

const IndexPage = () => {
  
  return (
   <>
   <SEO title="Unilever Eesti" description=""/>
    <Section>    
      <HeroSection>
        <HeroImage src={Hero}></HeroImage>
        <ButtonSection>
          <ButtonRadius><Link to="/about">Ettevõttest</Link></ButtonRadius>
        </ButtonSection>
      </HeroSection>      
      <div className="divAnchor" id="meie-kaubamargid"></div>
      {/* Heading: Our brands */}
      <Heading>Meie kaubamärgid</Heading>
      <Tabs></Tabs>
      {/* below hero image as placeholder for animated chart */}
      <HeroImage src={Image}></HeroImage>



      {/* <Slider></Slider> */}
      {/* <ButtonRadius></ButtonRadius> */}
      {/* <RichText></RichText>
      <Example></Example>
      <Quotes></Quotes>
      <Popup></Popup> */}
      {/* <CustomerChat></CustomerChat> */}
    </Section>
    </>
  )
}
export default IndexPage
