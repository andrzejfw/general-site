import { createGlobalStyle } from 'styled-components';

const HeaderDomestosStyles = createGlobalStyle`
.menu-animation {
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 1px;
}
.menu-animation * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}
.menu-animation li {
  display: inline-block;
  list-style: outside none none;
  margin: 0.5em 1.5em;
  padding: 0;
}
.menu-animation a {
  padding: 0.3em 0;
  color: rgba(255, 255, 255, 0.5);
  position: relative;
  text-decoration: none;
  display: inline-block;
}
.menu-animation a:before,
.menu-animation a:after {
  height: 3px;
  position: absolute;
  content: '';
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
  background-color: #fff;
  width: 0;
}
.menu-animation a:before {
  top: 0;
  left: 0;
}
.menu-animation a:after {
  bottom: 0;
  right: 0;
}
.menu-animation a:hover,
.menu-animation a.current {
  color: #ffffff;
}
.menu-animation a:hover:before,
.menu-animation a.current:before,
.menu-animation a:hover:after,
.menu-animation a.current:after {
  width: 100%;
}
.header-domestos-nav {
    position: fixed;
    display:flex;
    top: 0;
    left: 0;
    right:0;
    z-index: 99;
    box-shadow: 0 0 12px 2px #8888;
    padding: 10px 20% 20px;
    background:radial-gradient(circle at 20% 15%,#123c7b,#06154b 61%);
    justify-content: space-around;

    @media(max-width:1600px){
        padding: 10px 15% 20px;
    }

    @media(max-width:1100px){
        padding: 10px 20px 20px;
    }

    @media(max-width:950px){
        display: none;
    }

    img {
        display:flex;
        height: 120px;
        position: absolute;
        top:0;
        @media(max-width:1400px) and (min-width:950px){
        left:50px;
    }
    }
}


`;

export default HeaderDomestosStyles;