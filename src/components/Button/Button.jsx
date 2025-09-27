import React from "react";

export class Button extends React.Component {
  render() {
    return (
      <button className={this.props.classOfButton} onClick={this.props.handleClick}>{this.props.children}</button>
    );
  }
}
