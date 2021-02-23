import React from 'react'
import { Link } from 'gatsby'
import MagnumLogo from '../../assets/images/magnum-logo-brown.png'


const HeaderMagnum = () => {
    return (
        <>
        <nav className="header-magnum-nav">
            <div className="links-section">
                <Link to="/magnum/products" activeStyle={{fontWeight: "700"}}>Tooted</Link>
                <Link to="/magnum/about" activeStyle={{fontWeight: "700"}}>Ettevõttest</Link>
                <Link to="/magnum"><img src={MagnumLogo} alt="Magnum Eesti jäätis logo"/></Link>
                <Link to="/magnum/delivery" activeStyle={{fontWeight: "700"}}>Telli</Link>
                <a href="/contact" target="_blank" activeStyle={{fontWeight: "700"}}>Kontakt</a>
            </div>
        </nav>
        </>
    )
};

export default HeaderMagnum;