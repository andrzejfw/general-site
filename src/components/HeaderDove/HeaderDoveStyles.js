import { createGlobalStyle } from 'styled-components';
import DoveHeaderBackground from '../../assets/images/dove-global-nav-logo-bg.png'

const HeaderDoveStyles = createGlobalStyle`
.header-dove-nav {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 99;
    height: 60px;
    padding: 10px 20%;
    text-align: center;
    background-color: #fff;
    border-bottom: solid 1px #ccc;

    @media(max-width:1600px){
        padding: 10px 15%;
    }

    @media(max-width:1100px){
        padding: 10px 20px;
    }

    @media(max-width:710px){
        display: none;
    }

    img {
        height: 50px;
        position: absolute;
        margin-left: 5px;
        top: 15px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 999;
    }
}

.header-dove-nav::after {
    content: '';
    background: url(${DoveHeaderBackground}) top center no-repeat;
    background-size: cover;
    height: 30px;
    width: 150px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 59px;
    margin: 0 auto;

    @media(max-width:1100px){
        top: 58px;
    }
}

.links-section-dove {
    display: grid;
    grid-template-columns: repeat(5, 1fr);

    a {
        color: #054281;
        align-self: center;
        font-size: 1.2rem;
        transition: all .3s linear;
        margin: 0 auto;

        &:hover {
            font-weight: 700;
        }
    }
}

`;

export default HeaderDoveStyles;