import { createGlobalStyle } from 'styled-components';
import DoveHeaderBackground from '../../assets/images/dove-global-nav-logo-bg.png'

const HeaderBurgerDoveStyles = createGlobalStyle`
.dove-burger-menu {
    display: none;    

    @media (max-width: 710px) {
        display: block;
        position: fixed;
        z-index: 99;
        background-color: #fff;
        border-bottom: solid 1px #ccc;
        height: 60px;
        top: 0;
        left: 0;
        right: 0;
        left: 0;
    }

    img {
        position: absolute;
        top: 15px;
        left: 50%;
        transform: translate(-50%);
        height: 40px;
        z-index: 9999;
        margin-left: 5px;
    }
}

.dove-burger-menu::after {
    content: '';
    background: url(${DoveHeaderBackground}) top center no-repeat;
    background-size: cover;
    height: 20px;
    width: 100px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 58px;
    margin: 0 auto;
}

.dove-toggle {
    height: auto;
    padding: 0 35px;
    display: flex;
    position: absolute;
    top: 28px;
    right: 10px;
}

.dove-navbox {
    position: absolute;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    position: fixed;
    width: 100%;
    height: 100%;
    padding: 20% 0;
    justify-content: flex-start;
    top: 60px;
    z-index: 0;
    background-color: rgb(0 38 99 / .95);
    @media screen and (min-device-width: 500px) and (max-device-width: 710px) {
    padding: 20px 0;
}
}


.dove-navbox-item {
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
        color: #fff;
    }
    @media screen and (min-device-width: 500px) and (max-device-width: 710px) {
    padding:10px 0;
}
}
`;

export default HeaderBurgerDoveStyles;