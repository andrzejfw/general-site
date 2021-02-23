import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from "gatsby"
import CoopLogo from '../../assets/images/coop.png'
import RimiLogo from '../../assets/images/rimi.png'
import PrismaLogo from '../../assets/images/prisma.png'
// import ButtonRadius from "../Button"

const Button = styled.a`
font-size: 1em;
  padding: 10px;
  color: #000;
  border: 2px solid #06D85F;
  border-radius: 20px/50px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease-out;

`;
const BIN1 = styled.div` 
  margin: 14px;
`;

const Overlay = styled.div` 
 position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  visibility: hidden;
  opacity: 0;
   &:target{
    visibility: visible;
  opacity: 1;
  z-index:100;
  }
`;

const Popup = styled.div` 
    margin: 70px auto;
    padding: 20px;
    background: #fff;
    border-radius: 5px;
    width: 80%;
    position: relative;
    transition: all 5s ease-in-out;
`;

const Content = styled.div`   
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 30%;
    overflow: auto;
`;

const PopupBox = styled.div`   
 display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15px;
    img{
      margin-bottom:10px;
      width: 200px;
    }
    &:hover {
      transform: scale(1.3);
    }
`;

const Close = styled.a` 
   position: absolute;
  top: 20px;
  right: 30px;
  transition: all 200ms;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
`;


const ButtonRadius = styled.a`
display:flex;
background:linear-gradient(60deg,#c5923c 0,#edd496 40%,#edd496 60%,#c5923c 100%);
border:none;
padding:5px 40px;
font-size:1.5rem;
color:#523022;
text-transform:none;
margin:20px auto;
border-radius:6px;
transition:.5s;
box-shadow: 0px -3px 2px rgba(0, 0, 0, 0.39);
outline: none;
text-decoration:none;
text-transform: uppercase;
transition: all .2s linear;

&:hover{
    background:linear-gradient(60deg,#d7ab5f 0,#f5e5ad 40%,#f5e5ad 60%,#d7ab5f 100%);
    transform: scale(1.05);
    opacity: 1;
    border:none;
    outline: none;
    text-decoration:none;
    color: #523022;
}
&:focus{
    outline: none;
}
`;


const BINLipton = () => {

//   const gatsbyRepoData = useStaticQuery(graphql`
//   query BINQuery($slug: Int!) {
//   example(slug: { eq: $slug }) {
   
  
//     slug
//   }
// }
//   `)
//   const etailerUrl = gatsbyRepoData.example.etailerUrl;
// const etailerUrlArr = etailerUrl.split(',');

    return (

      
      
      <BIN1>
        
      <ButtonRadius href="#popup1">OSTA KOHE</ButtonRadius>
      <Overlay id="popup1" >
    <Popup >
      <h2>Vali Pod:</h2>
      <Close  href="#">&times;</Close>
      <Content class="content">
        <PopupBox >
          <a href="https://www.prismamarket.ee/products/17839?tag_ids=10305" target="_blank">
          <img src={PrismaLogo} alt="retailer icon"></img>
          </a>
        </PopupBox>
        <PopupBox >
          <a href="https://www.rimi.ee/epood/ee/tooted/kulmutatud-toidukaubad/jaatis-ja-jaa/c/SH-4-1?page=1&pageSize=20&query=%3Arelevance%3AallCategories%3ASH-4-1%3Abrand%3AMagnum" target="_blank">
          <img src={RimiLogo} alt="retailer icon"></img>
          </a>
        </PopupBox>
        <PopupBox >
          <a href="https://ecoop.ee/et/kategooriad/jaatised/?brand=Magnum" target="_blank">
          <img src={CoopLogo}  alt="retailer icon"></img>
          </a>
        </PopupBox>
        
      </Content>
    </Popup>
  </Overlay>
    </BIN1>
   
  
    );
  };

export default BINLipton;


