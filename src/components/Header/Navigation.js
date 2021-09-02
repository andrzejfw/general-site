import React from 'react'
import { Link } from 'gatsby'
import UnileverLogo from '../../assets/images/unilever-logo-blue.png'


const Navigation = () => {
    return (
        <>
        <nav className="header-unilever-nav">
            <div className="links-section-unilever">
                <a href="/"><img src={UnileverLogo} alt="Unilever Eesti logo"/></a>
                <Link to="/about" activeClassName="active" className="link-unilever">Ettevõttest</Link>
                <Link to="/sustainability" activeClassName="active" className="link-unilever">Meie eesmärk</Link>
                <Link to="/contact" activeClassName="active" className="link-unilever">Kontakt</Link>
            </div>
        </nav>
        </>
    )
};

export default Navigation;