import React from 'react';
import styled from 'styled-components';


const RichContainer = styled.div`
  display:flex;  
  justify-content:center;
  align-items:center;
  padding-top:30px;
  padding-bottom:30px;
  max-width:1300px;
  margin:0 auto;  
  width:96%;
  @media(max-width:760px){
    flex-direction:column
  }
  `;

const RichImage = styled.div`
  display:flex;
  img{
    max-width: 100%;
  }
  
  
  `;
  const RichText = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin: 0px 20px;
  max-width: 630px;
  p{
    text-align:center;
  }
  
  
  `;

export default class extends React.Component{
  render() {
    return (
      <RichContainer>
        <RichImage>
          <img src="https://www.unilever.pl/Images/Unilever-office-sign_tcm1346-424788_w700.jpg"></img>
        </RichImage>
        <RichText>
          <h3>LOREM IPSUM</h3>
          <p>loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum</p>
        </RichText>
      </RichContainer>
    );
  }
}



