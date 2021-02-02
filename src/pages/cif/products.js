import React from "react"
import styled from 'styled-components'
import SEO from '../../components/Seo/Seo'
import CifHeroImg from '../../assets/images/cif-hero.jpg'


const Section = styled.section`
    width:100%;
    margin:auto;
    padding-bottom:30px;
    text-align: center;

    @media (max-width: 692px) {
      margin-bottom: -50px;
    }
`;

const DoveHeroImage = styled.img`
    width: 100%;
    height: 550px;
    object-fit: cover;

    @media (max-width: 1200px) {
        height: 400px;
    }
`;

const ProductsPageCif = () => {
  return (
   <>
   <SEO title="Dove Eesti" description="Dove Eesti."/>
   <Section> 
    <DoveHeroImage src={CifHeroImg} alt="Dove"/> 
    <p style={{margin: "50px"}}>Products<br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </Section>
    </>
  )
}
export default ProductsPageCif
