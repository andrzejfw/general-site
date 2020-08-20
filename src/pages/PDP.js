import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

const Image = styled.img`
    width:200px;
    height:200px;
    margin:auto;
`;


const ProductDetailPage = () => {
 
    const gatsbyRepoData = useStaticQuery(graphql`
  query {
    example{
      name     
      brand
      imageUrl   }    
     
    }
  `)
  return (
    < >
    <window onload="UTIF.replaceIMG()">

   
      <p >
        PDP{` `}
        <p >
          {gatsbyRepoData.example.name} <br />
          {gatsbyRepoData.example.brand}
          
          
          
        </p>
      </p>
     <Image   src={gatsbyRepoData.example.imageUrl} alt="packshot"/>
     </window>
    </>
  )


  };

export default ProductDetailPage
