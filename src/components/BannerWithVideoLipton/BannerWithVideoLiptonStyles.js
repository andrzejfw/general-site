import { createGlobalStyle } from 'styled-components';

const BannerWithVideoLiptonStyles = createGlobalStyle`
.banner-lipton-title {
    font-size: 2rem;
    text-align: center;
    font-weight: bold;
    padding: 40px 0 0;
}

.banner-lipton-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    text-shadow: none;

    @media(max-width:992px){
      grid-template-columns: 1fr;
    }
}

.banner-lipton-paragraph {
    font-size: 1.5rem;
    text-align: left;
    padding: 5% 5% 5% 30%;

    @media(max-width:992px){
      font-size: 1.2rem;
      text-align: center;
      padding: 5%;
    }

    .dFxbOM {
      margin: 20px 0 0 !important;

      @media(max-width:992px){
        margin: 20px auto 0 !important;
      }
    }

    .button-link {
    text-decoration: none;
    color: inherit;
    font-size: 1.5rem;
    

        &:hover {
            text-decoration: none;
            color: inherit;
        }
    }
}

.banner-lipton-video-div {
    margin: 6% 10% 6% 0;
    max-width: 600px;

    @media(max-width:992px){
      margin: 0 auto;
    }
}

.banner-lipton-video-iframe {
    width: 100% !important;
    max-height: 300px !important;
    border: 2px solid #fade4c;
    border-radius: 20px;

    @media(max-width:992px){
      min-width: 300px !important;
      max-height: 190px !important;
      margin-bottom: 5%;
    }
}
`;

export default BannerWithVideoLiptonStyles;