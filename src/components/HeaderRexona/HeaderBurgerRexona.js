import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import rexonaLogo from '../../assets/images/rexona-logo2.png'

const Hamburger = styled.div`
  background-color: #103073;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: absolute;
  z-index: 999;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #103073;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`

const HeaderBurgerRexona = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <nav className="rexona-burger-menu" 
        style={{
            transition: "all .3s linear",
    }}>
      <Link onClick={() => setNavbarOpen(false)} to="/rexona"><img src={rexonaLogo} alt="rexona Eesti jäätis logo"/></Link>
      <div 
        className="rexona-toggle"
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </div>
      <div className="rexona-navbox" style={{
        transition: "all .3s",
        right: navbarOpen ? "0" : "-100%",
        }}>
          <Link className="rexona-navbox-item" style={{transition: "all .3s", right: navbarOpen ? "0" : "-100%",}} to="/rexona" onClick={() => setNavbarOpen(!navbarOpen)}>Homepage</Link>
          <Link className="rexona-navbox-item" style={{transition: "all .3s", right: navbarOpen ? "0" : "-100%",}} to="/rexona/products" onClick={() => setNavbarOpen(!navbarOpen)}>Tooted</Link>
          <Link className="rexona-navbox-item" style={{transition: "all .3s", right: navbarOpen ? "0" : "-100%",}} to="/contact" onClick={() => setNavbarOpen(!navbarOpen)}>Kontakt</Link>
        </div>
    </nav>
  )
}

export default HeaderBurgerRexona;