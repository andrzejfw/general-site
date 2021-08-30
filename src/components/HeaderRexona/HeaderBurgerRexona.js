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
  const [productsOpen, setProductsOpen] = useState(false)

  return (
    <nav className="rexona-burger-menu" 
        style={{
            transition: "all .3s linear",
    }}>
      <Link onClick={() => setNavbarOpen(false)} to="/rexona"><img src={rexonaLogo} alt="rexona Eesti jäätis logo"/></Link>
      <div 
        className="rexona-toggle"
        navbarOpen={navbarOpen}
        onClick={() => {setNavbarOpen(!navbarOpen), setProductsOpen(false)}}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </div>
      <div className="rexona-navbox" style={{
        transition: "all .3s",
        right: navbarOpen ? "0" : "-100%",
        }}>
          <Link className="rexona-navbox-item" 
            style={{
              transition: "right .3s, opacity .2s", 
              right: navbarOpen ? (productsOpen ? "-100%" : "0") : "-100%",
              opacity: navbarOpen ? (productsOpen ? "-0" : "1") : "0",
            }} 
            to="/rexona" 
            onClick={() => setNavbarOpen(!navbarOpen)}>
              Homepage
          </Link>
          <div className="rexona-navbox-item" 
            style={{
              transition: "right .3s, opacity .2s", 
              right: navbarOpen ? (productsOpen ? "-100%" : "0") : "-100%",
              opacity: navbarOpen ? (productsOpen ? "-0" : "1") : "0",
            }} 
            onClick={() => setProductsOpen(!productsOpen)}>
            Tooted  &#10095;
          </div>
          <Link className="rexona-navbox-item" 
            style={{
              transition: "right .3s, opacity .2s", 
              right: navbarOpen ? (productsOpen ? "-100%" : "0") : "-100%",
              opacity: navbarOpen ? (productsOpen ? "-0" : "1") : "0",
            }} 
            to="/rexona/about" 
            onClick={() => setNavbarOpen(!navbarOpen)}>
              Kaubamärgist
          </Link>
          <a className="rexona-navbox-item" 
            style={{
              transition: "right .3s, opacity .2s", 
              right: navbarOpen ? (productsOpen ? "-100%" : "0") : "-100%",
              opacity: navbarOpen ? (productsOpen ? "-0" : "1") : "0",
            }} 
            href="/contact" 
            target="_blank"
            onClick={() => setNavbarOpen(!navbarOpen)}>
              Kontakt
          </a>
        </div>

        <div class="rexona-products"  style={{
          left: productsOpen ? "0" : "-100%",
        }}>
        <div className="rexona-navbox-item" 
          style={{
            left: productsOpen ? "0" : "-100%", 
            border: "1px solid #103073", 
            borderRadius: "20px", 
            padding: "7px 15px", 
            fontSize: "80%", 
            marginBottom: "20px",
            width: "90px",
            left: productsOpen ? "0" : "-100%",
            transition: "all .3s", 
          }} 
          onClick={() => {setNavbarOpen(true), setProductsOpen(false)}}>
            &#10094; Tagasi
        </div>
        <Link className="rexona-navbox-item inside" 
          style={{
            left: productsOpen ? "0" : "-100%",
            transition: "all .3s", 
          }} 
          to="/rexona/products" 
          onClick={() => {setNavbarOpen(!navbarOpen), setProductsOpen(!productsOpen)}}>
            Kõik Tooted
        </Link>
        <Link className="rexona-navbox-item inside" 
          style={{
            left: productsOpen ? "0" : "-100%",
            transition: "all .3s", 
          }} 
          to="/rexona/products?filter=meeste-deodorandid" 
          onClick={() => {setNavbarOpen(!navbarOpen), setProductsOpen(!productsOpen)}}>
            Meeste deodorandid
        </Link>
        <Link className="rexona-navbox-item inside" 
          style={{
            left: productsOpen ? "0" : "-100%",
            transition: "all .3s", 
          }} 
          to="/rexona/products?filter=naiste-deodorandid" 
          onClick={() => {setNavbarOpen(!navbarOpen), setProductsOpen(!productsOpen)}}>
            Naiste deodorandid
        </Link>
      </div>
    </nav>
  )
}

export default HeaderBurgerRexona;