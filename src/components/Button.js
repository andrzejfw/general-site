import React from 'react';
import styled from 'styled-components';


const ButtonSharp = styled.button`
  display:flex;
  background:#005EEF;
  border:none;
  padding:10px 60px;
  color:#fff;
  text-transform:uppercase;
  margin:60px auto 0 auto;
`;

const ButtonRadius = styled.button`
  display:flex;
  background:#005EEF;
  opacity: 0.8;
  border:none;
  padding:10px 55px;
  font-size:1.8em;
  color:#fff;
  text-transform:uppercase;
  margin:80px auto 0 auto;
  border-radius:14px;
  border:2px solid white;
  transition:.5s;
  font-weight:bold;
  &:hover{
    background:#004cc2;
    transform: scale(1.15);
    opacity: 1;
  }
`;

export default class extends React.Component{
  render() {
    return (
      <ButtonRadius>button</ButtonRadius>
    );
  }
}



