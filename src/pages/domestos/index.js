import React from "react"
import styled from 'styled-components'
import SEO from '../../components/Seo/Seo'
import HeroBanner from '../../assets/images/hellmanns-about.jpg';
import AccordionImage from '../../assets/images/hellmanns-accordion-about.jpg';
import Accordion from "../../components/AccordionDomestos/AccordionDomestos"
import VideoHero from '../../assets/videos/domestos-homepage.mp4';
import DomestosCategories from '../../components/DomestosCategories/DomestosCategories'
import DomestosCategoriesBox from '../../components/DomestosCategories/DomestosCategoriesBox'
import Bottle from '../../assets/images/domestos-bottle.png'
import Blocks from '../../assets/images/domestos-blocks.png'
import Bottle2 from '../../assets/images/domestos-bottle2.png'

const Section = styled.section`
    width:100%;
    margin:auto;
    margin-bottom:30px;
`;

const DomestosIndexSection = styled.section`
    width: 90vw;
    max-width: 1200px;
    
    margin: 0 auto;
    ul {
      padding-left:20px;
    }
    img {
      width: 100%;
      margin-bottom:10px;
    }
    @media(max-width:992px){
 
    }
`;
const Hero = styled.section`
      position:relative;
      margin:0 auto;
      display:flex;
      justify-content:center;
      width:100%;
      background: radial-gradient(circle at 20% 15%,#123c7b,#06154b 61%);
      padding-top:80px;
      @media(max-width:992px){
      padding-top:60px;
    }
  .hero-video {
    position: relative;
    width: 100%;
    height: 600px;
    object-fit: cover;
    max-width:1200px;
    @media(max-width:992px){
    height: 250px;
    }
  }
`;
const IndexPage = () => {
  return (
   <>
     <SEO title="Puhas kodu. Puhas planeet. Puhas tulevik." description="Domestose kodukeemia jätkusuutlikkus. Puhas kodu. Puhas planeet. Puhas tulevik. Loome uusi tehnoloogiaid, et kujundada uus tulevik koristamisele ja puhtusele"/>
     <Hero>
      <video className="hero-video" autoPlay loop muted>
      <source src={VideoHero} type="video/mp4" />
      </video>
  </Hero>
   <Section> 
   {/* <DeliveryHeroImage src={HeroImage} alt="Magnum delivery"/> */}
   {/* <AboutHeroImage src={HeroBanner} alt="Lipton Eesti jätkusuutlik tee"/> */}
   <DomestosIndexSection>
   <DomestosCategories sectionTitle="Meie kategooriaid">
      <DomestosCategoriesBox categoryTitle="Bottle" categoryImage={Bottle} categoryLink="/" alt="Hellmann's Majonees"></DomestosCategoriesBox>
      <DomestosCategoriesBox categoryTitle="Blocks" categoryImage={Blocks} categoryLink="/" alt="Hellmann's Ketšup"></DomestosCategoriesBox>
      <DomestosCategoriesBox categoryTitle="Fresh" categoryImage={Bottle2} categoryLink="/" alt="Hellmann's Kastmed"></DomestosCategoriesBox>
    </DomestosCategories>
    </DomestosIndexSection>
    </Section>
    </>
  )
}
export default IndexPage
