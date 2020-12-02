import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import AccordionSection from "./AccordionSection";
import { auto } from "@popperjs/core";

const AccordionMagnumTab = styled.div`
  margin: 0 auto;
  margin-bottom:40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  text-align: center;
  a {
    color:#4e2c1d;
    text-decoration: underline;
  }
  a:hover {
    color: #FFF9C7;
    -webkit-text-stroke: 1px #4e2c1d;
    transition: 0.5s;
  }
`;

class Accordion extends Component {
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
      <AccordionMagnumTab>
        {children.map(child => (
          <AccordionSection
            isOpen={!!openSections[child.props.label]}
            label={child.props.label}
            onClick={onClick}
          >
            {child.props.children}
          </AccordionSection>
        ))}
      </AccordionMagnumTab>
    );
  }
}

export default Accordion;