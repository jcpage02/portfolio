import React, { Component } from "react";
import "./ProjectsWindow.scss";

export default class ProjectsWindow extends Component {
  state = {};
  render() {
    const { toggleView } = this.props;
    return (
      <div className="window-projects">
        <i className="fas fa-arrow-up" onClick={() => toggleView()} />
        <div className='projects-main'>
          <h1>PROJECTS</h1>
        </div>
      </div>
    );
  }
}
