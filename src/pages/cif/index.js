import React from "react"
import styled from 'styled-components'
import SEO from '../../components/Seo/Seo'
import CifCategories from '../../components/CifCategories/CifCategories'
import CifCategoriesBox from '../../components/CifCategories/CifCategoriesBox'
import CifBannerAndText from '../../components/CifBannerAndText/CifBannerAndText'
import CifHeroImg from '../../assets/images/cif-hero.jpg'
import CifHeroImgMobile from '../../assets/images/cif-hero-mobile.jpg'
import CifSpray from '../../assets/images/cif-spray.png'
import CifCream from '../../assets/images/cif-cream.png'
import CifPurposeHeroImg from '../../assets/images/cif-about.jpg'
import CifPurposeHeroImgMobile from '../../assets/images/cif-about-mobile.jpg'
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

const CifHeroImage = styled.img`
    width: 100%;
    object-fit: cover;

    @media (max-width: 692px) {
        content: url(${CifHeroImgMobile});
    }
`;

const IndexPageCif = () => {
  return (
   <>
   <SEO title="Cif puhastusvahendid" description="Cifi puhastusvahenditega saab kodu kaunilt puhtaks ja ilusaks pindu kahjustamata. Ilusad kodud teevad meid õnnelikumaks. Uuri lähemalt Cifi kaubamärgi kohta."/>
   <Section> 
    <CifHeroImage src={CifHeroImg} alt="Cif puhastusvahendid"/> 
    <CifCategories sectionTitle="Meie kategooriaid">
    <ScrollAnimation animateIn="animate__fadeInLeft" animatePreScroll={false} animateOnce="true" >
      <CifCategoriesBox categoryTitle="Puhastuskreemid" categoryImage={CifCream} categoryLink="/cif/products" alt="Cif tootevalik - puhastuskreemid"></CifCategoriesBox>
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__fadeInRight" animatePreScroll={false} animateOnce="true" >
      <CifCategoriesBox categoryTitle="Pihustid" categoryImage={CifSpray} categoryLink="/cif/products" alt="Cif tootevalik - pihustid"></CifCategoriesBox>
      </ScrollAnimation>
    </CifCategories>
    <CifBannerAndText
        image={CifPurposeHeroImg}
        imagemobile={CifPurposeHeroImgMobile}
        title="Saavuta puhtus pindu kahjustamata"
        paragraphText="1969. aastal käivitatud ja majapidamises kasutatavad Cifi puhastusvahendid muutsid kodukoristust täielikult."
        buttonCTA="Loe rohkem"
        buttonLink="/cif/about"
        >
      </CifBannerAndText>
    </Section>
    </>
  )
}
export default IndexPageCif
