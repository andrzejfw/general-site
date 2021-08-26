import React from "react"
import styled from 'styled-components'
import SEO from '../../components/Seo/Seo'
import KnorrHeroImg from '../../assets/images/knorr-hero-hp.jpg'
import KnorrCategories from '../../components/KnorrCategories/KnorrCategories'
import KnorrCategoriesBox from '../../components/KnorrCategories/KnorrCategoriesBox'
import KnorrBannerAndText from '../../components/KnorrBannerAndText/KnorrBannerAndText'
import KnorrBannerAndTextReversed from '../../components/KnorrBannerAndTextReversed/KnorrBannerAndTextReversed'
import CifSpray from '../../assets/images/cif-spray.png'
import CifCream from '../../assets/images/cif-cream.png'
import KnorrAboutHeroImg from '../../assets/images/knorr-about-banner.jpg'
import KnorrAboutHeroImgMobile from '../../assets/images/knorr-about-banner-mobile.jpg'
import KnorrSustainabilityHeroImg from '../../assets/images/knorr-sustainability-banner.jpg'
import KnorrSustainabilityHeroImgMobile from '../../assets/images/knorr-sustainability-banner-mobile.jpg'
import ScrollAnimation from 'react-animate-on-scroll'

const Section = styled.section`
    width:100%;
    margin:auto;
    padding-bottom:30px;
    text-align: center;

    @media (max-width: 692px) {
      margin-bottom: -50px;
    }
`;

const KnorrHeroImage = styled.img`
    width: 100%;
    height: 550px;
    object-fit: cover;
    margin-top: -60px;

    @media (max-width: 1200px) {
        height: 400px;
    }

    @media (max-width: 692px) {
        margin-top: 0;
    }
`;

const IndexPageKnorr = () => {
  return (
    <>
    <SEO title="Knorr toiduvalmistamise tooted" description="Knorr pakub suurepäraseid maitseelamusi ja aitab lähemale tuua teiste kultuuride autentset kööki. Tutvu Knorri kaubamärgi, eesmärkide ning toodetega."/>
    <Section> 
    <ScrollAnimation animateIn="animate__fadeIn" animateOnce="true">
     <KnorrHeroImage src={KnorrHeroImg} alt="Knorr toiduvalmistamise tooted"/> 
    </ScrollAnimation>
    <ScrollAnimation animateIn="animate__fadeIn" delay="600" animateOnce="true">
     <KnorrCategories sectionTitle="Meie kategooriaid">
       <KnorrCategoriesBox categoryTitle="Pakisupid" categoryImage={CifCream} categoryLink="/knorr/products" alt="Knorr Pakisupid"></KnorrCategoriesBox>
       <KnorrCategoriesBox categoryTitle="Topsiroad" categoryImage={CifSpray} categoryLink="/knorr/products" alt="Knorr Topsiroad"></KnorrCategoriesBox>
       <KnorrCategoriesBox categoryTitle="Kiirnuudlid" categoryImage={CifSpray} categoryLink="/knorr/products" alt="Knorr Kiirnuudlid"></KnorrCategoriesBox>
       <KnorrCategoriesBox categoryTitle="Puljongid" categoryImage={CifSpray} categoryLink="/knorr/products" alt="Knorr Puljongid"></KnorrCategoriesBox>
     </KnorrCategories>
    </ScrollAnimation>
     <KnorrBannerAndText
         image={KnorrAboutHeroImg}
         imagemobile={KnorrAboutHeroImgMobile}
         title="Knorri kaubamärgist"
         paragraphText="Knorri lugu sai alguse juba 1838. aastal ning kõrge toidu kvaliteet on olnud meile oluline juba algusest."
         buttonCTA="Loe rohkem"
         buttonLink="/knorr/about"
         >
      </KnorrBannerAndText>
      <KnorrBannerAndTextReversed
         image={KnorrSustainabilityHeroImg}
         imagemobile={KnorrSustainabilityHeroImgMobile}
         title="Knorri jätkusuutlikkus"
         paragraphText="Knorri eesmärk on hankida kõik toorained 100% jätkusuutlikult. Soovime, et meie toit vastaks kõrgeimatele toitumisstandarditele."
         buttonCTA="Loe rohkem"
         buttonLink="/knorr/sustainability"
         >
      </KnorrBannerAndTextReversed>
     </Section>
     </>
   )
}
export default IndexPageKnorr
