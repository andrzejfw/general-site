import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'gatsby';
import ButtonRadius from '../ButtonKnorr';
import ScrollAnimation from 'react-animate-on-scroll';

const KnorrBannerAndTextReversed = ({image, imagemobile, title, paragraphText, buttonCTA, buttonLink, second}) => (
    <ScrollAnimation animateIn="animate__fadeIn" animateOnce="true">
    <div className="knorr-bannerandtext-section-reversed" style={{flexDirection: second ? `row-reverse` : `row`}}>
        <div className="knorr-paragraph-section-reversed" style={{textAlign: second ? `right` : `left`}}>
            <h2>{title}</h2>
            <p>{paragraphText}</p>
            
            <Link className="knorr-bannerandtext-button-link-reversed" to={buttonLink}>
                <ButtonRadius>
                    {buttonCTA}
                </ButtonRadius>
            </Link>
            
        </div>
        <div className="knorr-image-section-reversed">
            <img src={image} className="imagepc-reversed"/>
            <img src={imagemobile} className="imagemobile-reversed"/>
        </div>
    </div>
    </ScrollAnimation>
);

KnorrBannerAndTextReversed.propTypes = {
    image: PropTypes.string.isRequired,
    imagemobile: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    paragraphText: PropTypes.string.isRequired,
    buttonCTA: PropTypes.string.isRequired,
    buttonLink: PropTypes.string.isRequired,
    second: PropTypes.bool,
}

export default KnorrBannerAndTextReversed;