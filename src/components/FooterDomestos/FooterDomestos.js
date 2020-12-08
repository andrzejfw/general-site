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
                <li className="footer-domestos-item"><Link to="/sitemap">saidi kaart</Link></li>
                <li className="footer-domestos-item"><Link to="/contact">kontakt</Link></li>
                <li className="footer-domestos-item-list">
                    <a href="/cookie-notice">küpsise-eeskirjad</a>
                    <a href="/privacy-notice">privaatsuspoliitika</a>
                    <a href="/legal-notice">juriidiline teave</a></li>
            </ul>
            <img className="desktop-domestos-footer-graphic-image" src={DomestosDesktop} alt="Domesto toilet blok"/>           
    </nav>
  </div>
  <div className="footer-domestos-unilever-div">
    <Link to ="/">
        <img src={UnileverLogoWhite} alt="Unilever Eesti logo - must valge" className="footer-domestos-unilever-logo"/>
    </Link>
    <div className="footer-domestos-unilever-copyright">© Unilever 2020</div>
  </div>
  </>
);

export default FooterDomestos;

