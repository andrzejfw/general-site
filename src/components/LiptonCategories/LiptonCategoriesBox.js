import React from 'react';
import ButtonRadius from '../ButtonLipton';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';


const LiptonCategoriesBox = ({categoryTitle, categoryImage, categoryLink}) => {
    return (
        <>
                <div className="category-box">
                    <Link to={categoryLink}>
                        <img className="categories-img" src={categoryImage}/>
                    </Link>
                    <Link to={categoryLink}>
                        <h3 className="categories-h3">{categoryTitle}</h3>
                    </Link>
                    <div className="button-div">
                        <ButtonRadius>
                            <Link className="categories-button-link" to={categoryLink}>
                                Uuri rohkem
                            </Link>
                        </ButtonRadius>
                    </div>
                </div>
        </>
    )
}

LiptonCategoriesBox.propTypes = {
    categoryTitle: PropTypes.string.isRequired,
    categoryImage: PropTypes.string.isRequired,
    categoryLink: PropTypes.string.isRequired
}

export default LiptonCategoriesBox;