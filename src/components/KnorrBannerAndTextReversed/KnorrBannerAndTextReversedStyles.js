import { createGlobalStyle } from 'styled-components';

const KnorrBannerAndTextReversedStyles = createGlobalStyle`

.knorr-bannerandtext-section-reversed {
    padding: 50px 17vw;
    margin: 0px auto -20px;
    display: flex;
    flex-direction: row;
    background: white;

    @media(max-width:1600px){
        padding: 50px 7vw 80px;
    }

    @media(max-width:992px){
        max-width: 100vw;
        flex-direction: column-reverse !important;
        padding: 20px 7vw 80px;
    }

    @media(max-width:692px){
        margin: 0 auto;

    }
}

.knorr-image-section-reversed {

    img {
        width: 35vw;
        height: 350px;
        object-fit: cover;
        border: 3px solid #007a33;
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
        margin: 25px auto 0;
    }
.imagepc-reversed {
    @media(max-width:1200px){
        display:none;
    }
}
.imagemobile-reversed {
    @media(min-width:1201px){
        display:none;
    }
}
}

.knorr-paragraph-section-reversed {
    margin: 0 50px;

        h2 {
            font-size: 1.7rem;
            color: #007a33;
            font-weight: bold;
            text-align: right;

            @media(max-width:1600px){
                font-size: 1.5rem;
            }

            @media(max-width:992px){
                text-align: center !important;
                color: #007a33;
            }
        }

        p {
            font-size: 1.3rem;
            color: #007a33;
            text-align: right;

            @media(max-width:1600px){
                font-size: 1.2rem;
            }

            @media(max-width:992px){
                text-align: center !important;
                font-size: 1.1rem;
                color: #007a33;
            }
        }
        button {
            margin-right: 0;
            margin-left: auto;
            text-align: center !important;
            @media(max-width:992px){
                text-align: center !important;
                margin: 0 auto;
                display: flex;
                justify-content: center;
            }
        }

        @media(max-width:767px){
            width: 290px;
            margin: 20px auto 0;
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

.knorr-bannerandtext-button-link-reversed {
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

export default KnorrBannerAndTextReversedStyles;