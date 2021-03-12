import React from 'react';
import ButtonRadius from '../ButtonDove';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import ScrollAnimation from 'react-animate-on-scroll';


const DoveCategoriesBox = ({categoryTitle, categoryImage, categoryLink}) => {
    return (
        <>
            <ScrollAnimation animateIn="animate__fadeIn" animateOnce="true">
                <div className="dove-category-box">
                    <Link to={categoryLink}>
                        <h3 className="dove-categories-h3">{categoryTitle}</h3>
                    </Link>
                    <Link to={categoryLink}>
                        <div className="dove-img-div">
                            <img className="dove-categories-img" src={categoryImage}/>
                        </div>
                    </Link>
                    <div className="dove-button-div">
                        <ButtonRadius>
                            <Link className="dove-categories-button-link" to={categoryLink}>
                                Uuri rohkem
                            </Link>
                        </ButtonRadius>
                    </div>
                </div>
            </ScrollAnimation>
        </>
    )
}

DoveCategoriesBox.propTypes = {
    categoryTitle: PropTypes.string.isRequired,
    categoryImage: PropTypes.string.isRequired,
    categoryLink: PropTypes.string.isRequired
}

export default DoveCategoriesBox;