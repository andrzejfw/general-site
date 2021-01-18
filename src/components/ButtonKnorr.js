import React from "react";
import styled from 'styled-components';
import PropTypes from "prop-types";

const Button = styled.button`
    font-family: UnileverShilling;
    display: block;
    width: 280px;
    max-width: 100%;
    line-height: 3.125rem;
    margin: 0 auto;
    outline: 0;
    text-align: center;
    font-weight: 700;
    font-size: 1rem;
    border: 1px solid transparent;
    border-radius: 4px;
    transition: background-color .3s ease,border-color .3s ease;
    border: 1px solid #007a33;
    background-color: #007a33;
    color: #fff;
    transition: all .2s ease-in-out;

    &:hover{
      border-color: #ffd32e;
    text-decoration: none;
    color: #fff;
    background-color: #ffd32e;
      transform: scale(1.1);
      
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