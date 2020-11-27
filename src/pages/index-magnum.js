import React from 'react'
import styled from 'styled-components'
import SEO from '../components/Seo/Seo'
import MagnumHeroImg from '../assets/images/magnum-hero-image.jpg';

const SectionMagnumHP = styled.section`
    width: 100%;
`;

const MagnumHeroImage = styled.img`
    width: 100%;
    height: 600px;
    object-fit: cover;
    object-position: 0 -200px;

    @media (max-width: 992px) {
        height: 400px;
        object-position: -100px 0;
    }
`;

const IndexPageMagnum = () => {
    return (
        <>
        <SEO title="Magnum Eesti" description=""/>
        <SectionMagnumHP>
            <MagnumHeroImage src={MagnumHeroImg} alt="Magnum image"/> 
            <h1 style={{textAlign: 'center', margin: '50px 0'}}>Magnum Title</h1>
            <p style={{margin: '0 10% 50px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </SectionMagnumHP>
        </>
    )
}
export default IndexPageMagnum;