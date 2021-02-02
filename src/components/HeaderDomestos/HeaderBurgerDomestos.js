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

function showProducts() {
  document.querySelector("#productCat").classList.toggle("show");
}

function hideOnClick() {
  document.querySelector("#productCat").classList.remove("show");
}

  return (
    <nav role="navigation">
    <div id="menuToggle">
    <input type="checkbox" className="toggler"/>
    <div class="hamburger"><div></div></div>
    <a href="/domestos"><img src={DomestosLogo} alt="Domestos Eesti WC-puhastusvahendid logo"/></a>
    <ul id="menu">
      <li><div id="uncheckAll" onClick={() => {showProducts();}} activeClassName="current">Tooted &nbsp; &#10095;</div></li>

      <div id="productCat">
      <li><Link id="uncheckAll" onClick={() =>{uncheckAll('menuToggle');hideOnClick()}} activeClassName="current" to="/domestos/products">All</Link></li>
      <li><Link id="uncheckAll" onClick={() =>{uncheckAll('menuToggle');hideOnClick()}}  activeClassName="current" to="/domestos/products">Category 1</Link></li>
      <li><Link id="uncheckAll" onClick={() =>{uncheckAll('menuToggle');hideOnClick()}}  activeClassName="current" to="/domestos/products">Category 2</Link></li>
      </div>

      <li><Link id="uncheckAll" onClick={() =>{uncheckAll('menuToggle');hideOnClick()}}  activeClassName="current" to="/domestos/about">Ettevõttest</Link></li>
      <li><Link id="uncheckAll" onClick={() =>{uncheckAll('menuToggle');hideOnClick()}}  activeClassName="current" to="/domestos/sustainability">Jätkusuutlikkus</Link></li>
      <li><Link id="uncheckAll" onClick={() =>{uncheckAll('menuToggle');hideOnClick()}}  activeClassName="current" to="/contact">Kontakt</Link></li>
    </ul>
  </div>
</nav>
  )
}

export default HeaderBurgerDomestos;