import React from 'react';
import ButtonRadius from '../ButtonCif';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import ScrollAnimation from 'react-animate-on-scroll'


const CifCategoriesBox = ({categoryTitle, categoryImage, categoryLink}) => {
    return (
        <>
                <div className="category-box">
                <Link to={categoryLink}>
                        <h3 className="categories-h3">{categoryTitle}</h3>
                    </Link>
                    <Link to={categoryLink}>
                    <ScrollAnimation animateIn="animate__tada" animatePreScroll={false} delay="600" animateOnce="true">
                        <img className="categories-img" src={categoryImage}/>
                    </ScrollAnimation>
                    </Link>
                    {/* <div className="button-div">
                        <ButtonRadius>
                            <Link className="categories-button-link" to={categoryLink}>
                                Uuri rohkem
                            </Link>
                        </ButtonRadius>
                    </div> */}
                </div>
        </>
    )
}

CifCategoriesBox.propTypes = {
    categoryTitle: PropTypes.string.isRequired,
    categoryImage: PropTypes.string.isRequired,
    categoryLink: PropTypes.string.isRequired
}

export default CifCategoriesBox;