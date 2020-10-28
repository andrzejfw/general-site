import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import UnileverLogoWhite from '../../assets/images/unilever-logo-white.png';


const Footercontainer = styled.div`

    width:100vw;
    height:20vh; 
    z-index:2;
    background:#fade4c;
    @media (max-width:992px){
    height:100%;
  }

`;
const Img = styled.img`
    width:150px;
    height:auto;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    a{
      text-decoration:none;
      color: #005EEF;
    }
    @media(max-width:500px){
      /* width:100px;
      height:auto; */
      
      a {
        p{font-size:12px;}
        }
    }
   
`;
const Image = styled.img`
    width:auto;
    height:50px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin:30px 20px;
    a{
      text-decoration:none;
      color: #fff;
      :hover {
    color: #c8381d;
    
  }
  }

  @media(max-width:500px){
      height: 30px;
      margin: 20px 10px;
  }
   
`;

const FooterWrapper = styled.nav`
  height: 20vh;
  display: flex;
  align-items:center;
  background-color: transparent;
  position: relative;
  justify-content: space-between;
  text-transform: uppercase;
  
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 2;
  align-self: center;
  width:100vw;
  max-width:1300px;
  
  @media (max-width:992px){
    height:100%;
    
  }
  @media (max-width: 500px) {
   display:flex;
   flex-direction:column;
  }   
    `;
    

const FooterList = styled.ul`
    margin:0;
    padding:0;
    display:flex;
    list-style:none;
    display:flex;
    justify-content:space-between;
    align-items:flex-start;
    width:37%;
    @media(max-width:500px){
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
    }
`;

const FooterImageContainer = styled.div`

    display:flex;

`;

const FooterSection = styled.div`
    display:flex;
    justify-content: space-between;
    width: 57%;

    @media(max-width:500px){
        flex-direction: column-reverse;
    }
`;

const FooterItem = styled.li`
  line-height:1.2em;
  text-decoration: none;
  color: #fff;
  font-weight:bold;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw; 
  position: relative;  
  text-transform:capitalize;
  list-style:none;
  text-decoration:none;
  display:flex;

  p{
    font-size:12px;
    color: #fff;
  }
  a{
      text-decoration:none;
      color: #fff;
      :hover {
    color: #c8381d;
    
  }
  }

 

  :hover {
    color: #c8381d;
   
  }
  @media(max-width:500px){
    margin:8px;
    a{
      font-size: 14px;
    }
  }

  
`;

const FooterItemList = styled.li`
  text-decoration: none;
  color: #fff !important;
  font-weight:bold;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
 
  position: relative;
  /* width:33%; */
 
  text-transform:capitalize;
  list-style:none;
  text-decoration:none;
  display:flex;
  flex-direction:column;  
  align-items:center; 

  p{
    font-size:12px;
    color: #fff;
  }
  a{
      text-decoration:none;
      color: #fff;
      :hover {
    color: #c8381d;
   
  }
  }

  @media(max-width:500px){
    margin:4px;
    font-size:14px;
    justify-content:center;
    align-items:center; 
    a{
      font-size: 10px;
    }
    p{
      font-size:8px;
    }
  
   
  }  
`;


const FooterLipton = () => (
  <Footercontainer>
    <FooterWrapper>
        <FooterSection>
        <FooterItemList>
            <FooterImageContainer>
            <p><Link to ="/">
                <Image src="https://asset-eu.unileversolutions.com/content/dam/unilever/knorr_world/global/other_foods/all/icn_facebook-697026.png" />
            </Link></p>
            <p><Link to ="/">
                <Image src="https://asset-eu.unileversolutions.com/content/dam/unilever/heart/united_kingdom/general_image/ice_cream/all/youtube-790127.png" />
            </Link></p>
            </FooterImageContainer>
        </FooterItemList>
        <FooterItemList><Link to ="/"><Img src={UnileverLogoWhite} /></Link><p>© Unilever 2020</p></FooterItemList>
        </FooterSection>
            <FooterList>            
                <FooterItem><Link to="/about">Sitemap</Link></FooterItem>
                <FooterItem><Link to="/brands">Contact</Link></FooterItem>
                <FooterItemList>Legal Links<div><p><a href="cookie-notice">cookie policy</a></p><p><a href="/privacy-notice">privacy policy</a></p><p><a href="/legal-notice">legal notice</a></p></div></FooterItemList>           
            </FooterList>
    </FooterWrapper>
    </Footercontainer>
);

export default FooterLipton;

