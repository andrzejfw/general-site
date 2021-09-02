import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import LiptonLogo from '../../assets/images/lipton-logo-header.png'
import LiptonBannerAndText from '../LiptonBannerAndText/LiptonBannerAndText'

const Hamburger = styled.div`
  background-color: #c8381d;
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
    background-color: #c8381d;
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

const HeaderBurgerLipton = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  return (
    <nav className="lipton-burger-menu" 
        style={{
            transition: "all .2s linear",
    }}>
      <Link onClick={() => setNavbarOpen(false)} to="/lipton"><img src={LiptonLogo} alt="Lipton Eesti logo"/></Link>
      <div 
        className="lipton-toggle"
        navbarOpen={navbarOpen}
        onClick={() => {setNavbarOpen(!navbarOpen), setProductsOpen(false)}}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </div>
      <div className="lipton-navbox" style={{
        transition: "left .3s linear",
        left: navbarOpen ? "0" : "-100%",
        }}>
          <div className="lipton-navbox-item" 
            style={{
                // display: navbarOpen ? (productsOpen ? "none" : "inline") : "none",
                left: navbarOpen ? (productsOpen ? "-100%" : "0") : "-100%",
                transition: "all .3s linear .2s",
            }}  
            onClick={() => setProductsOpen(!productsOpen)}>
              Tooted &#10095;
          </div>
          <Link className="lipton-navbox-item" 
            style={{
                // display: navbarOpen ? (productsOpen ? "none" : "inline") : "none",
                left: navbarOpen ? (productsOpen ? "-100%" : "0") : "-100%",
                transition: "all .3s linear .3s", 
            }} 
            to="/lipton/purpose" 
            onClick={() => setNavbarOpen(!navbarOpen)}>
              Meie eesmärk
          </Link>
          <Link className="lipton-navbox-item" 
            style={{
                // display: navbarOpen ? (productsOpen ? "none" : "inline") : "none",
                left: navbarOpen ? (productsOpen ? "-100%" : "0") : "-100%",
                transition: "all .3s linear .4s", 
            }} 
            to="/lipton/sustainability" 
            onClick={() => setNavbarOpen(!navbarOpen)}>
              Jätkusuutlik elu
          </Link>
          <a className="lipton-navbox-item" 
            style={{
                // display: navbarOpen ? (productsOpen ? "none" : "inline") : "none",
                left: navbarOpen ? (productsOpen ? "-100%" : "0") : "-100%",
                transition: "all .3s linear .5s", 
            }} 
            href="/contact" 
            target="_blank"
            onClick={() => setNavbarOpen(!navbarOpen)}>
              Kontakt
          </a>
        </div>

        <div class="lipton-products"  style={{
          left: productsOpen ? "0" : "-100%",
        }}>
        <div className="lipton-navbox-item" 
          style={{
            border: "1px solid #c8381d", 
            borderRadius: "20px", 
            padding: "7px 15px", 
            fontSize: "80%", 
            margin: "0 auto 20px",
            left: productsOpen ? "0" : "-100%",
            transition: "all .3s",
          }} 
          onClick={() => {setNavbarOpen(true), setProductsOpen(false)}}>
            &#10094; Tagasi
        </div>
        <Link className="lipton-navbox-item inside" 
          style={{
            left: productsOpen ? "0" : "-100%",
            transition: "all .3s .1s",  
          }} 
          to="/lipton/products" 
          onClick={() => {setNavbarOpen(!navbarOpen), setProductsOpen(!productsOpen)}}>
            Kõik tooted
        </Link>
        <Link className="lipton-navbox-item inside" 
          style={{
            left: productsOpen ? "0" : "-100%",
            transition: "all .3s .2s", 
          }} 
          to="/lipton/products?filter=Must-tee" 
          onClick={() => {setNavbarOpen(!navbarOpen), setProductsOpen(!productsOpen)}}>
            Must tee
        </Link>
        <Link className="lipton-navbox-item inside" 
          style={{
            left: productsOpen ? "0" : "-100%",
            transition: "all .3s .3s", 
          }} 
          to="/lipton/products?filter=Roheline-tee" 
          onClick={() => {setNavbarOpen(!navbarOpen), setProductsOpen(!productsOpen)}}>
            Roheline tee
        </Link>
        <Link className="lipton-navbox-item inside" 
          style={{
            left: productsOpen ? "0" : "-100%",
            transition: "all .3s .4s", 
          }} 
          to="/lipton/products?filter=Funktsionaalne-ja-taimetee" 
          onClick={() => {setNavbarOpen(!navbarOpen), setProductsOpen(!productsOpen)}}>
            Funktsionaalne- ja taimetee
        </Link>
      </div>
    </nav>
  )
}

export default HeaderBurgerLipton;