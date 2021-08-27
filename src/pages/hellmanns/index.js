import React from "react"
import styled from 'styled-components'
import SEO from '../../components/Seo/Seo'
import HellmannsCategories from '../../components/HellmannsCategories/HellmannsCategories'
import HellmannsCategoriesBox from '../../components/HellmannsCategories/HellmannsCategoriesBox'
import HellmannsHeroImg from '../../assets/images/hellmanns-hero-banner.jpg'
import Mayo from '../../assets/images/hellmanns-mayo.png'
import Sauce from '../../assets/images/hellmanns-sauce.png'
import Ketchup from '../../assets/images/hellmanns-ketchup.png'
import BannerWithVideoHellmanns from "../../components/BannerWithVideoHellmanns/BannerWithVideoHellmanns"
import BackgroundImage from '../../assets/images/hellmanns-video-bg.png'
import backgroundMobile from '../../assets/images/hellmanns-video-bg-mobile-textvideo.png'
import HellmannsBannerAndText from '../../components/HellmannsBannerAndText/HellmannsBannerAndText'
import CampaingOneImg from '../../assets/images/hellmanns-hero-banner.jpg'
import CampaingTwoImg from '../../assets/images/ThePlasticsProblem.jpg'
import ScrollAnimation from 'react-animate-on-scroll'

const Section = styled.section`
    width:100%;
    margin:auto;
    padding-bottom:30px;
    text-align: center;
    background: #fdf6e8;

    @media (max-width: 692px) {
      margin-bottom: -50px;
    }
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
   <SEO title="Hellmann's Eesti" description="Hellmann's Eesti. Loe lähemalt meie majoneesi, ketšupi ja kastmete kohta. Tutvu lähemalt meie soovitatud retseptidega või Hellmann'si tuntud kaubamärgiga."/>
   <Section> 
    <ScrollAnimation animateIn="animate__fadeInDown" animateOnce="true"> 
      <HellmannsHeroImage src={HellmannsHeroImg} alt="Magnum jäätis"/>
    </ScrollAnimation> 
    <HellmannsCategories sectionTitle="Meie kategooriaid">
      <HellmannsCategoriesBox categoryTitle="Majonees" categoryImage={Mayo} categoryLink="/hellmanns/products?filter=Majonees" alt="Hellmann's Majonees"></HellmannsCategoriesBox>
      <HellmannsCategoriesBox categoryTitle="Ketšup" categoryImage={Ketchup} categoryLink="/hellmanns/products?filter=Ketsup" alt="Hellmann's Ketšup"></HellmannsCategoriesBox>
      <HellmannsCategoriesBox categoryTitle="Kastmed" categoryImage={Sauce} categoryLink="/hellmanns/products?filter=Kastmed" alt="Hellmann's Kastmed"></HellmannsCategoriesBox>
    </HellmannsCategories>
    <div style={{marginTop: "130px"}}>
    <ScrollAnimation animateIn="animate__fadeInUp" animateOnce="true">
      <BannerWithVideoHellmanns 
          title="Jätkusuutlikult hangitud koostisosad" 
          paragraph="Oleme pühendunud koostisosade hankimisele jätkusuutlikest allikatest. Teame, et peame valmistama tooteid, mis mitte ainult ei maitse hästi, vaid teevad head ka meie klientidele ja planeedile." 
          videoId="vmSKx7zMF1o" 
          background={BackgroundImage}
          backgroundMobile={backgroundMobile}
          button
          videoButtonCTA="Loe lähemalt"
          videoButtonLink="/hellmanns/sustainability"
          mobileHeight="700px"
          >
      </BannerWithVideoHellmanns>
    </ScrollAnimation>
    </div>
    <div style={{marginBottom: "100px"}}>
    <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce="true">
      <HellmannsBannerAndText 
        image={CampaingOneImg}
        title="TOIT ON RAISKAMISEKS LIIGA MAITSEV"
        paragraphText="Aitame inimestel nautida head, kvaliteetset toitu just sellisena nagu see on, ilma muretsemise ja raiskamiseta."
        buttonCTA="Loe rohkem"
        buttonLink="/hellmanns/purpose-one"
        >
      </HellmannsBannerAndText>
    </ScrollAnimation>
    <ScrollAnimation animateIn="animate__fadeInRight" animateOnce="true">
      <HellmannsBannerAndText 
        image={CampaingTwoImg}
        title="PLASTIKU REVOLUTSIOON"
        paragraphText="Meie Hellmann’sis usume järgmist väidet – vähem raiskamist ja rohkem maitset. Ja nagu võib-olla teate, anname endast parima, et inimesed saaksid nautida head, kvaliteetset toitu just sellisena, nagu see on, ilma muretsemata ja raiskamata. "
        buttonCTA="Loe rohkem"
        buttonLink="/hellmanns/purpose-two"
        second
        >
      </HellmannsBannerAndText>
    </ScrollAnimation>
    </div>
    </Section>
    </>
  )
}
export default IndexPageHellmanns
