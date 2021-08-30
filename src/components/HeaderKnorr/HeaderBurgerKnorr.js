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
  const [productsOpen, setProductsOpen] = useState(false)

  return (
    <nav className="knorr-burger-menu" 
        style={{
            transition: "all .2s linear",
    }}>
      <Link onClick={() => setNavbarOpen(false)} to="/knorr"><img src={KnorrLogo} alt="Knorr Eesti jäätis logo"/></Link>
      <div 
        className="knorr-toggle"
        navbarOpen={navbarOpen}
        onClick={() => {setNavbarOpen(!navbarOpen), setProductsOpen(false)}}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </div>
      <div className="knorr-navbox" style={{
        transition: "all .3s linear",
        left: navbarOpen ? "0" : "-100%",
        }}>
          <div className="knorr-navbox-item" 
            style={{
              transition: "all .3s linear .1s", 
              left: navbarOpen ? (productsOpen ? "-100%" : "0") : "-100%",
            }}  
            onClick={() => setProductsOpen(!productsOpen)}>
              Tooted &#10095;
          </div>
          <Link className="knorr-navbox-item" 
            style={{
              transition: "all .3s linear .2s", 
              left: navbarOpen ? (productsOpen ? "-100%" : "0") : "-100%",
            }} 
            to="/knorr/about" 
            onClick={() => setNavbarOpen(!navbarOpen)}>
              Kaubamärgist
          </Link>
          <Link className="knorr-navbox-item" 
            style={{
              transition: "all .3s linear .2s", 
              left: navbarOpen ? (productsOpen ? "-100%" : "0") : "-100%",
            }} 
            to="/knorr/sustainability" 
            onClick={() => setNavbarOpen(!navbarOpen)}>
              Jätkusuutlikkus
          </Link>
          <a className="knorr-navbox-item" 
            style={{
              transition: "all .3s linear .3s", 
              left: navbarOpen ? (productsOpen ? "-100%" : "0") : "-100%",
            }} 
            href="/contact" 
            target="_blank"
            onClick={() => setNavbarOpen(!navbarOpen)}>
              Kontakt
          </a>
        </div>

        <div class="knorr-products"  style={{
          left: productsOpen ? "0" : "-100%",
        }}>
        <div className="knorr-navbox-item" 
          style={{
            border: "1px solid #fff", 
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
        <Link className="knorr-navbox-item inside" 
          style={{
            left: productsOpen ? "0" : "-100%",
            transition: "all .3s", 
          }} 
          to="/knorr/products" 
          onClick={() => {setNavbarOpen(!navbarOpen), setProductsOpen(!productsOpen)}}>
            Kõik tooted
        </Link>
        <Link className="knorr-navbox-item inside" 
          style={{
            left: productsOpen ? "0" : "-100%",
            transition: "all .3s", 
          }} 
          to="/knorr/products?filter=Pakisupid" 
          onClick={() => {setNavbarOpen(!navbarOpen), setProductsOpen(!productsOpen)}}>
            Pakisupid
        </Link>
        <Link className="knorr-navbox-item inside" 
          style={{
            left: productsOpen ? "0" : "-100%",
            transition: "all .3s", 
          }} 
          to="/knorr/products?filter=Topsiroad" 
          onClick={() => {setNavbarOpen(!navbarOpen), setProductsOpen(!productsOpen)}}>
            Topsiroad
        </Link>
        <Link className="knorr-navbox-item inside" 
          style={{
            left: productsOpen ? "0" : "-100%",
            transition: "all .3s", 
          }} 
          to="/knorr/products?filter=Kiirnuudlid" 
          onClick={() => {setNavbarOpen(!navbarOpen), setProductsOpen(!productsOpen)}}>
            Kiirnuudlid
        </Link>
        <Link className="knorr-navbox-item inside" 
          style={{
            left: productsOpen ? "0" : "-100%",
            transition: "all .3s", 
          }} 
          to="/knorr/products?filter=Puljongid" 
          onClick={() => {setNavbarOpen(!navbarOpen), setProductsOpen(!productsOpen)}}>
            Puljongid
        </Link>
      </div>
    </nav>
  )
}

export default HeaderBurgerKnorr;