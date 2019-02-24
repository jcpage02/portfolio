import React, { Component } from "react";
import "./Skills.scss";

export default class Skills extends Component {
  state = {};
  render() {
    const { toggleSkillsSlide } = this.props.appState;
    const skillsSlide = toggleSkillsSlide ? "skills-slide" : "skills";
    return (
      <div
        className={skillsSlide}
        onClick={() => this.props.toggleSkillsSlide()}
      >
        <h5>SKILLS</h5>
      </div>
    );
  }
}
