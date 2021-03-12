import { createGlobalStyle } from 'styled-components';
import DoveArticleBackground from '../../assets/images/dove-background-article.png'

const DoveBannerAndTextStyles = createGlobalStyle`

.dove-bannerandtext-section {
    max-width: 65vw;
    margin: 80px auto;
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
    background-image: url(${DoveArticleBackground});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    padding: 50px 150px;
    margin: 0 auto;

    @media (max-width: 1024px) {
        padding: 50px;
    }

    @media (max-width: 320px) {
        padding: 40px;
    }

    img {
        width: 350px;
        height: 350px;
        margin: 0 auto;
        object-fit: cover;
        border-radius: 50%;
        border: 1px solid #dabf80; 

        @media (max-width: 768px) {
            width: 250px;
            height: 250px;
        }  

        @media (max-width: 320px) {
            width: 200px;
            height: 200px;
        }    
    }
}

.dove-paragraph-section {
    margin: 0 50px;
    height: 450px;

    @media (max-width: 768px) {
        height: auto;
    }

    .dove-texts {
        position: relative;
        top: 50%;
        transform: translateY(-50%);

        @media (max-width: 768px) {
            top: 0;
            transform: none;
        }
    }

        h2 {
            font-size: 1.7rem;
            color: #004976;
            font-weight: bold;
            text-transform: uppercase;

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
        button {
            @media(max-width:992px){
                text-align: center !important;
                margin: 0 auto;
                display: flex;
            }
        }

        @media(max-width:768px){
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