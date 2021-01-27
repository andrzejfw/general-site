import React from "react"
import { Link } from "gatsby"
import SEO from '../components/Seo/Seo'
import styled from 'styled-components'
import ButtonRadius from "../components/Button"
import Image from '../assets/images/lady-with-bag.png'
import Footer from "../components/Footer/Footer.js"
import Navigation from "../components/Header/Navigation.js"
import NavigationStyles from "../components/Header/NavigationStyles"
import FaviconUni from "../components/Favicon/FaviconUni"

const Section = styled.div`
  max-width: 1200px;
  margin: 50px auto 0;
  text-align: left;
  display: flex;
  flex-direction: row;

  @media(max-width:992px){
      flex-direction: column;
      margin: 50px;
      text-align: center;
    }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    width: 400px;
    margin: 0 50px;
    transform: scaleX(-1);

    @media(max-width:992px){
      display: none;
    }
  }

  h1 {
    padding-top: 150px;
    color: #1f36c7;

    @media(max-width:992px){
      padding-top: 30px;
    }
  }

  .ikYqST {
    margin: 30px 0;

    @media(max-width:992px){
      margin: 20px auto;
    }
  }
`;

const NotFoundPage = () => (
  <>
    <SEO title="Midagi läks valesti. Viga 500" description="Viga ühenduse loomisel. Viga 500. Palun kasutage menüüd leheküljel navigeerimiseks või minge tagasi avalehele."/>
    <Navigation/>
    <NavigationStyles/>
    <FaviconUni/>
    <Section>
      <div>
        <img src={Image}/>
      </div>
      <div>
        <h1>Midagi läks valesti! Viga 500</h1>
        <p>Viga ühenduse loomisel. Palun kasutage menüüd leheküljel navigeerimiseks või minge tagasi avalehele</p>
        <ButtonRadius><Link to="/">AVALEHELE</Link></ButtonRadius>
      </div>
    </Section>
    <Footer/>
  </>
)

export default NotFoundPage
