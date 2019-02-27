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
          <div className='contact-form'>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="Email Address" />
            <textarea type="text" placeholder="Messge" />
            <button>Send</button>
          </div>
        </div>
      </div>
    );
  }
}
