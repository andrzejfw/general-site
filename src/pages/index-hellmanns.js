import React from "react"
import styled from 'styled-components'
import SEO from '../components/Seo/Seo'
import HellmannsHeroImg from '../assets/images/hellmanns-hero-banner.jpg'

const Section = styled.section`
    width:100%;
    margin:auto;
    padding-bottom:30px;
    text-align: center;
    background: #fdf6e8;
    /* padding-top: 50px; */
`;

const HellmannsHeroImage = styled.img`
    width: 100%;
    height: 550px;
    object-fit: cover;
/* 
    @media (max-width: 1200px) {
        height: 400px;
        content: url(${HellmannsHeroImg});
    }

    @media (max-width: 692px) {
        margin-top: 50px;
    } */
`;

const IndexPageHellmanns = () => {
  return (
   <>
   <SEO title="Telli jäätis kulleriga koju" description="Telli jäätis kulleriga koju! Oleme avanud Bolt Foodis ja Woltis virtuaalpoed Home of Ice Cream, kust saad tellida oma lemmiku jäätiste kulleriga koju!"/>
   <Section> 
    <HellmannsHeroImage src={HellmannsHeroImg} alt="Magnum jäätis"/> 
    <p style={{padding: "50px 0"}}>Tõelised nautlejad teavad, et õnn peitub väikestes asjades.</p>
    <p style={{padding: "50px 0"}}>Tõelised nautlejad teavad, et õnn peitub väikestes asjades.</p>
    <p style={{padding: "50px 0"}}>Tõelised nautlejad teavad, et õnn peitub väikestes asjades.</p>
    <p style={{padding: "50px 0"}}>Tõelised nautlejad teavad, et õnn peitub väikestes asjades.</p>
    <p style={{padding: "50px 0"}}>Tõelised nautlejad teavad, et õnn peitub väikestes asjades.</p>
    <p style={{padding: "50px 0"}}>Tõelised nautlejad teavad, et õnn peitub väikestes asjades.</p>
    </Section>
    </>
  )
}
export default IndexPageHellmanns
