import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ButtonRadius from '../ButtonDomestos';
import { Link } from 'gatsby';

const BannerWithVideoDomestosWrapper = styled.div`
    width:100%;
    background: #06154b24;    
    background-size: cover;

    @media(max-width:992px){
      height: ${props => props.mobileHeight};
      background: #06154b24;
      padding-bottom:40px;
    }
`;

const BannerWithVideoDomestos = ({
    title, 
    paragraph, 
    videoId, 
    background, 
    backgroundMobile, 
    margin, 
    button,
    videoButtonCTA,
    videoButtonLink,
    mobileHeight
}) => (
    <BannerWithVideoDomestosWrapper 
      background={background} 
      backgroundMobile={backgroundMobile}
      mobileHeight={mobileHeight}
      style={{
        margin: margin ? "50px 0" : "0",
      }}
    >
        <h1 className="banner-domestos-title">{title}</h1>
        <div className="banner-domestos-content">
            <p className="banner-domestos-paragraph">
              {paragraph}
              <div style={{display: button ? "block" : "none"}}>
              <ButtonRadius>
                <Link className="button-link" to={videoButtonLink}>
                  {videoButtonCTA}
                </Link>
              </ButtonRadius>
              </div>
            </p>
            <div className="banner-domestos-video-div">
            <iframe className="banner-domestos-video-iframe" width="600" height="350" src={`https://www.youtube.com/embed/${videoId}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
            </div>
        </div>
    </BannerWithVideoDomestosWrapper>
);

BannerWithVideoDomestos.propTypes = {
    title: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    videoId: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    backgroundMobile: PropTypes.string.isRequired,
    titleShadow: PropTypes.string,
    margin: PropTypes.bool,
    button: PropTypes.bool,
    videoButtonCTA: PropTypes.string,
    videoButtonLink: PropTypes.string,
    mobileHeight: PropTypes.string
}

BannerWithVideoDomestos.defaultProps = {
    mobileHeight: "auto"
}

export default BannerWithVideoDomestos;