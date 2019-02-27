import React, { Component } from "react";
import AboutWindow from "../About/AboutWindow";
import ProjectsWindow from "../Projects/ProjectsWindow";
import SkillsWindow from "../Skills/SkillsWindow";
import Skills from "../Skills/Skills";

export default class Window extends Component {
  state = {};
  render() {
    const { windowView, toggleView } = this.props;
    const window = windowView === "" ? "window-none" : "window";
    const windowToView =
      windowView === "about" ? (
        <AboutWindow toggleView={toggleView} />
      ) : windowView === "projects" ? (
        <ProjectsWindow toggleView={toggleView} />
      ) : windowView === "skills" ? (
        <SkillsWindow toggleView={toggleView} />
      ) : null;

    return <div className={window}>{windowToView}</div>;
  }
}
