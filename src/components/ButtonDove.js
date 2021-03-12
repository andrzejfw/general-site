import React from "react";
import styled from 'styled-components';
import PropTypes from "prop-types";

const Button = styled.button`
    font-family: UnileverShilling;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 13rem;
    padding: 0 1.25rem;
    height: 3.125rem;
    outline: 0;
    border-radius: 3px;
    text-align: center;
    cursor: pointer;
    text-transform: uppercase;
    white-space: nowrap;
    transition: 0.3s all;
    color: #054281;
    background-color: #fff;
    border: 1px solid;
    border-color: #dbc081;

    &:hover{
      border-color: transparent;
      color: #fff;
      background: linear-gradient(to right,#b78938 0,#dabf80 25%,#ffe2ac 51%,#dabf80 76%,#b78938 100%);
      text-decoration:none;
      outline:none;
      
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
      <Button>{this.props.children}​​</Button>
    );
    }
  }