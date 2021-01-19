import React from "react"
import styled from "styled-components"
import { Link } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'

const ImgLogo = styled.img`
  width:90px;
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
  @media screen and (min-device-width: 500px) and (max-device-width: 692px) {
    .ml-auto.navbar-nav{
      height:60vh !important;
    }
}
`;



const Navigation = () => {
  return (
    <>
    <Navbar className="Navbartwo" collapseOnSelect expand="lg" bg="light" variant="dark">

      <NavbarSection>
        <Navbar.Brand>
          <Link to ="/"><ImgLogo src="https://cdn.freebiesupply.com/logos/large/2x/unilever-2-logo-png-transparent.png" /></Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <span className="icon-bar top-bar"></span>
          <span className="icon-bar middle-bar"></span>
          <span className="icon-bar bottom-bar"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="ml-auto">
            <Nav.Link Link href="/about">Ettevõttest</Nav.Link>
            <Nav.Link Link href="/brands">Kaubamärgid</Nav.Link>
            <Nav.Link Link href="/sustainability">Meie eesmärk</Nav.Link>
            <Nav.Link Link href="/contact">Kontakt</Nav.Link>

            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item Link href="/about">Dropdown1</NavDropdown.Item>
              <NavDropdown.Item Link href="/brands">Dropdown1</NavDropdown.Item>
              <NavDropdown.Item Link href="/contact">Dropdown1</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </NavbarSection>

    </Navbar>
  </>
  )
}


export default Navigation 