import React from 'react';
import styled from 'styled-components'
import { graphql } from 'gatsby';
import SEO from '../components/Seo/Seo'
import CarouselKnorr from '../components/CarouselKnorr/CarouselKnorr'
import Accordion from "../components/AccordionKnorr/AccordionKnorr"
import Button from "../components/ButtonKnorr"
import HellmannsBulletsCenter from '../assets/images/hellmanns-bg-content.png'
import BUp from '../assets/images/happy-shadow-tabl.png'
import BDown from '../assets/images/happy-shadow-tabl.png'
import RexonaBullets from '../assets/images/knorr-bullets.png'

const ProductContainer = styled.div`
    background:#fff;

`;

const ProductFirstRow = styled.div`
    display:flex;  
    justify-content:center;
    align-items:center;
    max-width:1200px;
    margin: 0px auto 0;  
    width:100%;
    
    @media(max-width:780px){
        flex-direction: column;
    }
    @media(max-width:1264px){
        justify-content:space-between;
        padding:30px 0 50px 0;
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
        color: #000;
        padding-top: 5px;
    }
    h1{
        font-size:2rem;
        color: #007a33;
        font-weight: 700;
    }
    h2 {
      color: #007a33;
      padding-bottom: 10px;
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
    margin: 0 auto;
    background-color:rgb(0 122 51 / 10%);
    ul{
        max-width:1200px;
        color: #000;
        z-index: 1;
        position: relative;
        list-style: none;
    }
    li{
        margin: 0;
        padding: 8px 0 8px 20px;
        }
    li::before {
        content: '▶';
        color: green;
        position: absolute;
        left: 0;
    }

    @media(max-width:1080px){
        padding:20px;
        margin: 0 auto;
        li{
        margin:4px;
        
        }
    }
`;

// const BulletsUp = styled.div`
//   background-image: url(${BUp});
//   background-repeat: no-repeat;
//   background-position: center;
//   width:100%;
//   padding-top: 50px;
//     background-size: 1200px;
// `;
// const BulletsDown = styled.div`
//     background: url(${BDown});
//     width:100%;
//     transform: rotate(180deg) scaleX(-1);
//     margin-bottom:50px;
//     background-repeat: no-repeat;
//     background-position: center;
//     padding-top: 50px;
//     background-size: 1200px;
// `;

const SectionAccordion = styled.div`
    max-width: 1000px;
    margin: 0 auto;

    @media(max-width:780px){
        padding: 0;
    }
`;

const AccordionTab = styled.div`
    max-width:1240px;
`;

const SectionCarousel = styled.div`
    padding-bottom: 50px;
    color: #fff;

    @media(max-width:780px){
        margin: 0px auto;
        color: #fff;
        padding-bottom:20px;
    }
`;

export const query = graphql`
query MyQueryKnorr($slug: Int!) {
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
    fullName
    master
    productDescription
    productDoYouKnow
    productHowToUse
    productLine
    productShortDescription
    shortTitle
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
        {/* <BulletsUp><img></img></BulletsUp> */}
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
        {/* <BulletsDown><img></img></BulletsDown> */}
          <SectionAccordion>
            <Accordion>
              {/* Ingredients */}
              <AccordionTab label="Koostisosad">
                <p>{data.product.ingredients}</p>
              </AccordionTab>
              {/* Allergens */}
              <AccordionTab label="Allergeenid">
                <p>{data.product.allergens}</p>
              </AccordionTab>
            </Accordion>
          </SectionAccordion>
          <SectionCarousel>
              <CarouselKnorr/>
          </SectionCarousel>
      </ProductContainer>
      </>
    );
  };
  
  export default PostLayoutHellmanns;
