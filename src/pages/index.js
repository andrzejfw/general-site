import React from "react"
import styled from 'styled-components'
import { graphql, useStaticQuery } from "gatsby"
import Slider from "../components/Carousel/Carousel"
import ButtonRadius from "../components/Button"
import Tabs from "../components/TabBrand/TabBrand"
// import Popup from "../components/Popup"
import RichText from "../components/RichText/RichText"
import Accordion from '../components/Accordion/Accordion'



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
      <ButtonRadius></ButtonRadius>
      {/* <Tabs></Tabs> */}
      <RichText></RichText>
      {/* <Popup></Popup> */}
    </Section>
    </>
  )
}
export default IndexPage
