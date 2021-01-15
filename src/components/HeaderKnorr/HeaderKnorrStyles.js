import { createGlobalStyle } from 'styled-components';

const HeaderDoveStyles = createGlobalStyle`
.header-knorr-nav {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 99;
    height: 60px;
    padding: 10px 20%;
    text-align: center;
    background: rgba(255,255,255,.9);

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
        height: 90px;
        z-index: 999; 
    }
}

.links-section-knorr {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin-top: -30px;

    a {
        color: #007a33;
        align-self: center;
        font-size: 1.2rem;
        transition: all .3s ease;
        padding: 5px 20px;
        margin: 0 auto;
        border-radius: 45%;
    }
}

.link-knorr {
    &:hover {
        font-weight: 700;
        font-size: 1.3rem;
        margin-bottom: .2rem;
    }
}

a.active {
    font-weight: 700;
}

`;

export default HeaderDoveStyles;