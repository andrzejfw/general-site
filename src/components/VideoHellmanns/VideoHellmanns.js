import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import HellmannsVideoBg from '../../assets/images/hellmanns-video-bg.png'
import HellmannsVideoBgMobile from '../../assets/images/hellmanns-video-bg-mobile.png'

const VideoHellmannsDiv = styled.div`
    background: url(${HellmannsVideoBg});

    @media(max-width:692px){
        background: url(${HellmannsVideoBgMobile});
    }
`;

const VideoHellmanns = ({
    videoId, 
}) => (
    <VideoHellmannsDiv className="hellmanns-video-div">
            <iframe src={`https://www.youtube.com/embed/${videoId}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
    </VideoHellmannsDiv>
);

VideoHellmanns.propTypes = {
    videoId: PropTypes.string.isRequired,
}

export default VideoHellmanns;