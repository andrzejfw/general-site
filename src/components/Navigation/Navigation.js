import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';


const NavigationSection = styled.section`
    border-bottom:2px solid #7705BC;
    width:100%;
    height:100%;
`;

const NavigationWrapper = styled.nav`
    position:relative;
    max-width:1140px;
    margin:auto;
    padding:20px 0;
    // top: 20px;
    // left:30px;
    display:flex;
    align-items:center;
    justify-content:flex-start;
    font-size:40px;
    font-weight:800;
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
    color:#005EEF;
    margin-right:20px;
}
`

const NavigationListItem = styled.li`
    font-weight:600;
    font-size:15px;
    margin-left:32px;

    a{
        text-decoration:none;
        color:#005EEF;
        font-size:20px;
    }
`;



const Navigation = () => (
    <NavigationSection>
        <NavigationWrapper>
            <NavigationLogo><Link to ="/">Logo</Link></NavigationLogo>
            <NavigationList>
                <NavigationListItem><Link to="/about">About</Link></NavigationListItem>
                <NavigationListItem><Link to="/brands">Brands</Link></NavigationListItem>
                <NavigationListItem><Link to="/contact">Contact</Link></NavigationListItem>           
            </NavigationList>
        </NavigationWrapper>
    </NavigationSection>
);

export default Navigation;

