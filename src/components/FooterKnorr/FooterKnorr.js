import React from 'react';
import { Link } from 'gatsby';
import UnileverLogoWhite from '../../assets/images/unilever-logo-white.png';
import FacebookImage from '../../assets/images/facebook-icon-white.png';
import UFSImage from '../../assets/images/UFS-Logo.png';
import KnorrFooter from '../../assets/images/knorr-footer-image.png';
import KnorrFooterMobile from '../../assets/images/knorr-footer-image-mobile.png';


const FooterKnorr = () => (
  <>
  <div className="footer-knorr-container">
    <nav className="footer-knorr-nav-wrapper">
        <div className="footer-knorr-section">
        <li className="footer-knorr-item-list">
            <div className="footer-knorr-image-containter">
            
            <p><Link to ="https://www.facebook.com/KnorrWorldwide/" target="_blank" rel="noreferrer">
                <img src={FacebookImage} alt="Facebook ikoon" className="footer-knorr-social-image"/>
            </Link></p>
            <p><Link to ="https://www.unileverfoodsolutionsbaltics.com/et/home.html" target="_blank" rel="noreferrer">
                <img src={UFSImage} alt="Facebook ikoon" className="footer-knorr-ufs-image"/>
            </Link></p>
            </div>
        </li>
        </div>
            
            <ul className="footer-knorr-list">       
                <li className="footer-knorr-item"><Link to="/sitemap">saidi kaart</Link></li>
                <li className="footer-knorr-item"><a href="/contact" target="_blank">kontakt </a></li>
                <li className="footer-knorr-item-list">
                    <a href="/cookie-notice" target="_blank">küpsise-eeskirjad</a>
                    <a href="/privacy-notice" target="_blank">privaatsuspoliitika</a>
                    <a href="/legal-notice" target="_blank">juriidiline teave</a></li>
                <li className="footer-knorr-item">
                <img src={KnorrFooter} className="knorr-footer-graphic-image-desktop" alt="Knorr ikoon jalus"/>
            </li>           
            </ul>
            <img src={KnorrFooterMobile} className="knorr-footer-graphic-image-mobile" alt="Knorr ikoon jalus"/>
    </nav>
  </div>
  <div className="footer-knorr-unilever-div">
    <Link to ="/">
        <img src={UnileverLogoWhite} alt="Unilever Eesti logo - must valge" className="footer-knorr-unilever-logo"/>
    </Link>
    <div className="footer-knorr-unilever-copyright">© Unilever</div>
  </div>
  </>
);

export default FooterKnorr;

