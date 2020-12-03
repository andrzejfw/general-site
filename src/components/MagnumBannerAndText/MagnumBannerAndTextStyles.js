import { createGlobalStyle } from 'styled-components';

const MagnumBannerAndTextStyles = createGlobalStyle`

.magnum-bannerandtext-section {
    max-width: 64vw;
    margin: 50px auto;
    display: flex;
    flex-direction: row;

    @media(max-width:692px){
        max-width: 100vw;
        flex-direction: column !important;
    }
}

.magnum-image-section {

    img {
        width: 33vw;
        height: 350px;
        object-fit: cover;
        border-radius: 6px;
        border: 2px solid #4e2c1d;

        @media(max-width:1600px){
            height: 250px;
        }

        @media(max-width:692px){
            width: 85vw;
            height: 190px;
        }
    }

    @media(max-width:692px){
        margin: 0 auto 25px;
    }
}

.magnum-paragraph-section {
    margin: 0 50px;

        p {
            font-size: 1.3rem;
            color: #523022;

            @media(max-width:1600px){
                font-size: 1.2rem;
            }

            @media(max-width:692px){
                text-align: center !important;
                font-size: 1.1rem;
            }
        }

        @media(max-width:1200px){
                margin: 0 10px 0 20px;
            }

        @media(max-width:692px){
            width: 290px;
            margin: 0 auto;
            text-align: center;
        }
}

.ifUilS {
    margin: 0 !important;
    display: inline-block;

    @media(max-width:692px){
        margin: 0 auto !important;
        display: block;
    }
}

.magnum-bannerandtext-button-link {
    text-decoration: none;
    color: inherit;
    font-size: 1.2rem;

    &:hover {
        text-decoration: none;
        color: inherit;
    }
}

`;

export default MagnumBannerAndTextStyles;