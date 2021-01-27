import React from "react"
import { Link } from "gatsby"
import SEO from '../../components/Seo/Seo'
import styled from 'styled-components'
import ButtonRadius from "../../components/ButtonHellmanns"
import Image from '../../assets/images/lady-with-bag.png'

const Wrapper = styled.section`
  width: 100%;
  background: #fdf6e8;
  padding-bottom: 40px;
`;

const Section = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 50px;
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
    border-radius: 0 0 200px 150px;

    @media(max-width:992px){
      display: none;
    }
  }

  h1 {
    padding-top: 150px;
    color: #004976;
    
    @media(max-width:992px){
      padding-top: 50px;
    }
  }
`;

const NotFoundPage = () => (
  <>
    <SEO title="Midagi läks valesti. Viga 500" description="Viga ühenduse loomisel. Viga 500. Palun kasutage menüüd leheküljel navigeerimiseks või minge tagasi avalehele."/>
    <Wrapper>
      <Section>
        <div>
          <img src={Image} alt="Tagasi avalehele"/>
        </div>
        <div>
          <h1>Midagi läks valesti! Viga 500</h1>
          <p>Viga ühenduse loomisel. Palun kasutage menüüd leheküljel navigeerimiseks või minge tagasi avalehele</p>
          <ButtonRadius><Link to="/hellmanns">AVALEHELE</Link></ButtonRadius>
        </div>
      </Section>
    </Wrapper>
  </>
)

export default NotFoundPage
