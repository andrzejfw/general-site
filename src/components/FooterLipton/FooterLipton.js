import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import UnileverLogoWhite from '../../assets/images/unilever-logo-white.png';
import FacebookImage from '../../assets/images/facebook-icon-white.png';
import LadyWithTea from '../../assets/images/lady-with-tea.png';

const Footercontainer = styled.div`
    height:20vh; 
    z-index:2;
    background:#ffd400;

    @media (max-width:1600px){
    height:25vh;
  }

  @media (max-width:1200px){
    height:20vh;
  }

    @media (max-width:992px){
    height:100%;
  }

`;

const SocialImage = styled.img`
    width:auto;
    height:50px;
    margin:55px 20px;

  @media (max-width:500px){
      height: 30px;
      margin: 20px 10px 0;
  }
   
`;

const GraphicImage = styled.img`
  width:auto;
  height:250px;
  position: absolute;
  bottom: 0;
  right: -20%;

  @media (max-width:1600px){
    bottom: -5vh;
  }

  @media (max-width:1100px){
    display: none;
  }
`;

const FooterWrapper = styled.nav`
  height: 20vh;
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items:center;
  background-color: transparent;
  position: relative;
  justify-content: space-between;
  text-transform: uppercase;
  margin: 0 30% 0 15%;
  padding: 0 8%;
  z-index: 2;
  align-self: center;
  
  @media (max-width:1600px){
    margin: 0;
    padding: 0 10%;
    max-width: 1000px;
  }

  @media (max-width:992px){
    height:100%;
  }

  @media (max-width:692px){
    height:100%;
    margin: 0 auto 5%;
  }

  @media (max-width: 500px) {
    display:flex;
    flex-direction:column;
    margin: 0;
    padding-bottom: 5%;
  }   
    `;
    
const FooterList = styled.ul`
    margin:0;
    padding:0;
    display:flex;
    list-style:none;
    display:flex;
    justify-content:space-between;
    align-items:flex-start;
    
    @media(max-width:500px){
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
    }
`;

const FooterImageContainer = styled.div`
    display:flex;
`;

const FooterSection = styled.div`
    display:flex;
    justify-content: space-between;
`;

const FooterItem = styled.li`
  text-decoration: none;
  color: #c8381d;
  font-weight:bold;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw; 
  position: relative;  
  text-transform:capitalize;
  list-style:none;
  text-decoration:none;
  display:flex;

  p{
    font-size:12px;
    color: #c8381d;
  }
  a{
      text-decoration:none;
      color: #c8381d;
      :hover {
      color: #e95c02;
  }
  }

  :hover {
    color: #e95c02;
   
  }  
`;

const FooterItemList = styled.li`
  text-decoration: none;
  color: #c8381d !important;
  font-weight:bold;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  position: relative;
  text-transform:capitalize;
  list-style:none;
  text-decoration:none;
  display:flex;
  flex-direction:column;  
  align-items:center; 

  p{
    font-size:12px;
    color: #c8381d;
  }
  a{
      text-decoration:none;
      color: #c8381d;
      :hover {
      color: #e95c02;
   
  }
  }

  @media(max-width:500px){
    justify-content:center;
    align-items:center;   
  }  
`;

const UnileverFooter = styled.div`
    z-index:2;
    background:#7f7f7f;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-right: 3%;

    @media (max-width:992px){
    flex-direction: column;
    padding-left: 0;
    padding-right: 0;
  }
`;

const LogoImage = styled.img`
    width:50px;
    height:auto;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    @media(max-width:992px){
      margin: 5px auto 0;
    }
   
`;

const FooterCopyright = styled.div`
    font-size: .8rem;
    color: #fff;
    align-self: center;
    padding-left: 10px;

    @media (max-width:992px){
    padding-bottom: 10px;
    padding-left: 0;
  }
`;


const FooterLipton = () => (
  <>
  <Footercontainer>
    <FooterWrapper>
        <FooterSection>
        <FooterItemList>
            <FooterImageContainer>
            <p><Link to ="https://www.facebook.com/LiptonEesti/" target="_blank" rel="noreferrer">
                <SocialImage src={FacebookImage} alt="Facebook ikoon"/>
            </Link></p>
            </FooterImageContainer>
        </FooterItemList>
        </FooterSection>
            <FooterList>            
                <FooterItem><a href="/sitemap" target="_blank">saidi kaart</a></FooterItem>
                <FooterItem><a href="/contact" target="_blank">kontakt </a></FooterItem>
                <FooterItemList><a href="/cookie-notice" target="_blank">küpsise-eeskirjad</a><a href="/privacy-notice" target="_blank">privaatsuspoliitika</a><a href="/legal-notice" target="_blank">juriidiline teave</a></FooterItemList>           
            </FooterList>
        <GraphicImage src={LadyWithTea} alt="Lipton ikoon jalus"/>
    </FooterWrapper>
  </Footercontainer>
  <UnileverFooter>
    <a href ="/"><LogoImage src={UnileverLogoWhite} alt="Unilever Eesti logo - must valge"/></a><FooterCopyright>© Unilever</FooterCopyright>
  </UnileverFooter>
  </>
);

export default FooterLipton;

