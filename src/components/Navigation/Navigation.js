import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavigationWrapper = styled.nav`
    position:absolute;
    top: 20px;
    left:30px;
    display:flex;
    align-items:center;
    justify-content:flex-start;
    font-size:40px;
    font-weight:800;
    margin-right:10px;
    `;
    

const NavigationList = styled.ul`
    margin:0;
    padding:0;
    display:flex;
    list-style:none;
`;
const NavigationLogo = styled.span`
a{
    text-decoration:none;
    color:#000;
}
`

const NavigationListItem = styled.li`
    font-weight:600;
    font-size:15px;
    margin-left:32px;

    a{
        text-decoration:none;
        color:#000;
    }
`;



const Navigation = () => (
    <NavigationWrapper>
        <NavigationLogo><Link to ="/">Logo</Link></NavigationLogo>
        <NavigationList>
            <NavigationListItem><Link to="/about">About</Link></NavigationListItem>
            <NavigationListItem><Link to="/brands">Brands</Link></NavigationListItem>
            <NavigationListItem><Link to="/contact">Contact</Link></NavigationListItem>           
        </NavigationList>
    </NavigationWrapper>
);

export default Navigation;

