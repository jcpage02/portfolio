import React, { Component } from "react";
import "./Contact.scss";

export default class Contact extends Component {
  state = {};
  render() {
    const { toggleContactSlide } = this.props.appState;
    const contactSlide =
      toggleContactSlide === ""
        ? "contact-none"
        : toggleContactSlide
        ? "contact-slide"
        : "contact";
    const contactMore = toggleContactSlide
      ? "contact-more"
      : "contact-more-none";

    return (
      <div
        className={contactSlide}
        onClick={() => this.props.toggleState("toggleContactSlide")}
      >
        <h5>CONTACT</h5>
        <div className={contactMore}>
          <h3>Hi, my name is James Page</h3>
          <p>
            I am currently transitioning into a career in full stack software
            engineering. I have always been fascinated with designing and create
            something new. I also enjoy finding the best way to solve problems.
            I am organized and pay close attention to details.
          </p>
          <button>Learn More</button>
        </div>
      </div>
    );
  }
}
