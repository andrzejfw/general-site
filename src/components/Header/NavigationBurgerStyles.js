import { createGlobalStyle } from 'styled-components';

const HeaderBurgerStyles = createGlobalStyle`
.unilever-burger-menu {
    display: none;    

    @media (max-width: 710px) {
        display: block;
        position: fixed;
        z-index: 99;
        background: #fff;
        height: 60px;
        top: 0;
        left: 0;
        right: 0;
        left: 0;
    }

    img {
        position: absolute;
        top: 5px;
        left: 50%;
        transform: translateX(-50%);
        height: 50px;
        z-index: 9999;
    }
}

.unilever-toggle {
    height: auto;
    padding: 0 35px;
    display: flex;
    position: absolute;
    top: 28px;
    right: 10px;
}

.unilever-navbox {
    position: absolute;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    position: fixed;
    padding: 20px;
    text-align: center;
    justify-content: start;
    top: 60px;
    z-index: 0;
    background-color: #1f36c7;
    background-size: cover;
    width: 100%;
    height: auto;
    @media screen and (min-device-width: 500px) and (max-device-width: 710px) {
    padding: 20px 0;
    }
}

.unilever-navbox-item {
    text-decoration: none;
    color: #fff;
    display: inline-block;
    white-space: nowrap;
    margin: 0 1vw;
    position: relative;
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;

    &:hover {
        font-weight: 700;
    }
    @media screen and (min-device-width: 500px) and (max-device-width: 710px) {
    padding:10px 0;
    }
}

.inside {
    padding: 10px 0;

    @media (max-width: 350px) {
        padding: 5px 0;
    }
}
`;

export default HeaderBurgerStyles;