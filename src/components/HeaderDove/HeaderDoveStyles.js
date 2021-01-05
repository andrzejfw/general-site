import { createGlobalStyle } from 'styled-components';

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

    @media(max-width:692px){
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
    background: url(https://www.dove.com/etc/ui/dove/clientlibs/core/core/images/global-nav/global-nav-logo-bg.png) top center no-repeat;
    background-size: cover;
    height: 30px;
    width: 150px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 59px;
    margin: 0 auto;
}

.links-section-dove {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    transition: all .2s linear;

    a {
        color: #054281;
        align-self: center;
        font-size: 1.2rem;
        transition: all .3s linear;

        &:hover {
            font-weight: 700;
        }
    }
}

`;

export default HeaderDoveStyles;