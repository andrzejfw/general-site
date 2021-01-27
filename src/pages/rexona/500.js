import React from "react"
import { Link } from "gatsby"
import SEO from '../../components/Seo/Seo'
import styled from 'styled-components'
import ButtonRadius from "../../components/ButtonRexona"
import Image from '../../assets/images/lady-with-bag.png'

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
    margin: 10px 50px;
    transform: scaleX(-1);

    @media(max-width:992px){
      display: none;
    }
  }

  h1 {
    padding-top: 150px;
    color: #103073;
    
    @media(max-width:992px){
      padding-top: 50px;
    }
  }

  .cnjcoI {
    margin: 10px 0;

    @media(max-width:992px){
      margin: 20px auto;
    }
  }
`;

const NotFoundPage = () => (
  <>
    <SEO title="Midagi läks valesti. Viga 500" description="Viga ühenduse loomisel. Viga 500. Palun kasutage menüüd leheküljel navigeerimiseks või minge tagasi avalehele."/>
    <Section>
      <div>
        <img src={Image} alt="Tagasi avalehele"/>
      </div>
      <div>
        <h1>Midagi läks valesti! Viga 500</h1>
        <p>Viga ühenduse loomisel. Palun kasutage menüüd leheküljel navigeerimiseks või minge tagasi avalehele</p>
        <ButtonRadius><Link to="/rexona">AVALEHELE</Link></ButtonRadius>
      </div>
    </Section>
  </>
)

export default NotFoundPage
