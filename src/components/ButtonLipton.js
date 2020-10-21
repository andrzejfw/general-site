import React, { Component } from "react";
import styled from 'styled-components';
import PropTypes from "prop-types";

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
  background:#BA2318;
  border:none;
  padding:5px 40px;
  font-size:1.8em;
  color:#fff;
  text-transform:none;
  margin:80px auto 20px auto;
  border-radius:10px;
  transition:.5s;
  box-shadow: 0px -3px 2px rgba(0, 0, 0, 0.39);
  outline: none;
  text-decoration:none;
  &:hover{
    background:#BA2318;
    transform: scale(1.15);
    opacity: 1;
    border:none;
    outline: none;
    text-decoration:none;
  }
  &:focus{
    outline: none;
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