import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import FacebookImage from '../../assets/images/facebook.png';
import WomenImage from '../../assets/images/footer-image.png';

const Footercontainer = styled.div`

    width:100vw;
    height:20vh; 
    z-index:2;
    background:#fff;
    @media (max-width:992px){
    height:100%;
    margin-bottom:20px;
  }

`;
const Img = styled.img`
    width:66px;
    height:72px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    a{
        text-decoration:none;
      color: #005EEF;
    }
    @media(max-width:500px){
      width:53px;
      height:54px;
      
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
    a{
      text-decoration:none;
      color: #005EEF;
      :hover {
    color: goldenrod;
    
  }
  }
   
`;
const ImageFooter = styled.img`
    height: 100%;
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
  background-color: #fff;
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
    margin-right: 20vw;
    @media(max-width:500px){
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
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
  color: #005EEF;
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
    color: #005EEF;
  }
  a{
      text-decoration:none;
      color: #005EEF;
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
  color: #005EEF;
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
    color: #005EEF;
  }
  a{
      text-decoration:none;
      color: #005EEF;
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
         <FooterItemList><Link to ="/"><Img src="https://www.unilever.com/Images/UNILEVER_LOGO_160_tcm244-541804.gif" /></Link><p>© Unilever 2020</p></FooterItemList>
        <FooterList>
        <FooterItemList><Link to="/contact">Kontakt</Link></FooterItemList>
        <FooterItemList>
          <div >
          <p><Link to="/cookie-notice">Küpsiseeskirjad</Link>
        </p>
        <p>
          <Link to="/privacy-notice">Privaatsuspoliitika</Link></p><p><Link to="/legal-notice">Juriidiline teade</Link>
          </p>
          </div>
          </FooterItemList>          
        <FooterItemList>Sotsiaalmeedia<FooterImageContainer>
          <p>
            <Link to ="facebook.com">
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

