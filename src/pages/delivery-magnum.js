import React from "react"
import styled from 'styled-components'
import SEO from '../components/Seo/Seo'
import HeroImage from '../assets/images/magnum-delivery.jpg';
import WoltBackground from '../assets/images/wolt-delivery.jpeg';
import BoltBackground from '../assets/images/bolt-delivery.jpg';
import IceCreamDelivery from '../assets/images/icecream-delivery.jpg';
import { Link } from 'gatsby';


const Section = styled.section`
    width:100%;
    margin:auto;
    margin-bottom:30px;
`;

const MagnumDeliverySection = styled.section`
    width: 90vw;
    margin: 20px auto;
    max-width: 1200px;
`;

const WoltDelivery = styled.section`
    img:hover {
      width:100%;
      height:100%;
      border-radius: 14px;
    }
    img {
    transition: all .5s;
    position: absolute;
    width:100px;
    height: 100px;
    right: 0;
    bottom: 0;
    border-radius: 14px 0 14px !important;
    }
`;

const DeliveryHeroImage = styled.img`
    width: 100%;
    object-fit:cover;

    @media(max-width:992px){
        height: 300px;
        object-fit: cover;
        object-position: -370px;
    }
`;

const MagnumDelivery = styled.section`
    margin: 50px auto 0;
    flex-direction: row;
    justify-content: center;
    display: grid;
    grid-template-columns: 50% 50%;

    @media(max-width:992px){
        flex-direction: column;
        margin: 0;
        display: flex;

      }
`;

const MagnumDeliveryBox = styled.section`
    p{
      text-align:center;
      min-height:75px;
    @media(max-width:992px){
      min-height: auto;
      }
    }
`;

const MagnumDeliveryBoxLink = styled.section`
    position: relative;
    text-align:center;
    transition: all .5s;
    margin: 0 auto;
    margin-bottom:30px;
    border-radius: 14px;
    width: 300px;
    /* @media(max-width:992px){
        width:100%;
      } */
    ${MagnumDeliveryBoxLink}:hover {
      transform: scale(1.08);
      box-shadow: 4px 4px 11px 0px rgb(80 51 35 / 72%);
      border-radius: 14px;
      img {
      width:100%;
      height:100%;
      border-radius: 14px !important;
    }
      }
    img {
    border-radius: 14px;
    max-width: 300px;
    text-align: center;
    }
    span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 20;
    /* text-shadow: 1px 3px 9px black; */
    background-color: rgb(255 255 255 / 70%);
    padding:15px;
    text-align: center;
    font-size: 20px;
    width:100%;
    }
    a {
      color:black
    }
    a:hover {
      color:black;
    }
`;

const IndexPage = () => {
  return (
   <>
   <SEO title="Telli jäätis kulleriga koju" description="Telli jäätis kulleriga koju! Oleme avanud Bolt Foodis ja Woltis virtuaalpoed Home of Ice Cream, kust saad tellida oma lemmiku jäätiste kulleriga koju!"/>
   <Section> 
   <DeliveryHeroImage src={HeroImage} alt="Magnum delivery"/>
   <MagnumDeliverySection>
    <h1>Telli jäätis kulleriga koju</h1>
    <p>Oleme avanud Bolt Foodi ja Wolti platvormil virtuaalpoed, kust saad tellida oma lemmiku jäätiste kulleriga koju!</p>
    <p>Home of Ice Cream on meie maitsva jäätise kodu! Avastage tõeline eufooria koos Ben&Jerry’s pintidega, mis on täis tükke, et rahuldada Teie jäätise iha. Koguge kokku oma lähimad sõbrad meeldivaks õhtuks, mida aitavad saavutada Super Viva lõbusad maitsed või kogege ülimat mõnu koos Magnumiga, mis on nüüd ka tuubis! Ühendage kõigi kolme kaubamärgiga ülim rahulolu!</p>

    <MagnumDelivery>
      <MagnumDeliveryBox><p>Jäätisepoed Wolti platvormil on aktiivsed Tallinnas ja Tartus</p>
      <MagnumDeliveryBoxLink>
        <Link target="_blank" to="https://wolt.com/en/search?q=home%20of%20ice%20cream">
          <img src={IceCreamDelivery}></img>
          <span>Home of Ice Cream Jõe</span>
          <WoltDelivery><img src={WoltBackground}></img></WoltDelivery>
        </Link>
      </MagnumDeliveryBoxLink>
      </MagnumDeliveryBox>
    <MagnumDeliveryBox><p>Jäätisepoed Bolti Foodi platvormil on aktiivsed Tallinnas, Tartus ja Pärnus ning peagi Narvas. Jättisepoed Bolt Foodi platvormil on nähtavad ainult Bolt Foodi telefonirakendusest.</p>
      <MagnumDeliveryBoxLink>
        <Link target="_blank" to="https://food.bolt.eu/en-us/">
          <img src={BoltBackground}></img>
          <span>Tellimiseks klõpsake</span>
        </Link>
      </MagnumDeliveryBoxLink>
    </MagnumDeliveryBox>
    
    </MagnumDelivery>
    </MagnumDeliverySection>
    </Section>
    </>
  )
}
export default IndexPage
