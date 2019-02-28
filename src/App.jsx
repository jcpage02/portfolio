import React, { Component } from "react";
import "./App.scss";
import me from "./me.jpg";

import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Window from "./components/Window/Window";

class App extends Component {
  state = {
    toggleAboutSlide: "",
    toggleContactSlide: "",
    toggleProjectsSlide: "",
    toggleSkillsSlide: "",
    toggleAboutExpand: "",
    toggleContactExpand: "",
    toggleProjectsExpand: "",
    toggleSkillsExpand: "",
    windowView: ""
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
    }, 200);
  }

  toggleState = prop => {
    this.setState({ [prop]: !this.state[prop] });
  };

  toggleView = prop => {
    this.setState({ windowView: prop });
  };
  toggleViewBack = () => {
    if (this.state.windowView !== "") {
      this.setState({ windowView: "" });
    }
  };

  render() {
    const { windowView } = this.state;
    const appNone = windowView !== "" ? "App-none" : "App";

    return (
      <div className="App-main">
        <div className={appNone}>
          <div className="app-home">
            <div className="app-home-text">
              <h1>
                Hello, My name is <span className="home-name">James Page</span>
              </h1>
              <p>I'm a full-stack developer.</p>
            </div>
            {/* <img src={me} alt="me" /> */}
          </div>
          <About
            appState={this.state}
            toggleState={this.toggleState}
            toggleView={this.toggleView}
          />
          <Skills
            appState={this.state}
            toggleState={this.toggleState}
            toggleView={this.toggleView}
          />
          <Projects
            appState={this.state}
            toggleState={this.toggleState}
            toggleView={this.toggleView}
          />
          <Contact
            appState={this.state}
            toggleState={this.toggleState}
            toggleView={this.toggleView}
          />
        </div>
        <Window
          windowView={this.state.windowView}
          toggleView={this.toggleViewBack}
        />
        {/* {currentView} */}
      </div>
    );
  }
}

export default App;
