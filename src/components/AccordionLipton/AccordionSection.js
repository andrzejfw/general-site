import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

const AccordionSectionLipton = styled.div`
  border: 1px solid #004cc2;
  border-radius: 14px;
  color: #004cc2;
  font-weight: bold;
  margin: 5px;
  padding: 15px 15px;
  width: 1240px;
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
      <AccordionSectionLipton style={{background: isOpen ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.7)",}}>
        <div onClick={onClick} style={{ cursor: "pointer" }}>
          {label}
          <div style={{ float: "right" }}>
            {!isOpen && <span style= {{ color: "white" }}>&#9660;</span>}
            {isOpen && <span style = {{ color: "white" }}>&#9650;</span>}
          </div>
        </div>
        {isOpen && (
          <div
            style={{
              background: "transparent",
              opacity: "0.6",
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
