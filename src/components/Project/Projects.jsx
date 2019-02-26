import React, { Component } from "react";
import "./Projects.scss";

export default class Projects extends Component {
  state = {};
  render() {
    const { toggleProjectsSlide } = this.props.appState;
    const projectsSlide =
      toggleProjectsSlide === ""
        ? "projects-none"
        : toggleProjectsSlide
        ? "projects-slide"
        : "projects";
    const projectsMore = toggleProjectsSlide
      ? "projects-more"
      : "projects-more-none";

    return (
      <div
        className={projectsSlide}
        onClick={() => this.props.toggleState("toggleProjectsSlide")}
      >
        <h5>PROJECTS</h5>
        <div className={projectsMore}>
          <h3>Hi, my name is James Page</h3>
          <p>
            I am currently transitioning into a career in full stack software
            engineering. I have always been fascinated with designing and create
            something new. I also enjoy finding the best way to solve problems.
            I am organized and pay close attention to details.
          </p>
          <button onClick={() => this.props.toggleView('projects')}>Learn More</button>
        </div>
      </div>
    );
  }
}
