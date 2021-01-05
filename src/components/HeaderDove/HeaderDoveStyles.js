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
    background: url(data:image/png;base64,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) top center no-repeat;
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