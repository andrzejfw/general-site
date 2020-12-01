import React from 'react';
import styled from 'styled-components'
import { graphql } from 'gatsby';
import BINLipton from "../components/BINLipton/BINLipton"
import SEO from '../components/Seo/Seo'
import CarouselMagnum from '../components/CarouselMagnum/CarouselMagnum'
import Accordion from "../components/AccordionMagnum/Accordion"
import Button from "../components/ButtonMagnum"
import MagnumIceCreamImage from "../assets/images/magnum-ice-cream-pdp2.png"
import MagnumBackground from "../assets/images/magnum-header-background.jpg"
import MagnumBackgroundVertical from "../assets/images/magnum-header-background-vertical.jpg"

const ProductContainer = styled.div`
    background:#fff;
`;

const ProductFirstRow = styled.div`
    display:flex;  
    justify-content:center;
    align-items:center;
    max-width:1200px;
    margin:0 auto;  
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
    color:#000;
    text-align:center;
    p{
        text-align:center;
        font-size:1rem;
    }
    h1{
        font-size:3rem;
        color: #523022;
    }
    h2{
        font-size:1.2rem;
    }
    
    @media(max-width:860px){
        margin-top:1em;
        p{
        text-align:center;
        }
        h1{
        font-size:2.5rem;
        }
        h2{
        font-size:1rem;
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
    margin: 0 auto 100px;
    background: #5a301a;
    height: 174px;
    ul{
        max-width:1140px;
        /* color:#523022; */
        color: #fff9c7;
        /* list-style: none; */
        /* text-align:center; */
        z-index: 1;
        li{
        margin:4px;
        }
    }

    @media(max-width:760px){
        padding: 20px 50px;
        margin: 0 auto 20px;
        height: 200px;
        li{
        margin:4px;
        }
    }
`;

const BackgroundImageOne = styled.img`
    position: absolute;
    top: 0;
    left: 0;

    @media(max-width:780px){
        height: 200px;
        content: url(${MagnumBackgroundVertical});
    }
`;

const BackgroundImageTwo = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    transform: rotate(180deg);

    @media(max-width:780px){
        height: 200px;
        content: url(${MagnumBackgroundVertical});
        transform:scaleX(-1);
    }
`;

const SectionAccordion = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 0 50px;

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
query MyQueryMagnum($slug: Int!) {
  example(slug: { eq: $slug }) {
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
  }
}

`;

const PostLayoutMagnum = ({ data }) => {
    return (
      <>
      <SEO title={data.example.fullName} description={data.example.productShortDescription}/>
      <ProductContainer>
          <ProductFirstRow>
          <ProductImage>
          <img src={MagnumIceCreamImage}></img>
          </ProductImage>
            <ProductMainInfo>
              <h1>{data.example.fullName} Magnum Classic Ice Cream</h1>
              <p style={{fontSize: "90%"}}>{data.example.volume}</p>
              {/* <p>{data.example.format}</p> */}
              <p>{data.example.productDescription}The perfect balance of cracking Magnum chocolate and velvety smooth vanilla ice cream.
              </p>
              <Button>osta kohe</Button>
            </ProductMainInfo>
          </ProductFirstRow>
        <ProductBullets>
          <BackgroundImageOne src={MagnumBackground}/>
          <BackgroundImageTwo src={MagnumBackground}/>
          <ul>
            <li>{data.example.feature1}The perfect balance</li>
            <li>{data.example.feature2}Classic taste</li>
            <li>{data.example.feature3}Velvety smooth</li>
            <li>{data.example.feature1}The perfect balance </li>
          </ul>
        </ProductBullets>
          <SectionAccordion>
            <Accordion>
              {/* Ingredients */}
              <AccordionTab label="Koostisosad" isOpen>
                <p>
                <p style={{fontWeight: "500"}}>{data.example.ingredients}Reconstituted skimmed MILK, sugar, cocoa butter¹, water, coconut oil, cocoa mass¹, glucose syrup, glucose-fructose syrup, whole MILK powder, whey solids (MILK), butter oil (MILK), emulsifiers (SOYBEAN lecithin, E476, E471), exhausted vanilla bean pieces, stabilisers (E407, E410, E412), natural vanilla flavouring¹, (with MILK), flavouring, colour (E160a). May contain: almonds. Gluten free. ¹Rainforest Alliance Certified™</p>
                <p style={{fontWeight: "500"}}>{data.example.allergens}milk</p>
                </p>
                
              </AccordionTab>
              {/* nutritional information */}
              <AccordionTab label="Toitumisalane teave">
              <p style={{fontWeight: "500"}}>{data.example.ingredients}Here will be nutritional information</p>
              </AccordionTab>
            </Accordion>
          </SectionAccordion>
          <SectionCarousel>
              <CarouselMagnum/>
          </SectionCarousel>
      </ProductContainer>
      </>
    );
  };
  
  export default PostLayoutMagnum;
