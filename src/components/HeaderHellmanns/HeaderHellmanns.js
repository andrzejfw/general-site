import React from 'react'
import { Link } from 'gatsby'
import HellmannsLogo from '../../assets/images/hellmanns-logo-blue.png'


const HeaderHellmanns = () => {
    return (
        <>
        <nav className="header-hellmanns-nav">
            <div className="links-section">
                <Link to="/products-hellmanns">Tooted</Link>
                <Link to="/sustainability-hellmanns">Ettevõttest</Link>
                <Link to="/index-hellmanns"><img src={HellmannsLogo} alt="Hellmann's Eesti logo"/></Link>
                <Link to="/history-hellmanns">Ajalugu</Link>
                <Link to="/contact">Kontakt</Link>
            </div>
        </nav>
        </>
    )
};

export default HeaderHellmanns;