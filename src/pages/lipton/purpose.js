import React from 'react'
import styled from 'styled-components'
import SEO from '../../components/Seo/Seo'
import BannerWithVideoLipton from '../../components/BannerWithVideoLipton/BannerWithVideoLipton'
import BackgroundImage from '../../assets/images/lipton-cups.jpg'
import backgroundMobile from '../../assets/images/lipton-cups-mobile.jpg'
import ScrollAnimation from 'react-animate-on-scroll'


const LiptonPurposeSection = styled.section`
    max-width: 1200px;
    margin: 50px auto 100px;

    @media(max-width:992px){
        width: 90%;
        margin: 50px auto;
    }
`;

const LiptonPurposePage = () => {
    return (
      <>
      <SEO title="Meie eesmärk" description="Liptoni kaubamärgi eesmärk on äratada maailm kvaliteetsetele ühendustele, et võidelda varjatud üksindusega. Loe rohkem ning liitu meie liikumisega."/>
      <ScrollAnimation animateIn="animate__fadeIn" animateOnce="true">
      <BannerWithVideoLipton 
        title="Meie eesmärk" 
        paragraph="Liptoni eesmärk on äratada maailm kvaliteetsetele ühendustele, et võidelda varjatud üksindusega." 
        videoId="YVyLbd2UpJw" 
        background={BackgroundImage}
        backgroundMobile={backgroundMobile}
        red
        >
      </BannerWithVideoLipton>
      </ScrollAnimation>

      <ScrollAnimation animateIn="animate__fadeIn" delay="800" animateOnce="true">
       <LiptonPurposeSection>
         {/* <h1>Meie eesmärk</h1> */}
         <p>Kui küsid kelleltki, kuidas sul läheb, kas see on tõesti kutse ehtsale vestlusele või lihtsalt viisakas, pealiskaudne žest? Millal helistasid viimati sõbrale, et soovida talle palju õnne sünnipäevaks, selle asemel, et lihtsalt sotsiaalmeedia seinale postitada? Kui tihti lisate tööülesanne nimekirja kolleegidega ühenduse loomise?  </p>
         <p>Elame tsivilisatsiooni ajaloos kõige tehnoloogiliselt ühendatumal ajastul, kuid üksinduse määr on alates aastast 1980 kahekordistunud. Üksindus hiilib meie igapäevaellu – see on varjatud, ootamatu ja kui sellele tähelepanu ei pöörata, võib see mõjutada meie vaimset heaolu.</p>
         <p><b>Miks Lipton selle eest seisab?</b></p>
         <p>Liptoni kaubamärgi juured ja tooted seavad meid ainulaadsesse ning eristavasse olukorda. Lipton on sotsiaalne kaubamärk ning on alati loonud uusi ühendusi. Meie tootekogemus aitab tõesti inimestel olla hetkes kohal ning just see loob olulise ja kvaliteetse ühenduse inimeste vahel.</p>
         <p>Soovime, et teete meiega koostööd, et luua kvaliteetseid ühendusi igapäevaselt. Liitu meie väljakutsega. 
            Kas teadsite, et olles iga päev vähemalt 15 minutit kellegagi reaalselt ühenduses, võib anda sulle palju tervislikuma ja õnnelikuma enesetunde. Soovitame teil meie liikumisega liituda, investeerides oma ajast ainult 15 minutit, et suhelda oma sõbrade, kolleegide ja/või armastatuga.</p>
         <p>Kui koostad oma järgmist igapäevast tegevuskava, proovi lisada oma nimekirja keegi lähedane inimene. Näiteks helista oma vanematele või kohtu sõbraga, keda pole juba kuid näinud. Sellised ülesanded on sama olulised kui kõik teised tegevused sinu nimekirjas. Sellised tegevused aitavad meil olla õnnelikumad ning luua paremaid suhteid oma lähedastega.</p>
       </LiptonPurposeSection>
      </ScrollAnimation>
       </>
     )
    }
  export default LiptonPurposePage