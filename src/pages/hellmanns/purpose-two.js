import React from 'react'
import styled from 'styled-components'
import SEO from '../../components/Seo/Seo'
import HellmannsHeroImg from '../../assets/images/ThePlasticsProblem.jpg'
import HellmannsHeroImgMobile from '../../assets/images/ThePlasticsProblemMobile.jpg'
import Accordion from '../../components/AccordionHellmanns/AccordionHellmanns'
import ScrollAnimation from 'react-animate-on-scroll'

const HellmannsPurposeDiv = styled.div`
    background: #FDF6E8;
    padding-bottom: 10px;

    img {
        width: 100%;
        height: 500px;
        object-fit: cover;

        @media(max-width:992px){
            content: url(${HellmannsHeroImgMobile});
            height: 400px;
            object-position: 25% 0;
        }
    }

    
`;

const HellmannsPurposeSection = styled.section`
    max-width: 1200px;
    margin: 50px auto 100px;
    color: #004976;

    @media(max-width:992px){
        width: 90%;
        margin: 50px auto;
    }

    h1 {
        font-size: 2.5rem;
        text-align: center;
        margin-bottom: 10px;
    }

    h2 {
        text-align: center;
        margin-bottom: 50px;
    }

    h3 {
        text-align: center;
        margin-top: 30px;
    }
`;

const AccordionTab = styled.div`
    max-width:1240px;
`;

const HellmannsPurposePage = () => {
    return (
      <>
      <SEO title="Plastiku Revolutsioon" description="Hellmann'si platsiku revolutsioon. Vähem raiskamist, rohkem maitset! Aastaks 2025 on kõik Hellmann’si tooted pakendatud ümbertöödeldavatesse pakenditesse."/>
        <HellmannsPurposeDiv>
            <ScrollAnimation animateIn="animate__fadeInDown" animateOnce="true">
                <img src={HellmannsHeroImg} />
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__fadeInUp" animateOnce="true" delay="800">
                <HellmannsPurposeSection>
                    <h1>PLASTIKU REVOLUTSIOON</h1>
                    <h2>VÄHEM RAISKAMIST – ROHKEM MAITSET</h2>
                    <p>Meie Hellmann’sis usume järgmist väidet – vähem raiskamist ja rohkem maitset. Ja nagu võib-olla teate, anname endast parima, et inimesed saaksid nautida head, kvaliteetset toitu just sellisena, nagu see on, ilma muretsemata ja raiskamata. Usume, et planeet ei peaks tasuma lõivu meie mugavuse eest ja me kõik peaksime nautima toitu täiel määral, ilma end süüdi tundmata. Just sellepärast võitlemegi oma toodete pakendite raiskamise vastu – aastaks 2025 on kõik Hellmann’s majoneesi tooted pakendatud täielikult taaskasutatavatesse, ümbertöödeldavatesse ja kompostikõlbulikesse plastikpakenditesse. Ja see on alles Hellmann’si plastiku raiskamise vähendamise tee algus.</p>
                    <h3>UURI LÄHEMALT, KUIDAS KA SINA SAAD AIDATA:</h3>
                    <Accordion>
                        <AccordionTab label="1.	KÕIK ALGAB JUBA OSTUST">
                            <p style={{fontWeight: "bold", textAlign: "left"}}>Miks peaksin eelistama tooteid, kus kasutatakse ümbertöödeldud plastikut? Mis on selle kasu? Iga kord, kui valid Hellmann’si toote, toetad meid vähem raiskava maailma loomisel. Ümbertöödeldud plasiku kasutamisel on järgmised keskkonnaalased kasud:</p>
                                <ul style={{fontWeight: "normal", textTransform: "none", textAlign: "left", padding: "0 20px"}}>
                                    <li>Vähendab prügilatesse saadetavate pudelite hulka</li>
                                    <li>Toetab ringlussevõtu infrastruktuuri</li>
                                    <li>Sõltub vähem loodusvaradele nagu nafta</li>
                                    <li>Nõuab vähem energiat ja seega jätab ka väiksema süsinikdioksiidi jalajälje</li>
                                </ul>
                        </AccordionTab>
                        <AccordionTab label="2.	TÜHJENDA ENDA HELLMANN’S PURK/PUDEL ENNE SELLE ÄRA VISKAMIST">
                            <p style={{textAlign: "left"}}>Puhtad purgid saavad tõenäolisemalt ümbertöödeldud kui mustad. Soovitame teil alati ära kasutada viimne kui Hellmann’si piisk, et peatada toidu ja pakendi raiskamine.</p>
                        </AccordionTab>
                        <AccordionTab label="3.	TAASKÄITLE OMA PUDELIT/PURKI">
                            <p style={{fontWeight: "bold", textAlign: "left"}}>Kuidas peaks tarbijad taaskäitlema uusi purke ja pudeleid?</p>
                            <p style={{textAlign: "left"}}>Tarbijad võivad taaskäidelda kõik Hellmann’s majoneesi plastikpurgid või plastikpudelid. Küll aga on plastikpudelitelt vaja enne taaskäitlemist ära võtta kile ja kork. Julgustame tarbijaid koheselt loputama purgid ja pudelid enne nende taaskäitlemist ning järgima kohalikke taaskäitlemise juhiseid. </p>
                        </AccordionTab>
                    </Accordion>
                </HellmannsPurposeSection>
            </ScrollAnimation>
        </HellmannsPurposeDiv>
       </>
     )
    }
  export default HellmannsPurposePage