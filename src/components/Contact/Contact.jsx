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
          <h3>Enter your information below to get in touch!</h3>
          <div className="contact-form">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="Email Address" />
            <textarea type="text" placeholder="Message" />
            <button>Send</button>
          </div>
          <h4>Contact Info:</h4>
          {/* <span>(816) 888-1088</span>
          <br />
          <span>jcpage02@outlook.com</span>
          <br /> */}
          <a href="https://www.github.com/jcpage02">
            <span>github.com/jcpage02</span>
          </a>
          <br />
          <a href="https://www.linkedin.com/in/jcpage02/">
            <span>linkedin.com/in/jcpage02/</span>
          </a>
          <p />
        </div>
      </div>
    );
  }
}
