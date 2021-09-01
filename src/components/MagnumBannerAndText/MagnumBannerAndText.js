import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'gatsby';
import ButtonRadius from '../ButtonMagnum';
import ScrollAnimation from 'react-animate-on-scroll'

const MagnumBannerAndText = ({image, paragraphText, buttonCTA, buttonLink, second}) => (
    <div className="magnum-bannerandtext-section" style={{flexDirection: second ? `row-reverse` : `row`}}>
        <div className="magnum-image-section">
        <ScrollAnimation animateIn="animate__fadeIn" animateOnce="true" animatePreScroll={false} delay="200">
            <img src={image} />
        </ScrollAnimation>
        </div>
        <div className="magnum-paragraph-section" style={{textAlign: second ? `right` : `left`}}>
            <p>{paragraphText}</p>
            
            <Link className="magnum-bannerandtext-button-link" to={buttonLink}>
                <ButtonRadius>
                    {buttonCTA}
                </ButtonRadius>
            </Link>
            
        </div>
    </div>
);

MagnumBannerAndText.propTypes = {
    image: PropTypes.string.isRequired,
    paragraphText: PropTypes.string.isRequired,
    buttonCTA: PropTypes.string.isRequired,
    buttonLink: PropTypes.string.isRequired,
    second: PropTypes.bool,
}

export default MagnumBannerAndText;