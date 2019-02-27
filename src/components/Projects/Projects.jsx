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
          <p>
            One of my favorite things about being a developer is the
            never-ending opportunities to create something new that will
            directly influence people, whether at work or in their personal
            lives. I get to constantly learn new ways to improve the way people
            use technology. It is a fast paced environment, and I thrive off of
            the constant flow of challenges that come each day.
          </p>
          <button onClick={() => this.props.toggleView("projects")}>
            See My Projects!
          </button>
        </div>
      </div>
    );
  }
}
