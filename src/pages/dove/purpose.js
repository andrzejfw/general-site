import React from "react"
import styled from 'styled-components'
import SEO from '../../components/Seo/Seo'
import DovePurposeHeroImg from '../../assets/images/dove-purpose-hero.jpg'
import DovePurposeHeroImgMobile from '../../assets/images/dove-purpose-hero-mobile.jpg'
import ScrollAnimation from 'react-animate-on-scroll'


const Section = styled.section`
    max-width: 1200px;
    margin:10px auto;
    padding: 0 20px 30px;

    h1 {
      margin: 30px auto 20px;
      text-align: center;
      color: #054281;
      text-transform: uppercase;
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

    @media (max-width: 1100px) {
      object-position: 61%;
    }

    @media (max-width: 800px) {
      object-position: 39%;
    }

    @media (max-width: 692px) {
      margin-top: 50px;
      content: url(${DovePurposeHeroImgMobile});
      object-position: auto;
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

const PurposePageDove = () => {
  return (
   <>
    <SEO title="Meie eesmärk" description="Dove usub, et ilu peaks olema naiste enesekindluse allikas, mitte looma neis ärevust. Aitame noortel mõista, et nad on ilusad just sellisena, nagu nad on."/>
    <ImageSection>
        <ScrollAnimation animateIn="animate__fadeIn" animateOnce="true">
          <DoveHeroImage src={DovePurposeHeroImg} alt="Dove eesmärk - ilu on enesekindluse allikas"/>
        </ScrollAnimation>
    </ImageSection>
    <ScrollAnimation animateIn="animate__fadeIn" animateOnce="true" delay="700">
      <Section> 
          <h1>Meie eesmärk</h1> 
          <p>Usume, et ilu peaks olema naiste enesekindluse allikas, mitte looma ärevust. Sellepärast oleme siin, et aidata naistel arendada positiivset suhet oma välimusega, aidates neil tõsta enesehinnangut ja realiseerida oma täielikku potensiaali.</p>
          <h2>Meie ülemaailmsed uuringud näitavad, et</h2>
          <ul>
            <li>Vaid 4% naistest kogu maailmas peavad end ilusaks ja ärevus välimuse pärast algab juba varajases eas.</li>
            <li>6 tüdrukut 10st on oma väljanägemise pärast nii mures, et loobuvad täielikult igapäevaelus oleamisest – alates ujumisest ja spordimängudest kuni arsti külastamiseni, kooli minemiseni või isegi lihtsalt oma arvamuse avaldamiseni.</li>
          </ul>
          <p>Soovime, et igas vanuses naised ja tüdrukud näeksid oma ilu usalduse allikana. Oleme missioonil, et aidata järgmiste põlvkonna naistel oma välimusega positiivseid suhteid arendada – aitades neil tõsta enesehinnangut ja realiseerida oma täielikku potensiaali.</p>
          <h2>Dove enesehinnangu projekt</h2>
          <p>Alates sotsiaalmeedia kuulsustest kuni täiusliku moemaailmani pommitavad meid ebareaalsed iluideed, mis võivad põhjustada madala enesehinnangu ja ärevuse tundemärke. Selle tõttu asutati Dove’i enesehinnangu projekti 2004. aastal, et aidata järgmiste põlvkondade naistel kasvatada rõõmu ja enesekindlust oma välimuse osas. Projekt pakub enesehinnangu õpet 8-17 aastaste noortele (peamiselt tüdrukutele) erinevate koolitundide, töötubade ja veebikanalite kaudu. Aastaks 2020 oleme jõudnud 60 miljoni nooreni, kes on saavutanud oma eesmärgi, kuid paljude noorteni on veel vaja jõuda. Iga kord, kui valite Dove’i toote, aitate järgmistel noortel jõuda enesekindlust suurendava tõe poole.</p>
          <p>Kõike meie enesehinnangu ressursid on välja töötatud ekspertidega konsulteerides. Teeme koostööd partnerorganisatsioonidega, kellel on ühised eesmärgid tüdrukute ja naiste enesekindluse tõstmiseks.</p>
          <p style={{textAlign: "center", fontWeight: "bold", fontSize: "1.2rem", color: "#054281"}}>Aitame noortel mõista, et nad on ilusad just sellisena, nagu nad on</p>
        </Section>
    </ScrollAnimation>
    </>
  )
}
export default PurposePageDove
