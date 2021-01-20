import React from "react"
import styled from 'styled-components'
import SEO from '../../components/Seo/Seo'
import DoveSustainabilityHeroImg from '../../assets/images/dove-sustainability-hero.jpg'
import DoveSustainabilityHeroImgMobile from '../../assets/images/dove-sustainability-hero-mobile.jpg'


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
      font-size: 1rem;
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
      content: url(${DoveSustainabilityHeroImgMobile});
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
   <SEO title="Dove jätkusuutlikkus" description="Dove jätkusuutlikkus. Dove avaldab parimad võimalikku mõju nii keskkonnale, kust meie tooted pärinevad, kui ka inimestele, kes nendesse panustavad."/>
   <ImageSection>
      <DoveHeroImage src={DoveSustainabilityHeroImg} alt="Dove"/>
   </ImageSection>
   <Section> 
      <h1>Dove jätkusuutlikkus</h1> 
      <p>Dove mängib oma osa ülemaailmas liikumises madala süsinikusisaldusega majanduse loomiseks. Suurendame taastuvenergia kasutamist tootmises, kui liigume oma süsnikujalajälje vähendamise suunas. Selleks on Unilever seadnud mitmed jätkusuutlikkuse suurendamise eesmärgid. Üheks teaduspõhiseks eesmärgiks on vähendada meie toodete kasvuhoonegaaside mõju kogu nende elutsükli jooksuls vähemalt poole võrra aastaks 2030.</p>
      <h2>Taastuvenergia kasutamine</h2>
      <p>Soovime, et meie tehased töötaksid ainult taastuvenergia abil. Näiteks meie seebi tehased Ameerikas ja Saksamaal juba kasutavad 100% tuule- ja päikeseenergiat ning Indoneesia tehas läheb üle jätkusuutlikule biomassile. Samuti näiteks Aguai tehas, mis valmistab Brasiilia jaoks deodorante, töötab juba täielikult taastuvenergia abil, kasutab ära kõik tavajäätmed ning puhastab vihmavett, millega rahuldab 60% tehase vajadusest.</p>
      <h2>Toodete transport</h2>
      <p>Oleme pühendunud kasutama võimalikult palju keskkonnasõbralikke saatmisviise, otsides alati võimalusi süsinikdioksiidi hetimete vähendamiseks kogu maailmas. Uuenduslik tehnoloogia, madalma heitkogusega kütused ja maanteelt raudteele üleminek on vaid mõned viisid, kuid oleme suutnud vähendada oma keskkonnamõjusid ja luua säästavamat tootmist. Unilever kasutab kasvuhoonegaaside heitkoguse vähendamiseks ka uuenduslikku rakendust. Oleme läinud üle vedelale lämmastikgaasile, madalama heitkogusega kütustele, mis aitavad kaasa võrreldes diislikütusega vähendada selliseid hetmeid nagu süsinikdioksiid ja lämmastikoksiid. </p>
      <h2>Süsinikujalajälje vähendamine</h2>
      <p>Meie planeedi eest hoolitsemine ja süsinikdioksiidi heitmete vähendamine pole alati lihtne, kuid meie jaoks on see tohutult oluline. Seetõttu hoolitseme selle eest, et kasutaksime keskkonnastrateegiaid igas etapis – alates jätkusuutlikust tarneahelast ja parimate võimaluste leidmisest kliimamuutuse vastu võitlemiseks kuni taastusvenergiat kasutavate toodete väljatöötamiseni.</p>
      <p>Oleme juba üle 25 aasta teinud koostööd Unileveri ohutuse ja keskkonna tagamise keskusega (SEAC), et välja töötada ja täisutada parimaid viise keskkonnamõju vähendamiseks. Ligikaudu 170 maailmatasemel teadlast teevad koostööd meie teadus- ja arendusmeeskondadega, et tagada meie toodete ohutus ja keskkonnasäästlikkus ning aidata kaitsta planeeti. Taastuvate energiaallikate, veekasutuse vähendamise ja tavajäätmete prügilasse viimise korral oleme täielikult pühendnud keskkonnakaitsele. Oleme pühendnud oma toodete keskkonnajalajälje vähendamisele kogu tarneahelas vähemalt poole võrra, alates koostisosade hankimisest kuni meie toodete kasutamise ja ülejääkide kõrvaldamiseni.</p>
      <h2>Jätkusuutlikult hangitud koostisoad</h2>
      <p>Kui hoolite planeedist ja inimestest, on meil midagi ühist. Dove on täielikult pühendnud jäätkusuutlike ja eetliste toodete loomisele. Sellepärast tähendab meie vastutustundliku hankimise poliitika ja säästva põllumajanduse koodeks, et töötame ainult koos tarnijatega, kes järgivad samu kõrgeid standardeid, mille kehtestame endale. Alates töötajate õigustest kuni maaõiguste kaitsemiseni. Soovime avaldada parimad võimalikku mõju nii keskkonnale, kust meie tooted pärinevad, kui ka inimestele, kes nendesse panustavad.</p>
    </Section>
    </>
  )
}
export default SustainabilityPageDove
