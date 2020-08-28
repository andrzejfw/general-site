import React from "react"
import styled from 'styled-components'
import { graphql, useStaticQuery } from "gatsby"
import Slider from "../components/Carousel"
import ButtonRadius from "../components/Button"
import Tabs from "../components/TabBrand"
import RichText from "../components/RichText"
import Navigation from "../components/Navigation/Navigation"



const Section = styled.section`
    width:100%;
    max-width:1200px;
    margin:auto;
`;



const IndexPage = () => {
  // const gatsbyRepoData = useStaticQuery(graphql`
  // query {
  //   example{
  //     count
  //     next
  //   }    
     
  //   }
  // `)
  return (
    // <Navigation></Navigation>
   <>
    <Navigation></Navigation>
    
    <Section>
      <p>
        Build Time Data: Gatsby repo{` `}
        <p >
          {/* {gatsbyRepoData.example.count} <br />
          {gatsbyRepoData.example.next} */}
        </p>
      </p>
      <Slider></Slider>
      <ButtonRadius></ButtonRadius>
      {/* <Tabs></Tabs> */}
      <RichText></RichText>
    </Section>
    </>
  )
}
export default IndexPage
