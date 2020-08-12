import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const FooterWrapper = styled.nav`
    position:absolute;
    bottom: 20px;
    left:30px;
    display:flex;
    align-items:center;
    justify-content:flex-start;
    font-size:40px;
    font-weight:800;
    margin-right:10px;
    `;
    

const FooterList = styled.ul`
    margin:0;
    padding:0;
    display:flex;
    list-style:none;
`;
const FooterLogo = styled.span`
a{
    text-decoration:none;
    color:#000;
}
`

const FooterListItem = styled.li`
    font-weight:600;
    font-size:15px;
    margin-left:32px;

    a{
        text-decoration:none;
        color:#000;
    }
`;



const Footer = () => (
    <FooterWrapper>
        <FooterLogo><Link to ="/">Footer</Link></FooterLogo>
        <FooterList>
            <FooterListItem><Link to="/about">About</Link></FooterListItem>
            <FooterListItem><Link to="/brands">Brands</Link></FooterListItem>
            <FooterListItem><Link to="/contact">Contact</Link></FooterListItem>           
        </FooterList>
    </FooterWrapper>
);

export default Footer;

