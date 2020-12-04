import { createGlobalStyle } from 'styled-components';

const HeaderBurgerDomestosStyles = createGlobalStyle`
.domestos-burger-menu {
    display: none;    

    @media (max-width: 692px) {
        display: block;
        position: fixed;
        z-index: 99;
        background:radial-gradient(circle at 20% 15%,#123c7b,#06154b 61%);
        height: 8vh;
        top: 0;
        left: 0;
        right: 0;
        left: 0;
    }

    img {
        position: absolute;
        top: 0;
        left: 0;
        height: 80px;
        z-index: 9999;
    }
}

.domestos-toggle {
    display: none;
    height: auto;
    padding: 0 10vw;
    display: flex;
    position: absolute;
    top: 4vh;
    right: 10px;
}

.domestos-navbox {
    display: flex;
    height: 100%;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    position: fixed;
    width: 100%;
    height: auto;
    padding: 0;
    justify-content: flex-start;
    top: 8vh;
    transition: all .1s ease-in;
    z-index: 0;
}

.domestos-navbox-item {
    text-decoration: none;
    color: #fff;
    display: inline-block;
    white-space: nowrap;
    margin: 0 1vw;
    transition: all .2s ease-in;
    position: relative;
    padding: 10px 0;
    font-size: 1.5rem;
    z-index: 6;

    &:hover {
        font-weight: 700;
        color: #fff;
    }

    /* @media (max-width: 350px) {
        padding: 15px 0;
        font-size: 1.3rem;
        z-index: 6;
    } */
}
`;

export default HeaderBurgerDomestosStyles;