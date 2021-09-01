import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ButtonRadius from '../ButtonLipton';
import { Link } from 'gatsby';

const BannerWithVideoLiptonWrapper = styled.div`
    width:100%;
    height: 500px;
    background: url(${props => props.background});
    background-size: cover;

    @media(max-width:992px){
      height: auto;
      background: url(${props => props.backgroundMobile});
    }
`;

const BannerWithVideoLipton = ({
    title, 
    paragraph, 
    videoId, 
    background, 
    backgroundMobile, 
    red, 
    titleShadow, 
    margin, 
    button,
    videoButtonCTA,
    videoButtonLink
}) => (
    <BannerWithVideoLiptonWrapper 
      background={background} 
      backgroundMobile={backgroundMobile}
      style={{
        color: red ? "#c8381d" : "#fff", 
        textShadow: titleShadow ? "2px 2px 10px black" : "none",
        margin: margin ? "50px 0" : "0",
      }}
    >
        <h1 className="banner-lipton-title">{title}</h1>
        <div className="banner-lipton-content">
            <p className="banner-lipton-paragraph">
              {paragraph}
              <div style={{display: button ? "block" : "none"}}>
              
              <Link className="button-link" to={videoButtonLink}>
                <ButtonRadius>
                  {videoButtonCTA}
                </ButtonRadius>
              </Link>
              
              </div>
            </p>
            <div className="banner-lipton-video-div">
            <iframe className="banner-lipton-video-iframe" width="600" height="350" src={`https://www.youtube.com/embed/${videoId}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
            </div>
        </div>
    </BannerWithVideoLiptonWrapper>
);

BannerWithVideoLipton.propTypes = {
    title: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    videoId: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    backgroundMobile: PropTypes.string.isRequired,
    titleShadow: PropTypes.string,
    red: PropTypes.bool,
    margin: PropTypes.bool,
    button: PropTypes.bool,
    videoButtonCTA: PropTypes.string,
    videoButtonLink: PropTypes.string
}

export default BannerWithVideoLipton;