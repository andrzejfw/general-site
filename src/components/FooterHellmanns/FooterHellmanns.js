import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import UnileverLogoWhite from '../../assets/images/unilever-logo-white.png';
import FacebookImage from '../../assets/images/facebook-icon-white.png';
import BackgroundHellmannsFooter from '../../assets/images/hellmanns-bg-footer.png';
import HellmannsJar from '../../assets/images/hellmanns-jar.png';

const DivHellmannsContainer = styled.div`
    background: url(${BackgroundHellmannsFooter});
`;


const FooterHellmanns = () => (
  <>
  <DivHellmannsContainer className="footer-hellmanns-container">
    <nav className="footer-hellmanns-nav-wrapper">
        <div className="footer-hellmanns-section">
        <li className="footer-hellmanns-item-list">
            <div className="footer-hellmanns-image-containter">
            
            <p><Link to ="https://www.facebook.com/Hellmanns.Eesti/" target="_blank" rel="noreferrer">
                <img src={FacebookImage} alt="Facebook ikoon" className="footer-hellmanns-social-image"/>
            </Link></p>
            </div>
        </li>
        </div>
            
            <ul className="footer-hellmanns-list">       
                <li className="footer-hellmanns-item"><a href="/sitemap" target="_blank">saidi kaart</a></li>
                <li className="footer-hellmanns-item"><a href="/contact" target="_blank">kontakt </a></li>
                <li className="footer-hellmanns-item-list">
                    <a href="/cookie-notice" target="_blank">küpsise-eeskirjad</a>
                    <a href="/privacy-notice" target="_blank">privaatsuspoliitika</a>
                    <a href="/legal-notice" target="_blank">juriidiline teave</a></li>
                <li className="footer-hellmanns-item">
                <img src={HellmannsJar} className="hellmanns-footer-graphic-image" alt="Hellmann's ikoon jalus"/>
            </li>           
            </ul>
    </nav>
  </DivHellmannsContainer>
  <div className="footer-hellmanns-unilever-div">
    <a href ="/">
        <img src={UnileverLogoWhite} alt="Unilever Eesti logo - must valge" className="footer-hellmanns-unilever-logo"/>
    </a>
    <div className="footer-hellmanns-unilever-copyright">© Unilever</div>
  </div>
  </>
);

export default FooterHellmanns;

