import { createGlobalStyle } from 'styled-components';
import KnorrWaveOne from '../../assets/images/knorr-wave1.jpg';
import KnorrWaveTwo from '../../assets/images/knorr-wave2.jpg';
const KnorrBannerAndTextStyles = createGlobalStyle`

.knorr-bannerandtext-section {
    padding: 50px 17vw;
    margin: 80px auto 0px;
    display: flex;
    flex-direction: row;
    background: #007a33;

    @media(max-width:1600px){
        padding: 50px 7vw 80px;
    }

    @media(max-width:992px){
        max-width: 100vw;
        flex-direction: column !important;
    }

    @media(max-width:692px){
        max-width: 100vw;
        margin: 0 auto;
        flex-direction: column !important;
    }
    // &::before {
    //     background: url(${KnorrWaveOne});
    //     background-repeat: no-repeat;
    //     transform: translate(-40%,-50%);
    //     background-position: center;
    //     content: '';
    //     left: 30%;
    //     position: absolute;
    //     z-index: -1;
    //     display: block;
    //     width: 200%;
    //     height: 100%;
    //     background-size: 100%;
    // }
    // &::after {
    //     background: url(${KnorrWaveTwo});
    //     background-repeat: no-repeat;
    //     transform: translate(-50%,-50%);
    //     background-position: center;
    //     content: '';
    //     left: 30%;
    //     position: absolute;
    //     z-index: -1;
    //     display: block;
    //     width: 200%;
    //     height: 100%;
    //     background-size: 100%;
    // }
}

.knorr-image-section {

    img {
        width: 35vw;
        height: 350px;
        object-fit: cover;
        border: 3px solid #fff;
        border-radius: 14px;

        @media(max-width:1600px){
            width: 40vw;
            height: 250px;
        }
        
        @media(max-width:992px){
            height:400px;
            width: 100%;
            border: none;
        }
      
    }

    @media(max-width:992px){
        margin: 0 auto 25px;
    }
.imagepc {
    @media(max-width:1200px){
        display:none;
    }
}
.imagemobile {
    @media(min-width:1201px){
        display:none;
    }
}
}

.knorr-paragraph-section {
    margin: 0 50px;

        h2 {
            font-size: 1.7rem;
            color: #fff;
            font-weight: bold;

            @media(max-width:1600px){
                font-size: 1.5rem;
            }

            @media(max-width:992px){
                text-align: center !important;
                color: #17584a;
            }
        }

        p {
            font-size: 1.3rem;
            color: #fff;

            @media(max-width:1600px){
                font-size: 1.2rem;
            }

            @media(max-width:992px){
                text-align: center !important;
                font-size: 1.1rem;
                color: #17584a;
            }
        }
        button {
            margin-left: 0px;
            text-align: center !important;
            border: solid 1px;
            @media(max-width:992px){
                text-align: center !important;
                margin: 0 auto;
                display: flex;
            }
        }

        @media(max-width:767px){
            width: 290px;
            margin: 0 auto;
            text-align: center;
        }
}

.knorr-paragraph-section .fKAzQC {
    margin: 0 !important;
    display: inline-block;
    color: #fff;
    background: rgb(255 255 255 / .1);

    @media(max-width:992px){
        margin: 0 auto !important;
        display: block;
        color: #17584a;
        background: rgb(255 255 255 / .4);
    }
}

.knorr-bannerandtext-button-link {
    text-decoration: none;
    width: 100%;
    color: inherit;
    font-size: 1.5rem;
    text-align: center;

    &:hover {
        text-decoration: none;
        color: inherit;
    }
}

`;

export default KnorrBannerAndTextStyles;