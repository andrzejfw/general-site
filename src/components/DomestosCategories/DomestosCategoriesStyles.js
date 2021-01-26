import { createGlobalStyle } from 'styled-components';
import Background from '../../assets/images/category-domestos-background.png'

const DomestosCategoriesStyles = createGlobalStyle`


.domestos-categories-section {
    margin: 50px auto;

    h1 {
        margin: 0 auto;
        color: #06154b;
        text-align: center;
        font-weight: 700;
        text-transform: uppercase;

        @media(max-width:692px){
        width: 90vw;
        margin: 0 auto 20px;
      }
    }
}

.domestos-boxes-section {
    margin: 20px auto 0;
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media(max-width:992px){
        flex-direction: column;
        margin: 0;
      }
}

.domestos-category-box {
    padding: 30px 50px;
    margin: 0 20px;
    max-width: 350px;
    text-align: center;
    @media(min-width:993px){
    min-width: 450px;
    }
    h2 {
        color:#06154b;
        text-align: center;
        font-size: 26px;
        font-weight:700;
        text-transform: uppercase;
        display: flex;
        justify-content: center;
        align-items: center;

        @media(max-width:992px){
        height: auto;
        }
    }

    @media(max-width:992px){
        margin: 10px auto;
        max-width: 500px;
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

.domestos-img-div {
    margin: 0 -20px;
    position:relative;
    padding:20px;
    @media(max-width:992px){
        margin: 0;
    }
    transition: background-color 0.5s ease-out;
}
.domestos-img-div:after {
    content:'';
    background: #06154b no-repeat center center;
    position: absolute;
    top:0px;
    left: 0px;
    width:100%;
    height:100%;
    z-index:-1;
    opacity: 0.1;
}
.domestos-img-div:hover {
    background: #b5b9c9;
    }


.domestos-button-div {
    margin: 10px -20px -30px;

    
}

.domestos-categories-button-link {
    text-decoration: none;
    color: inherit;
    font-size: 1.5rem;
    

    &:hover {
        text-decoration: none;
        color: inherit;
    }
}

`;

export default DomestosCategoriesStyles;