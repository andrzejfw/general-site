import React from 'react';
import styled from 'styled-components'
import { graphql } from 'gatsby';
import BINMagnum from "../components/BINMagnum/BINMagnum"
import SEO from '../components/Seo/Seo'
import CarouselHellmanns from '../components/CarouselHellmanns/CarouselHellmanns'
import Accordion from "../components/AccordionHellmanns/AccordionHellmanns"
import Button from "../components/ButtonHellmanns"
import HellmannsBulletsCenter from '../assets/images/hellmanns-bg-content.png'
import BUp from '../assets/images/hellmanns-bg-footer.png'
import BDown from '../assets/images/hellmanns-bg-footer.png'
import { Link } from 'gatsby'

const ProductContainer = styled.div`
    background:#fdf6e8;

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
    margin: 0 auto;
    background: url(${HellmannsBulletsCenter});
    &ProductBullets::after{
    width: 16px;
    position: absolute;
    left: -16px;
    top: -6px;
    height:20px;
    }
    ul{
        max-width:1200px;
        color: #fdf6e8;
        z-index: 1;
        li{
        margin:4px;
        }
    }

    @media(max-width:1264px){
        padding: 20px 50px;
        margin: 0 auto;
        background: url(${HellmannsBulletsCenter});
        li{
        margin:4px;
        
        }
    }
`;

const BulletsUp = styled.div`
  background-image: url(${BUp});
  width:100%;
  margin-bottom:-2px;
`
const BulletsDown = styled.div`
    background: url(${BDown});
    width:100%;
    transform: rotate(180deg) scaleX(-1);
    margin-bottom:50px;
    margin-top:-2px;
`

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
    color: #fdf6e8;

    @media(max-width:780px){
        margin: 0px auto;
        color: #fdf6e8;
        padding-bottom:20px;
    }
`;

const VariantList = styled.ul `
    display: flex;
    list-style: none;
    margin: 20px auto;

    
    .active button {
      color: #fff;
    }
`;

const VariantButton = styled.button `
    padding: 14px;
    border: none;
    margin: 10px 10px;
    border-radius: 50%;
    background:#004976;
    border:none;
    text-transform:none;
    transition:.5s;
    box-shadow: 0px -3px 2px rgba(0, 0, 0, 0.39);
    outline: none;
    text-decoration:none;
    text-align: center;
    color: #868888;
    font-weight: 700;

    &:hover{
      transform: scale(1.15);
      opacity: 1;
      border: none;
      outline: none;
      text-decoration:none;
    }
    &:focus{
      outline: none;
      color: #fff;
      font-weight: bold;
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
    variant
  }
}

`;

const PostLayoutHellmanns = ({ data, pageContext }) => {
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
              {/* <h2>{data.product.volume}</h2> */}
              <VariantList>
            {pageContext.variant.map(({id, size}) => 
            <li>
              
              <Link to={`/hellmanns/products/${id}`} activeClassName="active">
                <VariantButton>{size}</VariantButton>
              </Link>
              
            </li>
            )}
          </VariantList>
              <p>{data.product.productDescription}</p>
              <Button>OSTA KOHE</Button>
            </ProductMainInfo>
          </ProductFirstRow>
        <BulletsUp><img></img></BulletsUp>
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
        <BulletsDown><img></img></BulletsDown>
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
              <CarouselHellmanns/>
          </SectionCarousel>
      </ProductContainer>
      </>
    );
  };
  
  export default PostLayoutHellmanns;
