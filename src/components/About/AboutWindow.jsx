import React, { Component } from "react";

export default class AboutWindow extends Component {
  state = {};
  render() {
      const {toggleView} = this.props
    return (
      <div className="window-about">
        <button className="window-back" onClick={toggleView()}>
          BACK
        </button>
        <p>stuff</p>
      </div>
    );
  }
}
