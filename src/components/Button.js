import React from 'react';
import styled from 'styled-components';


const ButtonSharp = styled.button`
  display:flex;
  background:#005EEF;
  border:none;
  padding:15px 45px;
  color:#fff;
  text-transform:uppercase;
  margin:60px auto 0 auto;
`;

const ButtonRadius = styled.button`
  display:flex;
  background:#005EEF;
  border:none;
  padding:18px 55px;
  color:#fff;
  text-transform:uppercase;
  margin:60px auto 0 auto;
  border-radius:30px;
  transition:.5s;
  font-weight:bold;
  &:hover{
    background:#004cc2;
  }
`;

export default class extends React.Component{
  render() {
    return (
      <ButtonRadius>button</ButtonRadius>
    );
  }
}



