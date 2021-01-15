import React from "react";
import styled from 'styled-components';
import PropTypes from "prop-types";

const Button = styled.button`
    font-family: UnileverShilling;
    font-size: 1.125rem;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 13rem;
    padding: 12px 20px;
    height: 3.2rem;
    outline: 0;
    border-radius: 3px;
    text-align: center;
    cursor: pointer;
    text-transform: uppercase;
    white-space: nowrap;
    transition: 0.3s all;
    color: #fff;
    background-color: #103073;
    border: 1px solid;
    border-color: #054281;

    &:hover{
      color: #fff;
      background-color: #0D233C;
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