import React from 'react'
import { Link } from 'gatsby'
import KnorrLogo from '../../assets/images/logo-knorr.png'


const HeaderKnorr = () => {
    return (
        <>
        <nav className="header-knorr-nav">
            <div className="links-section-knorr">
                <Link to="/knorr"><img src={KnorrLogo} alt="Knorr Eesti jäätis logo"/></Link>
                <Link to="/knorr/products" activeClassName="active" className="link-knorr">Tooted</Link>
                <Link to="/knorr/about" activeClassName="active" className="link-knorr">Kaubamärgist</Link>
                <Link to="/knorr/sustainability" activeClassName="active" className="link-knorr">Jätkusuutlikkus</Link>
                <a href="/contact" target="_blank" activeClassName="active" className="link-knorr">Kontakt</a>
            </div>
        </nav>
        </>
    )
};

export default HeaderKnorr;