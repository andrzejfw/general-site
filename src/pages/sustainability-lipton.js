import React from "react"
import styled from "styled-components"
import SustainabilityHero from '../assets/images/world-tea-plantation-scene.jpg'
import SEO from '../components/Seo/Seo'

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

const Section = styled.div`
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

const SustainabilityPage = () => (
  <>
    <SEO title="Jätkusuutlikkus" description="Liptoni eesmärk on saavutada jätkusuutlik hankimine igal aastal toodetud 19 miljardile teepakile. Tee maitseb paremini, kui see on jätkusuutlikult hangitud."/>
    <SustainabilityHeroImage src={SustainabilityHero} alt="sustainability hands"/>
    <Section>
        <SustainabilityHeader>Jätkusuutlikkus</SustainabilityHeader>
        <p>Alates aastast 1880 on loodus olnud meie teevabrik. Iga tass Liptoni teed kasvatatakse loodusliku vihma, tuule ja päikese käes, et anda teile meie allkirjaga rikkalik maitse ja aroom. Veelgi enam, usume, et iga tassitäis Liptoni teed ei peaks aitama valgustada mitte ainult teie päeva, vaid ka kõigi meie teekasvatajate ja nende perede päeva. Ning loomulikult peaks see valgustama ka meie planeedi tulevikku.</p>
        <SustainabilitySubHeader>Iga tassitäis Liptonit toetab vihmavetsade liitu.</SustainabilitySubHeader>
        <p>Meil on vastutus tagada, et tee kasvatajad ja korjajad, kes töötavad väsimatult teie hommikuse, lõunase ja õhtuse teetassi nimel, oleksid hästi hoolitsetud. Sellepärast teeme koostööd asutusega Rainforest Alliance, et aidata kaasa nende inimeste toimetulekule, hoolitseda nende perede eest ja tagada, et meie Liptoni teekasvandused oleksid võimalikult jätkusuutlikud.</p>
        <SustainabilitySubHeader>Tee maitseb paremini, kui see on vastutustundlikult hangitud.</SustainabilitySubHeader>
        <p>Hommikuse tassiga ärkamine, pärastlõunase maiuse kõrvale joomine või õhtune teekruusiga lõõgastumine – enamus meist armastavad head tassi teed. Kuid ilma töökate kasvatajate ja korjajateta, kes töötavalt väsimatult selle nimel, et kõik teie tassi teelehed oleksid täiuslikud, poleks üldse teed olemaski. Nautides tassitäit Liptonit, aitate toetada Rainforest Alliance’i sertifitseeritud põllumajandustootjate toimetulekut, ja tagada, et Liptoni tee oleks 100% jätkusuutlik.</p>
        <SustainabilitySubHeader>Tagame toimetuleku meie tee kasvajatele ja korjajatele.</SustainabilitySubHeader>
        <p>Pakume meie tee kasvajatele, korjajatele ja nende peredele paremat elukvaliteeti. Kulutada 2,5 miljonit dollarit aastas meie Keenia töötajate tervishoiule, maksta neile kolm korda keskmist palka põllumajandussektoris või pakkuda 20 erinevate kooli nende töötajate lastele – seda kõike aitab meil neile pakkuda teie armastus Liptoni tee vastu. Kuid see ei ole kõik, mida me toetame. Seisame ka meie planeedi eest, sest 95% Kericho tehasest kasutab taastuv energiat ning oleme istutanud ligi 700 000 puud sellele kinnistule.</p>
        <SustainabilitySubHeader>Jätkusuutlik hankimine igal aastal toodetud 19 miljardile teepakile.</SustainabilitySubHeader>
        <p>Jätkusuutlikus meie teekasvandustes on jõudnud kaugele, kuid teekond pole lõppenud enne, kui saame igal aastal toodetud 19 miljardist teepakist iga teelehe jätkusuutlikult hankida. Jätkates koos Liptoni teega ärkamist, enda soojendamist või rahunemist, aitate meil sinna jõuda! Unileveri ettevõtte suuruse tõttu on meil võimalus positiivselt mõjutada kogu teetööstust – aidates kaasa rahvusvahelise tee hinnakujundusele, üle kahe miljoni selles valdkonnas töötava keenialase elule ja kogu teeäri mainele.</p>
      </Section>
  </>
)

export default SustainabilityPage