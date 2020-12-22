import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

const AccordionDivHellmanns = styled.div`
    color: #004976;
    margin: 5px;
    padding: 15px 15px;
    width: 100%;
    border: 1px solid #004976;
    text-transform: uppercase;
    border-radius: 4px;
    font-weight: 700;

    p, span{
        text-shadow:none;
        text-transform: none;
        font-weight: 500;
        margin-bottom: 10px !important;
    }

    @media (max-width: 992px){
    width:90vw;
    }
    
    .div-content {

      @media (max-width: 992px){
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
`;

class AccordionHellmannsSection extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  };

  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    const { onClick, props: { isOpen, label } } = this;

    return (
      <AccordionDivHellmanns style={{background: isOpen ? "#004976"  : "#fdf6e8", color: isOpen ? "#fdf6e8"  : "#004976",}}>
        <div className="div-content" onClick={onClick} style={{ cursor: "pointer", fontWeight: "bold",}}>
          {label}
          <div style={{float: "right"}}>
            {!isOpen && <span style= {{ color: "#004976"}}>&#9660;</span>}
            {isOpen && <span style = {{ color: "#fdf6e8"}}>&#9650;</span>}
          </div>
        </div>
        {isOpen && (
          <div
            style={{
              background: "transparent",
              marginTop: 10,
              padding: "0px",
            }}
          >
            {this.props.children}
          </div>
        )}
      </AccordionDivHellmanns>
    );
  }
}

export default AccordionHellmannsSection;
