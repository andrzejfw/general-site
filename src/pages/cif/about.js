import React from "react"
import styled from 'styled-components'
import SEO from '../../components/Seo/Seo'
import HeroBanner from '../../assets/images/hellmanns-about.jpg';
import AccordionImage from '../../assets/images/hellmanns-accordion-about.jpg';
import Accordion from "../../components/AccordionCif/AccordionCif"
import CifPurposeHeroImg from '../../assets/images/cif-about.jpg'
import CifPurposeHeroImgMobile from '../../assets/images/cif-about-mobile.jpg'
import { Link } from "gatsby"

const Section = styled.section`
    width:100%;
    margin:auto;
`;

const CifAboutSection = styled.section`
    max-width: 1200px;
    margin: 0 auto;
    margin-bottom: 60px;
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
    margin-top:40px;
    }
    h1 {
      text-align: center;
      margin: 20px;
      color: #165648;
      font-size:34px;
    }
    h2 {
      color: #165648;
      font-size: 24px;
      padding:20px 20px 10px 20px;
    }
    p {
      padding:0 20px;
    }
    .bullets {
      margin-top:20px;
    }
    .pbullets {
      margin-left: 20px;
    }
`;
const SectionAccordion = styled.div`
    margin: 0 auto;
    @media(max-width:992px){
    padding:0px;
    }
    &Accordion {
      padding: 15px 0px;
    }
    p {
      padding:0px;
    }
`;

const AccordionTab = styled.div`
    max-width:1240px;
`;

const CifHeroImage = styled.img`
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
      content: url(${CifPurposeHeroImgMobile});
    }
    
`;


const AboutPage = () => {
  return (
   <>
     <SEO title="About cif" description="Cif puhastusvahendid. Cif usub, et ilusad ja puhtad kodud teevad meid õnnelikumaks ning omavad suurt rolli vaimse tervise heaolus. Tutvu meie kaubamärgiga!"/>
      <CifHeroImage src={CifPurposeHeroImg} alt="Dove eesmärk - ilu on enesekindluse allikas"/>
   <Section> 
   <CifAboutSection>
    <h1>1969. aastal käivitatud ja majapidamises kasutatavad Cifi puhastusvahendid muutsid kodukoristust täielikult.</h1>
    <h2>Kaunilt puhtad pinnad ilma kahjustusteta.</h2>
    <p>Cifi puhastuskreemi abil tekkis võimalus eemaldada mustus pindu kahjustamata, jättes kaunilt puhta tulemuse. Sellest ajast alates on kõik Cifi tooted välja töötatud selleks, et anda parim puhastus pindu kahjustamata, pikendadades nende algset ilu. Tänapäeval loodavad miljonid inimesed kogu maailmas (rohkem kui 60 riigis) Cifi peale, et hoida oma kodu ilusa ja puhtana.</p>
    <h2>Ilu taastamine heaolu taastamiseks.</h2>
    <p>Cifi eesmärk on taastada kodude ja naabruskondade ilu, kus elame, sest see mõjutab positiivselt nende inimeste heaolu, keda teenime. Cif paneb inimesi tundma end veelgi positiivsemalt, usaldama übritsevat keskkonnda ning osalema aktiivsemalt erinevates kogukondades.</p>
    <p>Kuna inimesed kolivad elavama rohkem linnadesse, on Cif ühinenud ÜRO säästva arengu 11. eesmärgiga, mille põhjal juglustab Cif kohalikke kogukondi kasutama oma avalikke üldkasutavaid alasid ning kaunistama avalikke ruume, mis on ajapikku lagunenud või määrdunud. Selle raames on Cif käivitanud mitmeid kampaaniaid, mille eesmärk on taastada avalike ruumide ilu ning parandada inimeste ja kogukondade heaolu. Erinevate pindade, tervete kodude ja naabruskondade puhastamine mitte ainult ei tõsta esteetilist atraktiivsust, vaid käivitab ka positiivse emotsionaalse reaktsiooni. Lihtsamalt öeldes, ilu loob inimestele rõõmu.</p>
    <h2>Puhas maja, puhas meel.</h2>
    <p>Cif usub, et ilusad kodud ja kohad teevad meid õnnelikumaks ning omavad suurt rolli vaimse tervise heaolus. Kuna puhtuse taga on võimas psühholoogia, mis mõjutab otseselt inimese meeleolu, siis on oluline, et kodu puhastamine oleks nauditav ning koristamine tooks naeratuse näole.</p>
    <SectionAccordion>
      <h2>Esimene samm – korrastage oma kapid ja pinnad</h2>
            <Accordion>
              {/* Ingredients */}
              <AccordionTab label="Selgitage välja, mis asjad on olulised/ebaolulised. Millised ebaolulised asjad on võimalik taaskasutada, müüa või annetada?">
                <p>
                  <ul>
                  <li>Kui ees olevad ülesanded hirmutavad teid, alustage väikselt – näiteks kirjutuslaua tühjendamisega, sest puhas kirjutuslaud tekitab puhta meele. Kirjutuslaua puhastamine suurendab tootlikkust.</li>
                  <li>Käige läbi ülejäänud kapid, sahtlid ning eemaldage kõik esemed, mida te enam ei vaja. Sorteerige garderoob näiteks värvi järgi või korrastage faile siltidega.</li>
                  <li>Uurige erinevaid hoiustamise lahendusi nagu korvid, riiulid, mis võiksid aidata põrandapinda puhastada. See mitte ainult ei hoida teie kodu korras, vaid muudab ka koristamise palju lihtsamaks.</li>
                  </ul>
                </p>
              </AccordionTab>
              {/* Allergens */}
              <AccordionTab label="Teine samm – sügav puhastus">
                <p>Kui olete kodu korrastanud, on aeg kodu puhastada tolmust ning mustusest. Lisaks erinevate pindade ja nurkade nühkimise ja poleerimisega, võite tegeleda ka mikrolaineahju, ahju, pesumasina ja muude seadmete puhastamisega. Iga ruumi ja seadme jaoks on Cifil välja pakkuda sobiv puhastusvahend. Palun tutvuge meie <Link to="/cif/products">tootevalikuga</Link>, et välja valida sobivad tooted vajalike pindade puhastamiseks. Palun lugeda tootejuhiseid ja hoiatusi tähelepanelikult.</p>
              </AccordionTab>
            </Accordion>
          </SectionAccordion>
    </CifAboutSection>
    </Section>
    </>
  )
}
export default AboutPage
