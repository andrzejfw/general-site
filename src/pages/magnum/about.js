import React from "react"
import styled from 'styled-components'
import SEO from '../../components/Seo/Seo'
// import HeroImage from '../assets/images/magnum-delivery.jpg';
// import WoltBackground from '../assets/images/wolt-delivery.jpeg';
// import BoltBackground from '../assets/images/bolt-delivery.jpg';
// import IceCreamDelivery from '../assets/images/icecream-delivery.jpg';
// import { Link } from 'gatsby';
import Accordion from '../../components/AccordionMagnum/Accordion'
import { Link } from 'gatsby';
import VideoMagnum from "../../components/VideoMagnum/VideoMagnum"



const Section = styled.section`
    width:100%;
    margin:auto;
    margin-bottom:30px;
    text-align: center;
`;

const MagnumAboutSection = styled.section`
    width: 90vw;
    margin: 20px auto;
    max-width: 1200px;
    margin-top:20px;
    @media(max-width:992px){
        margin-top:70px;
    }
`;

// const DeliveryHeroImage = styled.img`
//     width: 100%;
//     object-fit:cover;

//     @media(max-width:992px){
//         height: 300px;
//         object-fit: cover;
//         object-position: -370px;
//     }
// `;



const AboutPage = () => {
  return (
   <>
   <SEO title="Telli jäätis kulleriga koju" description="Telli jäätis kulleriga koju! Oleme avanud Bolt Foodis ja Woltis virtuaalpoed Home of Ice Cream, kust saad tellida oma lemmiku jäätiste kulleriga koju!"/>
   <Section> 
   {/* <DeliveryHeroImage src={HeroImage} alt="Magnum delivery"/> */}
   <MagnumAboutSection>
    <h1></h1>
    <p>Tõelised nautlejad teavad, et õnn peitub väikestes asjades. Asjatundlikult valmistatud jäätis, krõmpsuv rikkaliku koostisega Belgia šokolaad, looduslik Madagaskari vanilje, krõbedad California mandlid ja vastutustundlikult kasvatatud kakao oad, mida toetab ka Rainforest Alliance. Täiuslik lisa hetkele iseendaga. Väljenda ennast, järgi enda stiili, leia inspiratsiooni!</p>
    <h2>On ju teada, et päev ilma naudingu hetketa on raisku läinud päev!</h2>
    <VideoMagnum videoId="sKZhcQmGQE8"></VideoMagnum>
    <p>Esimene Magnum premium pulgajäätis loodi aastal 1989 ning koheselt muutus see ka paljudele rõõmurituaali üheks osaks. Juba päris algusest peale on Magnum seadnud kõrgeid standardeid kvaliteetsetele koostisosadele ning mõelnud neid valides ka looduse peale. Tänapäeval on Magnum juhtiv rahvusvaheline kaubamärk, mida müüakse aastas üle miljardi tüki üle maailma. Magnum on Unileveri suurim jäätise bränd. Kõik meie jäätised on loodud kvaliteetsetest koostisosadest, et pakkuda esmaklassilist jäätist kõikidele klientidele.</p>
    <h2>Kvaliteet ja jätkusuutlikus</h2>
    <p>Magnumi kakaooad peavad läbima pika tee, enne kui neist saab Magnumi šokolaad. Teeme tihedat koostööd Rainforest Alliance’iga, et tagada meie jäätistes kasutatavate kakao ubade vastutustundlikest allikatest pärinemine. Kõik taandub kvaliteedile ja jätkusuutlikusele, tootmisteekonna algusest kuni lõpuni.</p>
    <Accordion>
      <div label={"Mis maitseid müüte?"} isOpen>
            <p>Meie tootevalik muutub sageli, et pakkuda teile parimaid maitseelamusi. Palun külastage meie <Link to="../products">tootelehekülge</Link>, et tutvuda meie aktiivse tootevalikuga. Samuti saate sealt näha, mis kauplustes toodet müüakse.</p>
      </div>

      <div label={"Mulle maitsevad Magnumi tooted ning soovin olla kursis Magnumi uudistega. Kuidas seda teha?"}>
        <p>Kõige parem viis hoida end meie uudistega kursis, on jälgida meid meie <Link to="https://www.facebook.com/magnumeesti/" target="_blank">Facebooki</Link> kanalis. </p>
      </div>

      <div label={"Kust leian informatsiooni koostisosade ja toitumisalase teabe kohta?"}>
        <p>Palun külastage meie <Link to="../products">tootelehekülge</Link>, iga toote all on kõik vajalik informatsioon olemas. </p>
      </div>

      <div label={"Kas Magnumi jäätises sisalduv vanillimaitse pärineb Madagaskarilt? Mis selles erilist on?"}>
        <p>Jah, Magnumi jäätises sisalduv vanilliekstrakt on valmistatud jätkusuutlikult kasvatatud Madagaskari vanillikaunadest. Madagaskari vanillikasvatust on aastate jooksul optimeeritud põlvest põlve parima kvaliteediga vanilli kasvatamiseks.</p>
      </div>

      <div label={"Mis on rubiinkakao?"}>
        <p>Rubiin on neljas šokolaadiliik piima-, valge-, ja tumeda šokolaadi kõrval. See pakub täielikult uut maitset ja kogemust. Rubiinšokolaad on toodetud rubiinist kakaoubadest, mis läbivad ainulaadse tootmisprotsessi uute maitsete ja värvide loomiseks. Rubiin pakub suurt naudingut ning täiesti uut maitseelamust – ei ole kibe, liiga piimjas ega liiga magus, vaid just marjaselt värske ja mahlakalt mahe.</p>
      </div>
      <div label={"Kust on rubiinist kakaooad pärit?"}>
        <p>Rubiinoad kasvavad riikides, mis on juba tuntud kakao kasvatamise poolest. Näiteks Ecuador, Brasiilia, Elevandiluurannik. Spetsiaalselt valitud kakaooad fermenteeritakse ning korjatakse naturaalselt. Oad läbivad ainulaadse tootmisprotsessi, et avada neis looduslikult esinev maitse ja värvitoon.</p>
      </div>
    
      <div label={"Kas ruubinkakao on naturaalne?"}>
        <p>Magnum Ruby jäätisesse ei ole lisatud mitte ühtegi maitse- ega värviainet!</p>
      </div>
    </Accordion>
    </MagnumAboutSection>
    </Section>
    </>
  )
}
export default AboutPage
