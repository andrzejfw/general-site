import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import FacebookImage from '../../assets/images/facebook.png';
import WomenImage from '../../assets/images/footer-image.png';
import LogoImage from '../../assets/images/unilever-logo-white.png';

const Footercontainer = styled.div`

    height:20vh; 
    z-index:2;
    background:#005eef;
    @media (max-width:992px){
    height:100%;
    padding-bottom:20px;
  }

`;
const Img = styled.img`
    height:120px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    a{
        text-decoration:none;
      color: #fff;
    }
    @media(max-width:500px){
      height:120px;
      
      a {
        p{font-size:12px;}
        }
    }
   
`;
const ImageFacebook = styled.img`
    width:26px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top:14px;
    background: #fff;
    a{
      text-decoration:none;
      color: #fff;
      :hover {
    color: goldenrod;
    
  }
  }
   
`;
const ImageFooter = styled.img`
    height: 120%;
    bottom: 0;
    position: absolute;
    right: 0;
    z-index: -1;
    @media (max-width:992px){
      display:none;
    }
`;

const FooterWrapper = styled.nav`
  height: 20vh;
  display: flex;
  align-items:center;
  background-color: #005eef;
  position: relative;
  justify-content: space-between;
  text-transform: uppercase;
  color:#fff;
  
  
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
    margin-right: 20vw;
    @media(max-width:500px){
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      margin-right: 0;
      li a{
        font-size:16px;
      }
      p a{
        font-size:16px;
      }
    }
    li p{
      margin: 0;
      text-align:center;
      font-size:16px;
    }
    a img{
      margin:2px 0;
      text-align:center;
    }
`;
const FooterLogo = styled.span`
a{
    text-decoration:none;
    color:#000;
}
`;

const FooterImageContainer = styled.div`

    display:flex;

`;

const FooterItem = styled.li`
  line-height:1em;
  text-decoration: none;
  font-weight:bold;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw; 
  position: relative;  
  text-transform:capitalize;
  list-style:none;
  text-decoration:none;
  display:flex;
  color:#fff;

  p{
    font-size:12px;
    color: #fff;
  }
  a{
      text-decoration:none;
      color: #fff;
      :hover {
    color: goldenrod;
    
  }
  }

  :hover {
    color: goldenrod;
   
  }
  @media(max-width:500px){
    margin:8px;
    a{
      font-size: 16px;
    }
  }

  
`;

const FooterItemList = styled.li`
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
    color: goldenrod;
   
  }
  }

  @media(max-width:500px){
    margin:4px;
    font-size:16px;
    justify-content:center;
    align-items:center; 
    /* a{
      font-size: 10px;
    }
    p{
      font-size:8px;
    } */
  
   
  }  
`;


const Footer = () => (
  <Footercontainer>
    <FooterWrapper>
         <FooterItemList><Link to ="/"><Img src={LogoImage} /></Link><p>© Unilever 2020</p></FooterItemList>
        <FooterList>
        <FooterItemList><Link to="/contact">Kontakt</Link></FooterItemList>
        <FooterItemList>
          <div >
          <p><Link to="/cookie-notice">Küpsise-eeskirjad</Link>
        </p>
        <p>
          <Link to="/privacy-notice">Privaatsuspoliitika</Link></p><p><Link to="/legal-notice">Juriidiline teave</Link>
          </p>
          </div>
          </FooterItemList>          
        <FooterItemList>Sotsiaalmeedia<FooterImageContainer>
          <p>
            <Link to ="https://www.facebook.com/unilever" target="_blank">
            <ImageFacebook src={FacebookImage} alt="Facebook Icon"/></Link>
              </p>
        {/* <p>
          <Link to ="/"><Image src="https://www.unilever.pl/resources/7.16.54/images/phoenix/twitter-purple-royal.svg" />
        </Link></p>
        <p><Link to ="/"><Image src="https://www.unilever.pl/resources/7.16.54/images/phoenix/instagram-purple-royal.svg" /></Link>
        </p> */}
        </FooterImageContainer>
        </FooterItemList>
        <FooterItemList>
          <Link to="/sitemap">Saidikaart</Link>
          </FooterItemList>
          <ImageFooter src={WomenImage} alt="Women with furry hairs"/>
        </FooterList>
    </FooterWrapper>
    </Footercontainer>
);

export default Footer;

