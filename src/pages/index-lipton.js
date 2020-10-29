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


const Section = styled.section`
    width:100%;
`;


const IndexPage = () => {
  return (
   <>
   <SEO title="Lipton" description=""/>
    <Section> 
         
    <SliderLipton></SliderLipton>
    <BannerWithVideoLipton title="Brand Purpose Article" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." videoId="HLtkjt0g0Z8" background="https://asset-eu.unileversolutions.com/content/dam/unilever/lipton_international/france/french/key_visual/core_brand/tea_and_soy_and_fruit_beverages/leaf_and_instant_tea/80755_lipton_1280x854-1154722.jpg"></BannerWithVideoLipton>  
    
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
      <Link to="https://google.com" target="_blank" style={{ textDecoration: 'none' }}><Button>Read more</Button></Link>
      <SliderLiptonRecipe></SliderLiptonRecipe>
    </Section>
    </>
  )
}
export default IndexPage
