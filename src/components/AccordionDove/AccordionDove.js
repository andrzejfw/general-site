import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import AccordionDoveSection from "./AccordionDoveSection";
import { auto } from "@popperjs/core";

const AccordionDoveTab = styled.div`
    margin: 20px auto 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;  
    text-align: center;
    a {
        color:#004976;
        text-decoration: underline;
    }

    @media (max-width: 992px){
      text-align: left;
    }
`;

class AccordionDove extends Component {
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
      <AccordionDoveTab>
        {children.map(child => (
          <AccordionDoveSection
            isOpen={!!openSections[child.props.label]}
            label={child.props.label}
            onClick={onClick}
          >
            {child.props.children}
          </AccordionDoveSection>
        ))}
      </AccordionDoveTab>
    );
  }
}

export default AccordionDove;