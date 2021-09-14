import { createGlobalStyle } from 'styled-components';

const KnorrCategoriesStyles = createGlobalStyle`

.categories-section {
    margin: 50px auto;

    h2 {
        margin: 0 20px;
        color: #007a33;
        text-align: center;
        font-weight: 700;

        @media(max-width:692px){
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

    @media (min-width:693px) and (max-width:1024px){
        flex-wrap: wrap;
        gap: 50px;
        max-width: 800px;
    }

    @media(max-width:692px){
        flex-direction: column;
        margin: 0 0 50px;
      }
}

.category-box {
    background: rgba(0, 122, 51, 0.2);
    padding: 30px 50px;
    border-radius: 2px;
    margin: 0 20px;
    max-width: 300px;
    text-align: center;

    h3 {
        text-align: center;
        color:#007a33;
        font-size: 26px;
        font-weight:700;
        height: 3.5rem;
        display: flex;
        justify-content: center;
        align-items: center;

        @media(max-width:692px){
        height: auto;
        }
    }

    @media (min-width:693px) and (max-width:1024px){
        margin: 0;
    }

    @media(max-width:692px){
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

export default KnorrCategoriesStyles;