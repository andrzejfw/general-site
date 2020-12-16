import React from 'react'
import styled from 'styled-components'
import SEO from '../components/Seo/Seo'
import HellmannsHeroImg from '../assets/images/hellmanns-hero-banner.jpg'
import VideoHellmanns from '../components/VideoHellmanns/VideoHellmanns'

const HellmannsPurposeDiv = styled.div`
    background: #FDF6E8;
    padding-bottom: 10px;

    img {
        width: 100%;
        height: 500px;
        object-fit: cover;
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
    }
`;

const HellmannsPurposePage = () => {
    return (
      <>
      <SEO title="Toit on raiskamiseks liiga maitsev" description="Hellmann'si eesmärk on aidata inimestel nautida head, kvaliteetset toitu just sellisena nagu see on, ilma muretsemise ja raiskamiseta. Liitu meie üleskutsega."/>
        <HellmannsPurposeDiv>
            <img src={HellmannsHeroImg}/>
            <HellmannsPurposeSection>
                <h1>TOIT ON RAISKAMISEKS LIIGA MAITSEV</h1>
                <h2>Aitame inimestel nautida head, kvaliteetset toitu just sellisena nagu see on, ilma muretsemise ja raiskamiseta.</h2>
                </HellmannsPurposeSection>
                <VideoHellmanns videoId="vmSKx7zMF1o"></VideoHellmanns>
                <HellmannsPurposeSection>
                <p style={{fontWeight: "bold"}}>Juhtiva majoneesikaubamärgina maailmas ja Balti riikides on meil vastutus pakkuda inimestele, kes meie tooteid armastavad, toitu, mis ainult ei maitse hästi, vaid ka teeb head. Lihtsamalt öeldes usume, et Toit on raiskamiseks liiga maitsev ja toidu raiskamine ei tohiks olla sotsiaalselt vastuvõetav.</p>
                <p>Ehk arvate, et Balti riikide kohta see ei käi? Kas teadsite, et Balti riikides raiskame umbes 1 152 000 000 kg toitu aastas? Mis tähendab 187 kg raisatud toitu inimese kohta aastas? Ning see võrdub 267 raisatud Hellmann’s 650 ml pudeliga? Tavaliselt juhtub see inspiratsiooni puudusest või huvist proovida uusi retsepte.  Kahjuks võivad aga külmkapis olemasolevad koostisosad selle ajaga riknema minna. Kuid ärge muretsege – te ei ole üksi! Toidu raiskamine on globaalne – meie kõigi mure, seega on meil kõigil selles tähtis roll: talunikel, tarnijatel, valitsusel ja tarbijatel.</p>
                <p>Küsite, kuidas Hellmann’s kaubamärk saab probleemi lahendamisele kaasa aidata? Kuna usume, et toit on raiskamiseks liiga maitsev, otsustasime teid inspireerida mõne lihtsa retsepti ja näpunäitega eelmistest toidukordadest ülejäänud toidu tarvis. Tutvuge meie soovitustega, mida kokata külmkapis olemasolevast ja ühinege meie liikumisega!</p>
            </HellmannsPurposeSection>
        </HellmannsPurposeDiv>
       </>
     )
    }
  export default HellmannsPurposePage