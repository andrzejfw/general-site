import React from 'react'
import { Link } from 'gatsby'
import MagnumLogo from '../../assets/images/magnum-logo-brown.png'


const HeaderMagnum = () => {
    return (
        <>
        <nav className="header-magnum-nav">
            <div className="links-section">
                <Link to="/products-magnum" activeStyle={{fontWeight: "700"}}>Tooted</Link>
                <Link to="/about-magnum" activeStyle={{fontWeight: "700"}}>Ettevõttest</Link>
                <Link to="/index-magnum"><img src={MagnumLogo} alt="Magnum logo"/></Link>
                <Link to="/delivery-magnum" activeStyle={{fontWeight: "700"}}>Telli</Link>
                <Link to="/contact" activeStyle={{fontWeight: "700"}}>Kontakt</Link>
            </div>
        </nav>
        </>
    )
};

export default HeaderMagnum;