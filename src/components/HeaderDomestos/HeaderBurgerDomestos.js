import React, { useState } from 'react'
import styled from 'styled-components'
import { a } from 'gatsby'
import DomestosLogo from '../../assets/images/domestos-logo2.png'
import { Link } from 'gatsby'

const HeaderBurgerDomestos = () => {
function uncheckAll(divid) {
    var checks = document.querySelectorAll('#' + divid + ' input[type="checkbox"]');
    for(var i =0; i< checks.length;i++){
        var check = checks[i];
        if(!check.disabled){
            check.checked = false;
        }
    }
}
  return (
    <nav role="navigation">
    <div id="menuToggle">
    <input type="checkbox" className="toggler"/>
    <div class="hamburger"><div></div></div>
    <a href="/index-domestos"><img src={DomestosLogo} alt="Domestos Eesti WC-puhastusvahendid logo"/></a>
    <ul id="menu">
                <li><Link id="uncheckAll" onclick={uncheckAll('menuToggle')} activeClassName="current" to="/products-domestos">Tooted</Link></li>
                <li><Link id="uncheckAll" onclick={uncheckAll('menuToggle')} activeClassName="current" to="/about-domestos">Ettevõttest</Link></li>
                <li><Link id="uncheckAll" onclick={uncheckAll('menuToggle')} activeClassName="current" to="/sustainability-domestos">Jätkusuutlikkus</Link></li>
                <li><Link id="uncheckAll" onclick={uncheckAll('menuToggle')} activeClassName="current" to="/blog-domestos">Blog</Link></li>
                <li><Link id="uncheckAll" onclick={uncheckAll('menuToggle')} activeClassName="current" to="/contact-domestos">Kontakt</Link></li>
    </ul>
  </div>
</nav>
  )
}

export default HeaderBurgerDomestos;