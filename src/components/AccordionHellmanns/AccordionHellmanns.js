import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import AccordionHellmannsSection from "./AccordionHellmannsSection";
import { auto } from "@popperjs/core";

const AccordionHellmannsTab = styled.div`
    margin: 0 auto;
    margin-bottom:40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;  
    text-align: center;
    transition: 0.5s all;

    a {
        color:#004976;
        text-decoration: underline;
    }
    a:hover {
        color: #004976;
        -webkit-text-stroke: 1px #004976;
        transition: 0.5s;
    }
`;

class AccordionHellmanns extends Component {
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
      <AccordionHellmannsTab>
        {children.map(child => (
          <AccordionHellmannsSection
            isOpen={!!openSections[child.props.label]}
            label={child.props.label}
            onClick={onClick}
          >
            {child.props.children}
          </AccordionHellmannsSection>
        ))}
      </AccordionHellmannsTab>
    );
  }
}

export default AccordionHellmanns;