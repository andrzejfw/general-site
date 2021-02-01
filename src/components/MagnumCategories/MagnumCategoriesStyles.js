import { createGlobalStyle } from 'styled-components';

const MagnumCategoriesStyles = createGlobalStyle`

.magnum-categories-section {
    margin: 50px auto 100px;

    h2 {
        margin: 0 20px;
        color: #523022;
        text-align: center;
        font-weight: 700;

        @media(max-width:692px){
        width: 90vw;
        margin: 0 auto 20px;
      }
    }

    @media(max-width:692px){
        margin: 30px auto;
      }
}

.magnum-boxes-section {
    margin: 50px auto 0;
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media(max-width:692px){
        flex-direction: column;
        margin: 0;
      }
}

.magnum-category-box {
    border-radius: 14px;
    margin: 0 20px;
    text-align: center;

    @media(max-width:692px){
        margin: 10px auto 40px;
        max-width: 100%;
        width: 90vw;

        h3 {
            font-size: 2rem;
        }
      }

    img {
    max-width: 300px;
    border-radius: 6px;
    position: relative;
    z-index: -1;
    /* transition:.5s; */
    

        /* &:hover {
            transform: scale(1.1);
        } */
        
    }
}

.magnum-button-div {
    margin: -25px -20px -30px;

    .ifUilS {
        display: inline !important;
    }
}

.magnum-categories-button-link {
    text-decoration: none;
    color: inherit;
    font-size: 1.2rem;
    

    &:hover {
        text-decoration: none;
        color: inherit;
    }
}

`;

export default MagnumCategoriesStyles;