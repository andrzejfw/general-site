import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Img = styled.img`
    width:66px;
    height:72px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    a{
        text-decoration:none;
      color: #005EEF;
    }
   
`;

const FooterWrapper = styled.nav`
    height: 15vh;
  display: flex;
  align-items:center;
  background-color: #fff;
  position: relative;
  justify-content: space-between;
  text-transform: uppercase;
  border-bottom: 2px solid #33333320;
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 2;
  align-self: center;
  max-width:1350px;

  @media (max-width: 768px) {
   
    height: 11vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }   
    `;
    

const FooterList = styled.ul`
    margin:0;
    padding:0;
    display:flex;
    list-style:none;
`;
const FooterLogo = styled.span`
a{
    text-decoration:none;
    color:#000;
}
`

const FooterItem = styled.li`
  text-decoration: none;
  color: #005EEF;
  font-weight:bold;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  font-family:sans-serif;
  text-transform:capitalize;
  list-style:none;
  text-decoration:none;
  a{
      text-decoration:none;
      color: #005EEF;
  }

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: goldenrod;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: goldenrod;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`



const Footer = () => (
    <FooterWrapper>
          <Link to ="/"><Img src="https://www.unilever.com/Images/UNILEVER_LOGO_160_tcm244-541804.gif" /><p>© Unilever 2020</p></Link>
        <FooterList>
            <FooterItem><Link to="/about">Facebook</Link></FooterItem>
            <FooterItem><Link to="/about">Twitter</Link></FooterItem>
            <FooterItem><Link to="/about">Sitemap</Link></FooterItem>
            <FooterItem><Link to="/brands">Contact</Link></FooterItem>
            <FooterItem><Link to="/contact">Legal Links</Link></FooterItem>           
        </FooterList>
    </FooterWrapper>
);

export default Footer;

