import React from "react"
import styled from 'styled-components'
import SEO from '../../components/Seo/Seo'
import HeroBanner from '../../assets/images/domestos-hero.jpg';
import AccordionImage from '../../assets/images/hellmanns-accordion-about.jpg';
import Accordion from "../../components/AccordionDomestos/AccordionDomestos"
import VideoHero from '../../assets/videos/domestos-homepage.mp4';
import DomestosCategories from '../../components/DomestosCategories/DomestosCategories'
import DomestosCategoriesBox from '../../components/DomestosCategories/DomestosCategoriesBox'
import Bottle from '../../assets/images/domestos-bottle.png'
import Blocks from '../../assets/images/domestos-blocks.png'
import Bottle2 from '../../assets/images/domestos-bottle2.png'
import BannerWithVideoDomestos from '../../components/BannerWithVideoDomestos/BannerWithVideoDomestos'
import MagnumVideoBackground from '../../assets/images/magnum-video-background.jpg'



const Section = styled.section`
    width:100%;
    margin:auto;
`;

const DomestosIndexSection = styled.section`
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
const DomestosHeroImage = styled.img`
    width: 100%;
    height: 550px;
    object-fit: cover;

    @media (max-width: 1200px) {
        height: 400px;
        content: url(${HeroBanner});
    }

    @media (max-width: 692px) {
        margin-top: 50px;
    }
`;

const IndexPage = () => {
  return (
   <>
     <SEO title="Domestos - tapab 99,9% bakteritest" description="Domestos kodukeemia puhastusvahenid. Puhas kodu. Puhas planeet. Puhas tulevik. Vaata lähemalt meie tooteid ning tutvu meie puhastusvahenditega."/>
   <Section> 
   <DomestosHeroImage src={HeroBanner} alt="Domestos WC puhastusvahendid avaleht"/> 
   <DomestosIndexSection>
   <DomestosCategories sectionTitle="Meie kategooriaid">
      <DomestosCategoriesBox categoryTitle="WC-puhastusvahendid" categoryImage={Bottle} categoryLink="/domestos" alt="WC-puhastusvahendid"></DomestosCategoriesBox>
      <DomestosCategoriesBox categoryTitle="WC-värskendajad" categoryImage={Blocks} categoryLink="/domestos" alt="WC-värskendajad"></DomestosCategoriesBox>
    </DomestosCategories>
    
    </DomestosIndexSection>
    <BannerWithVideoDomestos 
                title="Puhas kodu. Puhas planeet. Puhas tulevik" 
                paragraph="Põlvkondade vältel oleme aidanud eemaldada mustust ja plekke, mis aitavad inimestel elada tervislikumalt ja nauditavamalt." 
                videoId="I_Sst3p19Ek" 
                button
                videoButtonCTA="Loe rohkem"
                videoButtonLink="/domestos/about"
                >
    </BannerWithVideoDomestos>
    </Section>
    </>
  )
}
export default IndexPage
