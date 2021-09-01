import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'gatsby';
import ButtonRadius from '../ButtonCif';
import ScrollAnimation from 'react-animate-on-scroll'

const CifBannerAndText = ({image, imagemobile, title, paragraphText, buttonCTA, buttonLink, second}) => (
    <div className="cif-bannerandtext-section" style={{flexDirection: second ? `row-reverse` : `row`}}>
        <ScrollAnimation animateIn="animate__fadeIn" animateOnce="true">
            <div className="cif-image-section">
            <img src={image} className="imagepc"/>
            <img src={imagemobile} className="imagemobile"/>
        </div></ScrollAnimation>
        <div className="cif-paragraph-section" style={{textAlign: second ? `right` : `left`}}>
            <h2>{title}</h2>
            <p>{paragraphText}</p>
            
            <Link className="cif-bannerandtext-button-link" to={buttonLink}>
                <ButtonRadius>
                    {buttonCTA}
                </ButtonRadius>
            </Link>
        
        </div>
    </div>
);

CifBannerAndText.propTypes = {
    image: PropTypes.string.isRequired,
    imagemobile: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    paragraphText: PropTypes.string.isRequired,
    buttonCTA: PropTypes.string.isRequired,
    buttonLink: PropTypes.string.isRequired,
    second: PropTypes.bool,
}

export default CifBannerAndText;