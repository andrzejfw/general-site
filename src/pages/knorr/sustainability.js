import React from "react"
import styled from 'styled-components'
import SEO from '../../components/Seo/Seo'
import KnorrHeroImg from '../../assets/images/knorr-sustainability-hero.jpg'
import KnorrBannerImg from '../../assets/images/knorr-sustainability-banner.jpg'
import KnorrBannerImgMobile from '../../assets/images/knorr-sustainability-banner-mobile.jpg'
import ScrollAnimation from 'react-animate-on-scroll'


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
        object-position: 30%;
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
    <SEO title="Knorri jätkusuutlikkus" description="Knorri jätkusuutlikkus. Knorri eesmärk on hankida kõik toorained 100% jätkusuutlikult. Soovime, et meie toit vastaks kõrgeimatele toitumisstandarditele."/>
    <ScrollAnimation animateIn="animate__fadeIn" animateOnce="true">
    <KnorrHeroImage src={KnorrHeroImg} alt="Knorr - jätkusuutlik toidu hankimine"/> 
    </ScrollAnimation>
    <ScrollAnimation animateIn="animate__fadeIn" delay="600" animateOnce="true">
    <Section> 
        <h1>Knorri jätkusuutlikkus</h1>
        <h2>Jätkustuulik toodete hankimine</h2>
        <p>Oleme välja töötanud jätkusuutliku põllumajanduskoodeksi koostöös põllumajandustootjate ja jätkusuutlikkuse ekspertidega nagu Rainforest Alliance, Roundtable on Sustainable Palm Oil (RSPO) ja Fairtrade Foundation. Koodeks määrab ära 11 säästva põllumajanduse tingimust nagu mulla kvaliteet, veekasutamine, bioloogiline mitmekesisus, et saavutada 100% jätkustuulik toorainete hankimine.</p>
        <h2>Kuidas toetame põllumehi?</h2>
        <p>Aastal 2011 asutasime Knorri partnerlusfondi, mis investeerib igal aastal miljon eurot kaasrahastavatesse projektidesse põllumajandustootjate jaoks. See aitab neil täita meie Unileveri säästva põllumajanduskoodeksi nõudeid. Samuti premeerime talusid, mis on saavutanud parimad jätkusuutlikkuse standardid. Sellised põllumajandusettevõtted on täitnud kõik meie koodeksi nõuded ning soovime, et teised ettevõtted võtaksid neilt eeskuju. Alates 2011. aastast oleme andnud paljudele põllumajandusettevõtetele eeskujuliku ja jätkusuutliku ettevõtte staatuse.</p>
        <h2>Toiduained Knorris</h2>
        <p>Usume, et on oluline tagada, et loomi kasvatatakse heades tingimustes ja, et neid koheldatakse vastavalt heaolustandarditele. Oleme oma loomade heaolu standardid välja töötanud koos erinevate mittetulundusühingutega. Meie eesmärk on tagada, et loomadel on piisavalt ruumi ning valgust ja sobiv keskkond, mis sobib nende loomuliku käitumisega.</p>
        <p>Osana oma 2020. aasta ambitsioonist aitasime paljudel meie tarneahelas olevatel vürtsikasvajatel oma põllumajandustehnikat täiustada ning pääseda juurde koolitustele ja toetustele.</p>
        <KnorrMiddleBanner src={KnorrBannerImg} alt="Knorr - jätkusuutlik toidu hankimine"/>
        <h2>Toitvate roogade valmistamine</h2>
        <p>Usume, et toitev toit peaks olema kõigile kättesaadav. Hoolitseme selle eest, et köögiviljad säilitaksid naturaalsed omadused meie toodetes. Valmistame toitu, mis sisaldab vajalikke toitaineid erinevatele inimestele – näiteks rauaga rikastatud Knorri kuubikud. Lisaks inspireerime inimesi lisama oma roogadele maitset, kasutades oma retseptides toitvaid koostisosi.</p>
        <p>Koostöös Maailma Toiduprogrammiga (World Food Programme) loome inimestele helgemat tulevikku, kus toitvad road on kättesaadavad rohkematele inimestele kogu maailmas. Igal aastal annetame koos Maailma Toiduprogrammiga koolilastele kuumtoite kogu maailmas ning siiani oleme pakkunud üle kahe miljoni portsjoni.</p>
        <p>Unilever jätkusuutliku kava osana on meil ülemaailmne eesmärk, et 75% meie toodetest vastaks soolasisaldusele, mis võimaldab tarbida maksimaalselt 5 grammi päevas. Samuti oli meie eesmärk kahekordistada 2020. aastaks ülemaailmselt tunnustatud toitumisjuhistele tuginedes meie portfelli osakaalu, mis vastaks kõrgeimatele toitumisstandarditele.</p>
    </Section>
    </ScrollAnimation>
    </>
  )
}
export default AboutPageKnorr
