import { createGlobalStyle } from 'styled-components';

const HellmannsCategoriesStyles = createGlobalStyle`

.hellmanns-categories-section {
    margin: 50px auto;

    h2 {
        margin: 0 auto;
        color: #004976;
        text-align: center;
        font-weight: 700;
        text-transform: uppercase;
        border-bottom: 15px solid #ffc72e;
        width: 350px;
        height: 2.5rem;

        @media(max-width:692px){
        width: 90vw;
        margin: 0 auto 20px;
      }
    }
}

.hellmanns-boxes-section {
    margin: 20px auto 0;
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media(max-width:992px){
        flex-direction: column;
        margin: 0;
      }
}

.hellmanns-category-box {
    padding: 30px 50px;
    margin: 0 20px;
    max-width: 350px;
    text-align: center;

    h3 {
        color:#004976;
        text-align: center;
        font-size: 26px;
        font-weight:700;
        text-transform: uppercase;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 2rem;

        @media(max-width:992px){
        height: auto;
        }
    }

    @media(max-width:992px){
        margin: 10px auto;
        max-width: 100%;
        width: 90vw;

        h3 {
            font-size: 2rem;
        }
      }

    img {
    max-width: 200px;
    transition:.5s;
     

        &:hover {
            transform: scale(1.1);
        }
        
    }
}

.hellmanns-img-div {
    background: linear-gradient(180deg, transparent 20%,20%, #ffc72e 80%,80%, transparent 100%);
    margin: 0 -20px;

    @media(max-width:992px){
        margin: 0 120px;
    }

    @media(max-width:692px){
        margin: 0;
    }    
}

.hellmanns-button-div {
    margin: 10px -20px -30px;

    
}

.hellmanns-categories-button-link {
    text-decoration: none;
    color: inherit;
    font-size: 1.5rem;
    

    &:hover {
        text-decoration: none;
        color: inherit;
    }
}

`;

export default HellmannsCategoriesStyles;