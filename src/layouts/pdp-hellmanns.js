import React from 'react';
import styled from 'styled-components'
import { graphql } from 'gatsby';
import BINMagnum from "../components/BINMagnum/BINMagnum"
import SEO from '../components/Seo/Seo'
import CarouselHellmanns from '../components/CarouselHellmanns/CarouselHellmanns'
import Accordion from "../components/AccordionHellmanns/AccordionHellmanns"
import Button from "../components/ButtonHellmanns"

const ProductContainer = styled.div`
    background:#fdf6e8;
`;

const ProductFirstRow = styled.div`
    display:flex;  
    justify-content:center;
    align-items:center;
    max-width:1200px;
    margin: 0px auto 0;  
    width:96%;
    
    @media(max-width:780px){
        flex-direction: column;
        margin: 30px auto 0;
    }
    @media(max-width:1264px){
        justify-content:space-between;
    }
`;

const ProductImage = styled.div`
    display:flex;
    max-width:700px;
    max-height:700px;
    padding: 50px;
    
    img{
    max-width: 100%;
    }
    
    @media(max-width:780px){
        max-width:500px;
        max-height:500px;
        margin-bottom: -40px;
    }
`;

const ProductMainInfo = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin: 0px 20px;
    max-width: 500px;
    text-align:center;
    p{
        text-align:center;
        font-size:1rem;
        color: #004976;
    }
    h1{
        font-size:2.5rem;
        color: #004976;
        font-weight: 700;
    }
    h2 {
      color: #004976;
    }
    
    @media(max-width:860px){
        margin-top:1em;
        p{
        text-align:center;
        }
        h1{
        font-size:2rem;
        }
    }
`;

const ProductBullets = styled.div`
    position: relative;
    display: flex;  
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 30px 0;
    margin: 0 auto 50px;
    background: #004976;
    ul{
        max-width:1200px;
        color: #fdf6e8;
        z-index: 1;
        li{
        margin:4px;
        }
    }

    @media(max-width:760px){
        padding: 20px 50px;
        margin: 0 auto 20px;
        li{
        margin:4px;
        }
    }
`;

const SectionAccordion = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 0 20px;

    @media(max-width:780px){
        padding: 0;
    }
`;

const AccordionTab = styled.div`
    max-width:1240px;
`;

const SectionCarousel = styled.div`
    padding-bottom: 50px;
    color: #fdf6e8;

    @media(max-width:780px){
        margin: 50px auto;
        color: #fdf6e8;
    }
`;

export const query = graphql`
query MyQueryHellmanns($slug: Int!) {
  product(slug: { eq: $slug }) {
    id
    allergens
    brand
    etailerUrl
    feature1
    feature2
    feature3
    feature4
    feature5
    feature6
    format
    formatOptional
    fullName
    master
    productDescription
    productDoYouKnow
    productHowToUse
    productLine
    productShortDescription
    shortTitle
    tag
    volume
    slug
    ingredients
    img
  }
}

`;

const PostLayoutHellmanns = ({ data }) => {
    return (
      <>
      <SEO title={data.product.fullName} description={data.product.productShortDescription}/>
      <ProductContainer>
          <ProductFirstRow>
          <ProductImage>
          <img src={data.product.img}></img>
          </ProductImage>
            <ProductMainInfo>
              <h1>{data.product.fullName}</h1>
              <h2>{data.product.volume}</h2>
              <p>{data.product.productDescription}</p>
              <Button>OSTA KOHE</Button>
            </ProductMainInfo>
          </ProductFirstRow>
        <ProductBullets>
          <ul>
            <li>{data.product.feature1}</li>
            <li>{data.product.feature2}</li>
            <li>{data.product.feature3}</li>
            <li>{data.product.feature4}</li>
            <li>{data.product.feature5}</li>
            <li>{data.product.feature6}</li>
          </ul>
        </ProductBullets>
          <SectionAccordion>
            <Accordion>
              {/* Ingredients */}
              <AccordionTab label="Koostisosad">
                <p>{data.product.allergens}</p>
              </AccordionTab>
              {/* Allergens */}
              <AccordionTab label="Allergeenid">
                <p>{data.product.allergens}</p>
              </AccordionTab>
            </Accordion>
          </SectionAccordion>
          <SectionCarousel>
              <CarouselHellmanns/>
          </SectionCarousel>
      </ProductContainer>
      </>
    );
  };
  
  export default PostLayoutHellmanns;
