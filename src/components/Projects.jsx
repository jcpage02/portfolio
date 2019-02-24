import React, { Component } from 'react'
import './Projects.scss'

export default class Projects extends Component {
  state = {

  }
  render() {
    const {toggleProjectsSlide} = this.props.appState
    const projectsSlide = toggleProjectsSlide ? 'projects-slide' : 'projects'
    return (
      <div className={projectsSlide} onClick={() => this.props.toggleProjectsSlide()}>
        <h5>PROJECTS</h5>        
      </div>
    )
  }
}
