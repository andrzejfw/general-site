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
    transition: all .2s ease;
    color: #165648;
    background-color: #fff;
    border: 1px solid;
    border-color: transparent;
    font-weight: 700;
    border-bottom: 3px solid #2fa354;
    border-left: 3px solid #2fa354;
    border-radius: 50%;

    &:hover{
        /* border-color: #165648;
        color: #fff;
        background-color: #165648; */
        text-decoration:none;
        outline:none;
        /* transform: scale(1.05); */
        border-bottom: 1px solid transparent;
        border-left: 1px solid transparent;
        border-top: 3px solid #2fa354;
        border-right: 3px solid #2fa354;
      
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