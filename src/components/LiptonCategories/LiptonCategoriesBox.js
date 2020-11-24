import React from 'react';
import ButtonRadius from '../ButtonLipton';
import { Link } from 'gatsby';


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
                                Loe rohkem
                            </Link>
                        </ButtonRadius>
                    </div>
                </div>
        </>
    )
}

export default LiptonCategoriesBox;