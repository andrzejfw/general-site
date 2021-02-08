import React from "react"
import styled from 'styled-components'
import SEO from '../../components/Seo/Seo'
import KnorrHeroImg from '../../assets/images/knorr-about-hero.jpg'
import KnorrBannerImg from '../../assets/images/knorr-about-banner.jpg'
import KnorrBannerImgMobile from '../../assets/images/knorr-about-banner-mobile.jpg'


const Section = styled.section`
    max-width: 1200px;
    margin:50px auto;
    padding-bottom:30px;

    @media (max-width: 1200px) {
      padding: 0 5%;
    }

    @media (max-width: 692px) {
      padding: 0 0 30px;
      margin-bottom: -50px;
    }

    h1 {
        color: #007a33;
        text-align: center;
        margin-bottom: 20px;

        @media (max-width: 692px) {
            margin-top: 20px;
            margin-bottom: 40px;
        }
    }

    h2 {
        color: #007a33;
        font-size: 1.4rem;
    }

    img {
        margin: 20px 0 50px;
        width: 100%;

        @media (max-width: 692px) {
        margin: 5px 0 15px;
        }
    }

    @media (max-width: 692px) {
      margin: 0 5%;
    }
`;

const KnorrHeroImage = styled.img`
    width: 100%;
    height: 550px;
    object-fit: cover;
    margin-top: -60px;

    @media (max-width: 1200px) {
        height: 350px;
    }

    @media (max-width: 692px) {
        margin-top: 0;
        object-position: 80%;
    }
`;

const KnorrMiddleBanner = styled.img`
    @media (max-width: 692px) {
        content: url(${KnorrBannerImgMobile});
    }
`;

const AboutPageKnorr = () => {
  return (
    <>
    <SEO title="Knorri kaubamärgist" description="Knorri kaubamärgist. Knorri lugu sai alguse juba 1838. aastal ning kõrge toidu kvaliteet on olnud meile oluline juba algusest. Loe rohkem Knorri brändi kohta"/>
    <KnorrHeroImage src={KnorrHeroImg} alt="Knorri kaubamärgistrr"/> 
    <Section> 
        <h1>Knorri kaubamärgist</h1>
        <h2>Knorri eesmärk</h2>
        <p>Ainult kaksteist taime ja viis looma moodustavad 75% sellest, mida kogu maailm igapäevaselt sööb. Kuid nii väheste toitude söömine on kahjulik nii meile kui ka meie planeedile. Knorr tahab seda muuta. Knorr kasvatab oma koostisosi juba täies mahus jätkusuutlikult ning soovime ka oma toodete, retseptide ja näpunäidete kaudu inspireerida inimesi ellu viima igapäevaseid väikseid muudatutusi, mis loovad suure erinevuse.</p>
        <h2>Knorri ajalugu</h2>
        <p>Knorri ajalugu on lugu kirest, uurimisest ja toidu uuendustest. Kõrge kvaliteet on meie toidufilosoofia – see on olnud aastaid tegemisel. Knorri lugu sai alguse 1838. aastal, kui Carl Henrich knorr avas Saksamaal Heilbronnis esimese Knorri köögi, varustades sigurit kohvitööstusele.</p>
        <p>Toitumise ja maitse säilitamiseks hakkas ta katsetama köögiviljade ja maitseainete kuivatamist, mille tulemusena hakati 1873. aastal kogu Mandri-Euroopas turule tooma esimesi Knorri kuivatatud suppe. See läbimurre algatas rea edusamme alates toitva hernesupi kasutuselevõtust 1889. aastal kuni meie teeraja Knorri Euroopa kastmeseguni 1908. aastal. Aastal 1912 tutvustati esimest Knorri puljongikuubikut, mis sai hiljem nimeks Knorr Stock Cube. See andis võimaluse nautida maitsvaid roogasid kodus, ilma, et oleks vaja midagi nullist valmistada. See tagasihoidlik väike toode osutus hitiks kogu maailmas.</p>
        <KnorrMiddleBanner src={KnorrBannerImg} alt="Knorri ajalugu"/>
        <h2>Otsides parimaid maitseid</h2>
        <p>Carl Heinrichi kirg ja innovatsioon elavad edasi meie Knorri peakokkade kaudu ning täna on Knorri tooted saadaval kogu maailmas. Tegelikult naudivad Knorri tooteid üle 320. miljoni inimese iga päev ja nendel toodetel on endiselt Carl Heinrich Knorri ikooniline allkiri, kellest see kõik alguse sai.</p>
        <p>Täna on meie köögid mänguväljakuks tuhandetele tõelistele kokkadele – kirglikud eksperdid, kes teevad koostööd retseptide lihvimiseks, mis aitavad teil ikka ja jälle maitsvaid eineid pakkuda. Oleme uhked kohalike maitsete tõelise mõistmise üle, pakkudes suurepäraseid maitseelamusi ja aidates inimestele lähemale tuua võõraste kultuuride autentset kööki.</p>
        <h2>Jätkusuutlik tulevik</h2>
        <p>Meie pühendumus kõrgeima kvaliteediga toidu pakkumisele viib meid nüüd uue tuleviku suunas, mis hõlmab jätkusuutlikkust. Investeerime uutesse, tõhusamatesse protsessidesse ja jätkusuutlikkuse põhimõtete omaksvõtmisesse oma ettevõtte kaudu. See ei ole lihtne tee, kuid meie koostisosade vastutustundlik hankimine aitab tagada, et saaksime pakkuda peredele kogu maailmas maitsvaid ja toitvaid roogasid.</p>
    </Section>
    </>
  )
}
export default AboutPageKnorr
