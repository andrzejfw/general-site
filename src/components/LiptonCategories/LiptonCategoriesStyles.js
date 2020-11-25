import { createGlobalStyle } from 'styled-components';

const LiptonCategoriesStyles = createGlobalStyle`

.categories-section {
    margin: 50px auto;

    h2 {
        margin: 0 20px;
        color: #c8381d;
        text-align: center;
        font-weight: 700;

        @media(max-width:992px){
        width: 90vw;
        margin: 0 auto 20px;
      }
    }
}

.boxes-section {
    margin: 50px auto 0;
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media(max-width:992px){
        flex-direction: column;
        margin: 0;
      }
}

.category-box {
    background: linear-gradient(180deg,#fff001,#ffca00);
    padding: 30px 50px;
    border-radius: 14px;
    margin: 0 20px;
    max-width: 300px;
    text-align: center;

    h3 {
        text-align: center;
        color:white;
        font-size: 1.5rem;
        text-shadow: 2px 2px 10px black;
        height: 3.5rem;
        display: flex;
        justify-content: center;
        align-items: center;

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

.button-div {
    margin: -50px -20px -30px;

    
}

.categories-button-link {
    text-decoration: none;
    color: inherit;
    font-size: 1.5rem;
    

    &:hover {
        text-decoration: none;
        color: inherit;
    }
}

`;

export default LiptonCategoriesStyles;