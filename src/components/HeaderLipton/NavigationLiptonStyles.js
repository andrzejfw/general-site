import { createGlobalStyle } from 'styled-components';

const HeaderLiptonStyles = createGlobalStyle`
.header-lipton-nav {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 99;
    padding: 20px 10% 0;
    box-shadow: 0 0 12px 2px #8888;
    background-color: #ffe902;

    @media(max-width:1200px){
        padding: 20px 20px 0;
    }

    @media(max-width:710px){
        display: none;
    }

    img {
        height: 90px;
        z-index: 999; 
    }
}

.links-section-lipton {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin-top: -30px;

    a {
        color: #c8381d;
        align-self: center;
        font-size: 1.2rem;
        transition: all .3s ease;
        padding: 0 20px 10px;
        margin: 0 auto -20px;
    }
}

.link-lipton {
    &:hover {
      font-weight: 700;
    }
}

a.active {
  font-weight: 700;
}

`;

export default HeaderLiptonStyles;