import React from 'react';
import styled from 'styled-components'
import { graphql } from 'gatsby';
import BINLipton from "../components/BINLipton/BINLipton"
import SEO from '../components/Seo/Seo'
import TeaIcon from '../assets/images/tea-icon.png'
import CarouselLipton from '../components/CarouselLipton/Carousel'
import Accordion from "../components/AccordionLipton/Accordion"

const ProductContainer = styled.div`
  background:#fff;
`;

const TopSectionWrapper = styled.div`
  background-image: linear-gradient(-200deg,#fff,#fff 80%,#fade4c 80%,#fade4c);
  
  @media(max-width:760px){
    background-image: linear-gradient(-200deg,#fff,#fff 90%,#fade4c 90%,#fade4c);
  }
`;

const BottomSectionWrapper = styled.div`
  /* min-height: 300px; */
  background-image: linear-gradient(-210deg,#fade4c 130px,#fade4c,#fff,#fff 130px);
  
  @media(max-width:760px){
    background-image: linear-gradient(-220deg,#fade4c 80px,#fade4c,#fff,#fff 80px);
  }
`;

const ProductFirstRow = styled.div`
  display:flex;  
  justify-content:center;
  align-items:center;
  padding-top:30px;
  max-width:1300px;
  margin:0 auto;  
  width:96%;
  
  @media(max-width:780px){
    flex-direction:column
  }
  @media(max-width:1264px){
    justify-content:space-between;
  }
`;
const ProductImage = styled.div`
   display:flex;
   max-width:600px;
   max-height:550px;
   padding: 100px;
  img{
    max-width: 100%;
  }
  @media(max-width:780px){
    max-width:300px;
    max-height:300px;
    padding: 10px;
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
    font-size:14px;
  }
  h1{
    font-size:3rem;
    color: #c8381d;
  }
  h2{
    font-size:1.2rem;
  }
  
  @media(max-width:860px){
    margin-top:1em;
    p{
    text-align:center;
    font-size:12px;
    }
    h1{
      font-size:2.5rem;
    }
    h2{
      font-size:1rem;
    }
  }
`;

const ProductRowCenter = styled.div`
 display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin:0 auto;
  width:96%;
  max-width:1240px;
  color:#000;
  padding: 20px;

  p{
    text-align:center;
    font-size:14px;
    width:96%;
    max-width:1240px;
  }

  h3 {
    text-transform: uppercase;
  }
  @media(max-width:760px){
    p{
    text-align:center;
    font-size:12px;
    }
    h3{
      font-size:1.4rem;
    }
  }
`;

const ProductBullets = styled.div`
  display:flex;  
  justify-content:center;
  align-items:center;
  width:100%;
  padding: 30px 0;
  color:#000;
  margin:0 auto;
  background:linear-gradient(45deg, #c8381d, #d98149);
  p{
    text-align:center;
  }
  ul{
    width:90%;
    max-width:1140px;
    color:#fff;
    li{
      width:90%;
      margin:4px;
    }
  }
  ul li {
    background: url(${TeaIcon}) no-repeat left center;
    padding: 5px 10px 5px 30px;
    list-style: none;
    margin: 0;
    vertical-align: middle;
  }

  @media(max-width:760px){
    padding: 20px;
    li{
      width:90%;
      margin:4px;
      font-size:12px;
    }
  }
`;

const SectionAccordion = styled.div`
    max-width: 980px;
    margin: 0 auto;
    padding: 80px 0 50px;
`;

const AccordionTab = styled.div`
    max-width:1240px;  
`;

export const query = graphql`
query MyQuerLipton($slug: Int!) {
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

const PostLayout = ({ data }) => {
  return (
   
    <>
    <SEO title={data.example.fullName} description={data.example.productShortDescription}/>
    <ProductContainer>
      <TopSectionWrapper>
        <ProductFirstRow>
        <ProductImage>
        <img src="https://asset-eu.unileversolutions.com/content/dam/unilever/lipton_international/poland/pack_shot/8711200353033_lipton_matcha_20_pyramidenbeutel_3_d_schraeg_de_ch-1731400-jpg.jpg.ulenscale.490x490.jpg"></img>
        </ProductImage>
          <ProductMainInfo>
            <h1>{data.example.fullName} GREEN TEA</h1>
            <p>{data.example.volume}</p>
            {/* <p>{data.example.format}</p> */}
            {/* <h2>{data.example.productShortDescription}Lipton's Magnificent Matcha blended with Green Tea delivers the smooth, earthy taste of matcha and the goodness of green tea</h2> */}
            <p>{data.example.productDescription}Legend has it that Buddhist monks used Matcha to enhance their focus for long hours of meditation, and to be alert and present in the moment. Today's Matcha leaf comes from shade grown green tea whose chlorophyll-rich leaves are finely ground into a brilliant green powder, prized for its abilities.</p>
            <BINLipton></BINLipton>
          </ProductMainInfo>
        </ProductFirstRow>
        <ProductRowCenter>
          {/* Product description */}
          {/* <h3>Tootekirjeldus</h3>
          <p>{data.example.productDescription}Legend has it that Buddhist monks used Matcha to enhance their focus for long hours of meditation, and to be alert and present in the moment. Today's Matcha leaf comes from shade grown green tea whose chlorophyll-rich leaves are finely ground into a brilliant green powder, prized for its abilities.</p> */}
        </ProductRowCenter>
      </TopSectionWrapper>
      <ProductBullets>
        <ul>
          <li>{data.example.feature1}Japanese Matcha blended with the goodness of green tea</li>
          <li>{data.example.feature2}Feel awakened and enjoy a moment of feel good in the afternoon.</li>
          <li>{data.example.feature3}Japanese Matcha blended with the goodness of green tea</li>
          <li>{data.example.feature4}Feel awakened and enjoy a moment of feel good in the afternoon.</li>
          <li>{data.example.feature5}Japanese Matcha blended with the goodness of green tea</li>
          <li>{data.example.feature6}Feel awakened and enjoy a moment of feel good in the afternoon.</li>
        </ul>
      </ProductBullets>
      <BottomSectionWrapper>
        <SectionAccordion>
          <Accordion>
            {/* Ingredients */}
            <AccordionTab label="Koostisosad">
              <p>
              <p>{data.example.ingredients}green tea, matcha, aroma</p>
              </p>
              
            </AccordionTab>
            {/* Usage instructions */}
            <AccordionTab label="Kasutusjuhend">
            <p>{data.example.productHowToUse}Get the best from your brew in 2 minutes, adding the tea bag first then water so the leaves can unleash their flavor</p>
            </AccordionTab>
          </Accordion>
        </SectionAccordion>
        {/* <ProductRowCenter> */}
          {/* Ingredients */}
          {/* <h3>Koostisosad</h3>
          <p>{data.example.ingredients}green tea, matcha, aroma</p> */}
        {/* </ProductRowCenter>
        <ProductRowCenter> */}
          {/* Usage instructions */}
          {/* <h3>Kasutusjuhend</h3>
          <p>{data.example.productHowToUse}Get the best from your brew in 2 minutes, adding the tea bag first then water so the leaves can unleash their flavor</p> */}
        {/* </ProductRowCenter> */}
      </BottomSectionWrapper>
      <CarouselLipton/>
    </ProductContainer>
    </>
  );
};

export default PostLayout;
