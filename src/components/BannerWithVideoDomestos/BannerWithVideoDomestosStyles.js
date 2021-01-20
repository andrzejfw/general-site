import { createGlobalStyle } from 'styled-components';

const BannerWithVideoDomestosStyles = createGlobalStyle`
.banner-domestos-title {
    font-size: 2rem;
    text-align: center;
    font-weight: bold;
    padding: 40px 0 0;
    color: #06154b;
}

.banner-domestos-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    text-shadow: none;
    color: #06154b;


    @media(max-width:992px){
      grid-template-columns: 1fr;
    }
}

.banner-domestos-paragraph {
    font-size: 1.5rem;
    text-align: left;
    padding: 5% 5% 5% 35%;

    @media(max-width:1600px){
      padding: 5% 5% 5% 15%;
    }

    @media(max-width:992px){
      font-size: 1.2rem;
      text-align: center;
      padding: 5%;
    }

    .cKwoza {
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

.banner-domestos-video-div {
    margin: 6% 10% 6% 0;
    max-width: 600px;

    @media(max-width:992px){
      margin: 0 auto;
    }
}

.banner-domestos-video-iframe {
    width: 100% !important;
    max-height: 300px !important;
    border: 4px solid #06154b;

    @media(max-width:692px){
        width: 300px;
        height: 200px;
    }
}
`;

export default BannerWithVideoDomestosStyles;