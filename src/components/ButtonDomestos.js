import React from "react";
import styled from 'styled-components';
import PropTypes from "prop-types";
import ScrollAnimation from 'react-animate-on-scroll'

const Button = styled.button`
    display:flex;
    background: linear-gradient(180deg,#123c7b,#06154b);
    border:none;
    padding:5px 40px;
    font-size:1.5rem;
    color:#fff;
    text-transform:none;
    margin:20px auto;
    /* border-radius:10px; */
    transition:.5s;
    box-shadow: 0px -3px 2px rgba(0, 0, 0, 0.39);
    outline: none;
    text-decoration:none;
    text-transform: uppercase;
    transition: all .2s linear;

    &:hover{
        background:linear-gradient(180deg,#123c7b 30%,#06154b);
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
      <ScrollAnimation animateIn="animate__headShake"><Button>{this.props.children}​​</Button></ScrollAnimation>
    );
    }
  }