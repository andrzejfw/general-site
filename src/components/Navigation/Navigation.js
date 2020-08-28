import React, { useState } from "react"
import styled from "styled-components"
import NavbarLinks from "./NavbarLinks"
import { Link } from 'gatsby';


const Img = styled.img`
    width:66px;
    height:72px;
`;

const Navigation = styled.nav`
  height: 10vh;
  display: flex;
  align-items:center;
  background-color: #fff;
  position: relative;
  justify-content: space-between;
  text-transform: uppercase;
  border-bottom: 2px solid #33333320;
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 2;
  align-self: center;
  max-width:1350px;
  z-index:9;

  @media (max-width: 768px) {
    position: sticky;
    height: 11vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width: 768px) {
    display: flex;
  }
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 11vh;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`

const Hamburger = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
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
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [navbarClose, setNavbarClose] = useState(false)
  return (
    
    <Navigation>
        <Link to ="/"><Img src="https://www.unilever.com/Images/UNILEVER_LOGO_160_tcm244-541804.gif" /></Link>
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}


        //  navbarClose={navbarClose}
        //  onClick={() => setNavbarClose(navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}

         {/* {navbarClose ? <Hamburger /> : <Hamburger />} */}

      </Toggle>

 
      
      {navbarOpen ? (
        <Navbox>
          <NavbarLinks />
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks open/>
        </Navbox>
      ) }


    {/* {navbarClose ? (
        <Navbox>
          <NavbarLinks />
        </Navbox>
      ) : (
        <Navbox>
          <NavbarLinks/>
        </Navbox>
      ) } */}

      
    </Navigation>
  )
}



export default Navbar