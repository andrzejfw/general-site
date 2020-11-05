import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

const AccordionSectionLipton = styled.div`
  /* border: 2px solid #D99D4E*/
  border-radius: 14px;
  color: #c8381d;
  font-weight: bold;
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
      <AccordionSectionLipton style={{background: isOpen ? "#FADE4C" : "#FADE4C",}}>
        <div onClick={onClick} style={{ cursor: "pointer" }}>
          {label}
          <div style={{ float: "right" }}>
            {!isOpen && <span style= {{ color: "#c8381d" }}>&#9660;</span>}
            {isOpen && <span style = {{ color: "#c8381d" }}>&#9650;</span>}
          </div>
        </div>
        {isOpen && (
          <div
            style={{
              background: "transparent",
         //     opacity: "0.6",
              //border: "2px solid #008f68",
              marginTop: 10,
              padding: "0px 5px"
            }}
          >
            {this.props.children}
          </div>
        )}
      </AccordionSectionLipton>
    );
  }
}

export default AccordionSection;
