import React from "react"
import styled from "styled-components"
import Accordion from "../../components/Accordion/Accordion"
import SustainabilityHero from '../../assets/images/world-sustainability-hands-scene.jpg'
import SEO from '../../components/Seo/Seo'

const SustainabilityHeroImage = styled.img`
    width: 100%;
    object-fit:cover;
    height: 400px;

    @media(max-width:992px){
        height: 200px;
    }

    @media(min-width:1400px){
        height: 500px;
    }
`;

const SustainabilityContent = styled.div`
    max-width: 1200px;
    margin: 50px auto;

    @media(max-width:992px){
        max-width: 90%;
    }
`;

const SustainabilityHeader = styled.h1`
    text-align: center;
    margin-bottom: 50px;

    @media(max-width:992px){
        text-align: left;
    }
`;

const SustainabilitySubHeader = styled.h2`
    font-size: 1.5rem;
    margin: 30px 0 20px;
`;

const SustainabilityParagraphMoreInfo = styled.p`
    font-style: italic;
    margin-top: 20px;
`;

const SustainabilityPage = () => (
  <>
    <SEO title="Jätkusuutlik elu" description="Unilever Eesti jätkusuutliku elu plaani eesmärk on eraldada meie majanduskasv meie jalajäljest, suurendades samal ajal positiivset sotsiaalset mõju."/>
    <SustainabilityHeroImage src={SustainabilityHero} alt="Unilever Eesti jätkusuutlikus"/>
    <SustainabilityContent>
        <SustainabilityHeader>Jätkusuutlik elu</SustainabilityHeader>
        <p>Usume, et ärikasv ei tohiks toimuda inimeste ja planeedi arvelt. Sellepärast muudame seda, kuidas äri teeme ning seda, kuidas üldse äri tehakse. Unileveri jätkusuutliku elu plaan on julge ambitsioon saavutada muutusi meie ettevõttes ning ühiskonnas. 2010. aastal käivitatud programm loob meie kaubamärkide kaudu jätkusuutiku kasvu, vähendab ärikulusid ja riski ning aitab luua usaldust.</p>
        <p>Meie ühiskonna ees seisavad mitmed kiireloomulised, suured ja keerulised probleemid: näiteks kliimamuutus, ebavõrdsus, (plastiku) resostus ja kanalisatsiooni puudumine. Ainuüksi muutused meie enda ettevõttes aga ei ole piisavad, et lahendada suurenevaid probleeme. Kui soovime olulistes küsimustes tõelist muutust luua, vajame muutusi terves süsteemis. Seetõttu võtsime kasutusele ÜRO säästva arengu eesmärkide nimel meetmeid oma muutuste elluviimiseks.</p>
        <SustainabilitySubHeader>Unileveri jätkusuutliku plaani eesmärk on eraldada meie majanduskasv meie jalajäljest, suurendades samal ajal positiivset sotsiaalset mõju.</SustainabilitySubHeader>
        <p>Meie plaan on täita kolm suuremat eesmärki, millele tuginevad omakorda üheksa väiksemat kohustust või tegevust, mis hõlmavad sotsiaalseid, keskkonnaalaseid ja majanduslikke tulemusi kogu väärtusahelas. Jätkame koostööd erinevate asutustega, et keskenduda valdkondadele, mis võimaldavad meil luua suurimaid muudatusi ning toetada ÜRO jätkusuutliku arengu eesmärke.</p>
        <SustainabilitySubHeader>Jätkusuutliku plaani eesmärgid</SustainabilitySubHeader>
        <Accordion>
            <div label={"Tervise ja heaolu parandamine enam kui miljardi inimese jaoks"}>
                <p>Puhta joogivee puudumine ning halvad sanitaartingimused põhjustavad igal aastal miljoneid välditavaid surmajuhtumeid, eriti laste seas. Saavutasime oma eesmärgi aidata 2018. aastal rohkem kui miljardil inimesel oma tervist ja hügieeni parandada.</p>
                <p>See, kuidas maailm täna toitu toodab ja tarbib, on jätkusuutmatu. Alatoitumus on lubamatult kõrge ja samal ajal on rasvunud üle miljardi inimese. Aastaks 2020 kahekordisime oma tooteportfelli osakaalu, mis vastab ülemaailmselt tunnustatud kõrgematele toitumisstandarditele – vähendades suhkruid, soola ja rasvu. See aitab sadadel miljonitel inimestel tervislikumat dieeti pidada. Meie eesmärk on pakkuda tooteid, mis maitsevad hästi, panevad inimesi ennast hästi tundma ning annavad jõudu.</p>
                <p>Meie lähenemisviis hõlmab tervise, hügieeni ning toitumise parandamist. Meil on ainulaadne võimalus viia ellu suuri muudatusi, sest oleme ainus rahvusvaheline tarbekaupade ettevõtte, kelle portfell hõlmab ilu- ja isikuhooldust, koduhooldust, toitu ja värskendust.</p>
            </div>
            <div label={"Vähendame keskkonnajalajälge poole võrra"}>
                <p>Üks osa meie visioonist on kasvatada äri, vähendades samal ajal keskkonnamõju. Arvestame kasvuhoonegaaside, vee ja jäätmete mõju vähendamisega kogu meie väärtusahelas. Alates tooraine hankimisest kuni meie enda tootmise, tegevuse ning tarbijate kasutamiseni. Samuti on meie eesmärk hankida oma toormaterjale jätkusuutlikult.</p>
                <p>Keskkonnamõju vähendamine on küll meie tarbijate seas jätkuvalt keeruline teema nagu näitab meie tulemuslikkus kasvuhoonegaaside ja veemõjude statistika iga tarbija kohta, kuid valdkondades, mida saame täielikult kontrollida, edeneme plaani järgi suurepäraselt. Soovime täita oma osa kliimamuutuste vastu võitlemisel ja loodusvarade ammendumise vähendamisel.</p>
            </div>
            <div label={"Tõstame miljonite inimeste elutaset"}>
                <p>Jätkame edusamme kolme olulise teema arendamisel – õiglus töökohal, võrdsed õigused naistele ning kaasava äri teemal. Meie ettevõte aitab kaasa paljude inimeste ja kogukondade majanduslikule toimetulekule. Kusjuures, arenevatel turugudel on mõju suurim. </p>
                <p>Soovime pakkuda ettevõtte kasvu kui ka positiivset sotsiaalset mõju. Toetame inimõigusi kogu oma äris ning kasutame oma kaubamärkide jõudu, et propageerida oma tarbijatele olulisi sotsiaalseid probleeme nagu näiteks sooline võrdõiguslikkus. Teeme koostööd ka väikeste jaemüüjate ja väiketalunikega, et parandada toimetulekut.</p>
            </div>
        </Accordion>
        <SustainabilityParagraphMoreInfo>Rohkem informatsiooni ja täpsema Unileveri jätkusuutliku arengukava leiad siit: <a href="https://www.unilever.com/sustainable-living/" target="_blank" rel="noreferrer">https://www.unilever.com/sustainable-living/</a></SustainabilityParagraphMoreInfo>
      </SustainabilityContent>
  </>
)

export default SustainabilityPage