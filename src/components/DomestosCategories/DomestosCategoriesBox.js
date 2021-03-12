import React from 'react';
import ButtonRadius from '../ButtonDomestos';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import ScrollAnimation from 'react-animate-on-scroll'


const DomestosCategoriesBox = ({categoryTitle, categoryImage, categoryLink}) => {
    return (
        <>
                <div className="domestos-category-box">
                <Link to={categoryLink}>
                        <h2 className="domestos-categories-h3">{categoryTitle}</h2>
                    </Link>
                    <Link to={categoryLink}>
                    <ScrollAnimation animateIn="animate__fadeIn" animateOnce="true">
                        <div className="domestos-img-div">
                        <img className="domestos-categories-img" src={categoryImage}/>
                        </div>
                    </ScrollAnimation>
                    </Link>
                    <div className="domestos-button-div">
                        <ButtonRadius>
                            <Link className="domestos-categories-button-link" to={categoryLink}>
                                Uuri rohkem
                            </Link>
                        </ButtonRadius>
                    </div>
                </div>
        </>
    )
}

DomestosCategoriesBox.propTypes = {
    categoryTitle: PropTypes.string.isRequired,
    categoryImage: PropTypes.string.isRequired,
    categoryLink: PropTypes.string.isRequired
}

export default DomestosCategoriesBox;