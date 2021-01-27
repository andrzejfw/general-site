import { createGlobalStyle } from 'styled-components';

const HeaderBurgerCifStyles = createGlobalStyle`
.cif-burger-menu {
    display: none;    

    @media (max-width: 692px) {
        display: block;
        position: sticky;
        z-index: 99;
        background: linear-gradient(to right,#165648,#20856e);
        height: 60px;
        top: 0;
        left: 0;
        right: 0;
        left: 0;
    }

    img {
        position: absolute;
        top: -5px;
        left: 5px;
        height: 70px;
        z-index: 9999;
    }
}

.cif-toggle {
    height: auto;
    padding: 0 35px;
    display: flex;
    position: absolute;
    top: 28px;
    right: 10px;
}

.cif-navbox {
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
    background-color: rgb(227 232 220 / 95%);
    width: auto;
    height: auto;
    
}

.cif-navbox-item {
    text-decoration: none;
    color: #17594a;
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
    @media screen and (min-device-width: 500px) and (max-device-width: 692px) {
    padding:10px 0;
}
}
`;

export default HeaderBurgerCifStyles;