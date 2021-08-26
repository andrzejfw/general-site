import React from 'react'
import { Link } from 'gatsby'
import DomestosLogo from '../../assets/images/domestos-logo2.png'


const HeaderDomestos = () => {
    return (
        <>
        <nav className="header-domestos-nav">
                <Link activeClassName="current" to="/domestos/"><img src={DomestosLogo} alt="Domestos Eesti WC-puhastusvahendid logo"/></Link>
                <ul className="menu-animation">
                <li><Link activeClassName="current" to="/domestos/products">Tooted</Link></li>
                <li><Link activeClassName="current" to="/domestos/about">Ettevõttest</Link></li>
                {/* <li><Link activeClassName="current" to="/domestos/sustainability">Jätkusuutlikkus</Link></li> */}
                <li><a activeClassName="current" target="_blank" href="/contact">Kontakt</a></li>
                </ul>
        </nav>
        </>
    )
};

export default HeaderDomestos;