import React, { Component } from "react";
import "./AboutWindow.scss";

export default class AboutWindow extends Component {
  state = {};
  render() {
    const { toggleView } = this.props;
    return (
      <div className="window-about">
        <i className="fas fa-arrow-up" onClick={() => toggleView()} />
        <h1>About</h1>
      </div>
    );
  }
}
