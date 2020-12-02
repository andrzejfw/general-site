import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from "gatsby"
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
  background:#c8381d;
  opacity: 1;
  border:none;
  padding:10px 35px;
  font-size:1.1em;
  color:#fff;
  text-transform:uppercase;  
  border-radius:14px;
  border:2px solid white;
  transition:.5s;
  font-weight:bold;
  max-width:190px;
  justify-content:center;
  align-items:center; 
  text-decoration:none;
  &:hover{
    background:#c8381d;
    transform: scale(1.15);
    opacity: 1;
    color:#fff;
    text-decoration:none;
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
          <img src="https://assets.allegrostatic.com/metrum/brand/allegro-347440b030.svg" alt="retailer icon"></img>
          {/* <ButtonRadius href={etailerUrlArr[0]} target="_blank">KUP TERAZ</ButtonRadius> */}
        </PopupBox>
        
      </Content>
    </Popup>
  </Overlay>
    </BIN1>
   
  
    );
  };

export default BINLipton;


