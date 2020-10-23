import React, {Component} from "react"
import styled from "styled-components"
import { Link } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import { render } from "react-dom";

const ImgLogo = styled.img`
  width:90px;
  position: absolute;
  top: -5px;
  left: 10%;
  @media(max-width:992px) {
    position: relative;
  }
`;


const NavbarSection = styled.section`
  width:100% !important;
  max-width:1200px;
  margin:auto;
  display:flex;
  @media(max-width:992px){
    justify-content: space-between;
    align-items:center;
    flex-wrap:wrap;
    .ml-auto.navbar-nav{
      height:90vh !important;
      align-items:center;
      justify-content:center;
    }
  }
`;




const NavigationLipton = () => {
  return (
    <>    
    <Navbar class="Navbartwo" collapseOnSelect expand="lg" bg="yellow" variant="dark">

      <NavbarSection>
        <Navbar.Brand>
          <Link to ="/"><ImgLogo src="https://asset-eu.unileversolutions.com/content/dam/unilever/lipton_international/global/logo/lipton_logo_2_tiff_90x90-1492630-png.png" /></Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <span class="icon-bar top-bar"></span>
          <span class="icon-bar middle-bar"></span>
          <span class="icon-bar bottom-bar"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="ml-lipton">
          <NavDropdown title="Products" id="collasible-nav-dropdown">
              <NavDropdown.Item Link href="/about">Dropdown1</NavDropdown.Item>
              <NavDropdown.Item Link href="/brands">Dropdown1</NavDropdown.Item>
              <NavDropdown.Item Link href="/contact">Dropdown1</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link Link href="/index-lipton">Recipes</Nav.Link>
            <Nav.Link Link href="/brands">Campaign</Nav.Link>
            <Nav.Link Link href="/contact">Our Mission</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </NavbarSection>

    </Navbar>
  </>
  )
}


export default NavigationLipton 