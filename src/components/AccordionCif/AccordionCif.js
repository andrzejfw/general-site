import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import AccordionCifSection from "./AccordionCifSection";
import { auto } from "@popperjs/core";

const AccordionCifTab = styled.div`
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;  
    text-align: center;
    ul {
        text-align:left;
        padding-left:60px;
        padding-right:60px;
     @media (max-width: 992px){
      padding:0 20px;
      }
    }
    a {
        color:#165648;
        text-decoration: underline;
    }
    @media (max-width: 992px){
      text-align: left;
      p {
      padding:0;
    }
    }
`;

class AccordionCif extends Component {
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
      <AccordionCifTab>
        {children.map(child => (
          <AccordionCifSection
            isOpen={!!openSections[child.props.label]}
            label={child.props.label}
            onClick={onClick}
          >
            {child.props.children}
          </AccordionCifSection>
        ))}
      </AccordionCifTab>
    );
  }
}

export default AccordionCif;