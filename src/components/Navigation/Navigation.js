import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavigationWrapper = styled.nav`
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
        <span>Logo</span>
        <NavigationList>
            <NavigationListItem><Link to="/about">About</Link></NavigationListItem>
            <NavigationListItem><Link to="/products">Products</Link></NavigationListItem>
            <NavigationListItem><Link to="/contact">Contact</Link></NavigationListItem>
            <NavigationListItem><Link to="/map">Map</Link></NavigationListItem>
        </NavigationList>
    </NavigationWrapper>
);

export default Navigation;

