import React, { Component } from "react";
import "./ContactWindow.scss";

export default class ContactWindow extends Component {
  state = {};
  render() {
    const { toggleView } = this.props;
    return (
      <div className="window-contact">
        <i className="fas fa-arrow-up" onClick={() => toggleView()} />
        <h1>Contact</h1>
      </div>
    );
  }
}
