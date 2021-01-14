import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import KnorrLogo from '../../assets/images/logo-knorr.png'

const Hamburger = styled.div`
  background-color: #007a33;;
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
    background-color: #007a33;
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

const HeaderBurgerKnorr = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <nav className="knorr-burger-menu" 
        style={{
            transition: "all .2s linear",
    }}>
      <Link onClick={() => setNavbarOpen(false)} to="/index-knorr"><img src={KnorrLogo} alt="Knorr Eesti jäätis logo"/></Link>
      <div 
        className="knorr-toggle"
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </div>
      <div className="knorr-navbox" style={{
        transition: "all .3s linear",
        left: navbarOpen ? "0" : "-100%",
        }}>
          <Link className="knorr-navbox-item" style={{transition: "all .3s linear .1s", left: navbarOpen ? "0" : "-100%",}} to="/products-cif" onClick={() => setNavbarOpen(!navbarOpen)}>Tooted</Link>
          <Link className="knorr-navbox-item" style={{transition: "all .3s linear .2s", left: navbarOpen ? "0" : "-100%",}} to="/" onClick={() => setNavbarOpen(!navbarOpen)}>Ettevõttest</Link>
          <Link className="knorr-navbox-item" style={{transition: "all .3s linear .3s", left: navbarOpen ? "0" : "-100%",}} to="/" onClick={() => setNavbarOpen(!navbarOpen)}>Meie eesmärk</Link>
          <Link className="knorr-navbox-item" style={{transition: "all .3s linear .4s", left: navbarOpen ? "0" : "-100%",}} to="/contact" onClick={() => setNavbarOpen(!navbarOpen)}>Kontakt</Link>
        </div>
    </nav>
  )
}

export default HeaderBurgerKnorr;