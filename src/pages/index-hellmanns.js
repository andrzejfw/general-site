import React from "react"
import styled from 'styled-components'
import SEO from '../components/Seo/Seo'
import HellmannsCategories from '../components/HellmannsCategories/HellmannsCategories'
import HellmannsCategoriesBox from '../components/HellmannsCategories/HellmannsCategoriesBox'
import HellmannsHeroImg from '../assets/images/hellmanns-hero-banner.jpg'
import Mayo from '../assets/images/hellmanns-mayo.png'
import Sauce from '../assets/images/hellmanns-sauce.png'
import Ketchup from '../assets/images/hellmanns-ketchup.png'
import VideoHellmanns from '../components/VideoHellmanns/VideoHellmanns'

const Section = styled.section`
    width:100%;
    margin:auto;
    padding-bottom:30px;
    text-align: center;
    background: #fdf6e8;
    /* padding-top: 50px; */
`;

const HellmannsHeroImage = styled.img`
    width: 100%;
    height: 550px;
    object-fit: cover;

    @media (max-width: 1200px) {
        height: 400px;
        content: url(${HellmannsHeroImg});
    }

    @media (max-width: 692px) {
        margin-top: 50px;
    }
`;

const IndexPageHellmanns = () => {
  return (
   <>
   <SEO title="Hellmann's Eesti" description=""/>
   <Section> 
    <HellmannsHeroImage src={HellmannsHeroImg} alt="Magnum jäätis"/> 
    <HellmannsCategories sectionTitle="Meie kategooriaid">
      <HellmannsCategoriesBox categoryTitle="Majonees" categoryImage={Mayo} categoryLink="/" alt="Hellmann's Majonees"></HellmannsCategoriesBox>
      <HellmannsCategoriesBox categoryTitle="Ketšup" categoryImage={Sauce} categoryLink="/" alt="Hellmann's Ketšup"></HellmannsCategoriesBox>
      <HellmannsCategoriesBox categoryTitle="Kastmed" categoryImage={Ketchup} categoryLink="/" alt="Hellmann's Kastmed"></HellmannsCategoriesBox>
    </HellmannsCategories>
    <div style={{marginTop: "130px"}}>
        <VideoHellmanns videoId="vmSKx7zMF1o"></VideoHellmanns>
    </div>
    <p style={{padding: "50px 0"}}>Tõelised nautlejad teavad, et õnn peitub väikestes asjades.</p>
    <p style={{padding: "50px 0"}}>Tõelised nautlejad teavad, et õnn peitub väikestes asjades.</p>
    </Section>
    </>
  )
}
export default IndexPageHellmanns
