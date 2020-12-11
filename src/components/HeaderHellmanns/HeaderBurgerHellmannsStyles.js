import { createGlobalStyle } from 'styled-components';

const HeaderBurgerMagnumStyles = createGlobalStyle`
.hellmanns-burger-menu {
    display: none;    

    @media (max-width: 692px) {
        display: block;
        position: fixed;
        z-index: 99;
        background: #fdf6e8;
        border-bottom: 3px solid #004976;
        /* box-shadow: 0 0 10px #004976; */
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
    right: 10px;
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
    top: 8vh;
    transition: all 1s ease-in;
    z-index: 0;
    text-transform: uppercase;
    font-weight: 700;
}

.hellmanns-navbox-item {
    text-decoration: none;
    color: #004976;
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
        color: #004976;
    }
}
`;

export default HeaderBurgerMagnumStyles;