import React, { Component } from "react";
import "./ProjectsWindow.scss";

export default class ProjectsWindow extends Component {
  state = {};
  render() {
    const { toggleView } = this.props;
    return (
      <div className="window-projects">
        <i className="fas fa-arrow-up" onClick={() => toggleView()} />
        <h1>Projects</h1>
      </div>
    );
  }
}
