import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'gatsby';
import ButtonRadius from '../ButtonHellmanns';

const HellmannsBannerAndText = ({image, title, paragraphText, buttonCTA, buttonLink, second}) => (
    <div className="hellmanns-bannerandtext-section" style={{flexDirection: second ? `row-reverse` : `row`}}>
        <div className="hellmanns-image-section">
            <img src={image} />
        </div>
        <div className="hellmanns-paragraph-section" style={{textAlign: second ? `right` : `left`}}>
            <h2>{title}</h2>
            <p>{paragraphText}</p>
            
            <Link className="hellmanns-bannerandtext-button-link" to={buttonLink}>
                <ButtonRadius>
                    {buttonCTA}
                </ButtonRadius>    
            </Link>
            
        </div>
    </div>
);

HellmannsBannerAndText.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    paragraphText: PropTypes.string.isRequired,
    buttonCTA: PropTypes.string.isRequired,
    buttonLink: PropTypes.string.isRequired,
    second: PropTypes.bool,
}

export default HellmannsBannerAndText;