import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

const AccordionDivDove = styled.div`
    color: #666;
    margin: 5px;
    padding: 15px 15px;
    width: 100%;
    border-bottom: 1px solid #666;
    border-top: 1px solid #666;
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
    
    .div-content {

      @media (max-width: 992px){
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
`;

class AccordionDoveSection extends Component {
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
      <AccordionDivDove style={{background: isOpen ? "#fff"  : "#fff", color: isOpen ? "#666"  : "#666",}}>
        <div className="div-content" onClick={onClick} style={{ cursor: "pointer", fontWeight: "bold",}}>
          {label}
          <div style={{float: "right"}}>
            {!isOpen && <span style= {{ color: "#666"}}>&#9660;</span>}
            {isOpen && <span style = {{ color: "#666"}}>&#9650;</span>}
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
      </AccordionDivDove>
    );
  }
}

export default AccordionDoveSection;
