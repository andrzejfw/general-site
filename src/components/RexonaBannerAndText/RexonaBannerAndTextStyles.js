import { createGlobalStyle } from 'styled-components';

const RexonaBannerAndTextStyles = createGlobalStyle`

.bannerandtext-section {
    /* max-width: 70vw; */
    margin: 0 auto;
    padding: 50px 0 80px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background: linear-gradient(to bottom, #7833fe, #70afe2, #fff);

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

        @media(max-width:1600px){
            height: 250px;
        }

        @media(max-width:992px){
            width: 300px;
            height: 300px;
            object-position: 46%;
        }
    }

    @media(max-width:992px){
        margin: 0 auto 25px;
    }
}

.paragraph-section {
    margin: 0 50px;
    width: 42vw;

        h2 {
            @media(max-width:992px){
                text-align: center !important;
            }
        }

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
            text-align: center !important;
        }
}

.paragraph-section .cnjcoI {
    margin: 0 !important;

    @media(max-width:992px){
        margin: 0 auto !important;
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

export default RexonaBannerAndTextStyles;