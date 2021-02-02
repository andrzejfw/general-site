import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import MagnumLogo from '../../assets/images/magnum-logo-brown.png'

const Hamburger = styled.div`
  background-color: #523022;
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
    background-color: #523022;
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

const HeaderBurgerMagnum = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  return (
    <nav className="magnum-burger-menu" 
        style={{
            height: navbarOpen ? "400px" : "8vh", 
            transition: "all .2s linear", 
            borderRadius: navbarOpen ? "0 0 50% 50%" : "0"
    }}>
      <Link onClick={() => setNavbarOpen(false)} to="/magnum"><img src={MagnumLogo} alt="Magnum Eesti jäätis logo"/></Link>
      <div 
        className="magnum-toggle"
        navbarOpen={navbarOpen}
        onClick={() => {setNavbarOpen(!navbarOpen), setProductsOpen(false)}}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </div>
      <div className="magnum-navbox" style={{
        opacity: navbarOpen ? "1" : "0", 
        transition: "opacity .2s linear .2s"
        }}>
          <div className="magnum-navbox-item" 
            style={{
              display: navbarOpen ? (productsOpen ? "none" : "flex") : "none"
            }} 
            onClick={() => setProductsOpen(!productsOpen)}>
              Tooted  &#10095;
          </div>
          <Link className="magnum-navbox-item" 
            style={{
              display: navbarOpen ? (productsOpen ? "none" : "flex") : "none"
            }} 
            to="/magnum/about" 
            onClick={() => setNavbarOpen(!navbarOpen)}>
              Ettevõttest
          </Link>
          <Link className="magnum-navbox-item" 
            style={{
              display: navbarOpen ? (productsOpen ? "none" : "flex") : "none"
            }} 
            to="/magnum/delivery" 
            onClick={() => setNavbarOpen(!navbarOpen)}>
              Telli
          </Link>
          <Link className="magnum-navbox-item" 
            style={{display: navbarOpen ? (productsOpen ? "none" : "flex") : "none"
          }} 
          to="/contact"
          onClick={() => setNavbarOpen(!navbarOpen)}>
            Kontakt
          </Link>
        </div>

        <div class="magnum-products"  style={{
        opacity: productsOpen ? "1" : "0", 
        transition: "opacity .2s linear .2s"
        }}>
          <div className="magnum-navbox-item" 
            style={{
              display: productsOpen ? "flex" : "none", 
              border: "1px solid #523022", 
              borderRadius: "20px", 
              padding: "7px 15px", 
              fontSize: "80%", 
              marginTop: "10px"
            }} 
            onClick={() => {setNavbarOpen(true), setProductsOpen(false)}}>
              &#10094; Tagasi
          </div>
          <Link className="magnum-navbox-item" 
            style={{
              display: productsOpen ? "flex" : "none"
            }} 
            to="/magnum/products" 
            onClick={() => {setNavbarOpen(!navbarOpen), setProductsOpen(!productsOpen)}}>
              Kogu jäätis
          </Link>
          <Link className="magnum-navbox-item" 
            style={{
              display: productsOpen ? "flex" : "none"
            }} 
            to="/magnum/products?filter=pulgajaatised" 
            onClick={() => {setNavbarOpen(!navbarOpen), setProductsOpen(!productsOpen)}}>
              Pulgajäätised
          </Link>
          <Link className="magnum-navbox-item" 
            style={{
              display: productsOpen ? "flex" : "none"
            }} 
            to="/magnum/products?filter=perejaatised" 
            onClick={() => {setNavbarOpen(!navbarOpen), setProductsOpen(!productsOpen)}}>
              Perejäätised
          </Link>
        </div>
    </nav>
  )
}

export default HeaderBurgerMagnum;