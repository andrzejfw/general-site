import React from 'react'
import { Link } from 'gatsby'
import LiptonLogo from '../../assets/images/lipton-logo-header.png'


const HeaderLipton = () => {
    return (
        <>
        <nav className="header-lipton-nav">
            <div className="links-section-lipton">
                <Link to="/lipton"><img src={LiptonLogo} alt="Lipton Eesti logo"/></Link>
                <Link to="/lipton/products" activeClassName="active" className="link-lipton">Tooted</Link>
                <Link to="/lipton/purpose" activeClassName="active" className="link-lipton">Meie eesmärk</Link>
                <Link to="/lipton/sustainability" activeClassName="active" className="link-lipton">Jätkusuutlik elu</Link>
                <a href="/contact" target="_blank" activeClassName="active" className="link-lipton">Kontakt</a>
            </div>
        </nav>
        </>
    )
};

export default HeaderLipton;