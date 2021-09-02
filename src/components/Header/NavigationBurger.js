import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import UnileverLogo from '../../assets/images/unilever-logo-blue.png'

const Hamburger = styled.div`
  background-color: #1f36c7;
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
    background-color: #1f36c7;
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

const NavigationBurger = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <nav className="unilever-burger-menu" 
        style={{
            transition: "all .2s linear",
            boxShadow: navbarOpen ? "none" : "0 0 12px 2px #8888",
    }}>
      <a onClick={() => setNavbarOpen(false)} href="/"><img src={UnileverLogo} alt="Unilever Eesti logo"/></a>
      <div 
        className="unilever-toggle"
        navbarOpen={navbarOpen}
        onClick={() => {setNavbarOpen(!navbarOpen)}}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </div>
      <div className="unilever-navbox" style={{
        transition: "left .3s linear",
        left: navbarOpen ? "0" : "-100%",
        boxShadow: navbarOpen ? "5px 5px 12px #8888" : "none",
        }}>
          <Link className="unilever-navbox-item" 
            style={{
                left: navbarOpen ? "0" : "-100%",
                transition: "all .3s linear .3s", 
            }} 
            to="/about" 
            onClick={() => setNavbarOpen(!navbarOpen)}>
              Ettevõttest
          </Link>
          <Link className="unilever-navbox-item" 
            style={{
                left: navbarOpen ? "0" : "-100%",
                transition: "all .3s linear .3s", 
            }} 
            to="/sustainability" 
            onClick={() => setNavbarOpen(!navbarOpen)}>
              Meie eesmärk
          </Link>
          <Link className="unilever-navbox-item" 
            style={{
                left: navbarOpen ? "0" : "-100%",
                transition: "all .3s linear .3s", 
            }} 
            to="/contact" 
            onClick={() => setNavbarOpen(!navbarOpen)}>
              Kontakt
          </Link>
        </div>
    </nav>
  )
}

export default NavigationBurger;