import React from 'react'
import { Link } from 'gatsby'
import DoveLogo from '../../assets/images/dove-logo-main.png'


const HeaderDove = () => {
    return (
        <>
        <nav className="header-dove-nav">
            <div className="links-section-dove">
                <Link to="/products-magnum" activeStyle={{fontWeight: "700"}}>Tooted</Link>
                <Link to="/about-magnum" activeStyle={{fontWeight: "700"}}>Ettevõttest</Link>
                <Link to="/index-dove"><img src={DoveLogo} alt="Dove Eesti jäätis logo"/></Link>
                <Link to="/delivery-magnum" activeStyle={{fontWeight: "700"}}>Telli</Link>
                <Link to="/contact" activeStyle={{fontWeight: "700"}}>Kontakt</Link>
            </div>
        </nav>
        </>
    )
};

export default HeaderDove;