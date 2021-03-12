import React from "react";
import styled from 'styled-components';
import PropTypes from "prop-types";
import ScrollAnimation from 'react-animate-on-scroll'

const ButtonRadius = styled.button`
    display:flex;
    background:linear-gradient(60deg,#c5923c 0,#edd496 40%,#edd496 60%,#c5923c 100%);
    border:none;
    padding:5px 40px;
    font-size:1.5rem;
    color:#523022;
    text-transform:none;
    margin:20px auto;
    border-radius:6px;
    transition:.5s;
    box-shadow: 0px -3px 2px rgba(0, 0, 0, 0.39);
    outline: none;
    text-decoration:none;
    text-transform: uppercase;
    transition: all .2s linear;

    &:hover{
        background:linear-gradient(60deg,#d7ab5f 0,#f5e5ad 40%,#f5e5ad 60%,#d7ab5f 100%);
        transform: scale(1.05);
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