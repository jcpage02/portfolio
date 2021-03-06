import React, { Component } from "react";
import "./Skills.scss";
import css from "../../icons/css.png";
import html from "../../icons/html.png";
import js from "../../icons/js.png";
import node from "../../icons/node.png";
import react from "../../icons/react.png";
import redux from "../../icons/redux.png";
import sql from "../../icons/sql.png";

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
          <h3>
            Checkout some of the skills and technologies that I have experience
            with.
          </h3>
          <div className="skills-icon-container">
            <div className="skills-icon1">
              <img src={html} alt="" />
              <span>HTML</span>
            </div>
            <div className="skills-icon2">
              <img src={css} alt="" />
              <span>CSS</span>
            </div>
            <div className="skills-icon3">
              <img src={js} alt="" />
              <span>JavaScript</span>
            </div>
            <div className="skills-icon4">
              <img src={react} alt="" />
              <span>React.js</span>
            </div>
            <div className="skills-icon5">
              <img src={redux} alt="" />
              <span>Redux</span>
            </div>
            <div className="skills-icon6">
              <img src={node} alt="" />
              <span>Node.js</span>
            </div>
            <div className="skills-icon7">
              <img src={sql} alt="" />
              <span>SQL</span>
            </div>
          </div>
          {/* <button onClick={() => this.props.toggleView("skills")}>
            And More!
          </button> */}
        </div>
      </div>
    );
  }
}
