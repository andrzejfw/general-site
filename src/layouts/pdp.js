import React from 'react';
import styled from 'styled-components'
import { graphql } from 'gatsby';
import BIN from "../components/BIN/BIN"
import Accordion from "../components/Accordion/Accordion"

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
    <ProductContainer>
      <ProductFirstRow>
       <ProductImage>
       <img src="https://www.bigmilk.pl/sk-eu/content/dam/brands/big_milk/poland/1886941-8714100642078.png.rendition.767.767.png"></img>
       </ProductImage>
       <ProductMainInfo>
          <h3>{data.example.fullName}</h3>
          <p>{data.example.volume}</p>
          <p>{data.example.format}</p>
          <h4>{data.example.productShortDescription}</h4>
          <p>BIG MILK Choco Intense jest intensywnie czekoladowy i tak pyszny, że wprost nie można mu się oprzeć. 
            Jedno chrupnięcie i od razu wiesz, że czekolada rządzi smakiem! Lody o smaku śmietankowym ze świeżym mlekiem pokrywa polewa o czekoladowym smaku,
             która z każdym kęsem odkrywa przed Tobą prawdziwą przyjemność. Idealny duet smaku pysznej czekolady i śmietankowej delikatności,
              której sekret tkwi w głównym składniku BIG MILK, czyli świeżym mleku</p>
          <BIN></BIN>
       </ProductMainInfo>
       
     </ProductFirstRow>
    
      <Accordion>
        <AccordionTab label={data.example.productDescription} isOpen>
          <p>
          <p>BIG MILK Choco Intense jest intensywnie czekoladowy i tak pyszny, że wprost nie można mu się oprzeć. 
            Jedno chrupnięcie i od razu wiesz, że czekolada rządzi smakiem! Lody o smaku śmietankowym ze świeżym mlekiem pokrywa polewa o czekoladowym smaku,
             która z każdym kęsem odkrywa przed Tobą prawdziwą przyjemność. Idealny duet smaku pysznej czekolady i śmietankowej delikatności,
              której sekret tkwi w głównym składniku BIG MILK, czyli świeżym mleku. Spróbuj i przekonaj się, jak smakuje BIG MILK Choco Intense!</p>
          </p>
          
        </AccordionTab>
        <AccordionTab label={data.example.ingredients}>
        <p>BIG MILK Choco Intense jest intensywnie czekoladowy i tak pyszny, że wprost nie można mu się oprzeć. 
            Jedno chrupnięcie i od razu wiesz, że czekolada rządzi smakiem! Lody o smaku śmietankowym ze świeżym mlekiem pokrywa polewa o czekoladowym smaku,
             która z każdym kęsem odkrywa przed Tobą prawdziwą przyjemność. Idealny duet smaku pysznej czekolady i śmietankowej delikatności,
              której sekret tkwi w głównym składniku BIG MILK, czyli świeżym mleku. Spróbuj i przekonaj się, jak smakuje BIG MILK Choco Intense!</p>
        </AccordionTab>
      </Accordion>
     
      <ProductRowCenter>
        <h4>{data.example.productDescription}</h4>
        <p>BIG MILK Choco Intense jest intensywnie czekoladowy i tak pyszny, że wprost nie można mu się oprzeć. 
            Jedno chrupnięcie i od razu wiesz, że czekolada rządzi smakiem! Lody o smaku śmietankowym ze świeżym mlekiem pokrywa polewa o czekoladowym smaku,
             która z każdym kęsem odkrywa przed Tobą prawdziwą przyjemność. Idealny duet smaku pysznej czekolady i śmietankowej delikatności,
              której sekret tkwi w głównym składniku BIG MILK, czyli świeżym mleku. Spróbuj i przekonaj się, jak smakuje BIG MILK Choco Intense!</p>
      </ProductRowCenter>
      <ProductRowCenter>
        <h4>{data.example.ingredients}</h4>
        <p>BIG MILK Choco Intense jest intensywnie czekoladowy i tak pyszny, że wprost nie można mu się oprzeć. 
            Jedno chrupnięcie i od razu wiesz, że czekolada rządzi smakiem! Lody o smaku śmietankowym ze świeżym mlekiem pokrywa polewa o czekoladowym smaku,
             która z każdym kęsem odkrywa przed Tobą prawdziwą przyjemność. Idealny duet smaku pysznej czekolady i śmietankowej delikatności,
              której sekret tkwi w głównym składniku BIG MILK, czyli świeżym mleku. Spróbuj i przekonaj się, jak smakuje BIG MILK Choco Intense!</p>
      </ProductRowCenter>
      <ProductBullets>
        <ul>
          <li>{data.example.feature1}</li>
          <li>{data.example.feature2}</li>
          <li>{data.example.feature3}</li>
          <li>{data.example.feature4}</li>
          <li>{data.example.feature5}</li>
          <li>{data.example.feature6}</li>
        </ul>
      
      </ProductBullets>
      <ProductRowCenter>
        <h4>{data.example.productHowToUse}</h4>
        <p>BIG MILK Choco Intense jest intensywnie czekoladowy i tak pyszny, że wprost nie można mu się oprzeć. 
            Jedno chrupnięcie i od razu wiesz, że czekolada rządzi smakiem! Lody o smaku śmietankowym ze świeżym mlekiem pokrywa polewa o czekoladowym smaku,
             która z każdym kęsem odkrywa przed Tobą prawdziwą przyjemność. Idealny duet smaku pysznej czekolady i śmietankowej delikatności,
              której sekret tkwi w głównym składniku BIG MILK, czyli świeżym mleku. Spróbuj i przekonaj się, jak smakuje BIG MILK Choco Intense!</p>
      </ProductRowCenter>
      <ProductRowCenter>
        <h4>{data.example.productDoYouKnow}</h4>
        <p>BIG MILK Choco Intense jest intensywnie czekoladowy i tak pyszny, że wprost nie można mu się oprzeć. 
            Jedno chrupnięcie i od razu wiesz, że czekolada rządzi smakiem! Lody o smaku śmietankowym ze świeżym mlekiem pokrywa polewa o czekoladowym smaku,
             która z każdym kęsem odkrywa przed Tobą prawdziwą przyjemność. Idealny duet smaku pysznej czekolady i śmietankowej delikatności,
              której sekret tkwi w głównym składniku BIG MILK, czyli świeżym mleku. Spróbuj i przekonaj się, jak smakuje BIG MILK Choco Intense!</p>
      </ProductRowCenter>
   
     
        
        {/* <p >
          
          {data.example.master} <br />
          {data.example.fullName}<br />
          {data.example.brand}<br />
          {data.example.format}<br />
          {data.example.shortTitle}<br />
          {data.example.volume}<br />
          {data.example.formatOptional}<br />
          {data.example.tag}<br />
          {data.example.productLine}<br />
          {data.example.productDescription}<br />
          {data.example.feature1}<br />
          {data.example.feature2}<br />
          {data.example.feature3}<br />
          {data.example.feature4}<br />
          {data.example.feature5}<br />
          {data.example.feature6}<br />
          {data.example.productShortDescription}<br />
          {data.example.productHowToUse}<br />
          {data.example.productDoYouKnow}<br />
          {data.example.etailerUrl}<br />
          {data.example.ingredients}<br />
          {data.example.allergens}<br />
          
       
          
          
          
        </p>  */}
        </ProductContainer>
        </>
  );
};

export default PostLayout;
