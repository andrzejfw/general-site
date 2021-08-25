import React from "react"
import styled from 'styled-components'
import PrivacyStyle from "../components/privacyNotice/privacy-notice"
// import Accordion from '../components/AccordionLipton/Accordion'
import SEO from '../components/Seo/Seo'


const Section = styled.section`
    width:100%;
    max-width:1200px;
    margin:auto;
`;

const ImgLogo = styled.img`
  width:90px;
`;

const General = styled.div`
  box-shadow:0 0 12px 0 #e6e3e6;
  border-radius:20px;
  margin-bottom:30px;
`;


const Privacy = () => {
  
    return (
     <>
     <SEO title="Veebilehe reeglid" description="Juriidiline teave. Veebilehel olev informatsioon ja kogu teave toodete, teenuste ja kampaaniate kohta kehtib ainult Eesti kohta ja ainult Eestis. Unilever."/>
      <Section>    
        <PrivacyStyle/>
        <div class="container">
          <div class="row">
            <div class="col-12">
              {/* <ImgLogo src="https://cdn.freebiesupply.com/logos/large/2x/unilever-2-logo-png-transparent.png" /> */}
            </div>
          </div>
        </div>

        <General class="container">
          <div class="row">
            <h1>Veebilehe reeglid</h1>
            <h2>Üldsätted</h2>
            <p>Seda veebilehte (välja arvatud selle veebilehe lingitud lehed) haldab Unilever Eesti AS, Tallinn (edaspidi Unilever).</p>
            <p>See veebileht on mõeldud kasutamiseks ainult Eestis asuvatele inimestele ja kogu teave toodete, teenuste ja kampaaniate kohta kehtib ainult Eesti kohta ja ainult Eestis.</p>
            <p>Sellele veebilehele sisenedes nõustute selle juriidilise teatise siduvusega. Kasutajal, kes ei nõustu täitma selle teabe sätteid, palutakse seda veebilehte mitte kasutada. Muudele Unileveri grupi ettevõtete veebilehtedele võivad kehtida muud tingimused, mida tuleks eraldi lugeda.</p>
            <h2>Intellektuaalomandi õigused</h2>
            <p>Kõik intellektuaalomandi õigused, sealhulgas (kuid mitte ainult) autoriõigused ja kaubamärgiõigused mis tahes teksti, piltide, helide, tarkvara ja muu sellel veebilehel sisalduva materjali kohta kuuluvad Unileverile või selle sidusettevõtetele või kehtib nende kohta asjakohase omaniku antud kasutusluba.</p>
            <p>Veebilehe kasutaja võib printida veebilehe osi või need alla laadida arvuti kõvakettale ja edastada teistele isikutele tingimusel, et ta teeb seda ainult teavitamise või muudel kohaldatavate seadustega lubatud eesmärkidel.</p>
            <p>Ilma Unileveri eelneva kirjaliku nõusolekuta ei tohi veebihehe kasutaja:</p>
            <ul>
                <li>kasutada selle veebilehe (koopiaid/osi) või selle sisus sisalduvaid märgiseid ärilistel eesmärkidel; </li>
                <li>muuta seda veebilehte (selle osi) või lisada teiste uuringute (näiteks paberdokumentide, ajaveebide või kolmandate isikute veebilehtede) sisusse.</li>
            </ul>
            <h2>Veebilehe sisu</h2>
            <p>See veebileht ja selle sisu on ainult üldine teave ettevõtte ja selle toodete kohta ning kui veebilehe sätetes ei ole sätestatud teisiti, ei ole need mõeldud õigussuhete sõlmimiseks, muutmiseks ega lõpetamiseks. Selle veebilehe sisu on koostatud võimalikult hoolikalt. Veebilehe teavitusliku olemuse tõttu palutakse isikutel, kes soovivad veebilehte kasutada muudel eesmärkidel, kui ainult üldteabe saamiseks ettevõtte ja selle toodete kohta, pöörduda otse ettevõtte esindajate poole ja teave kinnitada. Sellel lehel olev teave ei stimuleeri investeerima Unileveri gruppi kuuluvatesse ettevõtetesse ega tohiks olla aluseks investeerimisotsustele.</p>
            <h2>Vastutus</h2>
            <p>Ettevõte Unilever vastutab igasuguse kahju eest, mis on põhjustatud selle veebilehe kasutamisest üldkehtivates seadustes sätestatud tingimustel. </p>
            <h2>Sellelt veebilehelt lingitavad lehed</h2>
            <p>See veebileht võib sisaldada viiteid (nt hüperlinkide, bännerite või nuppude kujul) teistele veebilehtedele, mis on seotud selle veebilehe teatud aspektidega. Kuid see ei tähenda automaatselt, et Unileveril oleks mingeid sidemeid selliste veebilehtede või nende omanikega.</p>
            <h2>Esitatud teave</h2>
            <p>Andes Unileverile teavet või materjale, nõustute teabe või materjalide tasuta kasutamisega meie äranägemisel ja kinnitate, et sellise sisu kasutamine ei riku teiste õigusi. </p>
            <p>Ettevõte Unilever ei kontrolli pidevalt seda veebilehte, sealhulgas selle osi, mis sisaldavad teiste kasutajate postitatud sisu. Isikutel, kes märkavad teiste kasutajate sisu, mis võib rikkuda kehtivaid eeskirju või teiste kasutajate õigusi, palutakse teatada sellest Unileverile. Põhjendatud juhtudel jätab Unilever endale õiguse eemaldada kogu veebilehe sisu või osa sellest sellelt veebilehelt ilma sellest eraldi teavitamata.</p>
            <h2>Andmekaitse</h2>
            <p>Selle veebilehe kaudu ettevõttele Unilever edastatud isikuandmeid (nagu nimi, perekonnanimi ja e-posti aadress) kasutatakse ainult vastavalt andmekaitse ja küpsiste teabe sätetele. Enne andmete edastamist Unileverile lugege palun privaatsusteatist ja küpsiste teadet.</p>
            <h2>Kontakt</h2>
            <p>Kui teil on selle veebilehe kohta küsimusi või kaebusi, kasutage palun järgmisi kontaktandmeid:<a href="mailto:info-estonia@unilever.com"> e-mail: info-estonia@unilever.com</a></p>
            <h2>Muud sätted</h2>
            <p>Ettevõte Unilever jätab endale õiguse seda juriidilist teadet edaspidi korrigeerida ja muuta. Unilever annab muudatuste kehtestamise kavatsusest teada oma veebilehel seitse päeva ette.</p>
            <p>Seda juriidilist teadet ja selle veebilehe kasutamist külastajate poolt reguleerivad Eesti seadused.</p>
          </div>
        </General>
        
      </Section>
      </>
    )
  }
  export default Privacy
