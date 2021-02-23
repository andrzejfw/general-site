import { createGlobalStyle } from 'styled-components';

const HeaderBurgerMagnumStyles = createGlobalStyle`
.hellmanns-burger-menu {
    display: none;    

    @media (max-width: 992px) {
        display: block;
        position: fixed;
        z-index: 99;
        background: #fdf6e8;
        border-bottom: 3px solid #004976;
        top: 0;
        left: 0;
        right: 0;
        left: 0;
    }

    img {
        position: absolute;
        top: 5px;
        left: 50%;
        transform: translate(-50%);
        height: 65px;
        z-index: 9999;
    }
}

.hellmanns-toggle {
    height: auto;
    padding: 0 35px;
    display: flex;
    position: absolute;
    top: 35px;
    right: 30px;
}

.hellmanns-navbox {
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
    top: 70px;
    z-index: 0;
    text-transform: uppercase;
    font-weight: 700;
    transition: opacity .2s linear .2s;
}

.hellmanns-navbox-item {
    text-decoration: none;
    color: #004976;
    display: inline-block;
    white-space: nowrap;
    margin: 0 1vw;
    position: relative;
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;

    &:hover {
        font-weight: 700;
        color: #004976;
    }
    @media screen and (min-device-width: 500px) and (max-device-width: 710px) {
    padding:10px 0;
    }
}

.inside {
    padding: 5px 0;
    font-size: 1.3rem;
}
`;

export default HeaderBurgerMagnumStyles;