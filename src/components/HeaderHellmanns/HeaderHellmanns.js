import React from 'react'
import { Link } from 'gatsby'
import HellmannsLogo from '../../assets/images/hellmanns-logo-blue.png'


const HeaderHellmanns = () => {
    return (
        <>
        <nav className="header-hellmanns-nav">
            <div className="links-section">
                <Link to="/hellmanns/products">Tooted</Link>
                <Link to="/hellmanns/sustainability">Ettevõttest</Link>
                <Link to="/hellmanns"><img src={HellmannsLogo} alt="Hellmann's Eesti logo"/></Link>
                <Link to="/hellmanns/history">Ajalugu</Link>
                <a href="/contact" target="_blank">Kontakt</a>
            </div>
        </nav>
        </>
    )
};

export default HeaderHellmanns;