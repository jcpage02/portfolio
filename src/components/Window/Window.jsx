import React, { Component } from "react";
import AboutWindow from '../About/AboutWindow'

export default class Window extends Component {
  state = {};
  render() {
    const { windowView, toggleView } = this.props;
    const window = windowView === "" ? "window-none" : "window";

    // const currentView =
    //   windowView === "about" ? (
        
    //   ) : windowView === "skills" ? (
    //     <div className="window-skills">
    //       <button className="window-back" onClick={toggleView()}>
    //         BACK
    //       </button>
    //       <p>stuff</p>
    //     </div>
    //   ) : windowView === "projects" ? (
    //     <div className="window-projects">
    //       <button className="window-back" onClick={toggleView()}>
    //         BACK
    //       </button>
    //       <p>stuff</p>
    //     </div>
    //   ) : windowView === "contact" ? (
    //     <div className="window-contact">
    //       <button className="window-back" onClick={toggleView()}>
    //         BACK
    //       </button>
    //       <p>stuff</p>
    //     </div>
    //   ) : (
    //     <div className="window-about">
    //       <button className="window-back" onClick={toggleView()}>
    //         BACK
    //       </button>
    //       <p>stuff</p>
    //     </div>
    //   );

    return <div className={window}>
      {/* {currentView} */}
      <AboutWindow toggleView={toggleView}/>
      </div>;
  }
}
