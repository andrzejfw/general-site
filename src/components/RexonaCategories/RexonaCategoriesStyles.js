import { createGlobalStyle } from 'styled-components';

const RexonaCategoriesStyles = createGlobalStyle`

.categories-section {
    margin: 50px auto 150px;

    h2 {
        margin: 0 20px;
        color: #103073;
        text-align: center;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 3rem;

        @media(max-width:692px){
        width: 90vw;
        margin: 0 auto;
      }
    }
}

.boxes-section {
    margin: 30px auto 0;
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media(max-width:692px){
        flex-direction: column;
        margin: 0;
      }
}

.category-box {
    margin: 0 20px;
    max-width: 300px;
    text-align: center;

    h3 {
        text-align: center;
        color:#103073;
        font-size: 1.7rem;
        font-weight:700;
        /* text-shadow: 2px 2px 10px black; */
        height: 3.5rem;
        display: flex;
        justify-content: center;
        align-items: center;

        @media(max-width:692px){
        height: auto;
        margin: 50px 0 20px;
        }
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
    max-width: 300px;
    transition:.5s;
    

        &:hover {
            opacity: .7;
        }
        
    }
}

.button-div {
    margin: -25px -20px -30px;
    position: relative;
    z-index: 1;
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

export default RexonaCategoriesStyles;