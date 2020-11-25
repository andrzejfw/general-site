import React from "react"
import styled from 'styled-components'
import { graphql, useStaticQuery } from "gatsby"
import Slider from "../components/CarouselLipton/Carousel"
import SliderLipton from "../components/CarouselLipton/Carousel"
import SliderLiptonRecipe from "../components/CarouselLiptonRecipe/CarouselLiptonRecipe"
import Tabs from "../components/TabBrand/TabBrand"
import Popup from "../components/Popup/Popup"
import RichText from "../components/RichText/RichText"
import Example from "../components/Modal/Modal"
import Quotes from "../components/Quotes/Quotes"
import Accordion from '../components/AccordionLipton/Accordion'
import CustomerChat from "../components/Messenger/Messenger"
import Button from "../components/ButtonLipton"
import BannerWithVideoLipton from "../components/BannerWithVideoLipton/BannerWithVideoLipton"
import { Link } from "gatsby"
import SEO from '../components/Seo/Seo'
import LiptonCategories from '../components/LIptonCategories/LiptonCategories'
import LiptonCategoriesBox from "../components/LIptonCategories/LiptonCategoriesBox"
import LiptonBannerAndText from '../components/LiptonBannerAndText/LiptonBannerAndText'
import BlackTea from '../assets/images/tea-black.png';
import GreenTea from '../assets/images/tea-green.png';
import FunctionalTea from '../assets/images/tea-fruit.png';
import HeroImage from '../assets/images/lipton-hero-image.jpg';
import BackgroundImage from '../assets/images/lipton-cups.jpg'
import backgroundMobile from '../assets/images/lipton-cups-mobile.jpg'
import SustainabilityBanner from '../assets/images/world-tea-plantation-scene.jpg'



const Section = styled.section`
    width:100%;
`;

const LiptonHeroImage = styled.img`
    width: 100%;
    object-fit:cover;

    @media(max-width:992px){
        width: auto;
        height: 300px;
        object-fit: cover;
        object-position: -370px;
    }
`;

const LiptonHpParagraphSection = styled.div`
    margin: 50px auto 100px;

    h2 {
      margin: 50px 20px;
      color: #c8381d;
      text-align: center;
      font-weight: 700;

      @media(max-width:992px){
        width: 90vw;
        margin: 50px auto 20px;
      }
    }

    @media(max-width:992px){
        margin: 50px auto;
      }
`;

const SectionAccordion = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;


const IndexPage = () => {
  return (
   <>
   <SEO title="Lipton Eesti" description="Liptoni tee on populaarne terves maailmas. Tutvu lähemalt meie musta tee, rohelise tee ja erinevate teiste teede valikuga. Mõnus maitseelamus kõigile!"/>
    <Section> 
    <LiptonHeroImage src={HeroImage} alt="Lipton tee"/>     

    <LiptonCategories sectionTitle="Meie kategooriaid">
      <LiptonCategoriesBox categoryTitle="Must tee" categoryImage={BlackTea} categoryLink="/"></LiptonCategoriesBox>
      <LiptonCategoriesBox categoryTitle="Roheline tee" categoryImage={GreenTea} categoryLink="/"></LiptonCategoriesBox>
      <LiptonCategoriesBox categoryTitle="Funktsionaalne- ja taimetee" categoryImage={FunctionalTea} categoryLink="/"></LiptonCategoriesBox>
    </LiptonCategories>

    <BannerWithVideoLipton 
        title="Meie eesmärk" 
        paragraph="Liptoni eesmärk on äratada maailm kvaliteetsetele ühendustele, et võidelda varjatud üksindusega." 
        videoId="YVyLbd2UpJw" 
        background={BackgroundImage}
        backgroundMobile={backgroundMobile}
        red
        button
        videoButtonCTA="Loe rohkem"
        videoButtonLink="/purpose-lipton"
        >
    </BannerWithVideoLipton>

    <LiptonHpParagraphSection>
      <h2>Jätkusuutlikkus</h2>
      <LiptonBannerAndText 
        image={SustainabilityBanner}
        paragraphText="Liptoni eesmärk on saavutada jätkusuutlik hankimine igal aastal toodetud 19 miljardile teepakile. Tee maitseb paremini, kui see on jätkusuutlikult hangitud."
        buttonCTA="Loe rohkem"
        buttonLink="/sustainability-lipton"
        >
      </LiptonBannerAndText>
      {/* <LiptonBannerAndText 
        image={SustainabilityBanner}
        paragraphText="Liptoni eesmärk on saavutada jätkusuutlik hankimine igal aastal toodetud 19 miljardile teepakile. Tee maitseb paremini, kui see on jätkusuutlikult hangitud."
        buttonCTA="Loe rohkem"
        buttonLink="/sustainability-lipton"
        second
        >
      </LiptonBannerAndText> */}
    </LiptonHpParagraphSection>

    
    {/* <SectionAccordion>
    <Accordion>
        <div label={"cokolwiek"} isOpen>
          <p>
          <p>BIG MILK Choco Intense jest intensywnie czekoladowy i tak pyszny, że wprost nie można mu się oprzeć. 
            Jedno chrupnięcie i od razu wiesz, że czekolada rządzi smakiem! Lody o smaku śmietankowym ze świeżym mlekiem pokrywa polewa o czekoladowym smaku,
             która z każdym kęsem odkrywa przed Tobą prawdziwą przyjemność. Idealny duet smaku pysznej czekolady i śmietankowej delikatności,
              której sekret tkwi w głównym składniku BIG MILK, czyli świeżym mleku. Spróbuj i przekonaj się, jak smakuje BIG MILK Choco Intense!</p>
          </p>
          
        </div>
        <div label={"cokolwiek2"}>
        <p>BIG MILK Choco Intense jest intensywnie czekoladowy i tak pyszny, że wprost nie można mu się oprzeć. 
            Jedno chrupnięcie i od razu wiesz, że czekolada rządzi smakiem! Lody o smaku śmietankowym ze świeżym mlekiem pokrywa polewa o czekoladowym smaku,
             która z każdym kęsem odkrywa przed Tobą prawdziwą przyjemność. Idealny duet smaku pysznej czekolady i śmietankowej delikatności,
              której sekret tkwi w głównym składniku BIG MILK, czyli świeżym mleku. Spróbuj i przekonaj się, jak smakuje BIG MILK Choco Intense!</p>
        </div>
      </Accordion>
      </SectionAccordion> */}
      {/* <SliderLipton></SliderLipton> */}
      {/* <SliderLiptonRecipe></SliderLiptonRecipe> */}
      {/* <Link to="https://google.com" target="_blank" style={{ textDecoration: 'none' }}><Button>Loe rohkem</Button></Link> */}
    </Section>
    </>
  )
}
export default IndexPage
