import React, { Component } from "react";
import "./SkillsWindow.scss";

export default class SkillsWindow extends Component {
  state = {};
  render() {
    const { toggleView } = this.props;
    return (
      <div className="window-skills">
        <i className="fas fa-arrow-up" onClick={() => toggleView()} />
        <h1>Skills</h1>
      </div>
    );
  }
}
