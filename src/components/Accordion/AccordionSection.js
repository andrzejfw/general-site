import React, { Component } from "react";
import PropTypes from "prop-types";

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
      <div
        style={{
          background: isOpen ? "#004cc2" : "#004cc2",
          border: "1px solid #004cc2",
          borderRadius: "14px",
          color:"#c8381d",
          fontWeight: "bold",
          margin: "5px",
          padding: "15px 15px",
          width: "100%"
        }}
      >
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
              // opacity: "0.6",
              //border: "2px solid #008f68",
              marginTop: 10,
              padding: "0px 5px",
              fontWeight: 500
            }}
          >
            {this.props.children}
          </div>
        )}
      </div>
    );
  }
}

export default AccordionSection;
