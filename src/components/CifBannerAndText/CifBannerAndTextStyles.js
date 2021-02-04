import { createGlobalStyle } from 'styled-components';

const CifBannerAndTextStyles = createGlobalStyle`

.cif-bannerandtext-section {
    padding: 50px 17vw;
    margin: 80px auto -20px;
    display: flex;
    flex-direction: row;
    background: linear-gradient(to right,#165648f0,#20846dc2);

    @media(max-width:1600px){
        padding: 50px 7vw;
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
}

.cif-image-section {

    img {
        width: 35vw;
        height: 350px;
        object-fit: cover;
        border: 3px solid #165648;
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

.cif-paragraph-section {
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
            }
        }
        button {
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

.cif-paragraph-section .fKAzQC {
    margin: 0 !important;
    display: inline-block;
    color: #fff;
    background: rgb(255 255 255 / .1);

    @media(max-width:992px){
        margin: 0 auto !important;
        display: block;
    }
}

.cif-bannerandtext-button-link {
    text-decoration: none;
    color: inherit;
    font-size: 1.5rem;

    &:hover {
        text-decoration: none;
        color: inherit;
    }
}

`;

export default CifBannerAndTextStyles;