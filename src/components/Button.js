import React from "react";

export default class Button extends React.Component {
  render() {
    const {
      label,
      id,
      onClick
    } = this.props;

    return (
      <button 
        type="button"
        id={id} 
        onClick={onClick}
      >
        {label}
      </button>
    );
  }
}
