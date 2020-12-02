import { createGlobalStyle } from 'styled-components';

const BannerWithVideoMagnumStyles = createGlobalStyle`
.banner-magnum-title {
    font-size: 2rem;
    text-align: center;
    font-weight: bold;
    color: #fff;
    padding: 40px 0 0;
}

.banner-magnum-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    text-shadow: none;

    @media(max-width:992px){
      grid-template-columns: 1fr;
    }
}

.banner-magnum-paragraph {
    font-size: 1.5rem;
    text-align: left;
    color: #fff;
    padding: 5% 5% 5% 30%;

    @media(max-width:992px){
      font-size: 1.2rem;
      text-align: center;
      padding: 5%;
    }

    .ifUilS {
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

.banner-magnum-video-div {
    margin: 6% 10% 6% 0;
    max-width: 600px;

    @media(max-width:992px){
      margin: 0 auto;
    }
}

.magnum-video-iframe {
    width: 100% !important;
    max-height: 300px !important;
    border: 2px solid #4e2c1d;
    border-radius: 6px;

    @media(max-width:992px){
      min-width: 300px !important;
      max-height: 190px !important;
      margin-bottom: 5%;
    }
}

`;

export default BannerWithVideoMagnumStyles;