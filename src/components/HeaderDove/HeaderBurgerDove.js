import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import DoveLogo from '../../assets/images/dove-logo-main.png'

const Hamburger = styled.div`
  background-color: #054281;
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
    background-color: #054281;
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

const HeaderBurgerDove = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  return (
    <nav className="dove-burger-menu" 
        style={{
            transition: "all .2s linear",
    }}>
      <Link onClick={() => setNavbarOpen(false)} to="/dove"><img src={DoveLogo} alt="Dove Eesti jäätis logo"/></Link>
      <div 
        className="dove-toggle"
        navbarOpen={navbarOpen}
        onClick={() => {setNavbarOpen(!navbarOpen), setProductsOpen(false)}}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </div>

      <div className="dove-navbox" style={{
        transition: "all .3s linear",
        left: navbarOpen ? "0" : "-100%",
        }}>
        <div className="dove-navbox-item" 
          style={{
            transition: "all .4s linear .2s", 
            left: navbarOpen ? (productsOpen ? "-100%" : "0") : "-100%", 
            display: productsOpen ? "none" : "flex"
          }} 
          onClick={() => setProductsOpen(!productsOpen)}>
            Tooted  &#10095;
        </div>
        <Link className="dove-navbox-item" 
          style={{
            transition: "all .4s linear .3s", 
            left: navbarOpen ? (productsOpen ? "-100%" : "0") : "-100%", 
            display: productsOpen ? "none" : "flex"
          }} 
          to="/dove/sustainability" 
          onClick={() => setNavbarOpen(!navbarOpen)}>
            Jätkusuutlikkus
        </Link>
        <Link className="dove-navbox-item" 
          style={{
            transition: "all .4s linear .4s", 
            left: navbarOpen ? (productsOpen ? "-100%" : "0") : "-100%", 
            display: productsOpen ? "none" : "flex"
          }} 
          to="/dove/purpose" 
          onClick={() => setNavbarOpen(!navbarOpen)}>
            Meie eesmärk
        </Link>
        <Link className="dove-navbox-item" 
          style={{
            transition: "all .4s linear .5s", 
            left: navbarOpen ? (productsOpen ? "-100%" : "0") : "-100%", 
            display: productsOpen ? "none" : "flex"
          }} 
          to="/contact" 
          onClick={() => setNavbarOpen(!navbarOpen)}>
            Kontakt
        </Link>
      </div>

      <div class="dove-products"  style={{
          left: productsOpen ? "0" : "-100%",
        }}>
        <div className="dove-navbox-item" 
          style={{
            left: productsOpen ? "0" : "-100%", 
            border: "1px solid #fff", 
            borderRadius: "20px", 
            padding: "7px 15px", 
            fontSize: "80%", 
            marginBottom: "20px"
          }} 
          onClick={() => {setNavbarOpen(true), setProductsOpen(false)}}>
            &#10094; Tagasi
        </div>
        <Link className="dove-navbox-item" 
          style={{
            left: productsOpen ? "0" : "-100%"
          }} 
          to="/dove/products" 
          onClick={() => {setNavbarOpen(!navbarOpen), setProductsOpen(!productsOpen)}}>
            All
        </Link>
        <Link className="dove-navbox-item" 
          style={{
            left: productsOpen ? "0" : "-100%"
          }} 
          to="/dove/products" 
          onClick={() => {setNavbarOpen(!navbarOpen), setProductsOpen(!productsOpen)}}>
            Šampoonid ja palsamid
        </Link>
        <Link className="dove-navbox-item" 
          style={{
            left: productsOpen ? "0" : "-100%"
          }} 
          to="/dove/products" 
          onClick={() => {setNavbarOpen(!navbarOpen), setProductsOpen(!productsOpen)}}>
            Dušigeelid
        </Link>
        <Link className="dove-navbox-item" 
          style={{
            left: productsOpen ? "0" : "-100%"
          }} 
          to="/dove/products" 
          onClick={() => {setNavbarOpen(!navbarOpen), setProductsOpen(!productsOpen)}}>
            Deodorandid
        </Link>
        <Link className="dove-navbox-item" 
          style={{
            left: productsOpen ? "0" : "-100%"
          }} 
          to="/dove/products" 
          onClick={() => {setNavbarOpen(!navbarOpen), setProductsOpen(!productsOpen)}}>
            Seebid
        </Link>
        <Link className="dove-navbox-item" 
          style={{
            left: productsOpen ? "0" : "-100%"
          }} 
          to="/dove/products" 
          onClick={() => {setNavbarOpen(!navbarOpen), setProductsOpen(!productsOpen)}}>
            Kreemid ja muu
        </Link>
      </div>
    </nav>
  )
}

export default HeaderBurgerDove;