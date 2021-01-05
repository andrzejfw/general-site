import React from 'react'
import { Link } from 'gatsby'
import CifLogo from '../../assets/images/cif-logo.png'


const HeaderCif = () => {
    return (
        <>
        <nav className="header-cif-nav">
            <div className="links-section-cif">
                <Link to="/index-cif"><img src={CifLogo} alt="Cif Eesti jäätis logo"/></Link>
                <Link to="/" activeStyle={{fontWeight: "700"}}>Tooted</Link>
                <Link to="/" activeStyle={{fontWeight: "700"}}>Ettevõttest</Link>
                <Link to="/" activeStyle={{fontWeight: "700"}}>Meie eesmärk</Link>
                <Link to="/contact" activeStyle={{fontWeight: "700"}}>Kontakt</Link>
            </div>
        </nav>
        </>
    )
};

export default HeaderCif;