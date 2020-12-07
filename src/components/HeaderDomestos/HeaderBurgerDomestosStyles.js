import { createGlobalStyle } from 'styled-components';

const HeaderBurgerDomestosStyles = createGlobalStyle`


#menuToggle
{
  display: block;
  position: fixed;
  left: 0;
  right: 0;
  height: 60px;
  top:0;
  z-index: 1;
  
  -webkit-user-select: none;
  user-select: none;
  background:radial-gradient(circle at 20% 15%,#123c7b,#06154b 61%);
  img {
    position: fixed;
    right: 0;
    top: 0;
    height: 90px;
  }
}

#menuToggle a
{
  text-decoration: none;
  color: #232323;
  
  transition: color 0.3s ease;
}

#menuToggle a:hover
{
  color: grey;
}


#menuToggle input
{
  display: block;
  width: 51px;
  height: 51px;
  position: absolute;
  top: -7px;
  left: -5px;
  
  cursor: pointer;
  
  opacity: 0;
  z-index: 2;
  
  -webkit-touch-callout: none;
}

.bar1, .bar2, .bar3 {
  width: 35px;
  height: 5px;
  background-color: #fff;
  margin: 6px 0;
  transition: 0.4s;
  z-index: 1;
}

.change .bar1 {
  -webkit-transform: rotate(-45deg) translate(-9px, 6px);
  transform: rotate(-45deg) translate(-9px, 6px);
}

.change .bar2 {opacity: 0;}

.change .bar3 {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-8px, -8px);
}

.hamburger {
    margin-left:10px;
    margin-top:10px;
    position: absolute;
}
.current {
    color: gray;
}

#menuToggle span:first-child
{
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2)
{
  transform-origin: 0% 100%;
}

#menu
{
  position: absolute;
  width: 200px;
  padding: 20px 20px 20px;
  margin-top: 60px;
  background: #113877;
  
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  transform-origin: 0% 0%;
  transform: translate(-100%, 0);
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
}

#menu li
{
  padding: 10px 0 0 10px;
  font-size: 22px;
  color:#fff;
  a {
    color:#fff;
  }
}

#menuToggle input:checked ~ ul
{
  transform: none;
}
`;

export default HeaderBurgerDomestosStyles;