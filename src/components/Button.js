import React, { Component } from "react";
import styled from 'styled-components';
import PropTypes from "prop-types";


// const ButtonSharp = styled.button`
//   display:flex;
//   background:#005EEF;
//   border:none;
//   padding:10px 60px;
//   color:#fff;
//   text-transform:uppercase;
//   margin:60px auto 0 auto;
// `;

const ButtonRadius = styled.button`
  display:flex;
  background:#1f36c7;
  opacity: .9;
  border:none;
  padding:10px 55px;
  font-size:1.8em;
  color:#fff;
  text-transform:uppercase;
  margin:80px auto 0 auto;
  border-radius:5px;
  border:2px solid white;
  transition:.5s;
  font-weight:bold;
  &:hover{
    background:#1f36c7;
    transform: scale(1.1);
    opacity: 1;
  }
  @media(max-width:992px){
    padding:10px 25px;
    opacity: 1;
    }
`;

export default class extends React.Component {
  static propTypes = {

    children: PropTypes.instanceOf(Object).isRequired,
  };

  render() {
    return (
      <ButtonRadius>{this.props.children}​​</ButtonRadius>
    );
    }
  }



