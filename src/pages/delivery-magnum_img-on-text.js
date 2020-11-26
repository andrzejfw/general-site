import React from "react"
import styled from 'styled-components'
import SEO from '../components/Seo/Seo'
import HeroImage from '../assets/images/magnum-delivery.jpg';
import WoltBackground from '../assets/images/wolt-delivery.jpeg';
import BoltBackground from '../assets/images/bolt-delivery.jpg';
import { Link } from 'gatsby';


const Section = styled.section`
    width:90vw;
    max-width:1200px;
    margin:auto;
    margin-bottom:30px;
    text-align:justify;
`;

const MagnumHeroImage = styled.img`
    width: 100%;
    object-fit:cover;

    @media(max-width:992px){
        width: auto;
        height: 300px;
        object-fit: cover;
        object-position: -370px;
    }
`;

const MagnumDelivery = styled.section`
    margin: 50px auto 0;
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media(max-width:992px){
        flex-direction: column;
        margin: 0;
      }
`;
const MagnumDeliveryBox = styled.section`
    position: relative;
    text-align:center;
    transition: transform .5s;
    ${MagnumDeliveryBox}:hover {
      transform: scale(1.08);
      }
    img {
    width:99%;
    border-radius: 14px;
    margin: 0 30px;
    max-width: 300px;
    text-align: center;
    }
    img:hover {
      
    }
    p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 20;
    width: 70%;
    /* text-shadow: 1px 3px 9px black; */
    background-color: rgb(255 255 255 / 50%);
    border-radius: 10px;
    padding:20px;
    
    }
    a {
      color:black
    }
    a:hover {
      color:black;
      font-weight:700;
    }
`;

const IndexPage = () => {
  return (
   <>
   <SEO title="Telli jäätis kulleriga koju" description="Telli jäätis kulleriga koju! Oleme avanud Bolt Foodis ja Woltis virtuaalpoed Home of Ice Cream, kust saad tellida oma lemmiku jäätiste kulleriga koju!"/>
   <MagnumHeroImage src={HeroImage} alt="Magnum delivery"/>
    <Section> 
    
    <h1>Telli jäätis kulleriga koju</h1>
    <p>Oleme avanud Bolt Foodi ja Wolti platvormil virtuaalpoed, kust saad tellida oma lemmiku jäätiste kulleriga koju!</p>
    <p>Home of Ice Cream on meie maitsva jäätise kodu! Avastage tõeline eufooria koos Ben&Jerry’s pintidega, mis on täis tükke, et rahuldada Teie jäätise iha. Koguge kokku oma lähimad sõbrad meeldivaks õhtuks, mida aitavad saavutada Super Viva lõbusad maitsed või kogege ülimat mõnu koos Magnumiga, mis on nüüd ka tuubis! Ühendage kõigi kolme kaubamärgiga ülim rahulolu!</p>

    <MagnumDelivery>
    <MagnumDeliveryBox><Link target="_blank" to="https://wolt.com/en/search?q=home%20of%20ice%20cream"><p>Jäätisepoed Wolti platvormil on aktiivsed Tallinnas ja Tartus</p><img src={WoltBackground}></img></Link></MagnumDeliveryBox>
    <MagnumDeliveryBox><Link target="_blank" to="https://wolt.com/en/search?q=home%20of%20ice%20cream"><p>Jäätisepoed Wolti platvormil on aktiivsed Tallinnas ja Tartus</p><img src={WoltBackground}></img></Link></MagnumDeliveryBox>
    <MagnumDeliveryBox><Link target="_blank" to="https://food.bolt.eu/en-us/"><p>Jäätisepoed Bolti Foodi platvormil on aktiivsed Tallinnas, Tartus ja Pärnus ning peagi Narvas. Jättisepoed Bolt Foodi platvormil on nähtavad ainult Bolt Foodi telefonirakendusest.</p><img src={BoltBackground}></img></Link></MagnumDeliveryBox>
    
    </MagnumDelivery>
    </Section>
    </>
  )
}
export default IndexPage
