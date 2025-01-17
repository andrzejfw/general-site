import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'gatsby';
import ButtonRadius from '../ButtonRexona';
import ScrollAnimation from 'react-animate-on-scroll';

const RexonaBannerAndText = ({image, title, paragraphText, buttonCTA, buttonLink, alt, second}) => (
    <div className="bannerandtext-section" style={{flexDirection: second ? `row-reverse` : `row`}}>
        <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce="true">
        <div className="image-section">
            <img src={image} alt={alt}/>
        </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInRight" animateOnce="true">
            <div className="paragraph-section" style={{textAlign: second ? `right` : `left`}}>
                <h2>{title}</h2>
                <p>{paragraphText}</p>
                
                <Link className="bannerandtext-button-link" to={buttonLink}>
                    <ButtonRadius>
                        {buttonCTA}
                    </ButtonRadius>
                </Link>
                
            </div>
        </ScrollAnimation>
    </div>
);

RexonaBannerAndText.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    paragraphText: PropTypes.string.isRequired,
    buttonCTA: PropTypes.string.isRequired,
    buttonLink: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    second: PropTypes.bool,
}

export default RexonaBannerAndText;