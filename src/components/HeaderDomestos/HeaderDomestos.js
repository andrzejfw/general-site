import React from 'react'
import { Link } from 'gatsby'
import DomestosLogo from '../../assets/images/domestos-logo2.png'


const HeaderDomestos = () => {
    return (
        <>
        <nav className="header-domestos-nav">
                <a href="/index-domestos"><img src={DomestosLogo} alt="Domestos Eesti WC-puhastusvahendid logo"/></a>
                <ul className="menu-animation">
                <li><Link activeClassName="current" to="/products-domestos">Tooted</Link></li>
                <li><Link activeClassName="current" to="/about-domestos">Ettevõttest</Link></li>
                <li><Link activeClassName="current" to="/sustainability-domestos">Jätkusuutlikkus</Link></li>
                <li><Link activeClassName="current" to="/blog-domestos">Blog</Link></li>
                <li><Link activeClassName="current" to="/contact-domestos">Kontakt</Link></li>
                </ul>
        </nav>
        </>
    )
};

export default HeaderDomestos;