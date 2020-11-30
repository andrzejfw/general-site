import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const VideoMagnumWrapper = styled.div`
    background-size: cover;
    /* margin: 50px 0; */
    margin:30px auto 30px;
    @media(max-width:992px){
      height: auto;
    }
    max-width: 600px;
    -webkit-animation: fadeInLeft 500ms ease-in-out; /* Chrome, Safari, Opera */
    animation: fadeInLeft 500ms ease-in-out;
    animation-delay: 1s;
    visibility: hidden;
    animation-fill-mode: forwards;
    -webkit-animation-fill-mode: forwards;   

/* Chrome, Safari, Opera */
@-webkit-keyframes fadeInLeft {
    0% {
        opacity: 0;
        -webkit-transform: translateX(200px);
        visibility: visible;
    }
    100% {
        opacity: 1;
        -webkit-transform: translateY(0);
        visibility: visible;
    }
}

/* Standard syntax */
@keyframes fadeInLeft {
    0% {
        opacity: 0;
        transform: translateX(80px);
        visibility: visible;
    }
    100% {
        opacity: 1;
        transform: translateY(0);
        visibility: visible;
    }
}
`;

const MagnumVideoIframe = styled.iframe`
    width: 100% !important;
    max-height: 300px !important;
    border: 4px solid #4e2c1d;
    border-radius: 6px;

    @media(max-width:992px){
      min-width: 300px !important;
      max-height: 190px !important;
    }
`;

const MagnumVideo = ({
    videoId, 
}) => (
    <VideoMagnumWrapper>
            <MagnumVideoIframe width="600" height="350" src={`https://www.youtube.com/embed/${videoId}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></MagnumVideoIframe>
    </VideoMagnumWrapper>
);

MagnumVideo.propTypes = {
    videoId: PropTypes.string.isRequired,
}

export default MagnumVideo;