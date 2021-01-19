import { createGlobalStyle } from 'styled-components';

const HeaderMagnumStyles = createGlobalStyle`
.header-magnum-nav {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 99;
    box-shadow: 0 0 12px 2px #8888;
    padding: 10px 20% 20px;
    text-align: center;
    background-image: linear-gradient(60deg,#d6a95d 0,#fff9c7 40%,#fff9c7 60%,#d6a95d 100%);

    @media(max-width:1600px){
        padding: 10px 15% 20px;
    }

    @media(max-width:1100px){
        padding: 10px 20px 20px;
    }

    @media(max-width:500px){
        display: none;
    }

    img {
        height: 40px;
        margin-top: -20px;
    }
}

.links-section {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 20px 0 10px;
    transition: all .2s linear;

    a {
        color: #523022;
        align-self: center;
        font-size: 1.2rem;
        transition: all .3s linear;

        &:hover {
            font-weight: 700;
        }
    }
}

`;

export default HeaderMagnumStyles;