import React from 'react'
import { Link } from 'gatsby'
import DomestosLogo from '../../assets/images/domestos-logo2.png'


const HeaderDomestos = () => {
    return (
        <>
        <nav className="header-domestos-nav">
                <a href="/index-domestos"><img src={DomestosLogo} alt="Domestos Logo"/></a>
                <ul className="menu-animation">
                <li><Link activeClassName="current" to="/index-domestos">Home</Link></li>
                <li><Link activeClassName="current" to="/products-domestos">Tooted</Link></li>
                <li><Link activeClassName="current" to="/about-domestos">Ettevõttest</Link></li>
                <li><Link activeClassName="current" to="/sustainability-domestos">Sustainability</Link></li>
                <li><Link activeClassName="current" to="/blog-domestos">Blog</Link></li>
                </ul>
        </nav>
        </>
    )
};

export default HeaderDomestos;