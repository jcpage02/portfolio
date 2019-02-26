import React, { Component } from "react";
import "./App.scss";
import me from "./me.jpg";

import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

class App extends Component {
  state = {
    toggleAboutSlide: "",
    toggleContactSlide: "",
    toggleProjectsSlide: "",
    toggleSkillsSlide: "",
    toggleAboutExpand: "",
    toggleContactExpand: "",
    toggleProjectsExpand: "",
    toggleSkillsExpand: ""
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        toggleAboutSlide: false,
        toggleContactSlide: false,
        toggleProjectsSlide: false,
        toggleSkillsSlide: false,
        toggleAboutExpand: false,
        toggleContactExpand: false,
        toggleProjectsExpand: false,
        toggleSkillsExpand: false
      });
    }, 500);
  }

  toggleState = prop => {
    this.setState({ [prop]: !this.state[prop] });
  };

  render() {
    return (
      <div className="App">
        <div className="app-home">
          <div className='app-home-text'>
            <h1>Hello, My name is James</h1>
            <p>I'm a full-stack developer.</p>
          </div>
          {/* <img src={me} alt="me" /> */}
        </div>
        <About appState={this.state} toggleState={this.toggleState} />
        <Skills appState={this.state} toggleState={this.toggleState} />
        <Projects appState={this.state} toggleState={this.toggleState} />
        <Contact appState={this.state} toggleState={this.toggleState} />
      </div>
    );
  }
}

export default App;
