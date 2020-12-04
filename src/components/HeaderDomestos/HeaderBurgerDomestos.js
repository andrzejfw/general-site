import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import DomestosLogo from '../../assets/images/domestos-logo2.png'

const Hamburger = styled.div`
  background-color: #fff;
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
    background-color: #fff;
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

const HeaderBurgerDomestos = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <nav className="domestos-burger-menu" 
        style={{
            height: navbarOpen ? "400px" : "8vh", 
            transition: "all .5s ease", 
            // borderRadius: navbarOpen ? "0 0 50% 50%" : "0"

    }}>
      <Link to="/index-domestos"><img src={DomestosLogo} alt="domestos logo"/></Link>
      <div 
        className="domestos-toggle"
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </div>
      <div className="domestos-navbox" style={{opacity: navbarOpen ? "1" : "0", display: navbarOpen ? "flex" : "none"}}>
          <Link className="domestos-navbox-item" to="/index-domestos" onClick={() => setNavbarOpen(!navbarOpen)}>Tooted</Link>
          <Link className="domestos-navbox-item" to="/about-domestos" onClick={() => setNavbarOpen(!navbarOpen)}>Ettevõttest</Link>
          <Link className="domestos-navbox-item" to="/delivery-domestos" onClick={() => setNavbarOpen(!navbarOpen)}>Telli</Link>
          <Link className="domestos-navbox-item" to="/" onClick={() => setNavbarOpen(!navbarOpen)}>Kontakt</Link>
        </div>
    </nav>
  )
}

export default HeaderBurgerDomestos;