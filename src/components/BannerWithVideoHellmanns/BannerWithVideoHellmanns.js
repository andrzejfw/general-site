import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ButtonRadius from '../ButtonHellmanns';
import { Link } from 'gatsby';

const BannerWithVideoHellmannsWrapper = styled.div`
    width:100%;
    height: 500px;
    background: url(${props => props.background});
    background-size: cover;

    @media(max-width:992px){
      height: ${props => props.mobileHeight};
      background: url(${props => props.backgroundMobile});
    }
`;

const BannerWithVideoHellmanns = ({
    title, 
    paragraph, 
    videoId, 
    background, 
    backgroundMobile, 
    titleShadow, 
    margin, 
    button,
    videoButtonCTA,
    videoButtonLink,
    mobileHeight
}) => (
    <BannerWithVideoHellmannsWrapper 
      background={background} 
      backgroundMobile={backgroundMobile}
      mobileHeight={mobileHeight}
      style={{
        textShadow: titleShadow ? "2px 2px 10px black" : "none",
        margin: margin ? "50px 0" : "0",
      }}
    >
        <h1 className="banner-hellmanns-title">{title}</h1>
        <div className="banner-hellmanns-content">
            <p className="banner-hellmanns-paragraph">
              {paragraph}
              <div style={{display: button ? "block" : "none"}}>
              <ButtonRadius>
                <Link className="button-link" to={videoButtonLink}>
                  {videoButtonCTA}
                </Link>
              </ButtonRadius>
              </div>
            </p>
            <div className="banner-hellmanns-video-div">
            <iframe className="banner-hellmanns-video-iframe" width="600" height="350" src={`https://www.youtube.com/embed/${videoId}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
            </div>
        </div>
    </BannerWithVideoHellmannsWrapper>
);

BannerWithVideoHellmanns.propTypes = {
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

BannerWithVideoHellmanns.defaultProps = {
    mobileHeight: "auto"
}

export default BannerWithVideoHellmanns;