import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'gatsby';
import ButtonRadius from '../ButtonLipton';

const LiptonBannerAndText = ({image, paragraphText, buttonCTA, buttonLink, second}) => (
    <div className="bannerandtext-section" style={{flexDirection: second ? `row-reverse` : `row`}}>
        <div className="image-section">
            <img src={image} />
        </div>
        <div className="paragraph-section" style={{textAlign: second ? `right` : `left`}}>
            <p>{paragraphText}</p>
            <ButtonRadius>
                <Link className="bannerandtext-button-link" to={buttonLink}>
                    {buttonCTA}
                </Link>
            </ButtonRadius>
        </div>
    </div>
);

LiptonBannerAndText.propTypes = {
    image: PropTypes.string.isRequired,
    paragraphText: PropTypes.string.isRequired,
    buttonCTA: PropTypes.string.isRequired,
    buttonLink: PropTypes.string.isRequired,
    second: PropTypes.bool,
}

export default LiptonBannerAndText;