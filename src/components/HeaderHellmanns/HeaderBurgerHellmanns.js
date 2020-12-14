import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import HellmannsLogo from '../../assets/images/hellmanns-logo-blue.png'

const Hamburger = styled.div`
  background-color: #004976;
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
    background-color: #004976;
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

const HeaderBurgerHellmanns = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <nav className="hellmanns-burger-menu" 
        style={{
            height: navbarOpen ? "100vh" : "70px", 
            transition: "all .5s linear", 
    }}>
      <Link onClick={() => setNavbarOpen(false)} to="/index-hellmanns"><img src={HellmannsLogo} alt="Hellmann's Eesti logo"/></Link>
      <div 
        className="hellmanns-toggle"
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </div>
      
      <div 
        className="hellmanns-navbox" 
        style={{
          opacity: navbarOpen ? "1" : "0", 
          padding: navbarOpen ? "20px 0" : "0",
          }}>
          <Link className="hellmanns-navbox-item" style={{display: navbarOpen ? "flex" : "none"}} to="/products-hellmanns" onClick={() => setNavbarOpen(!navbarOpen)}>Tooted</Link>
          <Link className="hellmanns-navbox-item" style={{display: navbarOpen ? "flex" : "none"}} to="/sustainability-hellmanns" onClick={() => setNavbarOpen(!navbarOpen)}>Ettevõttest</Link>
          <Link className="hellmanns-navbox-item" style={{display: navbarOpen ? "flex" : "none"}} to="/history-hellmanns" onClick={() => setNavbarOpen(!navbarOpen)}>Telli</Link>
          <Link className="hellmanns-navbox-item" style={{display: navbarOpen ? "flex" : "none"}} to="/contact" onClick={() => setNavbarOpen(!navbarOpen)}>Kontakt</Link>
        </div>
    </nav>
  )
}

export default HeaderBurgerHellmanns;