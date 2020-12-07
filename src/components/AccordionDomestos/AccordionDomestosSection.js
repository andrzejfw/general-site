import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

const AccordionDivDomestos = styled.div`
    color: #06154b;
    margin: 5px;
    padding: 15px 15px;
    width: 100%;
    border-top: 4px solid #06154b;
    border-bottom: 4px solid #06154b;
    text-transform: uppercase;
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
`;

class AccordionDomestosSection extends Component {
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
      <AccordionDivDomestos style={{background: isOpen ? "#fff"  : "#fff",}}>
        <div onClick={onClick} style={{ cursor: "pointer", fontWeight: "bold" }}>
          {label}
          <div style={{ float: "right", }}>
            {!isOpen && <span style= {{ color: "#06154b" }}>&#9660;</span>}
            {isOpen && <span style = {{ color: "#06154b" }}>&#9650;</span>}
          </div>
        </div>
        {isOpen && (
          <div
            style={{
              background: "transparent",
              marginTop: 10,
              padding: "0px 5px",
            }}
          >
            {this.props.children}
          </div>
        )}
      </AccordionDivDomestos>
    );
  }
}

export default AccordionDomestosSection;
