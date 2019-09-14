import React from "react";
import Button from "./Button";

export default class RegisterButton extends React.Component {
  handleClick = e => {
    if (this.props.url) {
      window.open(this.props.url, '_blank', 'noopener,norefer');
    }
  };

  render() {
    const {
      label,
      url,
      name,
    } = this.props;
    
    const id = url ? null : `btn-${name}`;

    return (
      <div>
        <Button
          label={label}
          id={id}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}
