import { createGlobalStyle } from 'styled-components';

const NavigationStyles = createGlobalStyle`
.header-unilever-nav {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 99;
    padding: 10px 15%;
    box-shadow: 0 0 12px 2px #8888;
    background-color: #fff;


    @media (max-width: 1700px) {
        padding: 10px 10% 10px 15%;
        }

    @media(max-width:1200px){
        padding: 20px 20px 0;
    }

    @media(max-width:710px){
        display: none;
    }

    .img-div {
        margin-right: 40vw;

        @media (max-width: 1700px) {
        margin-right: 30vw;
        }
    }

    img {
        height: 90px;
        z-index: 999;
    }
}

.links-section-unilever {
    display: flex;

    a {
        color: #1f36c7;
        align-self: center;
        font-size: 1.2rem;
        transition: all .3s ease;
        padding: 0 20px;
        margin: 0 auto;
    }
}

.link-unilever {
    &:hover {
      font-weight: 700;
    }
}

a.active {
  font-weight: 700;
}

`;

export default NavigationStyles;