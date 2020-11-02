import React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Image1 from '../assets/images/about.jpg';
import ImageLi from '../assets/images/li.png';
import SEO from '../components/Seo/Seo'

const ImageUlLi = styled.img`
  width:20px;
  margin-right:10px;
`
const ImageMan = styled.img`
    margin-top:1rem;
    width:100%;
    @media (max-width:768px){
      width:90vw;
    }
`
const Section = styled.section`
    width:90vw;
    max-width:1200px;
    margin:auto;
    margin-bottom:30px;
    ul{
      margin-left:50px;
    }
    h2 span {
      font-size:20px;
    }
    p{
      margin-bottom:0;
    }
    h1,h2 {
      margin-top:2rem;
      margin-bottom:1rem
    }
    h2 p {
    margin-top: 10px;
    }
    li {
    list-style:none;
    margin-bottom:10px;
    }
    ul {
      margin-left:10px;
    }
    p ul {
      margin-top:20px;
    }
`;


const AboutPage = () => {
  return (
    <>
    <SEO title="Ettevõttest" description=""/>
     <Section>
       <h1>Ettevõttest</h1>
       <p>Unilever on oma äri loonud kindla eesmärgiga ning meie ainulaadne pärand kujundab veel tänapäevalgi äritegevuse viisi. Oleme olnud teerajajad, innovaatorid ja tuleviku kujundajad juba üle 120 aasta.</p>
       <h2>Muudame jätkusuutliku elu tavapäraseks
         <p><i>„Making sustainable living commonplace“</i></p>
         </h2>
       <p>1890. aastatel pani Lever Brothersi asutaja William Hesketh Level kirja oma ideed Sunlight seebi loomisest, millest valmis revolutsiooniline uus toode, mis aitas populariseerida puhtust ja hügieeni kuninganna Victoria valitsemisajal Inglismaal.</p>
       <p>Toote eesmärk oli muuta puhtus tavapäraseks, vähendada naiste tööd, edendada tervist ning tõsta isiklikku atraktiivsust, et elu oleks Unileveri tooteid kasutavatele inimestele nauditavam ja rahuldavam.</p>
       <p>See eesmärgi- ja missioonitunne on alati olnud osa Unileveri kultuurist. Ka täna aitame inimestel endliselt hea välja näha, end hästi tunda ja elust rohkem kasu saada. Ning seetõttu on meie eesmärgiks muuta jätkusuutlik elu tavapäraseks (making sustainable living commonplace).</p>
       <ImageMan src={Image1} alt="man with a seedling"/>
       <h2>Unilever kogu maailmas</h2>
       <ul>
         <li><ImageUlLi src={ImageLi} alt="man with a seedling"/><b>2,5 miljardit</b> inimest kasutab igapäevaselt meie tooteid.</li>
         <li><ImageUlLi src={ImageLi} alt="man with a seedling"/>Tarbijad kasutavad kogu maailmas üle <b>400</b> Unileveri kaubamärgi.</li>
         <li><ImageUlLi src={ImageLi} alt="man with a seedling"/>Unilever tooteid müüakse <b>190</b> riigis.</li>
         <li><ImageUlLi src={ImageLi} alt="man with a seedling"/><b>155,000</b> inimest töötab igapäevaselt Unileveri eesmärgi nimel.</li>
         <li><ImageUlLi src={ImageLi} alt="man with a seedling"/>Meie käive oli <b>52 miljardit</b> eurot 2019. aastal</li>
         </ul>
        <h2>Millega Unilever tegeleb?</h2>
        <p>Valmistame tooteid, mida inimesed armastavad ning mis muudavad maailma. Toitvad toiduained. Koduhoolduse esmatarbekaubad. Maitsvad jäätised. Värskendavad teed. Luksuslikud šampoonid. Taskukohased seebid... ja palju muud.</p>
        <p>Kokku on meie väga armastatud kaubamärke maailmas üle 400, mis tähendab, et leiad vähemalt ühe meie toote seitsmest plaanedi kümnest leibkonnast. Tahame, et kõik need tooted avaldaksid positiivset mõju nende inimeste elule, kes neid ostavad.</p>
        <p>Vaata lähemalt, mis kaubamärke pakume Eesti turul. Meie olulisemad kaubamärgid on näiteks Hellmann’s, Lipton, Knorr, Magnum, Super Viva, Idüll, Ingman, Ben&Jerry’s, Domestos, Cif, Seventh Generation, Dove, Rexona, Love Beauty & Planet.
        </p>
        <p>“Kavatsen edasi arendada Unileveri sajaditevanust pühendumust vastutustundlikule ärile. See ei tähenda, et seame eesmärgi kasumist ette vaid seda, et kasumit juhib eesmärk.” Alan Jope, CEO, Unilever.</p>
        <h2>Miks Unilever seda kõike teeb?</h2>
        <p>Soovime, et meie äri õitseks ning teame, et edu sõltub teistest, kes meie ümber õitsevad. Sellepärast on meie ettevõtte eesmärk muuta jätkusuutlik elu tavapäraseks ning ka sellepärast on jätkusuutlik ja pikaajaline kasv meie ärimudeli keskmes.</p>
        <p>Palun tutvuge Unileveri <Link to="/sustainability">säästva eluviisi kavaga</Link>. Tutvu lähemalt, kuidas see kava juhib pikaajalist kasvu, vähendades samal ajal keskkonnajalajälge ja suurendadas positiivset sotisaalsed mõju. Kokkuvõtvalt keskendub meie jätkusuutlik plaan kolmele punktile:
        <ul>
          <li>Aitame enam kui miljardil inimesel oma tervist ja heaolu parandada;</li>
          <li>Vähendame meie toodete keskkonnajalajälge poole võrra;</li>
          <li>Hangime 100% toorainest jätkusuutlikult ning suurendame inimeste elatustaset kogu meie väärtusahelas.</li>
        </ul></p>
        <h2>Eesmärgipõhine, tulevikku sobiv plaan <span>(Purpose-led, Future-fit)</span></h2>
        <p>Maailm ei seisa paigal ning seda ei tee ka meie. Me mitte ainult ei võta muutusi omaks, vaid püüame neid ka ellu viia. See kehtib meie kaubamärkide kohta, mis saavutavad positiivseid muutusi oma eesmärgi ja väärtusahelate kaudu ning ka meie ettevõtte kohta, mille muudame tulevikuks sobivamaks, kiiremaks ja paindlikumaks.</p>
        <p>Oleme koos kujundamas tuleviku tööd – mitmekesisem, kaasavam, kõrgelt kvalifitseeritud ja hästi toimiv. Ettevõttena teeme kõik, et määratleda äri tegemise viisi. Nii me saame muuta jätkusuutliku elu tavapäraseks!</p>
     </Section>
     </>
   )
  }
export default AboutPage
