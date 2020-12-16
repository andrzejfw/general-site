import React from "react";
import styled from 'styled-components';
import PropTypes from "prop-types";

const Button = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 16.25rem;
    padding: 0 1.25rem;
    height: 3.125rem;
    outline: 0;
    font-weight: 700;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
    text-transform: uppercase;
    font-family: brandon-grotesque,sans-serif;
    white-space: nowrap;
    border: solid 1px #004976;
    background-color: #fdf6e8;
    color: #004976;
    transition: 0.3s all;

    &:hover{
      background-color: #004976;
      text-decoration: none;
      color: #fdf6e8;
      border: 1px solid #004976;
      
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