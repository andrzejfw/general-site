import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ButtonRadius from '../ButtonMagnum';
import { Link } from 'gatsby';
import ScrollAnimation from 'react-animate-on-scroll'

const BannerWithVideoLiptonWrapper = styled.div`
    width:100%;
    /* height: 500px; */
    background: url(${props => props.background});
    background-size: cover;

    @media(max-width:992px){
      height: auto;
      background: url(${props => props.backgroundMobile});
    }
`;


const BannerWithVideoMagnum = ({
    title, 
    paragraph, 
    videoId, 
    background, 
    backgroundMobile, 
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
        textShadow: titleShadow ? "2px 2px 10px black" : "none",
        margin: margin ? "50px 0" : "0",
      }}
    >
        <h1 className="banner-magnum-title">{title}</h1>
        <div className="banner-magnum-content">
            <p className="banner-magnum-paragraph">
              {paragraph}
              <div style={{display: button ? "block" : "none"}}>
              
              <Link className="button-link" to={videoButtonLink}>
                <ButtonRadius>
                  {videoButtonCTA}
                </ButtonRadius>
              </Link>
              
              </div>
            </p>
              <div className="banner-magnum-video-div">
            <ScrollAnimation animateIn="animate__fadeIn" animateOnce="true" animatePreScroll={false} delay="200">
                <iframe className="magnum-video-iframe" width="600" height="350" src={`https://www.youtube.com/embed/${videoId}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
            </ScrollAnimation>

            </div>
        </div>
    </BannerWithVideoLiptonWrapper>
);

BannerWithVideoMagnum.propTypes = {
    title: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    videoId: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    backgroundMobile: PropTypes.string.isRequired,
    titleShadow: PropTypes.string,
    margin: PropTypes.bool,
    button: PropTypes.bool,
    videoButtonCTA: PropTypes.string,
    videoButtonLink: PropTypes.string
}

export default BannerWithVideoMagnum;