import { createGlobalStyle } from 'styled-components';

const HeaderBurgerLiptonStyles = createGlobalStyle`
.lipton-burger-menu {
    display: none;    

    @media (max-width: 710px) {
        display: block;
        position: fixed;
        z-index: 99;
        background: #ffe902;
        height: 60px;
        top: 0;
        left: 0;
        right: 0;
        left: 0;
    }

    img {
        position: absolute;
        top: -5px;
        left: 50%;
        transform: translateX(-50%);
        height: 90px;
        z-index: 9999;
    }
}

.lipton-toggle {
    height: auto;
    padding: 0 35px;
    display: flex;
    position: absolute;
    top: 28px;
    right: 10px;
}

.lipton-navbox {
    position: absolute;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    position: fixed;
    padding: 50px 20px 30% 15px;
    text-align: center;
    justify-content: start;
    top: 60px;
    z-index: 0;
    background-color: #ffe902;
    background-size: cover;
    width: 100%;
    height: 100%;
    @media screen and (min-device-width: 500px) and (max-device-width: 710px) {
    padding: 20px 0;
    }
}

.lipton-products {
    position: absolute;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    position: fixed;
    padding: 50px 20px 30% 15px;
    text-align: center;
    justify-content: start;
    top: 60px;
    z-index: 0;
    background-color: #ffe902;
    background-size: cover;
    width: 100%;
    height: 100%;
    @media screen and (min-device-width: 500px) and (max-device-width: 710px) {
    padding: 20px 0;
    }
}

.lipton-navbox-item {
    text-decoration: none;
    color: #c8381d;
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

export default HeaderBurgerLiptonStyles;