import React from 'react';
import { Link } from 'gatsby';
import UnileverLogoWhite from '../../assets/images/unilever-logo-white.png';
import FacebookImage from '../../assets/images/facebook-icon-white.png';
import RexonaProduct from '../../assets/images/rexona-product.png';


const FooterRexona = () => (
  <>
  <div className="footer-rexona-container">
    <nav className="footer-rexona-nav-wrapper">
        <div className="footer-rexona-section">
        <li className="footer-rexona-item-list">
            <div className="footer-rexona-image-containter">
            
            <p><Link to ="https://www.facebook.com/RexonaEE/" target="_blank" rel="noreferrer">
                <img src={FacebookImage} alt="Facebook ikoon" className="footer-rexona-social-image"/>
            </Link></p>
            </div>
        </li>
        </div>
            
            <ul className="footer-rexona-list">       
                <li className="footer-rexona-item"><Link to="/sitemap">saidi kaart</Link></li>
                <li className="footer-rexona-item"><a href="/contact" target="_blank">kontakt </a></li>
                <li className="footer-rexona-item-list">
                    <a href="/cookie-notice" target="_blank">küpsise-eeskirjad</a>
                    <a href="/privacy-notice" target="_blank">privaatsuspoliitika</a>
                    <a href="/legal-notice" target="_blank">juriidiline teave</a>
                  </li>
                <li className="footer-rexona-item">
                <img src={RexonaProduct} className="rexona-footer-graphic-image" alt="Dove ikoon jalus"/>
            </li>           
            </ul>
    </nav>
  </div>
  <div className="footer-rexona-unilever-div">
    <Link to ="/">
        <img src={UnileverLogoWhite} alt="Unilever Eesti logo - must valge" className="footer-rexona-unilever-logo"/>
    </Link>
    <div className="footer-rexona-unilever-copyright">© Unilever</div>
  </div>
  </>
);

export default FooterRexona;

