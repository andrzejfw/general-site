import { createGlobalStyle } from 'styled-components';

const VideoHellmannsStyles = createGlobalStyle`
.hellmanns-video-div {
    width: 100%;
    height: 500px;
    margin: -50px auto 0;
    text-align: center;
    padding: 75px 0;

    @media(max-width:692px){
        height: 300px;
        margin: 0 auto;
        padding: 50px 0;
    }

    iframe {
        width: 620px;
        height: 350px;
        box-shadow: 0 0 20px #000;

        @media(max-width:692px){
            width: 300px;
            height: 200px;
        }
    }
}
`;

export default VideoHellmannsStyles;