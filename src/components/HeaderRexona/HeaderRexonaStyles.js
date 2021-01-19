import { createGlobalStyle } from 'styled-components';

const HeaderRexonaStyles = createGlobalStyle`
.header-rexona-nav {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 99;
    height: 70px;
    padding: 10px 20%;
    text-align: center;
    background: #fff;
    border-bottom: 2px solid #103073;
    box-shadow: 0px 1px 8px 0px #103073;

    @media(max-width:1600px){
        padding: 10px 15%;
    }

    @media(max-width:1100px){
        padding: 10px 20px;
    }

    @media(max-width:500px){
        display: none;
    }

    img {
        z-index: 999; 
    }
}

.links-section-rexona {
    display: grid;
    grid-template-rows: 50px;
    grid-template-columns: repeat(5, 1fr);
    
    a {
        color: #103073;
        align-self: center;
        font-size: 1.2rem;
        transition: all .3s;
        margin: 0 auto;
    }
}

.link-rexona {
    position: relative;
        
}
.link-rexona:after{
  content: '';
  position: absolute;
  width: 0; height: 3px;
  display: block;
  margin-top: 5px;
  right: 0;
  background: #103073;
  transition: width .2s ease;
  -webkit-transition: width .2s ease;
}
 
.link-rexona:hover:after{
  width: 100%;
  left: 0;
  background: #103073;
}

a.active:after {
  content: '';
  position: absolute;
  height: 3px;
  display: block;
  margin-top: 5px;
  width: 100%;
  background: #103073;
}
`;

export default HeaderRexonaStyles;