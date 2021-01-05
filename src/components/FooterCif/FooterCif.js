import React from 'react';
import { Link } from 'gatsby';
import UnileverLogoWhite from '../../assets/images/unilever-logo-white.png';
import FacebookImage from '../../assets/images/facebook-icon-white.png';
import CifProduct from '../../assets/images/cif-product.png';


const FooterCif = () => (
  <>
  <div className="footer-cif-container">
    <nav className="footer-cif-nav-wrapper">
        <div className="footer-cif-section">
        <li className="footer-cif-item-list">
            <div className="footer-cif-image-containter">
            
            <p><Link to ="https://www.facebook.com/doveeesti/" target="_blank" rel="noreferrer">
                <img src={FacebookImage} alt="Facebook ikoon" className="footer-cif-social-image"/>
            </Link></p>
            </div>
        </li>
        </div>
            
            <ul className="footer-cif-list">       
                <li className="footer-cif-item"><Link to="/sitemap">saidi kaart</Link></li>
                <li className="footer-cif-item"><Link to="/contact">kontakt</Link></li>
                <li className="footer-cif-item-list">
                    <a href="/cookie-notice">küpsise-eeskirjad</a>
                    <a href="/privacy-notice">privaatsuspoliitika</a>
                    <a href="/legal-notice">juriidiline teave</a></li>
                <li className="footer-cif-item">
                <img src={CifProduct} className="cif-footer-graphic-image" alt="Dove ikoon jalus"/>
            </li>           
            </ul>
    </nav>
  </div>
  <div className="footer-cif-unilever-div">
    <Link to ="/">
        <img src={UnileverLogoWhite} alt="Unilever Eesti logo - must valge" className="footer-cif-unilever-logo"/>
    </Link>
    <div className="footer-cif-unilever-copyright">© Unilever</div>
  </div>
  </>
);

export default FooterCif;

