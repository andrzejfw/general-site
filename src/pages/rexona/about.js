import React from "react"
import styled from "styled-components"
import SEO from '../../components/Seo/Seo'
import HeroRexona from '../../assets/images/rexona-about-hero.jpg'
import HeroRexonaMobile from '../../assets/images/rexona-about-hero-mobile.jpg'
import BannerRexona from '../../assets/images/rexona-about-banner.jpg'
import BannerRexonaMobile from '../../assets/images/rexona-about-banner-mobile.jpg'

const HeroImage = styled.img`
    width: 100%;

    @media(max-width:992px){
        content: url(${HeroRexonaMobile});
        margin-top: 60px;
    }
`;

const Section = styled.div`
    max-width: 1200px;
    margin: 50px auto 80px;

    @media(max-width:992px){
        max-width: 90%;
        margin: 20px auto 50px;
    }

    h1 {
        color: #103073;
        text-align: center;
        margin-bottom: 20px;

        @media(max-width:992px){
        text-align: left;
    }
    }

    h2 {
        color: #103073;
        font-size: 1.4rem;
        margin-top: 30px;
    }

    img {
        width: 100%;
        margin-top: 10px;

        @media(max-width:992px){
        content: url(${BannerRexonaMobile});
        }
    }
`;


const RexonaAboutPage = () => (
  <>
    <SEO title="Rexona deodorantide kaubamärgist. Rexona ainulaadne tehnoloogia vabastab lisakaitse just siis, kui seda kõige rohkem vaja läheb. Rexona ei vea sind alt."/>
    <HeroImage src={HeroRexona} alt="Rexona deodorantide kaubamärgist"/>
    <Section>
    <h1>Rexona deodorantide kaubamärgist</h1>
    <h2>Rexona ei vea sind alt. Unileveri teadlased on välja töötanud ainulaadse tehnoloogia, mis vabastab deodorantide lisakaitse just siis, kui seda kõige rohkem vaja läheb. Võid kindel olla, et Rexona hoiab sind värskena kogu päeva.</h2>
    <p>Meie teadus- ja arendustöö eksperdid teavad, et meestel ja naistel on deodorantide osas väga erinevad nõudmised. Sellepärast oleme oma tooted välja töötanud vastavalt just inimeste individuaalsetele vajadustele.</p>
    <p>Meie patendeeritud kehale reageeriv tehnoloogia tähendab, et Rexona tunnetab, millal sinu keha vajab täiendavat kaitset – ja annab sellele märguande. </p>
    <p>Rexona teadlased avastasid, et keha reageerib erinevalt olukorras, kui inimesel on palav, ning olukorras, kui inimestel on stress või nad on ärevad. Rexona eesmärk on pakkuda higistamisvastast kaitset mõlemal juhul. No White Marks tehnoloogia tõttu ei jäta deodrandid riietele ühtegi jälge ning riided jäävad sama värskeks nagu sinu enesetunne. Rexona oli esimene kaubamärk, mis tutvustas tooteid, mis ei jäta valgeid jälgi tumedatele riietele.</p>
    <img src={BannerRexona} alt="Rexona deodorantide kaubamärgist"/>
    <h2>Rexona rahvusvaheline haare</h2>
    <p>Unilever on üks suurimaid higistamisvastaste vahendite ja deodorantide tootjaid maailmas ning mõistame sellega kaasnevat vastutust. Ühe osana oma pühendumusest jätkusuutlikkuse poole toetame ALUPRO ja BAMA rahvusvahelisi organisatsioone, et julgustada inimesi kogu maailmas tühje aerosoole koguma. Samuti võimaldame miljonitel madala sissetulekuga inimestel nautida Rexona eeliseid tasukohaste minipulkade, minirullide ja teiste deodorantide kaudu, mida toetavad erinevad isikliku hügieeni haridusprogrammid.</p>
    <h2>Iga Rexona aitab levitada positiivset liikumisega seotud sõnumit</h2>
    <p>Inimkeha on loodud liikumiseks – olgu selleks kas kõndmine, jooksmine või hüppamine. Kuid tänapäevases maailmas, kus inimesed liiguvad aina vähem, unustatakse tihtipeale see ära. Rexona usub positiivse sõnumi levitamisse liikumise kohta, nii et iga kord, kui kasutate Rexona deodoranti, aitate inspireerida miljoneid inimesi üles tõusma ja liikuma.</p>
    <p>Rexona on loonud inimeste liikumise aktiveerimiseks telefonirakenduse 5000 steps, mis aitab seada isiklikke eesmärke igapäevaste sammude täitmiseks. Kuigi meie liikumismissioon on saanud hea alguse, on veel väga palju tööd vaja teha. Jätkates Rexona toodete valimist ja oma keha liigutamist, aitada meelde tuletada, julgustada ja innustada ühe rohkem inimesi elama aktiivsemat eluviisi.</p>
    </Section>
  </>
)

export default RexonaAboutPage