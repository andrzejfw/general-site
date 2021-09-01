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

    @media(max-width:692px){
      grid-template-columns: 1fr;
    }
}

.banner-magnum-paragraph {
    font-size: 1.4rem;
    text-align: right;
    color: #fff;
    padding: 5% 5% 5% 18vw;

    @media(max-width:692px){
      font-size: 1.2rem;
      text-align: center;
      padding: 5%;
    }

    .ifUilS {
      margin: 20px 0 0 !important;

      @media(max-width:692px){
        margin: 20px auto 0 !important;
      }
    }

    .button-link {
    text-decoration: none;
    color: inherit;
    font-size: 1.2rem;
    

    &:hover {
        text-decoration: none;
        color: inherit;
    }
}

.jYLXOf {
        @media(min-width: 692px) {
            margin: 20px 0 20px auto;
        }
    }
}

.banner-magnum-video-div {
    margin: 6% 10% 6% 0;
    max-width: 600px;

    @media(max-width:692px){
      margin: 0 auto;
    }
}

.magnum-video-iframe {
    width: 33vw !important;
    max-height: 350px !important;
    border: 2px solid #4e2c1d;
    border-radius: 6px;

    @media(max-width:1600px){
        height: 250px;
    }

    @media(max-width:692px){
        min-width: 85vw !important;
        max-height: 190px !important;
        margin-bottom: 5%;
    }
}

`;

export default BannerWithVideoMagnumStyles;