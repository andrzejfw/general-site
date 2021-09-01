import React from 'react';
import ButtonRadius from '../ButtonMagnum';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';


const MagnumCategoriesBox = ({categoryTitle, categoryImage, categoryLink}) => {
    return (
        <>
                <div className="magnum-category-box">
                    {/* <Link to={categoryLink}>
                        <h3 className="magnum-categories-h3">{categoryTitle}</h3>
                    </Link> */}
                    <Link to={categoryLink}>
                        <img className="magnum-categories-img" src={categoryImage}/>
                    </Link>
                    
                    <div className="magnum-button-div">
                        
                        <Link className="magnum-categories-button-link" to={categoryLink}>
                            <ButtonRadius>
                                {categoryTitle}
                            </ButtonRadius>
                        </Link>
                        
                    </div>
                </div>
        </>
    )
}

MagnumCategoriesBox.propTypes = {
    categoryTitle: PropTypes.string.isRequired,
    categoryImage: PropTypes.string.isRequired,
    categoryLink: PropTypes.string.isRequired
}

export default MagnumCategoriesBox;