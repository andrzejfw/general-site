import { createGlobalStyle } from 'styled-components';

const LiptonBannerAndTextStyles = createGlobalStyle`

.bannerandtext-section {
    max-width: 70vw;
    margin: 50px auto;
    display: flex;
    flex-direction: row;

    @media(max-width:992px){
        max-width: 100vw;
        flex-direction: column !important;
    }
}

.image-section {

    img {
        width: 37vw;
        height: 350px;
        object-fit: cover;
        border-radius: 20px;
        border: 2px solid #fade4c;

        @media(max-width:1600px){
            height: 250px;
        }

        @media(max-width:992px){
            width: 300px;
            height: 300px;
        }
    }

    @media(max-width:992px){
        margin: 0 auto 25px;
    }
}

.paragraph-section {
    margin: 0 50px;

        p {
            font-size: 1.3rem;

            @media(max-width:1600px){
                font-size: 1.2rem;
            }

            @media(max-width:992px){
                text-align: center !important;
                font-size: 1.1rem;
            }
        }

        @media(max-width:992px){
            width: 290px;
            margin: 0 auto;
            text-align: center;
        }
}

.paragraph-section .ButtonLipton__ButtonRadius-fxgQry {
    margin: 0 !important;
    display: inline-block;

    @media(max-width:992px){
        margin: 0 auto !important;
        display: block;
    }
}

.bannerandtext-button-link {
    text-decoration: none;
    color: inherit;
    font-size: 1.5rem;

    &:hover {
        text-decoration: none;
        color: inherit;
    }
}

`;

export default LiptonBannerAndTextStyles;