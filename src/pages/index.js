import React from "react"
import styled from 'styled-components'
import Slider from "../components/Carousel"
import ButtonRadius from "../components/Button"


const PageContainer = styled.div`
  max-width:1140px;
  width:100%;
  margin:auto;
`;

const IndexPage = () => (
  <PageContainer>
    <h1>Home page</h1>

    <Slider></Slider>

    <ButtonRadius></ButtonRadius>

  </PageContainer>
)


export default IndexPage
