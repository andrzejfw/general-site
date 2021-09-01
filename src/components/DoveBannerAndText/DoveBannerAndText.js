import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'gatsby';
import ButtonRadius from '../ButtonDove';
import ScrollAnimation from 'react-animate-on-scroll';

const DoveBannerAndText = ({image, title, paragraphText, buttonCTA, buttonLink, second}) => (
    <ScrollAnimation animateIn="animate__fadeIn" animateOnce="true">
    <div className="dove-bannerandtext-section" style={{flexDirection: second ? `row-reverse` : `row`}}>
        <div className="dove-image-section">
            <img src={image}/>
        </div>
        <div className="dove-paragraph-section" style={{textAlign: second ? `right` : `left`}}>
            <div className="dove-texts">
                <h2>{title}</h2>
                <p>{paragraphText}</p>
            
                <Link className="dove-bannerandtext-button-link" to={buttonLink}>
                    <ButtonRadius>
                        {buttonCTA}
                    </ButtonRadius>
                </Link>
            
            </div>
        </div>
    </div>
    </ScrollAnimation>
);

DoveBannerAndText.propTypes = {
    image: PropTypes.string.isRequired,
    imagemobile: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    paragraphText: PropTypes.string.isRequired,
    buttonCTA: PropTypes.string.isRequired,
    buttonLink: PropTypes.string.isRequired,
    second: PropTypes.bool,
}

export default DoveBannerAndText;