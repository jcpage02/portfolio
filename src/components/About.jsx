import React, { Component } from 'react'
import './About.scss'

export default class About extends Component {
    state = {

    }
  render() {
    const {toggleAboutSlide} = this.props.appState
    const aboutSlide = toggleAboutSlide ? 'about-slide' : 'about'

    return (
      <div className={aboutSlide} onClick={() => this.props.toggleAboutSlide()}>
        <h5>ABOUT</h5>
      </div>
    )
  }
}


