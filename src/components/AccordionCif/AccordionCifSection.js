import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

const AccordionDivCif = styled.div`
    color: #165648;
    margin: 5px;
    padding: 25px;
    width: 100%;
    border-bottom: 3px solid #2fa354;
    text-transform: uppercase;
    font-weight: 700;

    p, span{
        text-shadow:none;
        text-transform: none;
        font-weight: 500;
        margin-bottom: 10px !important;
        font-size: .8rem;
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

class AccordionCifSection extends Component {
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
      <AccordionDivCif style={{background: isOpen ? "rgb(47 163 84 / .1)"  : "rgb(47 163 84 / .1)", color: isOpen ? "#165648"  : "#165648",}}>
        <div className="div-content" onClick={onClick} style={{ cursor: "pointer", fontWeight: "bold",}}>
          {label}
          <div style={{float: "right"}}>
            {!isOpen && <span style= {{ color: "#165648"}}>&#9660;</span>}
            {isOpen && <span style = {{ color: "#165648"}}>&#9650;</span>}
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
      </AccordionDivCif>
    );
  }
}

export default AccordionCifSection;
