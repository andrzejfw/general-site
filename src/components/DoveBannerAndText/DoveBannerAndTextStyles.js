import { createGlobalStyle } from 'styled-components';

const DoveBannerAndTextStyles = createGlobalStyle`

.dove-bannerandtext-section {
    max-width: 65vw;
    margin: 50px auto;
    display: flex;
    flex-direction: row;

    @media(max-width:1600px){
        max-width: 85vw;
    }

    @media(max-width:992px){
        max-width: 100vw;
        flex-direction: column !important;
    }
}

.dove-image-section {

    img {
        width: 35vw;
        height: 350px;
        object-fit: cover;
        border-radius: 10px 100px / 120px;
        box-shadow: 0px 2px 6px 0px;
        @media(max-width:1600px){
            width: 40vw;
            height: 250px;
        }

        @media(max-width:992px){
            width: 100%;
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

.dove-paragraph-section {
    margin: 0 50px;

        h2 {
            font-size: 1.7rem;
            color: #004976;
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
            color: #004976;

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

.dove-paragraph-section .Buttondove__Button-bmjmnS {
    margin: 0 !important;
    display: inline-block;

    @media(max-width:992px){
        margin: 0 auto !important;
        display: block;
    }
}

.dove-bannerandtext-button-link {
    text-decoration: none;
    color: inherit;
    font-size: 1.5rem;

    &:hover {
        text-decoration: none;
        color: inherit;
    }
}

`;

export default DoveBannerAndTextStyles;