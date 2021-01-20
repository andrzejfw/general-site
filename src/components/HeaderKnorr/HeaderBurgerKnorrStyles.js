import { createGlobalStyle } from 'styled-components';
import KnorrWave from '../../assets/images/knorr-bg-wave.png'

const HeaderBurgerCifStyles = createGlobalStyle`
.knorr-burger-menu {
    display: none;    

    @media (max-width: 710px) {
        display: block;
        position: fixed;
        z-index: 99;
        background: rgba(255,255,255,.7);
        height: 60px;
        top: 0;
        left: 0;
        right: 0;
        left: 0;
    }

    img {
        position: absolute;
        top: -15px;
        left: 50%;
        transform: translateX(-50%);
        height: 90px;
        z-index: 9999;
    }
}

.knorr-toggle {
    height: auto;
    padding: 0 35px;
    display: flex;
    position: absolute;
    top: 28px;
    right: 10px;
}

.knorr-navbox {
    position: absolute;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    position: fixed;
    padding: 0 20px 30% 15px;
    text-align: center;
    justify-content: center;
    top: 60px;
    z-index: 0;
    background-color: rgb(0 122 51);
    background: url(${KnorrWave});
    background-size: cover;
    width: 100%;
    height: 90%;
    @media screen and (min-device-width: 500px) and (max-device-width: 710px) {
    padding: 20px 0;
}
}

.knorr-navbox-item {
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
        color: #17594a;
    }
    @media screen and (min-device-width: 500px) and (max-device-width: 710px) {
    padding:10px 0;
}
}
`;

export default HeaderBurgerCifStyles;