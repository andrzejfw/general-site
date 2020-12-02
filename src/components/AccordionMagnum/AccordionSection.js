import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

const AccordionSectionMagnum = styled.div`
  /* border: 2px solid #D99D4E*/
  border-radius: 6px;
  color: #4e2c1d;
  margin: 5px;
  padding: 15px 15px;
  width: 100%;
  /* text-shadow: 0px -3px 2px rgba(0, 0, 0, 0.39); */
  p, span{text-shadow:none;};
  @media (max-width: 992px){
  width:90vw;
  }
`;

class AccordionSection extends Component {
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
      <AccordionSectionMagnum style={{background: isOpen ? "linear-gradient(60deg,#d6a95d 0,#fff9c7 40%,#fff9c7 60%,#d6a95d 100%)"  : "linear-gradient(60deg,#431f13 0,#d4a65b 18%,#d4a65b 88%,#431f13 100%)",}}>
        <div onClick={onClick} style={{ cursor: "pointer", fontWeight: "bold" }}>
          {label}
          <div style={{ float: "right", }}>
            {!isOpen && <span style= {{ color: "#fff9c7" }}>&#9660;</span>}
            {isOpen && <span style = {{ color: "#4e2c1d" }}>&#9650;</span>}
          </div>
        </div>
        {isOpen && (
          <div
            style={{
              background: "transparent",
         //     opacity: "0.6",
              //border: "2px solid #008f68",
              marginTop: 10,
              padding: "0px 5px",
            }}
          >
            {this.props.children}
          </div>
        )}
      </AccordionSectionMagnum>
    );
  }
}

export default AccordionSection;
