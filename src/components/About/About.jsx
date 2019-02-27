import React, { Component } from "react";
import "./About.scss";

export default class About extends Component {
  state = {};
  render() {
    const { toggleAboutSlide } = this.props.appState;
    const aboutSlide =
      toggleAboutSlide === ""
        ? "about-none"
        : toggleAboutSlide
        ? "about-slide"
        : "about";
    const aboutMore = toggleAboutSlide ? "about-more" : "about-more-none";

    return (
      <div
        className={aboutSlide}
        onClick={() => this.props.toggleState("toggleAboutSlide")}
      >
        <h5>ABOUT</h5>
        <div className={aboutMore}>
          <h3>Hi, my name is James Page</h3>
          <p>
            I am currently transitioning into a career in full-stack software
            engineering. I have always been fascinated with designing and create
            something new. I also enjoy finding the best way to solve problems.
            I am organized and pay close attention to details.
          </p>
          <button onClick={() => this.props.toggleView('about')}>Learn More</button>
        </div>
      </div>
    );
  }
}
