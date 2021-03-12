import React from "react"
import styled from 'styled-components'
import SEO from '../../components/Seo/Seo'
import HeroBanner from '../../assets/images/hellmanns-about.jpg';
import AccordionImage from '../../assets/images/hellmanns-accordion-about.jpg';
import Accordion from "../../components/AccordionDomestos/AccordionDomestos"
import ScrollAnimation from 'react-animate-on-scroll'

const Section = styled.section`
    width:100%;
    margin:auto;
    margin-bottom:30px;
`;

const DomestosAboutSection = styled.section`
    width: 90vw;
    max-width: 1200px;
    padding-top:100px;
    margin: 0 auto;
    ul {
      padding-left:20px;
    }
    img {
      width: 100%;
      margin-bottom:10px;
      object-fit: cover;
    width: 100%;
    height: 450px;
    @media(max-width:992px){
    height:auto;
    }
    }
    @media(max-width:992px){
    padding-top:80px;
    }
    h1 {
      text-align: center;
      text-transform: uppercase;
      margin: 10px 0;
      color: #06154b;
    }
    h2 {
      color: #06154b;
    }
`;
const SectionAccordion = styled.div`
    margin: 0 auto;
    @media(max-width:992px){
    padding:0px;
    }
    img {
    max-width: 40vw;
    padding: 20px;
    @media(max-width:992px){
    width:100%;
    max-width:100%;
    padding:0px;
    }
    }
    &Accordion {
      padding: 15px 0px;
    }
`;

const AccordionTab = styled.div`
    max-width:1240px;  
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
     <SEO title="Puhas kodu. Puhas planeet. Puhas tulevik." description="Domestose kodukeemia jätkusuutlikkus. Puhas kodu. Puhas planeet. Puhas tulevik. Loome uusi tehnoloogiaid, et kujundada uus tulevik koristamisele ja puhtusele"/>
   <Section> 
   {/* <DeliveryHeroImage src={HeroImage} alt="Magnum delivery"/> */}
   {/* <AboutHeroImage src={HeroBanner} alt="Lipton Eesti jätkusuutlik tee"/> */}
   <DomestosAboutSection>
    <ScrollAnimation animateIn="animate__bounceInLeft" animateOnce="true">
     <h1>Puhas kodu. Puhas planeet. Puhas tulevik.</h1>
    </ScrollAnimation>
    <ScrollAnimation animateIn="animate__bounceInRight" animateOnce="true">
    <p>Kujundame uut koristamise tulevikku ja see algab sajanditevanuse keemiaajaloo uuesti leiutamisest. Miljardid inimesed üle kogu maailma soovivad tooteid, mis on mikroobidele ja plekkidele veelgi vastupidavamad ning mida on veelgi mugavam kasutada. Küll aga soovivad ka inimesed, et need tooted oleksid planeedi suhtes hoolivamavad. Teadus ja tehnoloogia on jõudnud nii kaugele, et see on nüüd võimalik!</p>
    </ScrollAnimation>
    <ScrollAnimation animateIn="animate__bounceIn" animateOnce="true">
    <img src={HeroBanner} alt="Domestos puhastusvahendid. Puhas kodu. Puhas planeet."></img>
    </ScrollAnimation>
    <ScrollAnimation animateIn="animate__bounceInLeft" animateOnce="true">
    <p>Põlvkondade vältel oleme aidanud eemaldada mustust ja plekke, mis aitavad inimestel elada tervislikumalt ja nauditavamalt.</p>
    </ScrollAnimation>
    <ScrollAnimation animateIn="animate__bounceInRight" animateOnce="true">
    <p>Meie jõupingutused keskkonnamõju vähendamiseks on olnud märkimisväärsed ja mõningal määral murrangulised, kuid teame, et peame tegema veelgi rohkem. Veel suuremas mastaabis ja veel kiiremini. See kõik algab koostisosadest, mida kasutame. Koostisosad põhjustavad kasvuhoonegaaside ja heitkoguste suurima osa kogu meie kodukeemia tootmisprotsessi vältel ning peame seda muutma.</p>
    </ScrollAnimation>
    <ScrollAnimation animateIn="animate__bounceInLeft" animateOnce="true">
    <p>Nii oleme välja pakkunud uue strateegia – puhas tulevik ja nii muudame mõned maailma kõige populaarsemad koristus- ja pesupesemisbrändid palju jätkusuutlikumaks kui varem. Võtame kasutusse taastuvaid ja ringlussevõetud süsinikuallikaid, et peatada sõltuvus asendamatutest fosiilkütustest maapõuest. Kasutades jätkusuutlikke aineid, saame mängida oma osa võitluses kliimamuutusega ja aidata säilitada, taastada ja uuendada planeedi loodusvarasid.</p>
    </ScrollAnimation>
    <ScrollAnimation animateIn="animate__bounceInRight" animateOnce="true">
    <h2>Innovatsioon revolutsiooni taga</h2>
    </ScrollAnimation>
    <ScrollAnimation animateIn="animate__bounceInLeft" animateOnce="true">
    <p>Muudame kõike alates koostisosade valmisest kuni puhastus- ja pesutoodete pakendamiseni. Puhta tuleviku kaudu püüame aastaks 2030 asendada 100% fosiilkütustest pärinevast süsinikust kodukeemia toodete formulatsioonides taastuva või ringlussevõetud süsinikuga.</p>
    </ScrollAnimation>
    <ScrollAnimation animateIn="animate__bounceInRight" animateOnce="true">
    <p>Kuid see pole veel kõik, Unileveris oleme pühendunud saavutamaks järgmised eesmärgid:
      <ul>
      <ScrollAnimation animateIn="animate__bounceInRight" animateOnce="true">
        <li>Metsaraiest vaba tarneahelda saavutamine aastaks 2023.</li>
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__bounceInLeft" animateOnce="true">
        <li>Tagame täielikult süsinikust heitgaasidevaba tootmise aastaks 2039.</li>
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__bounceInRight" animateOnce="true">
        <li>Vähendame meie toodete mõjul tekkivate kasvuhoonegaaside hulka poole võrra aastaks 2030.</li>
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__bounceInLeft" animateOnce="true">
        <li>Muudame meie tootepreparaadid biolagunevateks aastaks 2030.</li>
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__bounceInRight" animateOnce="true">
        <li>Vähendame esmakordse plastpakendi kasutamist poolt võrra. Tagame, et kõik meie plastpakendid on 2025. aastaks korduvkasutatavad, ringlussevõetavad või komposteeritavad ning aastaks 2025 on pakendites kasutatud vähemalt 25% ringlussevõetud plastikut.</li>
      </ScrollAnimation>
      </ul>
    </p>
    </ScrollAnimation>
    <SectionAccordion>
            <Accordion>
              {/* Ingredients */}
              <AccordionTab label="Taastuvad ja ringlussevõetud koostisosad.">
                <p>Kui sillutame teed oma tooteformulatsioonide vabastamiseks süsinikdioksiidist, peame mitmekesistama kasutatavaid süsinikuallikaid. Näiteks võtma süsnikku taimedelt (roheline süsinik), atmosfäärist (lilla süsinik), mereallikatest nagu vetikad (sinine süsinik) või jäätmetest nagu plast (hall süsinik). Me nimetame seda süsiniku vikerkaareks.</p>
                <img src={AccordionImage} alt="Domestose jätkusuutlik areng keemiatööstuses"></img>
                <p>Unilever on Renewable Carbon Initiative (RCI) asutuse juhatuseliige. See asutus on hiljuti loodud koalitsioon, mille eesmärk on tuua taastuv süsinik poliitilisele areenile ning arendada ja rakendada jätkusuutlikku tulevikku keemia- ja plastitööstusele.</p>
              </AccordionTab>
              {/* Allergens */}
              <AccordionTab label="Biolagunduvus vee säilitamiseks on suur.">
                <p>Töötame koos oma innovatsioonipartneritega, et luua uue põlvkonna puhastuspolümeerid ja lõhnaained. Töötame selle nimel, et meie tooted ei jätaks keskkonda jalajälgi ning edeneme selles suunas hästi.</p>
              </AccordionTab>
              <AccordionTab label="Kompaktne ja kontsentreeritud valem väiksema süsinikujalajälje saamiseks.">
                <p>Et vähendada kodukeemiatoodete kasvuhoonegaaside heitkoguseid, kavandame oma tooteid vähema arvu, kuid paremini toimivate koostisosadega. Samuti loome palju mugavamaid formaate nagu on näiteks pesukapslitel. Täitepakid, mis on palju säästlikumad, aitavad vähendada plastikureostust ja kasvuhoonegaase. Samuti loome suure kontsentratsiooniga vedelikke ja pulbreid. Neid tegevusi tehes oleme juba praeguseks suutnud vähendada süsiniku jalajälge mõningatel toodetel juba üle 66%.</p>
              </AccordionTab>
              <AccordionTab label="Jäätmevaba maailma jaoks mõeldud pakendid.">
                <p>Saame kõrvaldada plastiku jäätmed, kui tegutseme kiiresti ja radikaalselt tsükli kõikides punktides. See nõuab meie pakenditele ja toodetele lähenemisel põhjalikku ümbermõtestamist, enneolematu kiiruse ja intensiivsusega uute ja uuenduslike materjalidega tutvustamist ning uute ärimudelite laiendamist.</p>
              </AccordionTab>
              <AccordionTab label="Tooted, mis aitavad kasutamise ajal energiat ja vett vähendada.">
                <p>Kuigi teeme palju tööd pakendite ja koostisosade loomiseks vajaliku energia ja vee vähendamiseks, on sellel, kui meie tooteid kasutatakse inimeste kodudes, ka märkimisväärne keskkonnamõju. Nii töötame välja uusi lahendusi, mis toimivad hästi ka madalatel temperatuuridel, vajavad loputamiseks vähem vett või isegi üldse mitte vett. Oma toodetega julgustame inimesi ka vee ja energia säästmiseks valima kiire pesutsükli.</p>
              </AccordionTab>
            </Accordion>
          </SectionAccordion>
    </DomestosAboutSection>
    </Section>
    </>
  )
}
export default AboutPage
