import React from "react"
import styled from 'styled-components'
import SEO from '../../components/Seo/Seo'
import DoveHomepageHeroImg from '../../assets/images/dove-hero-hp.jpg'
import DoveHomepageHeroImgMobile from '../../assets/images/dove-hero-hp.jpg'
import DoveCategories from '../../components/DoveCategories/DoveCategories'
import DoveCategoriesBox from '../../components/DoveCategories/DoveCategoriesBox'
import Mayo from '../../assets/images/hellmanns-mayo.png'
import Sauce from '../../assets/images/hellmanns-sauce.png'
import Ketchup from '../../assets/images/hellmanns-ketchup.png'
import DoveBannerAndText from '../../components/DoveBannerAndText/DoveBannerAndText'
import DoveSustainabilityHeroImg from '../../assets/images/dove-sustainability-hero.jpg'
import DoveSustainabilityHeroImgMobile from '../../assets/images/dove-sustainability-hero-mobile.jpg'
import DovePurposeHeroImg from '../../assets/images/dove-purpose-hero.jpg'
import DovePurposeHeroImgMobile from '../../assets/images/dove-purpose-hero-mobile.jpg'



const Section = styled.section`
    max-width: 1200px;
    margin:10px auto;
    padding: 0 20px 30px;

    h1 {
      margin: 30px 0 20px;
      text-align: center;
      color: #054281;
    }

    h2 {
      font-size: 2rem;
      font-weight: bold;
      color: #054281;
    }

    ul {
      margin: 0 0 20px 20px;
    }

    
`;

const DoveHeroImage = styled.img`
    width: 100%;
    height: 550px;
    object-fit: cover;

    @media (max-width: 1200px) {
      height: 400px;
    }

    @media (max-width: 692px) {
      margin-top: 50px;
      content: url(${DoveHomepageHeroImgMobile});
    }
`;

const ImageSection = styled.div`
  position: relative;

  &:after {
      content: '';
      background-color: #fff;
      position: absolute;
      border-radius: 100%;
      height: 80px;
      width: 100%;
      left: 50%;
      transform: translateX(-50%);
      bottom: -40px;
    }

    @media (max-width: 692px) {
      &:after {
        height: 40px;
        bottom: -20px;
      }
    }
`;

const SustainabilityPageDove = () => {
  return (
   <>
   <SEO title="Dove kehahooldus" description="Dove kehahooldus ja nahahooldus. Tutvu Dove kaubamärgiga. Vaata lähemalt Dove tootevalikut või tutvu meie kaubamärgi eesmärkide ning jätkusuutlikkusega."/>
   <ImageSection>
      <DoveHeroImage src={DoveHomepageHeroImg} alt="Dove"/>
   </ImageSection>
   <Section>
   <DoveCategories sectionTitle="Meie kategooriaid">
      <DoveCategoriesBox categoryTitle="Majonees" categoryImage={"https://www.dove.com/content/dam/unilever/dove/bulgaria/pack_shot/8710908285127-1906602-png.png"} categoryLink="/" alt="Hellmann's Majonees"></DoveCategoriesBox>
      <DoveCategoriesBox categoryTitle="Ketšup" categoryImage={'https://www.dove.com/content/dam/unilever/dove/bulgaria/pack_shot/8710847972751-1969561-png.png'} categoryLink="/" alt="Hellmann's Ketšup"></DoveCategoriesBox>
      <DoveCategoriesBox categoryTitle="Kastmed" categoryImage={'https://www.dove.com/content/dam/unilever/dove/bulgaria/pack_shot/front/skin_care/hand_and_body_care/dove_hb_lot_rimoist_baby_200ml_cee_l16/dove_rich_moisture_lotion_200ml_fop_cl2-793680.png'} categoryLink="/" alt="Hellmann's Kastmed"></DoveCategoriesBox>
      <DoveCategoriesBox categoryTitle="Ketšup" categoryImage={'https://www.dove.com/content/dam/unilever/dove/bulgaria/pack_shot/front/skin_cleansing/skin_cleansing/dove_men_zel_cool_fre_12x250ml/dove_men_care_cool_fresh_body_and_face_wash_fop_250ml_8710908317361_pl-706073-png.png'} categoryLink="/" alt="Hellmann's Ketšup"></DoveCategoriesBox>
      {/* <DoveCategoriesBox categoryTitle="Kastmed" categoryImage={Sauce} categoryLink="/" alt="Hellmann's Kastmed"></DoveCategoriesBox>
      <DoveCategoriesBox categoryTitle="Majonees" categoryImage={Mayo} categoryLink="/" alt="Hellmann's Majonees"></DoveCategoriesBox>
      <DoveCategoriesBox categoryTitle="Ketšup" categoryImage={Ketchup} categoryLink="/" alt="Hellmann's Ketšup"></DoveCategoriesBox>
      <DoveCategoriesBox categoryTitle="Kastmed" categoryImage={Sauce} categoryLink="/" alt="Hellmann's Kastmed"></DoveCategoriesBox> */}
    </DoveCategories>
    <DoveBannerAndText 
        image={DoveSustainabilityHeroImg}
        imagemobile={DoveSustainabilityHeroImgMobile}
        title="Dove jätkusuutlikkus"
        paragraphText="Kui hoolite meie planeedist ja inimestest, on meil midagi ühist. Dove on täielikult pühendnud jätkusuutlike ja eetliste toodete loomisele."
        buttonCTA="Loe rohkem"
        buttonLink="/dove/sustainability"
        >
      </DoveBannerAndText>
      <DoveBannerAndText 
        image={DovePurposeHeroImg}
        imagemobile={DovePurposeHeroImgMobile}
        title="Meie eesmärk"
        paragraphText="Dove usub, et ilu peab olema naiste enesekindluse allikas, mitte looma neis ärevust. Aitame noortel mõista, et nad on ilusad just sellisena, nagu nad on."
        buttonCTA="Loe rohkem"
        buttonLink="/dove/purpose"
        second
        >
      </DoveBannerAndText>
      </Section>
    </>
  )
}
export default SustainabilityPageDove
