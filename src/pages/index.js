import React from "react"
import styled from 'styled-components'
import Navigation from "../components/Navigation/Navigation.js"
import Footer from "../components/Navigation/Footer.js"
import { graphql, useStaticQuery } from "gatsby"
import Slider from "../components/Carousel"
import ButtonRadius from "../components/Button"

const Section = styled.section`
    width:100%;
    max-width:1400px;
    margin:auto;
`;

const IndexPage = () => {
  const gatsbyRepoData = useStaticQuery(graphql`
  query {
    example{
      count
      next
    }    
     
    }
  `)
  return (
    <Section>
      <p>
        Build Time Data: Gatsby repo{` `}
        <p >
          {gatsbyRepoData.example.count} <br />
          {gatsbyRepoData.example.next}
        </p>
      </p>
      <Slider></Slider>
      <ButtonRadius></ButtonRadius>
    </Section>
  )
}
export default IndexPage
