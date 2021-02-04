import React from 'react'
import { Link } from 'gatsby'
import rexonaLogo from '../../assets/images/rexona-logo2.png'


const HeaderRexona = () => {
    return (
        <>
        <nav className="header-rexona-nav">
            <div className="links-section-rexona">
                <Link to="/rexona"><img src={rexonaLogo} alt="rexona Eesti jäätis logo"/></Link>
                <Link to="/rexona" activeClassName="active" className="link-rexona hover">Homepage</Link>
                <Link to="/rexona/products" activeClassName="active" className="link-rexona hover">Tooted</Link>
                <Link to="/rexona/about" activeClassName="active" className="link-rexona">Kaubamärgist</Link>
                <Link to="/contact" activeClassName="active" className="link-rexona">Kontakt</Link>
            </div>
        </nav>
        </>
    )
};

export default HeaderRexona;