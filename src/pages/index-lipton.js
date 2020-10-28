import React from "react"
import styled from 'styled-components'
import { graphql, useStaticQuery } from "gatsby"
import Slider from "../components/CarouselLipton/Carousel"
import Tabs from "../components/TabBrand/TabBrand"
import Popup from "../components/Popup/Popup"
import RichText from "../components/RichText/RichText"
import Example from "../components/Modal/Modal"
import Quotes from "../components/Quotes/Quotes"
import Accordion from '../components/AccordionLipton/Accordion'
import CustomerChat from "../components/Messenger/Messenger"
import Button from "../components/ButtonLipton"
import { Link } from "gatsby"



const Section = styled.section`
    width:100%;
    max-width:1200px;
    margin:auto;
`;


const IndexPage = () => {
  return (
   <>
    <Section>    
    
      
    <Slider></Slider>
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
    </Section>
    </>
  )
}
export default IndexPage
