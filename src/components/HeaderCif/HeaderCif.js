import React from 'react'
import { Link } from 'gatsby'
import CifLogo from '../../assets/images/cif-logo.png'


const HeaderCif = () => {
    return (
        <>
        <nav className="header-cif-nav">
            <div className="links-section-cif">
                <Link to="/index-cif"><img src={CifLogo} alt="Cif Eesti jäätis logo"/></Link>
                <Link to="/products-cif" activeClassName="active" className="link-cif">Tooted</Link>
                <Link to="/" activeClassName="active" className="link-cif">Ettevõttest</Link>
                <Link to="/" activeClassName="active" className="link-cif">Meie eesmärk</Link>
                <Link to="/contact" activeClassName="active" className="link-cif">Kontakt</Link>
            </div>
        </nav>
        </>
    )
};

export default HeaderCif;