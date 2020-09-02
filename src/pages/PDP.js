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
      language
      blocks
     
    }
     
         
     
    }
  `)
  const etailerUrl = gatsbyRepoData.example.blocks;
const etailerUrlArr = etailerUrl.split(',');
  return (
    < >
   

   
      <p >
        PDP{` `}
        <p >
          {gatsbyRepoData.example.name} <br />
          {gatsbyRepoData.example.language}<br />
          {etailerUrlArr[0]}<br />
          {etailerUrlArr[1]}<br />
       
          
          
          
        </p>
      </p>
     
    
    </>
  )


  };

export default ProductDetailPage
