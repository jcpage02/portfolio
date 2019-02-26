import React, { Component } from "react";
import "./Skills.scss";

export default class Skills extends Component {
  state = {};
  render() {
    const { toggleSkillsSlide } = this.props.appState;
    const skillsSlide =
      toggleSkillsSlide === ""
        ? "skills-none"
        : toggleSkillsSlide
        ? "skills-slide"
        : "skills";
    const skillsMore = toggleSkillsSlide ? "skills-more" : "skills-more-none";

    return (
      <div
        className={skillsSlide}
        onClick={() => this.props.toggleState("toggleSkillsSlide")}
      >
        <h5>SKILLS</h5>
        <div className={skillsMore}>
          <h3>Hi, my name is James Page</h3>
          <p>
            I am currently transitioning into a career in full stack software
            engineering. I have always been fascinated with designing and create
            something new. I also enjoy finding the best way to solve problems.
            I am organized and pay close attention to details.
          </p>
          <button onClick={() => this.props.toggleView('skills')}>Learn More</button>
        </div>
      </div>
    );
  }
}
