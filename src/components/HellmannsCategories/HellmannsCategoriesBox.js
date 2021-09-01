import React from 'react';
import ButtonRadius from '../ButtonHellmanns';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import ScrollAnimation from 'react-animate-on-scroll'


const HellmannsCategoriesBox = ({categoryTitle, categoryImage, categoryLink}) => {
    return (
        <>
            <div className="hellmanns-category-box">
            <Link to={categoryLink}>
                    <h3 className="hellmanns-categories-h3">{categoryTitle}</h3>
                </Link>
                <Link to={categoryLink}>
                    <div className="hellmanns-img-div">
                        <img className="hellmanns-categories-img" src={categoryImage}/>
                    </div>
                </Link>
                <div className="hellmanns-button-div">
                    
                    <Link className="hellmanns-categories-button-link" to={categoryLink}>
                        <ButtonRadius>
                            Uuri rohkem
                        </ButtonRadius>
                    </Link>
                    
                </div>
            </div>
        </>
    )
}

HellmannsCategoriesBox.propTypes = {
    categoryTitle: PropTypes.string.isRequired,
    categoryImage: PropTypes.string.isRequired,
    categoryLink: PropTypes.string.isRequired
}

export default HellmannsCategoriesBox;