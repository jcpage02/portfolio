import React, { Component } from "react";
import "./AboutWindow.scss";
import me from '../../me.jpg'

export default class AboutWindow extends Component {
  state = {};
  render() {
    const { toggleView } = this.props;
    return (
      <div className="window-about">
        <i className="fas fa-arrow-up" onClick={() => toggleView()} />
        <div className='about-header'>
          <h1>About Me</h1>
        </div>
        <div className='about-me-details'>
          <img src={me} alt=""/>
          <div className='about-me-info'>
            this is information about me.
          </div>
        </div>
      </div>
    );
  }
}
