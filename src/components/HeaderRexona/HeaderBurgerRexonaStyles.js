import { createGlobalStyle } from 'styled-components';

const HeaderBurgerRexonaStyles = createGlobalStyle`
.rexona-burger-menu {
    display: none;    

    @media (max-width: 692px) {
        display: block;
        position: fixed;
        z-index: 99;
        background: #fff;
        height: 60px;
        top: 0;
        left: 0;
        right: 0;
        left: 0;
        border-bottom: 2px solid #103073;
    }

    img {
        position: absolute;
        left: 5px;
        height: 60px;
        z-index: 9999;
    }
}

.rexona-toggle {
    height: auto;
    padding: 0 35px;
    display: flex;
    position: absolute;
    top: 28px;
    right: 10px;
}

.rexona-navbox {
    position: absolute;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    position: fixed;
    width: 100%;
    height: 100%;
    padding: 5% 20px 5% 15px;
    justify-content: flex-start;
    top: 60px;
    z-index: 0;
    background-color: #103073;
    border-left: 2px solid #103073;
    border-bottom: 2px solid #103073;
    width: auto;
    height: auto;
}

.rexona-navbox-item {
    text-decoration: none;
    color: #fff;
    display: inline-block;
    white-space: nowrap;
    margin: 0 1vw;
    position: relative;
    margin: 20px 0;
    font-size: 1.5rem;
    z-index: 6;

    &:hover {
        font-weight: 700;
        color: #fff;
    }
}
`;

export default HeaderBurgerRexonaStyles;