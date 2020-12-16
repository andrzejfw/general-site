import React from "react"
import styled from 'styled-components'
import SEO from '../components/Seo/Seo'
import VideoHero from '../assets/videos/hellmanns-hero-sustainability.mp4';
import Img1 from '../assets/images/man-on-the-field.jpg';
import Img2 from '../assets/images/eggs.png';
import Img3 from '../assets/images/seeds.png';
import Img4 from '../assets/images/tomatoes.jpg';
import BgFooter from '../assets/images/hellmanns-bg-footer.png';
import BgContent from '../assets/images/hellmanns-bg-content.png';


const Section = styled.section`
    width:100%;
    margin:auto;
    text-align: center;
`;

const Hero = styled.section`
      position:relative;
      
      margin-bottom: -5px;
      width:100%;
  .hero-video {
    position: relative;
    width: 100%;
    height: 500px;
    object-fit: cover;

    @media(max-width:992px){
    height: 250px;
    margin-top: 60px;
    }
  }
`;
const HellmannsAboutSection = styled.section`
    background: #FDF6E8;
    padding-bottom:40px;
`;
const HellmannsSustainabilitySectionContent = styled.section`
    width: 90vw;
    margin: 0px auto;
    max-width: 1200px;
    background: #FDF6E8;
    @media(max-width:992px){
    padding-bottom:20px;
    }
    padding: 20px 0 50px;
    color: #004976;
    h1 {margin-bottom:40px;}
`;

const ImagewithText = styled.section`
    display: flex;
    width: 100%;
    margin-bottom:20px;
    justify-content: space-between;
    @media(max-width:992px){
    flex-wrap: wrap;
    }
`;
const ImagewithTextOposite = styled.section`
    display: flex;

    width: 100%;
    margin-bottom:20px;
    justify-content: space-between;
    @media(min-width:993px){
    img{order:1;}
    div{order:2;}
    }
    @media(max-width:992px){
    flex-wrap: wrap;
    }
`;
const Image = styled.img`
    width: 48%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 2px 2px 8px black;
    height: 100%;
    margin: auto 0;
    @media(max-width:992px){
    width:100%;
    margin-bottom:20px;
    }
`;
const Text = styled.section`
    font-size: 20px;
    color: #004976;
    width: 48%;
    -ms-flex-item-align: center;
    align-self: center;
    p {margin:0;}
    h2 {margin-bottom:1rem 0 0 0;}
    @media(max-width:992px){
    width:100%;
    padding:0;
    p {margin-bottom:20px;}
    }
`;

const SustainabilityPage = () => {
  return (
   <>
   <SEO title="Jätkusuutlikult hangitud koostisosad" description="Hellmann'si jätkusuutlikult hangitud koostisosad. Valmistame tooteid, mis mitte ainult ei maitse hästi, vaid teevad head ka meie klientidele ja planeedile."/>
   <Section> 
   {/* <DeliveryHeroImage src={HeroImage} alt="Magnum delivery"/> */}
   <Hero>
      <video className="hero-video" autoPlay loop muted>
      <source src={VideoHero} type="video/mp4" />
      </video>
  </Hero>
   <HellmannsAboutSection>
   <HellmannsSustainabilitySectionContent>
        <h1>Jätkusuutlikult hangitud koostisosad</h1>
    <ImagewithText>
    <Image src={Img1} alt="Me hoolime jätkusuutlikkusest"></Image>
    <Text>
      <h2>Me hoolime jätkusuutlikkusest</h2>
      <p>Kuigi sellest on juba üle 100 aasta möödas, kui Richard Hellmann avas New Yorkis oma esimese restorani, jätkame me nüüdki kõrge kvaliteediga koostisosade kasutamist, et tuua oma majoneesides, kastmetes ja ketšupites välja just parim. Hangime koostisosasi jätkusuutlikest allikatest, sest tahame, et meie tooted mitte üksnes ei maitseks hästi, vaid teeks head ka meie klientidele ja plaanidele.</p>
    </Text>
    </ImagewithText>
    <ImagewithTextOposite>
    <Image src={Img2} alt="Hellmann’si majoneesis kasutatakse õrrekanade mune"></Image>
    <Text>
      <h2>Õrrekanade monad</h2>
      <p>Me valmistame igal aastal suures koguses majoneesi. See tähendab, et me kasutame palju mune. Ja meie pühendumus kasutada vaid puurivabasid mune muudab sõna otseses mõttes miljonite kanade elukvaliteeti väga palju. Nii et võime uhkusega öelda: oleme saavutanud oma eesmärgi kasutada õrrekanade mune. Oleme ka ainus kaubamärk, mis kasutab munapulbri asemel ehtsat munakollast
      </p>
    </Text>
    </ImagewithTextOposite>
    <ImagewithText>
    <Image src={Img3} alt="Hellmann’s kasutatab vastutustundikult hangitud õlisid"></Image>
    <Text>
      <h2>Vastutustundlikult hangitud õlid</h2>
      <p>Meie tarnijate valik põhineb sellel, kuidas nad oma saaki kasvatavad ja korjavad. Ja teeme kõik endast oleneva tagamaks, et meid õliga varustavad farmid on pühendunud vastutustundlikele põllumajandustavadele säilitamaks ja kaitsmaks oma maad tulevastele põlvkondadele.</p>
    </Text>
    </ImagewithText>
    <ImagewithTextOposite>
    <Image src={Img4} alt="Hellmann’si ketšupis kasutatakse jätkusuutlikult korjatud tomateid."></Image>
    <Text>
      <h2>Jätkusuutlikult korjatud tomatid</h2>
      <p>Kõik Hellmann`s ketšupid on valmistatud säästlikult hangitud tomatitest, tooted ei sisalda säilitusaineid ning on valmistatud ehtsatest ja puhastest koostisosadest.
      </p>
      <p>Me usume, et tomatid on ideaalse ketšupi saladuseks. Ja hoolitseme selle eest, et meie tooted oleksid vaid kõrgeima kvaliteediga! Samuti me teame, et parima maitsega tomatid pärinevad parimatest kasvukohtadest. Seetõttu oleme pühendunud oma ketšupite valmistamisel säästlikult kasvatatud ja korjatud tomatite kasutamisele. Lisaks nende kõrgele kvaliteedile kaitseb selline tarneahel jätkusuutlikku põllumajandust ka tulevaste põlvkondade jaoks.</p>
    </Text>
    </ImagewithTextOposite>
    </HellmannsSustainabilitySectionContent>
    </HellmannsAboutSection>
    </Section>
    </>
  )
}
export default SustainabilityPage
