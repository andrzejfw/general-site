import React from 'react';
import styled from 'styled-components'
import { graphql } from 'gatsby';
import SEO from '../components/Seo/Seo'
import CarouselCif from '../components/CarouselCif/CarouselCif'
import Accordion from "../components/AccordionCif/AccordionCif"
import Button from "../components/ButtonCif"
import CifBullets from '../assets/images/cif-white-shape-small.png'

const ProductContainer = styled.div`
    background:#fff;
`;

const ProductFirstRow = styled.div`
    display:flex;  
    justify-content:center;
    align-items:center;
    max-width:1200px;
    margin: 0 auto;  
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
    }
    h1{
        font-size:2.5rem;
        color: #165648;
        font-weight: 700;
    }
    h2{
        font-size:1.5rem;
        color: #165648;
        font-weight: 400;
    }
    
    @media(max-width:860px){
        margin-top:1em;
        margin: 0px 20px 40px;
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
    background: linear-gradient(to right,#20856e,#165648);
    ul{
        max-width:1200px;
        color: #fff;
        z-index: 1;
        /* li{
        margin:4px;
        } */
    }

    li {
        margin: 0;
        padding: 7px 0 10px 20px;
        list-style: none;
        background-image: url(${CifBullets});
        background-repeat: no-repeat;
        background-position: left center;
        background-size: 10px;
        }

    @media(max-width:800px){
        padding: 20px 30px;
        margin: 0 auto 20px;
        li{
        margin:4px 4px 4px 40px;
        }
    }

    @media(max-width:660px){
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
    margin: 50px auto 120px;

    @media(max-width:780px){
        margin: 50px auto;
    }
`;

export const query = graphql`
query MyQueryCif($slug: Int!) {
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

const PostLayoutCif = ({ data }) => {
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
              {/* Safety warnings */}
              <AccordionTab label="Safety warnings">
                <p>{data.product.ingredients}</p>
              </AccordionTab>
            </Accordion>
          </SectionAccordion>
        <SectionCarousel>
            <CarouselCif/>
        </SectionCarousel>
    </ProductContainer>
    </>
    );
  };
  
  export default PostLayoutCif;
