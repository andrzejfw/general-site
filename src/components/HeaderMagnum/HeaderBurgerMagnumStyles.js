import { createGlobalStyle } from 'styled-components';

const HeaderBurgerMagnumStyles = createGlobalStyle`
.magnum-burger-menu {
    display: none;    

    @media (max-width: 692px) {
        display: block;
        position: fixed;
        z-index: 99;
        background-image: linear-gradient(60deg,#d6a95d 0,#fff9c7 40%,#fff9c7 60%,#d6a95d 100%);
        height: 8vh;
        top: 0;
        left: 0;
        right: 0;
        left: 0;
    }

    img {
        position: absolute;
        top: 10px;
        left: 50%;
        transform: translate(-50%);
        height: 30px;
        z-index: 9999;
    }
}

.magnum-toggle {
    display: none;
    height: auto;
    padding: 0 10vw;
    display: flex;
    position: absolute;
    top: 4vh;
    right: 10px;
}

.magnum-navbox {
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
    transition: all 1s ease-in;
    z-index: 0;
}

.magnum-navbox-item {
    text-decoration: none;
    color: #523022;
    display: inline-block;
    white-space: nowrap;
    margin: 0 1vw;
    transition: all .2s ease-in;
    position: relative;
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;

    &:hover {
        font-weight: 700;
        color: #523022;
    }

    /* @media (max-width: 350px) {
        padding: 15px 0;
        font-size: 1.3rem;
        z-index: 6;
    } */
}
`;

export default HeaderBurgerMagnumStyles;