import React from "react"
import styled from 'styled-components'
import SEO from '../../components/Seo/Seo'
import RexonaCategories from '../../components/RexonaCategories/RexonaCategories'
import RexonaCategoriesBox from '../../components/RexonaCategories/RexonaCategoriesBox'
import RexonaBannerAndText from '../../components/RexonaBannerAndText/RexonaBannerAndText'
import RexonaHeroImg from '../../assets/images/rexona-hero-banner.jpg'
import RexonaHeroImgMobile from '../../assets/images/rexona-hero-banner-mobile.jpg'
import RexonaWomen from '../../assets/images/rexona-women.jpg'
import RexonaMen from '../../assets/images/rexona-men.jpg'
import RexonaPurposeHeroImg from '../../assets/images/rexona-about-hero.jpg'
import RexonaPurposeHeroImgMobile from '../../assets/images/rexona-about-hero-mobile.jpg'


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
        content: url(${RexonaHeroImgMobile});
    }
`;

const IndexPageRexona = () => {
  return (
   <>
   <SEO title="Rexona Avaleht" description="Rexona deodorandid vabastavad lisakaitse just siis, kui seda kõige rohkem vaja läheb. Võid kindel olla, et Rexona hoiab sind kogu päeva värskena. loe lähemalt"/>
   <Section> 
    <CifHeroImage src={RexonaHeroImg} alt="Rexona Avaleht"/> 
    <RexonaCategories sectionTitle="Meie kategooriaid">
      <RexonaCategoriesBox categoryTitle="Naiste deodorandid" categoryImage={RexonaWomen} categoryLink="/rexona/products" alt="Naiste deodorandid"></RexonaCategoriesBox>
      <RexonaCategoriesBox categoryTitle="Meeste deodorandid" categoryImage={RexonaMen} categoryLink="/rexona/products" alt="Meeste deodorandid"></RexonaCategoriesBox>
    </RexonaCategories>
    <RexonaBannerAndText
        image={RexonaPurposeHeroImg}
        imagemobile={RexonaPurposeHeroImgMobile}
        title="Rexona ei vea sind alt."
        paragraphText="Rexona ainulaadne deodorantide tehnoloogia vabastab lisakaitse just siis, kui seda kõige rohkem vaja läheb."
        buttonCTA="Loe rohkem"
        buttonLink="/rexona/about"
        alt="Rexona deodorantide kaubamärgist"
        >
      </RexonaBannerAndText>
    </Section>
    </>
  )
}
export default IndexPageRexona