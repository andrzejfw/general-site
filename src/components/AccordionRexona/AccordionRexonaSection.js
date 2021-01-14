import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

const AccordionDivRexona = styled.div`
    margin: 5px;
    padding: 15px 15px;
    width: 100%;
    border-bottom: 2px solid #103073;
    border-top: 2px solid #103073;
    text-transform: uppercase;
    font-weight: 700;

    p, span{
        text-shadow:none;
        text-transform: none;
        font-weight: 500;
        margin-bottom: 10px !important;
    }

    @media (max-width: 992px){
    }
    
    .div-content {

      @media (max-width: 992px){
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
`;

class AccordionRexonaSection extends Component {
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
      <AccordionDivRexona style={{background: isOpen ? "#fff"  : "#fff", color: isOpen ? "#103073"  : "#103073",}}>
        <div className="div-content" onClick={onClick} style={{ cursor: "pointer", fontWeight: "bold",}}>
          {label}
          <div style={{float: "right"}}>
            {!isOpen && <span style= {{ color: "#103073"}}>&#9660;</span>}
            {isOpen && <span style = {{ color: "#103073"}}>&#9650;</span>}
          </div>
        </div>
        {isOpen && (
          <div
            style={{
              background: "transparent",
              marginTop: 10,
              padding: "0px",
              color: "#000",
            }}
          >
            {this.props.children}
          </div>
        )}
      </AccordionDivRexona>
    );
  }
}

export default AccordionRexonaSection;
