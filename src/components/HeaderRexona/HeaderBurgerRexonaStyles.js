import { createGlobalStyle } from 'styled-components';
import RexonaNav from '../../assets/images/rexona-nav4.png'


const HeaderBurgerRexonaStyles = createGlobalStyle`
.rexona-burger-menu {
    display: none;    

    @media (max-width: 500px) {
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
    height: 40vh;
    justify-content: flex-start;
    top: 60px;
    z-index: 0;
}
.rexona-navbox:after {
    background: url(${RexonaNav}) no-repeat;
    content: '';
    height: 100%;
    width: 100%;
    position: fixed;
    background-size: 100%;
    margin-top: 0;
    bottom: 0;
    background-position: bottom;
    }

.rexona-navbox-item {
    text-decoration: none;
    color: #103073;
    display: inline-block;
    white-space: nowrap;
    margin: 0 1vw;
    position: relative;
    margin: 40px 20px 20px 9px;
    font-size: 1.5rem;
    z-index: 6;

    &:hover {
        font-weight: 700;
        color: #fff;
    }
}
`;

export default HeaderBurgerRexonaStyles;