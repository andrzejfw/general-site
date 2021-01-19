import React from "react"
import styled from 'styled-components'
import PrivacyStyle from "../../components/privacyNotice/privacy-notice"
import Accordion from '../../components/AccordionLipton/Accordion'
import SEO from '../../components/Seo/Seo'


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
     <SEO title="Teatis küpsiste kohta" description="Unileveris mõistame teie privaatsusega seotud muresid ja hindame suhet, mis meil teiega on. Tutvu lähemalt informatsiooniga küpsiste kohta."/>
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
            <h1>Teatis küpsiste kohta</h1>
            <p>Unileveris me mõistame teie privaatsusega seotud muresid ja hindame suhet, mis meil teiega on.</p>
            <p>Nagu paljud ettevõtted kasutame ka meie oma veebisaidil tehnoloogiat, et koguda teavet, mis aitab meil täiustada teie kasutuskogemust ning oma tooteid ja teenuseid. Küpsised, mida Unileveris kasutame, võimaldavad meie veebisaidil töötada ning aidata meil mõista, milline teave ja millised reklaamid on meie külastajatele kõige kasulikumad.</p>
            <p>Leidke hetk ja tutvuge meie küpsisekasutuse tavadega ning andke meile teada, kui teil on küsimusi, saates meile meili või esitades päringu meie veebisaitidel oleva vormi „Kontaktteave“ kaudu.</p>
            <p>Püüdsime kirjutada selle teatise võimalikult lihtsas keeles, aga kui teile pole tuttavad terminid, nagu küpsised, IP-aadressid ja brauserid, lugege kõigepealt nende põhimõistete kohta.</p>
    
            <Accordion>

              <div label={"Kes Seda Kogub?"} isOpen>
                <p>
                    <p>Igasugust isiklikku teavet, mis Unileverile esitatakse või mida Unilever küpsiste või muude jälgimistehnoloogiatega kogub, töötlevad Unilever Eesti AS: andmetöötlejad, address: Kalmistu tee 28a, Tallinn, Harju county, 11216).</p>
                    <p>Käesolev teatis küpsiste kohta kehtib mis tahes veebisaitidele, rakendustele, kaubamärgiga tähistatud lehtedele kolmandate isikute platvormidel (nagu Facebook või YouTube) ja rakendustele, millele pääseb neilt veebisaitidelt või mida kasutatakse nende veebisaitide kaudu (edaspidi: meie veebisaidid), mida haldab Unilever või mida hallatakse Unileveri nimel. „Unilever“ tähendab käesolevas teatises Unilever  Eesti AS kuuluvaid ettevõtteid, sealhulgas tütarettevõtteid, sidusettevõtteid, ühisettevõtteid ja frantsiise, kellega suhtlete või kellega teil on ärisuhe. </p>
                    <p>Kasutades meie veebisaite, nõustute meie küpsisekasutusega kooskõlas käesoleva teatisega küpsiste kohta ja meie privaatsusteatisega. Kui te ei nõustu meie küpsisekasutusega, määrake oma brauseri sätted vastavalt, keelake meie kasutatavad küpsised või ärge kasutage üldse meie veebisaite. Kui keelate meie kasutatavad küpsised, võib see mõjutada teie kasutuskogemust veebisaitidel.</p>
                    <p>Allpool olev jaotis teeb ülevaate erinevat tüüpi küpsistest, mida me oma veebisaitidel kasutame, koos nende eesmärgiga, ja annab teile võimaluse neid küpsiseid hallata.</p>
                    <p>Unilever kogub, kasutab või avaldab teie isiklikke andmeid vaid siis, kui see on õiglane ja seaduslik.</p>
                    <p>Üksikasjalikumat teavet selle kohta, kuidas me kasutame Unileveri küpsistega kogutud andmeid, saate meie privaatsusteatisest.</p>
                </p>
              </div>

        {/* 2 tab */}
              <div label={"Mida Tähendab „Küpsis“?"} >
                <p>
                    <p>Küpsised, pikslisildid ja sarnased tehnoloogiad (ühiselt: küpsised) on väikest kogust teavet sisaldavad failid, mis laaditakse alla internetti kasutavasse seadmesse – näiteks arvuti, nutitelefon või tahvelarvuti –, kui külastate veebisaiti. Seejärel saadetakse küpsised igal järgmisel külastusel tagasi lähteveebisaidile või muule veebisaidile, mis küpsise ära tunneb. Küpsised teevad palju erinevaid ja kasulikke töid, näiteks peavad nad teie eelistusi meeles, parandavad üldiselt teie veebikogemust ning aitavad meil teile parimaid tooteid ja teenuseid pakkuda.</p>
                    <p>Küpsiste tüüpe on palju. Nad töötavad kõik samal viisil, aga neil on väikesed erinevused. Meie veebisaitidel kasutatavate küpsiste üksikasjaliku loendi leiate asjakohasest jaotisest allpool.</p>
                </p>
              </div>
        {/* end 2 tab */}

        {/* 3 tab */}
                <div label={"Mis Eesmärgil Me Küpsiseid Kasutame?"} >
                    <p>
                        <p>Me kasutame küpsiseid, et muuta Unileveri veebisaidid lihtsamini kasutatavaks, pakkuda isikupärastatud kogemust oma veebisaitidel ja kohandada oma tooteid, teenuseid ning veebisaite paremini teie huvide ja vajaduste järgi. Küpsiseid kasutatakse teie tulevaste tegevuste ja kasutuskogemuse kiirendamiseks Unileveri veebisaitidel. </p>
                        <p>Küpsiseid, millega nõustute, kasutatakse ka teie isiklike andmetekogumiseks, mille me seejärel profiilime sihtrühmadeks, et saaksime pakkuda teie huvide järgi kohandatud suunatud reklaame ja piirata reklaami nägemise kordi. Üksikasjalikumat teavet profiilimistegevuste kohta, kus Unilever kasutab teie isiklikke andmeid reklaamimisel leiate meie privaatsusteatisest.</p>
                        <p>Me lisame küpsiseid ka meilidele ja teabelehtedele, et muuta oma sisu ja reklaame tõhusamaks.</p>
                        <p>Viimane küpsiste kasutamise põhjus on koguda anonüümsetkoondstatistikat, mis võimaldab meil aru saada, kuidas inimesed meie veebisaite kasutavad, ning aidata meil täiustada nende struktuuri ja sisu ning hinnata ka reklaamikampaaniate tõhusust nii Unileveri kui ma muudel veebisaitidel.</p>
                        <p>Üksikasjalikumat teavet meie kasutatavate küpsiste tüüpide ja nende kasutuseesmärkide kohta leiate asjakohasest jaotisest allpool.</p>
                    </p>
              </div>
        {/* end 3 tab */}

        {/* 4 tab */}
            <div label={"Kuidas Küpsiseid Hallata Või Kustutada?"} >
                <p>
                    <p>Küpsiseid saate hallata mitmel viisil:</p>
                    <ul>
                        <li>te võite keelduda oma nõusolekust;</li>
                        <li>te võite keelata Unileveri või kolmandate isikute küpsised oma brauseri sätetes;</li>
                        <li>te võite kasutada meie küpsisehaldustööriista, et keelata Unileveri või kolmandate isikute küpsised.</li>
                    </ul>
                    <h3>HALDAMINE BRAUSERI SÄTETEGA</h3>
                    <p>Enamik internetibrausereid on algselt seadistatud küpsiseid automaatselt vastu võtma. Kui te ei taha, et meie veebisaidid salvestaksid küpsiseid teie seadmesse, võite muuta oma brauseri sätteid nii, et saaksite hoiatusteate enne kindlate küpsiste salvestamist. Saate oma sätted määrata ka nii, et teie brauser keeldub enamikust meie küpsistest või vaid kindlatest küpsistest kolmandatelt isikutelt. Küpsiste kasutamise nõusoleku saate tühistada ka nii, et kustutate juba salvestatud küpsised.</p>
                    <p>Kui keelate meie kasutatavad küpsised, võib see mõjutada teie kasutuskogemust Unileveri veebisaidil – näiteks ei pruugi te pääseda veebisaidi kindlatesse piirkondadesse või saada isikupärastatud teavet veebisaiti külastades.</p>
                    <p>Kui kasutate Unileveri veebisaidi kuvamiseks ja kasutamiseks erinevaid seadmeid (näiteks arvutit, nutitelefoni, tahvelarvutit), peate jälgima, et iga seadme iga brauser oleks seadistatud teie küpsise-eelistuste kohaselt.</p>
                    <p>Sätete ja küpsiste muutmise protseduurid erinevad brauseriti. Vajaduse korral kasutage oma brauseri spikrifunktsiooni või klõpsake mõnd allpool esitatud linkidest, et siirduda otse oma brauseri kasutusjuhiste juurde.</p>
                    <ul>
                        <li><a href="https://support.microsoft.com/en-us/topic/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d">Internet Explorer</a></li>
                        <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectslug=enable-and-disable-cookies-website-preferences&redirectlocale=en-US">Mozilla Firefox</a></li>
                        <li><a href="https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&amp;hl=en">Google Chrome</a></li>
                        <li><a href="https://support.apple.com/kb/ph21411?locale=en_US">Safari</a></li>
                        <li><a href="https://help.opera.com/pl/latest/web-preferences/">Opera</a></li>
                    </ul>
                    <p>Saadaval on ka tarkavaratooteid, mis haldavad teie eest küpsiseid. </p>
                    <p>Võite kasutadaka veebisaiti <a href="https://www.ghostery.com/">www.ghostery.com</a>, et hinnata meie veebisaitidel kasutatavate küpsiste kasutust.</p>
                    <p>Kui soovite lisateavet küpsiste kohta, sealhulgas näha, millised küpsised on seatud, ning kuidas neid hallata ja kustutada, külastage veebisaiti <a href="https://www.allaboutcookies.org/">www.allaboutcookies.org</a>. </p>
                    <h3>HALDAMINE MEIE KÜPSISEHALDUSTÖÖRIISTAGA</h3>
                    <p>Te saate Unileveri või kolmandate isikute küpsised keelata meie küpsisekasutusega nõustumise tööriistaga, mille leiate siit. </p>
                    <p>Lülitades välja näiteks jälgimisküpsised, ei saa Unilever enam jälgida teie veebikäitumist. Kuid arvestage, et jälgimisküpsistest loobumine ei pruugi tähendada, et saate vähem Unileveri reklaame. See tähendab vaid seda, et teie saadavad reklaamid pole kohandatud teie huvide järgi.</p>
                </p>
              </div>
        {/* end 4 tab */}

          {/* 5 tab */}
          <div label={"Milliseid Küpsiseid Me Kasutame?"} >
                <p>
                    <p>Unileveri veebisaitidel kasutatavad küpsised saab üldiselt liigitada järgmisel viisil.</p>
                    <ul>
                        <li>Vajalikud küpsised. Need küpsised ei tuvasta teid konkreetse isikuna.</li>
                        <li>Toimivusküpsised. Need küpsised ei tuvasta teid konkreetse isikuna.</li>
                        <li>Funktsionaalsusküpsised. Nende küpsiste kogutav teave võib sisaldada isiklikke andmeid, mille olete avaldanud.</li>
                        <li>Suunavad või reklaamiküpsised. Enamik sellistest küpsistest jälgivad tarbijaid seadme ID või IP-aadressi kaudu, mistõttu nad võivad koguda isiklikke andmeid.</li>
                        <li>Kolmandate isikute küpsised. Olenevalt asjaomase kolmanda isiku kasutatavatest küpsisetüüpidest võib nende küpsiste kogutav teave sisaldada isiklikke andmeid.</li>
                    </ul>
                    <p>Unileveri veebisaitidel kasutatavad küpsised saab üldiselt liigitada järgmisel viisil.</p>
                    <ul>
                        <li>Vajalikud küpsised. Need küpsised on vajalikud selleks, et Unileveri veebisaidid töötaksid õigesti, need võimaldavad teil meie veebisaitidel liikuda ja meie funktsioone kasutada. Ilma nende küpsisteta ei saa pakkuda selliseid teenuseid nagu ostukorv. Need jätavad muu hulgas meelde eelmised toimingud (nagu sisestatud tekst), kui navigeerite sama seansi jooksul tagasi eelmisele lehele.</li>
                        <ul>
                            <li>Kas need küpsised koguvad isiklikke andmeid või on võimelised mind tuvastama? Need küpsised ei tuvasta teid konkreetse isikuna. Kui te ei nõustu nende küpsistega, võib see mõjutada veebisaidi või selle osade toimivust.</li>
                        </ul>
                        <li>Toimivusküpsised. Need küpsised koguvad teavet selle kohta, kuidas meie veebisaite kasutate, näiteks millistel lehtedel käite kõige sagedamini, meie veebisaitidel kulutatud aeg ja ilmnenud probleemid, nagu tõrketeated. Neid küpsiseid kasutatakse ka selleks, et teavitada sidusettevõtteid, kui tulite meie veebisaidile sidusettevõtte juurest ja kas teie külastus lõppes meie toote või teenuse kasutuse või ostuga, sealhulgas ostetud toote või teenuse üksikasjad. See aitab meil täiustada oma veebisaitide toimivust.</li>
                        <ul>
                            <li>Kas need küpsised koguvad isiklikke andmeid või on võimelised mind tuvastama? Need küpsised ei tuvasta teid konkreetse isikuna. Kogu nende küpsiste kogutav teave on koondatud ja seega anonüümne. Seda kasutatakse vaid veebisaidi toimivuse täiustamiseks.</li>
                        </ul>
                        <li>Funktsionaalsusküpsised. Need küpsised võimaldavad meie veebisaitidel jätta meelde teie tehtud valikud (nagu teie kasutajanimi, keel või piirkond), et pakkuda isikupärastatumat veebikogemust. Neid küpsiseid võidakse kasutada ka selleks, et jätta meelde teie tehtud muudatused teksti suurusele, fontidele ja muudele veebilehtede kohandatavatele osadele. Samuti võidakse neid kasutada selleks, et jälgida kordamise vältimiseks, milliseid esiletõstetud tooteid või videoid olete juba vaadanud, ja võimaldada teil mängida mänge ning kasutada suhtlustööriistu, nagu blogid, jututoad ja foorumid. </li>
                        <ul>
                            <li>Kas need küpsised koguvad isiklikke andmeid või on võimelised mind tuvastama? Nende küpsiste kogutav teave võib sisaldada isiklikke andmeid, mille olete avaldanud. Kui te ei nõustu nende küpsistega, võib see mõjutada veebisaidi toimivust ja funktsionaalsust ning piirata juurdepääsu veebisaidil olevale sisule.</li>
                        </ul>
                        <li>Suunavad või reklaamiküpsised. Neid küpsiseid kasutatakse teile asjakohasema sisu pakkumiseks, võttes arvesse teie huvisid. Neid kasutatakse ka suunatud reklaamide pakkumiseks või reklaami nägemise kordade piiramiseks ning selleks, et saaksime hinnata reklaamikampaaniate tõhusust Unileveri ja muudel veebisaitidel. Need jätavad meelde, et olete külastanud üht meie veebisaitidest, ning seda teavet jagatakse teiste isikutega, sealhulgas reklaamiandjate ja meie esindustega. Need küpsised võivad olla seotud ka saidi funktsionaalsusega, mida pakuvad kolmandad isikud.</li>
                        <ul>
                            <li>Kas need küpsised koguvad isiklikke andmeid või on võimelised mind tuvastama? Enamik sellistest küpsistest jälgivad tarbijaid seadme ID või IP-aadressi kaudu, mistõttu nad võivad koguda isiklikke andmeid.</li>
                        </ul>
                        <li>Kolmandate isikute küpsised. Me kasutame hulka partnereid, kes võivad, kui külastate meie veebisaite, meie nimel seada küpsiseid teie seadmesse, et nad saaksid oma domeenidel pakkuda kohandatud Unileveri reklaame – näiteks Facebook ja Google DoubleClick. Me üritame need küpsised enne nende kasutamist tuvastada, et saaksite otsustada, kas nõustute nendega või mitte. Me kasutame ka hulka partnereid, et pakkuda oma veebisaitidel digitaalseid kogemusi ja funktsionaalsusi. Näiteks sirvides Unileveri veebisaite, võite saada küpsiseid kolmandatelt isikutelt, kes pakuvad meie veebisaitidel oma funktsioone (näiteks YouTube’i video), ehkki olete tühistanud oma nõusoleku meie küpsiste kasutamiseks või keeldunud sellest. See juhtub sellepärast, et olete andnud otse oma nõusoleku nende küpsiste kasutamiseks. Sellisel juhul peaksite oma nõusoleku asjaomasel kolmanda isiku veebisaidil otse tühistama.</li>
                        <ul>
                            <li>Kas need küpsised koguvad isiklikke andmeid või on võimelised mind tuvastama? Olenevalt asjaomase kolmanda isiku kasutatavatest küpsisetüüpidest võib nende küpsiste kogutav teave sisaldada isiklikke andmeid.</li>
                        </ul>
                    </ul>
                    <h3>MEIE KASUTATAVATE KÜPSISTE KESTUS</h3>
                    <p>Kestusega seonduvalt võime oma veebisaitidel kasutada kaht eri tüüpi küpsiseid.</p>
                    <ul>
                        <li>Seansiküpsised. Need on ajutised küpsised, mis jäävad teie seadmesse seni, kuni lahkute meie veebisaitidelt.</li>
                        <li>Püsiküpsised. Need küpsised jäävad teie seadmesse palju pikemaks ajaks või seni, kuni need käsitsi kustutate (küpsise seadmesse jäämise aeg oleneb konkreetse küpsise „elueast“ ja ka brauseri sätetest, nagu on kirjeldatud allpool).</li>
                    </ul>
                    <p><span><em>Last updated April 2019</em></span></p>
                </p>
              </div>
        {/* end 5 tab */}

              

        
            </Accordion>
          </div>
        </General>
        
      </Section>
      </>
    )
  }
  export default Privacy
