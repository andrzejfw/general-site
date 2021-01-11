import React from 'react'
import { Link } from 'gatsby'
import rexonaLogo from '../../assets/images/rexona-logo2.png'


const HeaderRexona = () => {
    return (
        <>
        <nav className="header-rexona-nav">
            <div className="links-section-rexona">
                <Link to="/index-rexona"><img src={rexonaLogo} alt="rexona Eesti jäätis logo"/></Link>
                <Link to="/index-rexona" activeClassName="active" className="link-rexona hover">Homepage</Link>
                <Link to="/products-rexona" activeClassName="active" className="link-rexona hover">Tooted</Link>
                <Link to="/contact" activeClassName="active" className="link-rexona">Kontakt</Link>
            </div>
        </nav>
        </>
    )
};

export default HeaderRexona;