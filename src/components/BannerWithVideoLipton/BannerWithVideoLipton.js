import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BannerWithVideoLiptonWrapper = styled.div`
    width:100%;
    height: 450px;
    background: url(${props => props.background});
    background-size: cover;
    margin: 50px 0;

    @media(max-width:992px){
      height: auto;
    }
`;

const BannerLiptonTitle = styled.h1`
    font-size: 2rem;
    color: #fff;
    text-align: center;
    font-weight: bold;
    padding: 40px 0 0;
    text-shadow: 2px 2px 10px black;
`;

const BannerLiptonContent = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media(max-width:992px){
      grid-template-columns: 1fr;
    }
`;

const BannerLiptonParagraph = styled.p`
    font-size: 1.3rem;
    color: #fff;
    text-align: left;
    padding: 5% 20%;

    @media(max-width:992px){
      text-align: center;
      padding: 5% 9% 5% 4%;
    }
`;

const BannerLiptonVideo = styled.div`
    margin: 6% auto;

    @media(max-width:992px){
      margin: 0 auto;
    }
`;

const BannerWithVideoLipton = ({title, paragraph, videoId, background}) => (
    <BannerWithVideoLiptonWrapper background={background}>
        <BannerLiptonTitle>{title}</BannerLiptonTitle>
        <BannerLiptonContent>
            <BannerLiptonParagraph>{paragraph}</BannerLiptonParagraph>
            <BannerLiptonVideo>
            <iframe width="400" height="250" src={`https://www.youtube.com/embed/${videoId}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </BannerLiptonVideo>
        </BannerLiptonContent>
    </BannerWithVideoLiptonWrapper>
);

BannerWithVideoLipton.propTypes = {
    title: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    videoId: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
}

export default BannerWithVideoLipton;