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
  z-index: 3;
  
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

#menuToggle .toggler {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  cursor: pointer;
  width: 50px;
  height: 50px;
  opacity: 0;
}
#menuToggle .hamburger {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 60px;
  height: 60px;
  padding: 1rem;
  background: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Hamburger Line div */
#menuToggle .hamburger > div {
  position: relative;
  flex: none;
  width: 100%;
  height: 2px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
}

/* Hamburger Lines - Top */
#menuToggle .hamburger > div::before {
  content: '';
  position: absolute;
  z-index: 1;
  top: 10px;
  width: 100%;
  height: 2px;
  background: inherit;
}
/* Hamburger Lines - Bottom */
#menuToggle .hamburger > div::after {
  content: '';
  position: absolute;
  z-index: 1;
  top: -10px;
  width: 100%;
  height: 2px;
  background: inherit;
}
/* Toggler Animation */
#menuToggle .toggler:checked + .hamburger > div {
  transform: rotate(135deg);
}

/* Turns Lines Into X */
#menuToggle .toggler:checked + .hamburger > div:before,
#menuToggle .toggler:checked + .hamburger > div:after {
  top: 0;
  transform: rotate(90deg);
}

/* Rotate On Hover When Checked */
#menuToggle .toggler:checked:hover + .hamburger > div {
  transform: rotate(225deg);
}


.current {
    color: gray;
}

#menu
{
  position: absolute;
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