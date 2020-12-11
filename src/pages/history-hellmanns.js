import React from "react"
import styled from 'styled-components'
import SEO from '../components/Seo/Seo'
import VideoHero from '../assets/videos/hellmanns-hero-sustainability.mp4';
import Img1 from '../assets/images/1903.png';
import Img2 from '../assets/images/1913.png';
import Img3 from '../assets/images/1920.png';
import Img4 from '../assets/images/1921.png';
import Img5 from '../assets/images/1922.png';
import BgFooter from '../assets/images/hellmanns-bg-footer.png';
import BgContent from '../assets/images/hellmanns-bg-content.png';
import HeroImage from '../assets/images/hellmanns-history.jpg'

const Section = styled.section`
    width:100%;
    margin:auto;
    text-align: center;
`;

const Hero = styled.section`
      position:relative;
      margin-top: 60px;
      width:100%;
`;
const HellmannsAboutSection = styled.section`
    background: #FDF6E8;
    color: #004976;
    h1 {margin-bottom:40px;}
`;
const HellmannsAboutSectionContent = styled.section`
    width: 90vw;
    margin: 0px auto;
    max-width: 1200px;
    background: #FDF6E8;
    color: #004976;
    @media(max-width:992px){
    }
    position: relative;
    padding: 0 0 40px;
`;

const ImagewithText = styled.section`
    display: flex;
    position:relative;
    width: 100%;
    justify-content: space-between;
    @media(max-width:992px){
    flex-wrap: wrap;
    }
    :before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    height: 100%;
    width: 6px;
    background: #004976;
    @media(max-width:992px){
    left:-10px;    
    }
}
`;
const ImagewithTextOposite = styled.section`
    display: flex;
    position:relative;
    width: 100%;
    justify-content: space-between;
    :before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    height: 100%;
    width: 6px;
    background: #004976;
    @media(max-width:992px){
    left:-10px;    
    }
}
    @media(min-width:993px){
    img{order:1;}
    div{order:2;}
    }
    @media(max-width:992px){
    flex-wrap: wrap;
    }
  h2:before {
    left: auto !important;
    right: -21px !important;
    @media(max-width:992px){
    left:-10px !important;    
    }
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
    position: relative;
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
    h2:before {
    background: #004976;
    content: '';
    position: absolute;
    left: -21px;
    width: 12vw;
    height: 6px;
    top: 19px;
    @media(max-width:992px){
    left:-10px;    
    }
}
`;

const HistoryHeroImage = styled.img`
    width: 100%;
    object-fit:cover;

    @media(max-width:992px){
        height: 250px;
        object-fit: cover;
    }
`;

const SustainabilityPage = () => {
  return (
   <>
   <SEO title="Hellmann’si ajalugu" description="Hellmann's majoneesi ajalugu. Asutaja Richard Hellmanni loodud majoneesi hakati tootma juba 1920. aastal, mis on tänapäevaks jõudnud paljude toidulauale!"/>
   <Section> 
   <Hero>
   <HistoryHeroImage src={HeroImage} alt="Hellmanns History"/>
  </Hero>
   <HellmannsAboutSection>
   <h1>Ajalugu</h1>
   <HellmannsAboutSectionContent>
    <ImagewithText>
    <Image src={Img1} alt="Eggs"></Image>
    <Text>
      <h2>1903</h2>
      <p>Noor Richard Hellmann oli juba 14-aastasena leidnud armastuse toidu vastu ning praktiseeris oma oskuseid kohalikul toiduturul. Edu hakkas teda saatma alles siis, kui kolis New Yorki.</p>
    </Text>
    </ImagewithText>
    <ImagewithTextOposite>
    <Image src={Img2} alt="Eggs"></Image>
    <Text>
      <h2>1913</h2>
      <p>Richard kohtas oma tulevast naist, Margareti, kelle isa oli kahe restorani omanik. Samal aastal Richard ja Maragaret abiellussid ning viisid ellu oma suure unistuse. Nad avasid oma poe ning sellega sündis Hellmann’s Delicatessen kaubamärk.</p>
    </Text>
    </ImagewithTextOposite>
    <ImagewithText>
    <Image src={Img3} alt="Eggs"></Image>
    <Text>
      <h2>1920</h2>
      <p>Meie sünnikohaks olev deli avas uksed otse New Yorgi südames: Columbuse avenüül, Manhattanil, kus Richard alustas oma nüüdseks legendaarse majoneesi loomist. Purgid täideti ääreni maitsvate koostisosade seguga, mis olid valitud saavutamaks maksimaalselt kreemjat tekstuuri ja suurepärast maitset.</p>
    </Text>
    </ImagewithText>
    <ImagewithTextOposite>
    <Image src={Img4} alt="Eggs"></Image>
    <Text>
      <h2>1921</h2>
      <p>Toodet täiustati kuni Richard, Margaret ning nende kliendid uskusid, et see ongi parim võimalik majonees. Olles uhke oma toote üle, sidus Richard sinise lindi ümber majoneesi purkidega, et sellega kinnistada kõrgeimat kvaliteedi märki. Sinise lindi standard kehtib tänaseni.</p>
    </Text>
    </ImagewithTextOposite>
    <ImagewithText>
    <Image src={Img5} alt="Eggs"></Image>
    <Text>
      <h2>1922</h2>
      <p>Richard avas San Franciscos majonees tehase ning maailma suurima majonees tootmise Long Island City’s, New Yorkis. 1922.a. avaldati Behrmani kirjastuses Chicagos esimene Hellmann`s majoneesi kokaraamat. Vähem kui 15 aastaga ehitas Richard Hellmann üles täiesti uue tööstuse, mida kunagi varem polnud. Rekordilise ajaga sai Hellmann`s maailma lemmikuks oma eksimatult imelise maitse ja tõelise naudingu poolest, mida ta suutis kõikjal inimeste toidulauale tuua. Richard uskus, et nauding on oluline ja see uskumus kujundab siiani meie igapäevast tööd.</p>
    </Text>
    </ImagewithText>
    </HellmannsAboutSectionContent>
    </HellmannsAboutSection>
    </Section>
    </>
  )
}
export default SustainabilityPage
