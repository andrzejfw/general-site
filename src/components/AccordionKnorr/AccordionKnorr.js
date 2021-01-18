import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import AccordionKnorrSection from "./AccordionKnorrSection";
import { auto } from "@popperjs/core";

const AccordionKnorrTab = styled.div`
    margin: 40px auto 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;  
    text-align: center;
    a {
        color:#007a33;
        text-decoration: underline;
    }

    @media (max-width: 1080px){
      text-align: left;
      padding:10px 20px 10px 20px;
    }
`;

class AccordionKnorr extends Component {
  static propTypes = {
    allowMultipleOpen: PropTypes.bool,
    children: PropTypes.instanceOf(Object).isRequired,
  };

  static defaultProps = {
    allowMultipleOpen: false,
  };

  constructor(props) {
    super(props);

    const openSections = {};
    
    this.props.children.forEach(child => {
      if (child.props.isOpen) {
        openSections[child.props.label] = true;
      }
    });

    this.state = { openSections };
  }

  onClick = label => {
    const { props: { allowMultipleOpen }, state: { openSections } } = this;

    const isOpen = !!openSections[label];

    if (allowMultipleOpen) {
      this.setState({
        openSections: {
          ...openSections,
          [label]: !isOpen
        }
      });
    } else {
      this.setState({
        openSections: {
          [label]: !isOpen
        }
      });
    }
  };

  render() {
    const { 
      onClick,
      props: { children },
      state: { openSections },
    } = this;

    return (
      <AccordionKnorrTab>
        {children.map(child => (
          <AccordionKnorrSection
            isOpen={!!openSections[child.props.label]}
            label={child.props.label}
            onClick={onClick}
          >
            {child.props.children}
          </AccordionKnorrSection>
        ))}
      </AccordionKnorrTab>
    );
  }
}

export default AccordionKnorr;