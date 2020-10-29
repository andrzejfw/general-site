import React from "react"
import styled from 'styled-components'
import PrivacyStyle from "../components/privacyNotice/privacy-notice"
import Accordion from '../components/AccordionLipton/Accordion'
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
     <SEO title="Privaatsusteatis" description=""/>
      <Section>    
        <PrivacyStyle/>
        <div class="container">
          <div class="row">
            <div class="col-12">
              <ImgLogo src="https://cdn.freebiesupply.com/logos/large/2x/unilever-2-logo-png-transparent.png" />
            </div>
          </div>
        </div>

        <General class="container">
          <div class="row">
            <h1>Privaatsusteatis</h1>
            <h2>#YOURDATAISYOURS</h2>
            <p>Me teame, et te hoolite oma isiklikest andmetest ja sellest, kuidas neid kasutatakse, ning me kinnitame, et Unilever käsitseb teie isiklikke andmeid hoolsalt. Käesolev privaatsusteatis aitab teil aru saada, milliseid isiklikke andmeid me kogume, miks me neid kogume ja mida me nendega teeme.</p>
            <p>Meie teatist lugedes pidage silmas, et see kehtib kõigile Unilever Eesti AS.</p>
            <p>Leidke hetk ja tutvuge meie privaatsustavadega ning andke meile teada, kui teil on küsimusi, saates meile <a href="mailto:unilever.privacy@unilever.com">meili</a> või esitades päringu meie veebisaitidel oleva vormi „Kontaktteave“ kaudu.</p>
            <p>Püüdsime kirjutada selle teatise võimalikult lihtsas keeles, aga kui teile pole tuttavad terminid, nagu küpsised, IP-aadressid ja brauserid, lugege kõigepealt nende <a href="https://www.unilevernotices.com/privacy-key-terms.html">põhimõistete kohta</a>.</p>
            <p>Teil on õigus keelduda oma isiklike andmete teatavatest kasutustest, sealhulgas teie isiklike andmete kasutamisest otseturustuseks. Saage teada, millised on teie õigused ja kuidas neid teostada, siin.</p>
            <Accordion>

              <div label={"KES SEDA KOGUB?"} isOpen>
                <p>
                    <p>Igasugust isiklikku teavet, mis Unileverile esitatakse või mida Unilever kogub, töötlevad nii Unilever Eesti AS: andmetöötlejad) address: Kalmistu tee 28a, Tallinn, Harju county, 11216.</p>
                    <p>Käesolev privaatsusteatis kehtib isiklikule teabele, mida Unilever kogub oma pakutavate teenuste ja toodetega seonduvalt. „Unilever“ tähendab käesolevas teatises ettevõtteid Unilever Eesti AS ning nende otseselt või kaudselt omatud või juhitud ettevõtteid, kellega suhtlete või kellega teil on ärisuhe. </p>
                    <p>Käesolev privaatsusteatis kehtib ka Unileveri turundussisule, sealhulgas Unileveri toodete ja teenuste pakkumistele ning reklaamidele, mida me (või meie nimel tegutsev teenusepakkuja) teile saadame kolmandate isikute veebisaitidel, platvormidel ja rakendustes teie saidikasutusteabe põhjal. Neil kolmandate isikute veebisaitidel on tavaliselt oma privaatsusteatis ja tingimused. Me soovitame need enne nende veebisaitide kasutamist läbi lugeda.</p>
                </p>
              </div>

              <div label={"MILLISEID ISIKLIKKE ANDMEID KOGUTAKSE?"}>
                <p>Isiklikud andmed tähendavad mis tahes teavet, mida saab kasutada konkreetse inimese otseseks või kaudseks tuvastamiseks.</p>
                <p>Te pole kohustatud Unileverile küsitud isiklikke andmeid esitama, aga kui te otsustate seda mitte teha, ei pruugi me saada teile pakkuda tooteid ega teenuseid ega kvaliteetset teenust ega vastatata teie päringutele.</p>
              <p>Me võime isiklikke andmeid koguda erinevatest allikatest. Need hõlmavad järgmisi:</p>
              <ul>
                  <li>isiklikud andmed, mille annate meile otse;</li>
                  <li>isiklikud andmed, mida kogume automaatselt;</li>
                  <li>isiklikud andmed, mida kogume automaatselt;</li>
              </ul>
              <p>Isiklikud andmed tähendavad mis tahes teavet, mida saab kasutada konkreetse inimese otseseks või kaudseks tuvastamiseks. See määratlus hõlmab isiklikke andmeid, mille kogume oma tarbijakaasamiskeskuste, otseturustuskampaaniate, loosimiste ja võistluste kaudu ning internetis oma veebisaitide, rakenduste ja kolmandate isikute platvormidel olevate kaubamärgiga tähistatud lehtede kaudu ning rakenduste kaudu, milleni pääseb või mida saab kasutada kolmandate isikute platvormide kaudu.</p>
              <p>Teilt võidakse paluda isiklikke andmeid, kui meiega suhtlete. Unilever Eestii AS võib jagada oma isikuandmeid üksteise ja teiste Unilever Grupi ettevõtetega ja kasutada neid kooskõlas käesoleva privaatsusteatisega. Me võime neid ka muu teabega kombineerida, et täiustada oma tooteid, teenuseid, sisu ja reklaame. </p>
              <p>Te pole kohustatud Unileverile küsitud isiklikke andmeid esitama, aga kui te otsustate seda mitte teha, ei pruugi me saada teile pakkuda tooteid ega teenuseid ega kvaliteetset teenust ega vastatata teie päringutele.</p>
              <h3>VIISID, KUIDAS ME TEIE ISIKLIKKE ANDMEID KOGUME</h3>
              <p>Me võime isiklikke andmeid koguda erinevatest allikatest. Need hõlmavad järgmisi.</p>
              <ul>
                <li>Isiklikud andmed, mille annate meile otse. Me kogume andmeid selle kohta, kuidas te kasutate meie teenuseid ja tooteid, näiteks millist tüüpi sisu te vaatate või kasutate või teie tegevuste sagedus ning kestus. Me kogume ka isiklikke andmeid, mille meile esitate, kui tellite turundusliku teabelehe, täidate küsimustiku või registreerite konto meie toodete ostmiseks. Sellistel juhtudel võime küsida teie isiklikke andmeid, nagu teie nimi, sugu, sünniaeg, aadress, meiliaadress, telefoninumber või krediitkaardi andmed. Teatavad Unileveri kaubamärgid võivad teie kohta teie sõnaselgel loal koguda eriliikidesse kuuluvaid isiklikke andmeid. Lisateavet meie kogutavate eriliikidesse kuuluvate isiklike andmete ja nende kasutusviisi kohta vaadake allpool olevast asjakohasest jaotisest.</li>
                <li>Isiklikud andmed, mida kogume automaatselt. Me saame ja salvestame ka teatavat tüüpi isiklikke andmeid, kui meiega internetis interaktsioonis olete. Näiteks kasutame me küpsiseid ja jälgimistehnoloogiaid (lisateabe saamiseks vaadake meie privaatsuse põhimõisteid), et hankida isiklikke andmeid, kui teie veebibrauser pöördub meie veebisaitide või reklaamide poole ja muu sisu poole, mida pakub Unilever või mida pakutakse Unileveri nimel muudel veebisaitidel. Teie isiklikke andmeid kogutakse ka siis, kui otsite, ostate, postitate, osalete võistluses või küsimustikus või suhtlete meie klienditeenindustiimidega. Näited meie kogutavatest isiklike andmete tüüpidest: IP-aadress (lisateabe saamiseks vaadake meie privaatsuse põhimõisteid), seadme ID, asukohaandmed, arvuti- ja ühenduseteave, nagu brauseri tüüp ning versioon, ajavööndi säte, brauseri lisandmoodulite tüübid ja versioonid, operatsioonisüsteem ning ostuajalugu – mida Unilever vahel koondab sarnase teabega teistelt klientidelt. Teatavatel hetkedel, kui sirvite Unileveri veebisaite, võime kasutada ka tarkvaratööriistu, et mõõta ja koguda seansiteavet, sealhulgas lehtede reaktsiooniaegu, allalaadimistõrkeid, konkreetsete lehtede külastamise aegu, lehe interaktsiooniteavet ning lehelt lahkumise viise. Me võime koguda ka tehnilist teavet, mis aitab meil teie seadet tuvastada pettuste ärahoidmise ja diagnostika eesmärkidel.</li>
                <li>Isiklikud andmed, mida kogume muudest allikatest. Me kogume isiklikke andmeid muudest allikatest, sealhulgas oma usaldusväärsetelt kolmandatest isikutest partneritelt ja kolmandate isikute platvormidel olevate Unileveri kontode kaudu. Näiteks kui te kasutate Facebooki funktsiooni „like“ või Google+-i funktsiooni „+1“. Peale selle saame me teavet teie ja teiste külastajate interaktsiooni kohta meie reklaamidega, et hinnata, kas meie reklaamid on asjakohased ja edukad. Me kogume teavet teie ja teie tegevuse kohta kolmandatelt isikutelt ka siis, kui me ühiselt pakume teenuseid või tooteid, või kolmandatest isikutest andmete rikastamise pakkujatelt (lisateabe saamiseks vaadake meie privaatsuse põhimõisteid), kes võivad Unileverile pakkuda ülevaateid meie valduses olevate isiklike andmete kohta.</li>
              </ul>
              <h3>MILLAL JA MIKS ME KOGUME ERILIIKIDESSE KUULUVAID ISIKLIKKE ANDMEID</h3>
              <p>Teatavad isiklike andmete liigid, nagu rass, etniline päritolu, usk, tervis, seksuaalne sättumus või biomeetrilised andmed on liigitatud eriliikidesse kuuluvate isiklike andmetena ja neile tagatakse Euroopa andmekaitseseadusega täiendav kaitse.</p>
              <p>Me piirame olukordi, kus kogume ja töötleme selliseid eriliikidesse kuuluvaid isiklikke andmeid. </p>
              <p>Unilever kogub mõnikord teie tervisega seotud andmeid, näiteks allergiate, raseduse või nahatüübi kohta, et saata teile kohandatud reklaame ja asjakohaseid pakkumisi. Unilever kogub ja kasutab selliseid isiklikke andmeid vaid teie nõusolekul. Mõnikord võite soovida teenuseid või tooteid, mis otseselt ei hõlma eriliikidesse kuuluvate andmete kogumist, aga võivad vihjata või viidata teie usule, tervisele või muudele andmete eriliikidele.</p>
              <p>Kirjeldamaks olukordi, kus Unilever kogub ja töötleb eriliikidesse kuuluvaid isiklikke andmeid, oleme esitanud järgmised näited.</p>
              <p>Unilever kogub lapseootel emade eeldatavaid sünnituskuupäevi oma Zwitsali või Baby Dove’i teabelehe registreerimislehel. See võib registreerimislehele panna ka küpsised, mis selle teabe samuti jäädvustavad. Selliseid andmeid kasutatakse seejärel lapseootel emade sihtrühma loomiseks, et pakkuda neile Unileveri asjakohaste tootemarkide veebireklaame. Lisateavet Unileveri profiilimistegevuse kohta lugege asjakohasest jaotisest;</p>
              <p>Unilever kogub ka klientide allergiatega seotud isiklikke andmeid, et pakkuda neile asjakohaste toodete reklaame ja sooduspakkumisi.</p>
              <h3>KUIDAS ME KAITSEME LASTE PRIVAATSUST?</h3>
              <p>Me mõistame, et Unileveri tooteid ja teenuseid kasutavate laste privaatsuse kaitsel tuleb võtta erimeetmeid. </p>
              <p>Enamik Unileveri veebisaitidest on loodud ja mõeldud kasutamiseks täiskasvanutele. Kuna üks meie veebisaitidest on mõeldud kasutamiseks nooremale sihtrühmale, hangime me enne isiklike andmete kogumist vanemliku vastutuse kandjalt nõusoleku, kui seda nõuavad kohaldatavad õigusnormid (vanus, mille korral nõusolek on nõutav, erineb riigiti). </p>
              <p>Kui te olete nii noor, et vanemate nõusolek on teie riigis nõutav, peate käesoleva privaatsusteatise tingimused üle vaatama koos oma vanema või eestkostjaga, et oleks kindel, et neist aru saate ja nendega nõustute. Kui me saame teada, et oleme kogunud isiklikke andmeid lapselt ilma vanema või eestkostja nõusolekuta, ehkki selline nõusolek tulnuks saada, kustutame sellised isiklikud andmed niipea kui võimalik. Juurdepääs Unileveri veebisaitide teatavatele osadele ja/või õigus saada auhindu, näidiseid või muid hüvesid on üldiselt piiratud kindla vanuse ületanud isikutega. </p>
              <p>Mõnikord me kasutame teie isiklikke andmeid vanuse kontrollimiseks ja jõustame sellised vanusepiirangud.</p>
              </div>

              <div label={"MIS EESMÄRGIL ME TEIE ANDMEID KASUTAME?"}>
                <p>
                    <p>Me kogume, töötleme ja avaldame teie isiklikke andmeid vaid konkreetsetel ja piiratud eesmärkidel. Näiteks selleks, et menetleda teie makseid, hinnata ja lahendada kaebusi, arendada ning täiustada oma tooteid, teenuseid, suhtlusmeetodeid ja oma veebisaitide funktsionaalsust, pakkuda teile isikupärastatud tooteid, suhtlust ning suunatud reklaame ja tootesoovitusi.</p>
                    <p>Me loome ka profiile, analüüsides teavet teie veebis surfimise, otsimise ja ostukäitumise kohta ning teie interaktsioone meie tootemarkide kommunikatsiooniga, luues segmente (kindlate ühiste tunnustega rühmi) ja määrates teie isiklikud andmed ühte või mitmesse segmenti. </p>
                    <p>Peale selle töötleb Unilever teie isiklikke andmeid ka automaatseid vahendeid kasutades. Automaatne otsus on ainult automaatsete vahenditega tehtud otsus, kus teie isiklike andmetega seotud otsustusprotsessi pole kaasatud ühtegi inimest.</p>
                    <p>Me kogume, töötleme ja avaldame teie isiklikke andmeid vaid järgmistel eesmärkidel:</p>
                    <ul>
                        <li>et menetleda teie makseid meie tooteid ostes, pakkumaks teile tellimuse olekut, tegelemaks teie päringute ja taotlustega ning hindamaks ja lahendamaks kaebusi;</li>
                        <li>et töödelda teie päringuid ja vastata neile või võtta teiega ühendust teie küsimustele ja/või taotlustele vastamiseks;</li>
                        <li>et arendada ja täiustada oma tooteid, teenuseid, suhtlusmeetodeid ja veebisaitide funktsionaalsust;</li>
                        <li>et saaksite osa võtta võistlustest või kampaaniatest, millesse olete registreerunud;</li>
                        <li>et edastada teile teavet ja hallata teabelehe või muu suhtluse registreerimist ja/või tellimist;</li>
                        <li>et hallata oma igapäevaseid ettevõtte vajadusi, mis on seotud teie osavõtuga meie võistlustest, loosimistest või reklaamikampaaniatest või taotlusega seda teha;</li>
                        <li>et teha kindlaks isik, kes meiega telefoni teel, elektrooniliste vahendite kaudu või muul viisil ühendust võtab;</li>
                        <li>et teha ettevõttesiseseid koolitusi ja kvaliteedikontrolle;</li>
                        <li>et mõista ja hinnata tarbijate huve, soove ja muutuvaid vajadusi, täiustada oma veebisaiti, olemasolevaid tooteid ja teenuseid ning/või arendada uusi tooteid ja teenuseid;</li>
                        <li>et pakkuda teile isikupärastatud tooteid, suhtlust ja suunatud reklaame ning tootesoovitusi.</li>
                    </ul>
                    <p>Kui me kogume ja kasutame teie isiklikke andmeid eespool mainitud või muudel eesmärkidel, teavitame teid enne kogumist või selle ajal.</p>
                    <p>Vajaduse korral küsime isiklike andmete töötlemiseks teie nõusolekut. Kui olete andnud oma nõusoleku töötlemiseks, on teil alati õigus oma nõusolek ka tühistada.</p>
                    <p>Teatavatel juhtudel tugineme teie isiklike andmete töötlemisel õigustatud huvil. Õigustatud huvi võib eksisteerida näiteks siis, kui registreerute mõne meie tootemargi püsikliendiprogrammi ning me kasutame kogutud isiklikke andmeid andmeanalüüsiks, et täiustada oma tooteid ja teenuseid. Seda põhjendit kasutatakse vaid siis, kui see on vajalik õigustatud huvi saavutamiseks, näiteks lepingu täitmise abistamisel või teenuse optimeerimisel, ja see ei kaalu üles teie õigusi üksikisikuna. Sellele õiguslikule alusele tuginetakse vaid siis, kui pole vähem pealetükkivamat viisi ei ole. Me kinnitame teile, et kui teie isiklike andmete töötlemiseks kasutatakse õigustatud huvi, säilitame selle kohta andmed ja teil on õigus seda teavet küsida.</p>
                    <p>Me töötleme teie isiklikke andmeid, et täita lepingut, mille osaline te olete või saate olema. Näiteks peame me töötlema teie isiklikke andmeid selleks, et anda teile üle ostetud toode või teenus, et saaksite osa võtta meie võistlustest või et saata teile tellitud näidised.</p>
                    <p>Me töötleme teie isiklikke andmeid ka siis, kui meil on juriidiline kohustus (nagu maksude või sotsiaalkindlustusega seotud kohustused) seda teha. Näiteks kohtuotsus või -kutse võib nõuda meilt isiklike andmete töötlemist kindlal eesmärgil või peame töötlema isiklikke andmeid kohaliku rahapesu tõkestamise seaduse kohaselt kahtlastest tehingutest teatamiseks.</p>
                    <h3>PROFIILIMINE</h3>
                    <p>Unilever kasutab teie isiklikke andmeid profiilide loomisel. Me loome profiile, analüüsides teavet teie veebis surfimise, otsimise ja ostukäitumise kohta ning teie interaktsioone meie tootemarkide kommunikatsiooniga, luues segmente (kindlate ühiste tunnustega rühmi) ja määrates teie isiklikud andmed ühte või mitmesse segmenti. Unilever kasutab neid segmente, et isikupärastada teie jaoks veebisaiti ja meie suhtlust (näiteks teile veebisaidi külastusel või teabelehes asjakohase sisu näitamiseks) ning kuvada asjakohaseid pakkumisi ja reklaame Unileveri tootemarkidelt Unileveri saitidel ning kolmandate isikute veebisaitide kaudu. Segmente saab Unileveri saitidel kasutada ka kolmandate isikute kampaaniate jaoks. Unilever profiilib teie andmeid siis, kui olete meile andnud nõusoleku seda teha; näiteks nõustudes veebis küpsiste seadmisega oma brauserisse või tellides mõnelt meie tootemargilt meiliteabelehti.</p>
                    <p>Te saate alati oma nõusoleku tühistada, et vältida oma andmete sellist kasutamist, kasutades meie küpsiste kohta käiva teatise küpsiste haldamise jaotist või tühistades oma meiliaadressi kasutamise, kui olete sisse loginud mõnele meie veebisaidile või tellinud turunduslikke teabelehti.</p>
                    <p>Näited </p>
                    <ul>
                        <li>Unilever kogub teie nõusolekul andmeid: </li>
                        <ul>
                            <li>meie veebisaitidelt selle kohta, mida te vaatate ja milline on teie interaktsioon meie sisuga; </li>
                            <li>meie digitaalsete kuvareklaamide kaudu, mida me teile esitame suhtlusplatvormidel ja teiste avaldajate veebisaitidel; </li>
                            <li>vormidest, mida täidate internetis oma huvide kohta ja saadate meile.</li>
                        </ul>
                        <li>Me jälgime ka teie ostetavaid tooteid, kui klõpsate mõnel meie kuvareklaamil ja siirdute midagi ostma meie jaemüügipartnerite valikust.</li>
                        <li>Kui olete meilt tellinud meile või SMS-sidet, jälgime, kas need avate, neid loete või klõpsate sisul, saamaks teada, mis teid huvitab, et saaksime pakkuda teile rohkem sellist sisu, mis teile võiks meeldida.</li>
                        <li>Me kasutame selliseid andmeid, et profiilida, mis teile meeldib ja mis ei meeldi. Näiteks kui näeme, et vaatate meie Recipedia veebisaidil regulaarselt veganiretsepte, ja olete nõustunud meilt meile saama, võime teile teada anda äsja veebisaidile saabunud uutest veganiretseptidest või kohandada oma veebisisu teie külastusel nii, nagu meie arvates teile meeldida võiks.</li>
                        <li>Seda profiiliteavet arvesse võttes võime teile pakkuda ka reklaame, mis meie arvates teile meeldivad ja mida näha tahate, kui vaatate sisu meilt või meie avaldajate võrgult, kellega koos me reklaamime. Mõnikord võime teie nõusolekul kasutada teie asukohta, et pakkuda teile reklaame teie läheduses toimuvate kampaaniate ja sündmuste kohta, millest te meie arvates võiksite huvituda.</li>
                        <li>Me võime kasutada ka teavet, mille olete esitanud valitud kolmandatele isikutele ja mida olete lubanud jagada, nagu teie vanus, sugu, eluetapp, elustiil ja laiemad huvid, et tuvastada isikuid, kellel on meie arvates teiega sarnased huvid ning kes võiks meie hinnangul huvituda sarnastest reklaamidest.</li>
                    </ul>
                    <h3>AUTOMATISEERITUD OTSUSTE TEGEMINE</h3>
                    <p>Mõnikord töötleb Unilever teie isiklikke andmeid automaatseid vahendeid kasutades. Automaatne otsus on ainult automaatsete vahenditega tehtud otsus, kus teie isiklike andmetega seotud otsustusprotsessi pole kaasatud ühtegi inimest. Näiteks järgmisel viisil.</p>
                    <ul>
                        <li>Unilever kasutab potentsiaalsete töötajate hindamiseks teaduslikel alustel põhinevate käitumuslike hinnangute ja andmeteaduse tehnikatemänguimitatsioone. Kandidaadid peavad mängima sarja mänge ja mängimise ajal eksponeeritud käitumuslikke mustreid hindab Unileveri kohandatud algoritm, et ennustada kandidaadi potentsiaalne sobivus konkreetse rolli jaoks. Seda algoritmi katsetatakse regulaarselt, et tagada selle õiglus, tõhusus ja erapooletus.</li>
                    </ul>
                    <p>Me ei võta vastu ainult automatiseeritud otsuste tegemisel põhinevaid otsuseid, millel on teile kaalukas mõju. Kui me seda teeme, teavitame teid ja anname teile selge ülevaate oma otsusest tugineda otsustamisel automaatsel töötlusel ning oma õiguslikust alusest seda teha. Näiteks töötleb Unilever teie isiklikke andmeid ainult automaatseid vahendeid kasutades, kui see on vajalik teiega lepingu sõlmimiseks või selle täitmiseks või kui olete andnud oma sõnaselge nõusoleku.</p>
                    <p>Teil on õigus mitte alluda otsusele, mis põhineb ainult automaatsel töötlusel ja tekitab teile õiguslikke või muid kaaluka mõjuga toimeid. Eelkõige on teil õigus:</p>
                    <ul>
                        <li>saada otsene isiklik kontakt; </li>
                        <li>väljendada oma seisukohta;</li>
                        <li>saada selgitus otsuse kohta, mis tehakse pärast hindamist;</li>
                        <li>vaidlustada selline otsus.</li>
                    </ul>
                </p>
            </div>

{/* 4 tabs */}
                <div label={"KELLEGA SEDA JAGATAKSE?"} >
                    <p>
                    <p>Ülemaailmse osa ettevõttena jagab Unilever Eesti AS teie isiklikke andmeid Unileveri kontsernis ja valitud kolmandate isikutega järgmistel juhtudel.</p>
                    <ul>
                        <li>Kolmandatest isikutest teenusepakkujad. Teie taotluste rahuldamiseks, päringutele vastamiseks, tellimuste täitmiseks, kupongide tasumiseks, teile näidiste andmiseks, loosimistest osavõtu võimaldamiseks või teile paljude muude funktsioonide, teenuste ja materjalide kättesaadavaks tegemiseks meie veebisaitide kaudu jagame teie isiklikku teavet kolmandatest isikutest teenusepakkujatega, kes täidavadmeie nimel funktsioone – näiteks ettevõtted, kes majutavad või haldavad Unileveri veebisaite, menetlevad makseid, analüüsivad andmeid, pakuvad klienditeenindust, posti- või kohaletoimetamisteenust ning sponsorid või muud kolmandad isikud, kes osalevad meie kampaaniates või haldavad neid. Neil on juurdepääs isiklikele andmetele, mida nad vajavad oma funktsioonide täitmiseks, aga nad ei või neid muudel eesmärkidel kasutada. Peale selle peavad nad selliseid isiklikke andmeid töötlema kooskõlas käesoleva privaatsusteatisega ja kohaldatavate andmekaitse õigusnormidega lubatud piires.</li>
                        <li>Muud kolmandad isikud. Me kasutame teie isiklikke andmeid või jagame neid oma sponsorite, reklaamiandjate, reklaamivõrkude, reklaamiserverite, ühismeediavõrkude ja analüütikaettevõtete või muude kolmandate isikutega turunduse, müügiedenduse, andmerikastusega (lisateabe saamiseks meie privaatsuse põhimõistete kohta järgige linki) ja muude pakkumiste ning tooteteabega seonduvalt. </li>
                        <li>Ettevõtete üleminekud. Me kasutame teie isiklikke andmeid või jagame neid Unilever Groupiga, peamiselt äri- ja tööeesmärkidel. Unilever Groupiga ettevõtte arendamise jätkamisel võime müüa või osta vara, tütarettevõtteid või äriüksusi. Selliste tehingute korral on teie isiklikud andmed tavalisel üks osa üleminevast varast, aga neile jäävad kehtima antud lubadused mis tahes eelnevalt olemas olnud privaatsusteatises (kui te muidugi ei anna oma nõusolekut muuks). Kui muu üksus meid, meie ettevõtteid või kogu või osa meie varast või Unileveri veebisaitidega seotud varad omandab, antakse teie isiklikud andmed sellisele üksusele üle hoolsuskohustuse täitmise protsessi osana ja need edastatakse sellisele üksusele ühe osana üleminevast varast. Või kui me algatame pankroti- või saneerimismenetluse või see esitatakse meie vastu, peetakse kõiki selliseid isiklikke andmeid meie varaks ja nii on võimalik, et need müüakse või edastatakse kolmandatele isikutele.</li>
                        <li>Seadusega nõutud avaldamine. Me võime edastada ja avaldada kolmandatele isikutele teie isiklikke andmeid:</li>
                        <ul>
                            <li>et täita juriidilist kohustust;</li>
                            <li>kui me heas usus arvame, et kohaldatav seadus seda nõuab;</li>
                            <li>uurimist läbiviivate valitsusasutuste taotlusel;</li>
                            <li>et tõestada oma „Kasutustingimustega“ seotut või jõustada neid;</li>
                            <li>et tuvastada pettust või tehnilisi või turbenõrkusi ja nende eest kaitsta;</li>
                            <li>et reageerida hädaolukorrale;</li>
                            <li>et kaitsta kolmandate isikute, Unileveri veebisaitide külastajate, Unileveri või üldsuse õigusi, vara, ohutust või turvalisust.</li>
                        </ul>
                    </ul>
                    <h3>RAHVUSVAHELISED ANDMEEDASTUSED</h3>
                    <p>Unilever jagab isiklikke andmeid kapitali grupis või kolmandate isikutega käesolevas privaatsusteatises kirjeldatud eesmärkidel. </p>
                    <p>Unilever saadab Euroopa Majanduspiirkonnas(EMP) kogutud andmeid välisriikidele vaid järgmistel juhtudel:</p>

                    <ul>
                        <li>täites teie juhiseid;</li>
                        <li>täites juriidilist kohustust;</li>
                        <li>töötades oma esindajate või nõustajatega, keda me kasutame abina oma ettevõtte juhtimisel ja teenuste pakkumisel.</li>
                    </ul>
                    <p>Kui me tõepoolest edastame isiklikke andmeid EMP-st välja, tagab Unilever, et need oleksid kaitstud samal moel, nagu neid kasutataks EMP-s. Me kasutame üht järgmistest tagatistest.</p>
                    <ul>
                        <li>Edastame sellisesse EMP-välisesse riiki, mille privaatsust käsitlevad õigusaktid tagavad isiklike andmete piisava kaitsetaseme EMP standardite kohaselt.</li>
                        <li>Sõlmime välismaa kolmanda isikuga lepingu, mille järgi ta peab isiklikke andmeid kaitsma EMP-ga samade standardite kohaselt.</li>
                        <li>Edastame isiklikud andmed organisatsioonidele osalevad Euroopa Liidu erikokkulepetes rahvusvahelisteks andmeedastusteks (näiteks Privacy Shield, andmekaitseraamistik, mis kehtestab standardid Ameerika Ühendriikide ja Euroopa riikide vahelistele andmeedastustele või muu andmekaitse raamistik).</li>
                    </ul>
                    </p>
                </div>
{/* end 4 tabs */}
{/* 5 tabs */}
                <div label={"KUIDAS ME TEIE ISIKLIKKE ANDMEID KAITSEME?"}>
                    <p>
                        <p>Unilever suhtub teie isiklike andmete turvalisuse tagamisse väga tõsiselt. Me teeme kõik endast oleneva, et kaitsta teie isiklikke andmeid kuritarvituse, sekkumise, kao, volitamatu juurdepääsu, modifitseerimise ja avalikustamise eest. </p>
                        <p>Meie meetmed hõlmavad asjakohase juurdepääsu kontrolli rakendamist, uusimasse teabeturbesuutlikkusse investeerimist, et kaitsta meie kasutatavaid IT-keskkondi, isiklike andmete krüptimise, pseudonüümimise ja anonüümimise tagamist alati, kui see on võimalik.</p>
                        <p>Juurdepääs teie isiklikele andmetele on lubatud meie töötajatele ja esindajatele vaid teadmisvajaduse põhiselt ja sellele kehtivad ranged lepingulised konfidentsiaalsuskohustused, kui töötleja on kolmas isik.</p>
                    </p>
                </div>

{/* end 5 tabs */}
{/* 6 tabs */}
                <div label={"KUI KAUA ME TEIE ISIKLIKKE ANDMEID ALLES HOIAME?"}>
                    <p>
                        <p>Me hoiame teie isiklikke andmeid alles nii kaua, kui neid vajame, töötlemise eesmärgi täitmise jaoks. Näiteks kui ostate meilt midagi interneti kaudu, hoiame alles teie ostuga seotud andmed, et saaksime täita teiega sõlmitud konkreetset lepingut, ja pärast seda hoiame isiklikke andmeid alles nii kaua, et saaksime vastata ostuga seotud kaebustele, päringutele või küsimustele.</p>
                        <p>Teie andmed võidakse ka säilitada, et saaksime jätkata teie kasutuskogemuse täiustamist ja tagada, et saaksite kätte teile kuuluvad püsikliendiprogrammi auhinnad.</p>
                        <p>Me säilitame suunamiseesmärgil kogutavaid tuvastatavaid andmeid võimalikult vähe aega ja võtame siis meetmed nende jäädavaks kustutamiseks. </p>
                        <p>Me jälgime aktiivselt oma hoitavaid isiklikke andmeid ja kustutame need turvaliselt, või mõnel juhul anonüümime need, kui nende säilitamiseks pole enam juriidilist, ärilist ega tarbijaga seotud vajadust.</p>
                    </p>
                </div>
{/* end 6 tabs */}
{/* 7 tabs */}
                <div label={"MILLISED ON TEIE ÕIGUSED?"}>
                    <p>
                        <p>Kui me töötleme teie isiklikke andmeid, on teil hulk õigusi otsustada, kuidas andmeid töödeldakse, ja te saate neid õigusi alati teostada. Allpool on esitatud ülevaade neist õigustest ja nendega kaasnevast. Te saate oma õigusi teostada, saates meile meili või esitades päringu meie veebisaitidel oleva vormi „Kontaktteave“ kaudu.</p>
                        <ul>
                            <li>Õigus olla informeeritud. Teil on õigus saada selget, läbipaistvat ja lihtsasti mõistetavat teavet selle kohta, kuidas me teie isiklikke andmeid kasutame, ja oma õiguste kohta. Sellepärast pakumegi teile käesolevas teatises teavet. </li>
                        <li>Õigus juurdepääsule ja teha parandusi. Teil on alati õigus saada juurdepääs oma isiklikele andmetele ja neid korrigeerida või uuendada. Me mõistame selle olulisust ja kui te peaks tahtma oma õigusi teostada, võtke meiega ühendust.</li>
                        <li>Õigus andmeid üle kanda. Isiklikud andmed, mille olete meile esitanud, on ülekantavad. See tähendab, et neid saab teatavatel tingimustel elektrooniliselt teisaldada, kopeerida või edastada.</li>
                        <li>Õigus saada unustatud. Teatavatel tingimustel on teil õigus taotleda, et me kustutaksime teie andmed. Kui te soovite oma isiklikud andmed, mis meil teie kohta on, kustutada, andke meile teada, ja me võtame mõistlikud meetmed, et reageerida teie taotlusele kooskõlas õigusnõuetega. Kui meie kogutud isiklikke andmeid pole enam ühekski eesmärgiks vaja ja seadus ei nõua nende säilitamist, teeme kõik endast oleneva nende kustutamiseks, hävitamiseks või deidentifitseerimiseks. </li>
                        <li>Õigus piirata töötlemist. Teatavatel tingimustel on teil õigus piirata oma isiklike andmete töötlemist.</li>
                        <li>Õigus keelduda. Teatavatel tingimustel on teil õigus keelduda kindlatest töötlemistüüpidest, sealhulgas töötlemine otseturustuse jaoks (nagu meilt teavitavate meilide saamine või potentsiaalsete võimalustega teiega ühenduse võtmine).</li>
                        <li>Õigus esitada kaebus järelevalve teostajale. Teil on õigus esitada kaebus selle kohta, kuidas me teie isiklikke andmeid töötleme, otse kohalikule järelevalve teostajale. </li>
                        <li>Õigus nõusolek tühistada. Kui olete andnud nõusoleku millelegi, mida me teie isiklike andmetega teeme (me tugineme nõusolekul kui õiguslikul alusel teie isiklike andmete töötlemiseks), on teil alati õigus see nõusolek tühistada (kuid kui te seda teete, ei tähenda see, et miski, mida me seni teie nõusolekul oleme teie isiklike andmetega teinud, oleks õigusvastane). Te saate tühistada oma isiklike andmete töötlemise nõusoleku suvalisel hetkel, võttes meiega ühendust allpool esitatud kontaktteavet kasutades.</li>
                        <li>Automatiseeritud otsuste tegemisega seotud õigused. Teil on õigus mitte alluda otsusele, mis põhineb ainult automaatsel töötlusel ja tekitab teile õiguslikke või muid kaaluka mõjuga toimeid. Eelkõige on teil õigus:</li>
                            <ul>
                                <li>saada otsene isiklik kontakt; </li>
                                <li>väljendada oma seisukohta;</li>
                                <li>saada selgitus otsuse kohta, mis tehakse pärast hindamist;</li>
                                <li>vaidlustada selline otsus.</li>
                            </ul>
                        </ul>
                        <p>Edasist teavet ja nõu oma õiguste kohta saate oma riigi andmekaitse regulaatorilt.</p>
                    </p>
                </div>
{/* end 7 tabs */}
{/* 8 tabs */}
                <div label={"KUI KAUA ME TEIE ISIKLIKKE ANDMEID ALLES HOIAME?"}>
                    <p>
                        <p>Unileveri nimetas privaatsusosakonna peaspetsialisti, kellega saab ühendust võtta posti teel aadressil Unilever N.V., Weena 455, PO Box 760 3000 DK Rotterdam The Netherlands või meilitsi.</p>
                        <p>Kui teil on küsimusi või muresid Unileveri privaatsusteatise või andmetöötluse kohta või kui soovite esitada kaebust kohaliku andmekaitseseaduse võimaliku rikkumise kohta, tehke seda, saates meile meili või esitades päringu meie veebisaitidel oleva vormi „Kontaktteave“ kaudu.</p>
                        <p>Kui me saame privaatsusega seotud küsimuse või pääsutaotluse, on meil selleks spetsiaalne tiim, mis sordib kontaktid olulisuse alusel ja püüab vastata konkreetsele murele või päringule, mis teil on. Kui teie probleem on iseloomult olulisema kaaluga, võidakse teilt rohkem teavet paluda. Kõik sellised olulise kaaluga küsimused saavad vastuse. Kui te pole saadud vastusega rahul, võite pöörduda oma kaebusega oma riigi asjakohase järelevalve teostaja poole. Me püüame pakkuda teavet asjakohaste kaebuse lahendamise võimaluste kohta, mis võivad teie olukorras kehtida.</p>
                    </p>
                </div>
{/* end 8 tabs */}
{/* 9 tabs */}
                <div label={"KUIDAS ME SEDA TEATIST AJAKOHASENA HOIAME?"}>
                    <p>
                        <p>Me uuendame käesolevat privaatsusteatist vajaduse korral, reageerides klientide tagasisidele ning muutustele meie toodetes ja teenustes. Kui me muudame käesolevat avaldust, redigeerime käesoleva teatise ülaosas olevat kuupäeva „Viimane uuendus“. Kui muudatused on kaalukad, esitame silmatorkavama teate (sealhulgas saadame teatavate teenuste puhul meiliteavituse privaatsusteatise muudatuste kohta). Me hoiame käesoleva privaatsusteatise eelmisi versioone ka arhiivis, et saaksite neid üle vaadata.</p>
                        <p>Me ei vähenda teie õigusi, mis käesoleva privaatsusteatisega on kehtestatud, ilma teie nõusolekuta.</p>
                        <h3>TÄIENDAVAD PRIVAATSUSTEATIS VÕI TEATISED</h3>
                        <p>Peale käesoleva privaatsusteatise võivad teatavatele kampaaniatele või pakkumistele kehtida täiendavad privaatsusteatis või teatised. Me soovitame need täiendavad tingimused või teatised enne sellistes kampaaniates või pakkumistes osalemist läbi lugeda, kuna peate osaledes neid täitma. Kõik täiendavad privaatsusteatis või teatised tehakse teile selgelt kättesaadavaks.</p>
                        <p><span><em>Last updated April 2019</em></span></p>
                    </p>
                </div>
{/* end 9 tabs */}
            </Accordion>
          </div>
        </General>
        
      </Section>
      </>
    )
  }
  export default Privacy
