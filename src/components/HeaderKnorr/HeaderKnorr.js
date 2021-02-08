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
                <Link to="/contact" activeClassName="active" className="link-knorr">Kontakt</Link>
            </div>
        </nav>
        </>
    )
};

export default HeaderKnorr;