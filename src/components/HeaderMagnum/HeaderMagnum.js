import React from 'react'
import { Link } from 'gatsby'
import MagnumLogo from '../../assets/images/magnum-logo-brown.png'


const HeaderMagnum = () => {
    return (
        <>
        <nav className="header-magnum-nav">
            <div className="links-section">
                <Link to="/index-magnum" activeStyle={{fontWeight: "700"}}>Products</Link>
                <Link to="/" activeStyle={{fontWeight: "700"}}>About</Link>
                <Link to="/index-magnum"><img src={MagnumLogo} alt="Magnum logo"/></Link>
                <Link to="/" activeStyle={{fontWeight: "700"}}>Delivery Now</Link>
                <Link to="/" activeStyle={{fontWeight: "700"}}>Contact</Link>
            </div>
        </nav>
        </>
    )
};

export default HeaderMagnum;