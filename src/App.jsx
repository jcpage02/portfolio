import React, { Component } from "react";
import "./App.scss";
import me from './me.jpg'

import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

class App extends Component {
  state = {
    toggleAboutSlide: false,
    toggleContactSlide: false,
    toggleProjectsSlide: false,
    toggleSkillsSlide: false
  };
  toggleAboutSlide = () => {
    this.setState({ toggleAboutSlide: !this.state.toggleAboutSlide });
  };
  toggleContactSlide = () => {
    this.setState({
      toggleContactSlide: !this.state.toggleContactSlide
    });
  };
  toggleProjectsSlide = () => {
    this.setState({
      toggleProjectsSlide: !this.state.toggleProjectsSlide
    });
  };
  toggleSkillsSlide = () => {
    this.setState({
      toggleSkillsSlide: !this.state.toggleSkillsSlide
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Hi!<br/>I'm James</h1>
        <img src={me} alt=""/>
        <About appState={this.state} toggleAboutSlide={this.toggleAboutSlide} />
        <Contact
          appState={this.state}
          toggleContactSlide={this.toggleContactSlide}
        />
        <Projects
          appState={this.state}
          toggleProjectsSlide={this.toggleProjectsSlide}
        />
        <Skills
          appState={this.state}
          toggleSkillsSlide={this.toggleSkillsSlide}
        />
      </div>
    );
  }
}

export default App;
