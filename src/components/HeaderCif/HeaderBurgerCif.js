import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import CifLogo from '../../assets/images/cif-logo.png'

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

const HeaderBurgerCif = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  return (
    <nav className="cif-burger-menu" 
        style={{
            transition: "all .2s linear",
    }}>
      <Link onClick={() => setNavbarOpen(false)} to="/cif"><img src={CifLogo} alt="Cif Eesti jäätis logo"/></Link>
      <div 
        className="cif-toggle"
        navbarOpen={navbarOpen}
        onClick={() => {setNavbarOpen(!navbarOpen), setProductsOpen(false)}}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </div>
      <div className="cif-navbox" style={{
        transition: "all .3s linear",
        left: navbarOpen ? "0" : "-100%",
        }}>
          <div className="cif-navbox-item" 
            style={{
              transition: "all .3s linear", 
              left: navbarOpen ? "0" : "-100%",
            }} 
            onClick={() => {setProductsOpen(!productsOpen)}}>
              Tooted
              <span style={{
                marginLeft: "10px"}}>
                  {productsOpen ? <span>&#9652;</span> : <span>&#9662;</span>}
              </span>
          </div>

          <div 
            style={{
              display: productsOpen ? (!navbarOpen ? "none" : "flex") : "none",
              flexDirection: "column",
              alignItems: "start",
              margin: "-15px 0 20px",
            }}>
            <Link className="cif-navbox-item inside"
              style={{
                display: productsOpen ? (!navbarOpen ? "none" : "flex") : "none",
              }} 
              to="/cif/products" 
              onClick={() => setNavbarOpen(!navbarOpen)}>
                All
            </Link>
            <Link className="cif-navbox-item inside" 
              to="/cif/products" 
              onClick={() => setNavbarOpen(!navbarOpen)}>
                Category 1
            </Link>
            <Link className="cif-navbox-item inside" 
              to="/cif/products" 
              onClick={() => setNavbarOpen(!navbarOpen)}>
                Category 2
            </Link>
            <Link className="cif-navbox-item inside" 
              to="/cif/products" 
              onClick={() => setNavbarOpen(!navbarOpen)}>
                Category 3
            </Link>
          </div>

          <Link className="cif-navbox-item" 
            style={{
              transition: "all .3s linear", 
              left: navbarOpen ? "0" : "-100%",
            }} 
            to="/cif/about" 
            onClick={() => setNavbarOpen(!navbarOpen)}>
              Ettevõttest
          </Link>
          <a className="cif-navbox-item" 
            style={{
              transition: "all .3s linear", 
              left: navbarOpen ? "0" : "-100%",
            }} 
            href="/contact"
            target="_blank" 
            onClick={() => setNavbarOpen(!navbarOpen)}>
              Kontakt
          </a>
        </div>
    </nav>
  )
}

export default HeaderBurgerCif;