import React from 'react';
import { Link } from 'gatsby';
import UnileverLogoWhite from '../../assets/images/unilever-logo-white.png';
import FacebookImage from '../../assets/images/facebook-icon-blue.png';
import DoveFooter from '../../assets/images/mirror-lady.png';
import DoveFooterMobile from '../../assets/images/mirror-lady-cut.png';


const FooterDove = () => (
  <>
  <div className="footer-dove-container">
    <nav className="footer-dove-nav-wrapper">
        <div className="footer-dove-section">
        <li className="footer-dove-item-list">
            <div className="footer-dove-image-containter">
            
            <p><Link to ="https://www.facebook.com/doveeesti/" target="_blank" rel="noreferrer">
                <img src={FacebookImage} alt="Facebook ikoon" className="footer-dove-social-image"/>
            </Link></p>
            </div>
        </li>
        </div>
            
            <ul className="footer-dove-list">       
                <li className="footer-dove-item"><Link to="/sitemap">saidi kaart</Link></li>
                <li className="footer-dove-item"><Link to="/contact">kontakt</Link></li>
                <li className="footer-dove-item-list">
                    <a href="/cookie-notice">küpsise-eeskirjad</a>
                    <a href="/privacy-notice">privaatsuspoliitika</a>
                    <a href="/legal-notice">juriidiline teave</a></li>
                <li className="footer-dove-item">
                <img src={DoveFooter} className="dove-footer-graphic-image" alt="Dove ikoon jalus"/>
            </li>           
            </ul>
            <img src={DoveFooterMobile} className="dove-footer-graphic-image-mobile" alt="Dove ikoon jalus"/>
    </nav>
  </div>
  <div className="footer-dove-unilever-div">
    <Link to ="/">
        <img src={UnileverLogoWhite} alt="Unilever Eesti logo - must valge" className="footer-dove-unilever-logo"/>
    </Link>
    <div className="footer-dove-unilever-copyright">© Unilever</div>
  </div>
  </>
);

export default FooterDove;

