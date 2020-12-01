import React from 'react';
import styled from 'styled-components'
import { graphql } from 'gatsby';
import BIN from "../components/BIN/BIN"
import Accordion from "../components/Accordion/Accordion"
import SEO from '../components/Seo/Seo'

const ProductFirstRow = styled.div`
   display:flex;  
  justify-content:center;
  align-items:center;
  padding-top:30px;
  padding-bottom:30px;
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
  img{
    max-width: 100%;
  }
  @media(max-width:780px){
    max-width:300px;
    max-height:300px;
  }
  
  
`;

const AccordionTab = styled.div`
  
    max-width:1240px;
  
  
`;

const ProductMainInfo = styled.div`
 display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin: 0px 20px;
  max-width: 500px;
  color:#000;
  p{
    text-align:center;
    font-size:14px;
  }
  h3{
    font-size:3em;
  }
  @media(max-width:1264px){
    margin: 0px 20px;
  }
  @media(max-width:860px){
    margin: 0px 20px;
    margin-top:1em;
    p{
    text-align:center;
    font-size:12px;
  }
  h3{
    font-size:2em;
  }
  h4{
    font-size:1.4em;
  }
  }
`;

const ProductRowCenter = styled.div`
 display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin: 0px 20px;
 width:96%;
 max-width:1240px;
  color:#000;
  
  margin:15px auto;
  p{
    text-align:center;
    font-size:14px;
    width:96%;
    max-width:1240px;
  }
  @media(max-width:760px){
    margin-top:1em;
    p{
    text-align:center;
    font-size:12px;
  }
  h4{
    font-size:1.4em;
  }
  }
`;

const ProductBullets = styled.div`
  display:flex;  
  justify-content:center;
  align-items:center;
  margin: 0px 20px;
 width:100%;

  color:#000;
  margin:0 auto;
  background:#49b8ea;
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
  @media(max-width:760px){
    margin-top:1em;
    li{
      width:90%;
      margin:4px;
      font-size:12px;
    }
  }
`;

const ProductContainer = styled.div`
    background:#fff;
   
`;

export const query = graphql`
query MyQuery($slug: Int!) {
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

const PostLayout = ({ data }) => {
  return (
   
    <>
    <SEO title={data.product.fullName} description={data.product.productShortDescription}/>
    <ProductContainer>
      <ProductFirstRow>
       <ProductImage>
       <img src={data.product.img}></img>
       </ProductImage>
       <ProductMainInfo>
          <h3>{data.product.fullName}</h3>
          <p>{data.product.volume}</p>
          <p>{data.product.format}</p>
          <h4>{data.product.productShortDescription}</h4>
          <p>BIG MILK Choco Intense jest intensywnie czekoladowy i tak pyszny, że wprost nie można mu się oprzeć. 
            Jedno chrupnięcie i od razu wiesz, że czekolada rządzi smakiem! Lody o smaku śmietankowym ze świeżym mlekiem pokrywa polewa o czekoladowym smaku,
             która z każdym kęsem odkrywa przed Tobą prawdziwą przyjemność. Idealny duet smaku pysznej czekolady i śmietankowej delikatności,
              której sekret tkwi w głównym składniku BIG MILK, czyli świeżym mleku</p>
          <BIN></BIN>
       </ProductMainInfo>
       
     </ProductFirstRow>
    
      <Accordion>
        <AccordionTab label={data.product.productDescription} isOpen>
          <p>
          <p>BIG MILK Choco Intense jest intensywnie czekoladowy i tak pyszny, że wprost nie można mu się oprzeć. 
            Jedno chrupnięcie i od razu wiesz, że czekolada rządzi smakiem! Lody o smaku śmietankowym ze świeżym mlekiem pokrywa polewa o czekoladowym smaku,
             która z każdym kęsem odkrywa przed Tobą prawdziwą przyjemność. Idealny duet smaku pysznej czekolady i śmietankowej delikatności,
              której sekret tkwi w głównym składniku BIG MILK, czyli świeżym mleku. Spróbuj i przekonaj się, jak smakuje BIG MILK Choco Intense!</p>
          </p>
          
        </AccordionTab>
        <AccordionTab label={data.product.ingredients}>
        <p>BIG MILK Choco Intense jest intensywnie czekoladowy i tak pyszny, że wprost nie można mu się oprzeć. 
            Jedno chrupnięcie i od razu wiesz, że czekolada rządzi smakiem! Lody o smaku śmietankowym ze świeżym mlekiem pokrywa polewa o czekoladowym smaku,
             która z każdym kęsem odkrywa przed Tobą prawdziwą przyjemność. Idealny duet smaku pysznej czekolady i śmietankowej delikatności,
              której sekret tkwi w głównym składniku BIG MILK, czyli świeżym mleku. Spróbuj i przekonaj się, jak smakuje BIG MILK Choco Intense!</p>
        </AccordionTab>
      </Accordion>
     
      <ProductRowCenter>
        <h4>{data.product.productDescription}</h4>
        <p>BIG MILK Choco Intense jest intensywnie czekoladowy i tak pyszny, że wprost nie można mu się oprzeć. 
            Jedno chrupnięcie i od razu wiesz, że czekolada rządzi smakiem! Lody o smaku śmietankowym ze świeżym mlekiem pokrywa polewa o czekoladowym smaku,
             która z każdym kęsem odkrywa przed Tobą prawdziwą przyjemność. Idealny duet smaku pysznej czekolady i śmietankowej delikatności,
              której sekret tkwi w głównym składniku BIG MILK, czyli świeżym mleku. Spróbuj i przekonaj się, jak smakuje BIG MILK Choco Intense!</p>
      </ProductRowCenter>
      <ProductRowCenter>
        <h4>{data.product.ingredients}</h4>
        <p>BIG MILK Choco Intense jest intensywnie czekoladowy i tak pyszny, że wprost nie można mu się oprzeć. 
            Jedno chrupnięcie i od razu wiesz, że czekolada rządzi smakiem! Lody o smaku śmietankowym ze świeżym mlekiem pokrywa polewa o czekoladowym smaku,
             która z każdym kęsem odkrywa przed Tobą prawdziwą przyjemność. Idealny duet smaku pysznej czekolady i śmietankowej delikatności,
              której sekret tkwi w głównym składniku BIG MILK, czyli świeżym mleku. Spróbuj i przekonaj się, jak smakuje BIG MILK Choco Intense!</p>
      </ProductRowCenter>
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
      <ProductRowCenter>
        <h4>{data.product.productHowToUse}</h4>
        <p>BIG MILK Choco Intense jest intensywnie czekoladowy i tak pyszny, że wprost nie można mu się oprzeć. 
            Jedno chrupnięcie i od razu wiesz, że czekolada rządzi smakiem! Lody o smaku śmietankowym ze świeżym mlekiem pokrywa polewa o czekoladowym smaku,
             która z każdym kęsem odkrywa przed Tobą prawdziwą przyjemność. Idealny duet smaku pysznej czekolady i śmietankowej delikatności,
              której sekret tkwi w głównym składniku BIG MILK, czyli świeżym mleku. Spróbuj i przekonaj się, jak smakuje BIG MILK Choco Intense!</p>
      </ProductRowCenter>
      <ProductRowCenter>
        <h4>{data.product.productDoYouKnow}</h4>
        <p>BIG MILK Choco Intense jest intensywnie czekoladowy i tak pyszny, że wprost nie można mu się oprzeć. 
            Jedno chrupnięcie i od razu wiesz, że czekolada rządzi smakiem! Lody o smaku śmietankowym ze świeżym mlekiem pokrywa polewa o czekoladowym smaku,
             która z każdym kęsem odkrywa przed Tobą prawdziwą przyjemność. Idealny duet smaku pysznej czekolady i śmietankowej delikatności,
              której sekret tkwi w głównym składniku BIG MILK, czyli świeżym mleku. Spróbuj i przekonaj się, jak smakuje BIG MILK Choco Intense!</p>
      </ProductRowCenter>
   
     
        
        {/* <p >
          
          {data.product.master} <br />
          {data.product.fullName}<br />
          {data.product.brand}<br />
          {data.product.format}<br />
          {data.product.shortTitle}<br />
          {data.product.volume}<br />
          {data.product.formatOptional}<br />
          {data.product.tag}<br />
          {data.product.productLine}<br />
          {data.product.productDescription}<br />
          {data.product.feature1}<br />
          {data.product.feature2}<br />
          {data.product.feature3}<br />
          {data.product.feature4}<br />
          {data.product.feature5}<br />
          {data.product.feature6}<br />
          {data.product.productShortDescription}<br />
          {data.product.productHowToUse}<br />
          {data.product.productDoYouKnow}<br />
          {data.product.etailerUrl}<br />
          {data.product.ingredients}<br />
          {data.product.allergens}<br />
          
       
          
          
          
        </p>  */}
        </ProductContainer>
        </>
  );
};

export default PostLayout;
