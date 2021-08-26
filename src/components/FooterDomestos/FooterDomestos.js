import React from 'react';
import { Link } from 'gatsby';
import UnileverLogoWhite from '../../assets/images/unilever-logo-white.png';
import FacebookImage from '../../assets/images/facebook-icon-white.png';
import DomestosMobile from '../../assets/images/magnum-icecream.png';
import DomestosDesktop from '../../assets/images/domestos-footer2.png'


const FooterDomestos = () => (
  <>
  <div className="footer-domestos-container">
    <nav className="footer-domestos-nav-wrapper">
        <div className="footer-domestos-section">
        <li className="footer-domestos-item-list">
            <div className="footer-domestos-image-containter">
            
            <p><Link to ="https://www.facebook.com/domestoseesti/" target="_blank" rel="noreferrer">
                <img src={FacebookImage} alt="Facebook ikoon" className="footer-domestos-social-image"/>
            </Link></p>
            </div>
        </li>
        </div>
            
            <ul className="footer-domestos-list">       
                <li className="footer-domestos-item"><a href="/sitemap" target="_blank">saidi kaart</a></li>
                <li className="footer-domestos-item"><a href="/contact" target="_blank">kontakt</a></li>
                <li className="footer-domestos-item-list">
                    <a href="/cookie-notice" target="_blank">küpsise-eeskirjad</a>
                    <a href="/privacy-notice" target="_blank">privaatsuspoliitika</a>
                    <a href="/legal-notice" target="_blank">juriidiline teave</a></li>
            </ul>
            <img className="desktop-domestos-footer-graphic-image" src={DomestosDesktop} alt="Domesto toilet blok"/>           
    </nav>
  </div>
  <div className="footer-domestos-unilever-div">
    <Link to ="/">
        <img src={UnileverLogoWhite} alt="Unilever Eesti logo - must valge" className="footer-domestos-unilever-logo"/>
    </Link>
    <div className="footer-domestos-unilever-copyright">© Unilever</div>
  </div>
  </>
);

export default FooterDomestos;

