import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'gatsby';
import ButtonRadius from '../ButtonCif';

const CifBannerAndText = ({image, imagemobile, title, paragraphText, buttonCTA, buttonLink, second}) => (
    <div className="cif-bannerandtext-section" style={{flexDirection: second ? `row-reverse` : `row`}}>
        <div className="cif-image-section">
            <img src={image} className="imagepc"/>
            <img src={imagemobile} className="imagemobile"/>
        </div>
        <div className="cif-paragraph-section" style={{textAlign: second ? `right` : `left`}}>
            <h2>{title}</h2>
            <p>{paragraphText}</p>
            <ButtonRadius>
                <Link className="cif-bannerandtext-button-link" to={buttonLink}>
                    {buttonCTA}
                </Link>
            </ButtonRadius>
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