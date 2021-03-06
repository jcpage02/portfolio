import React, { Component } from "react";
import "./ProjectsWindow.scss";
import libHome from "../../images/libertyRoofing/Home.png";
import libScheduler2 from "../../images/libertyRoofing/Scheduler2.png";
import libScheduler3 from "../../images/libertyRoofing/Scheduler3.png";
import libCustomerLogin from "../../images/libertyRoofing/CustomerLogin.png";
import libCustomerDash from "../../images/libertyRoofing/CustomerDash.png";
import libCustomerDashStripe from "../../images/libertyRoofing/CustomerDashStripe.png";
import libEmployeeLogin from "../../images/libertyRoofing/EmployeeLogin.png";
import libAdminDash from "../../images/libertyRoofing/AdminDash.png";
import libAdminAppointments from "../../images/libertyRoofing/AdminAppointments.png";
import libAdminAddAppointment from "../../images/libertyRoofing/AdminAddAppointment.png";
import libAdminMessenger from "../../images/libertyRoofing/AdminMessenger.png";

import finerHome from "../../images/finerThings/TheFinerThings-home.png";
import finerLibrary from "../../images/finerThings/TheFinerThings-library.png";
import finerBrowse from "../../images/finerThings/TheFinerThings-browse.png";
import finerFriends from "../../images/finerThings/TheFinerThings-friends.png";
import finerFriendsChat from "../../images/finerThings/TheFinerThings-friends-chat.png";
import finerResponsive from "../../images/finerThings/TheFinerThings-responsive.png";

import ksWigHome1 from "../../images/ksWigShop/ksWigShop-home1.png";
import ksWigHome2 from "../../images/ksWigShop/ksWigShop-home2.png";
import ksWigHome3 from "../../images/ksWigShop/ksWigShop-home3.png";

export default class ProjectsWindow extends Component {
  state = {
    projOneImage: "home",
    projTwoImage: "finerHome",
    projThreeImage: "ksWigHome1"
  };

  handleChangeImage = (prop1, prop2) => {
    if (this.state[prop1] !== prop2) {
      this.setState({ [prop1]: prop2 });
    }
  };

  render() {
    const { toggleView } = this.props;
    const { projOneImage, projTwoImage, projThreeImage } = this.state;

    const projOneMain =
      projOneImage === "home" ? (
        <div className="projects-project-main-image">
          <img src={libHome} alt="liberty home" />
        </div>
      ) : projOneImage === "scheduler2" ? (
        <div className="projects-project-main-image">
          <img src={libScheduler2} alt="liberty scheduler2" />
        </div>
      ) : projOneImage === "scheduler3" ? (
        <div className="projects-project-main-image">
          <img src={libScheduler3} alt="liberty scheduler3" />
        </div>
      ) : projOneImage === "customerLogin" ? (
        <div className="projects-project-main-image">
          <img src={libCustomerLogin} alt="liberty customerLogin" />
        </div>
      ) : projOneImage === "customerDash" ? (
        <div className="projects-project-main-image">
          <img src={libCustomerDash} alt="liberty customerDash" />
        </div>
      ) : projOneImage === "customerDashStripe" ? (
        <div className="projects-project-main-image">
          <img src={libCustomerDashStripe} alt="liberty customerDashStripe" />
        </div>
      ) : projOneImage === "employeeLogin" ? (
        <div className="projects-project-main-image">
          <img src={libEmployeeLogin} alt="liberty employeeLogin" />
        </div>
      ) : projOneImage === "adminDash" ? (
        <div className="projects-project-main-image">
          <img src={libAdminDash} alt="liberty adminDash" />
        </div>
      ) : projOneImage === "adminAppointments" ? (
        <div className="projects-project-main-image">
          <img src={libAdminAppointments} alt="liberty adminAppointments" />
        </div>
      ) : projOneImage === "adminAddAppointment" ? (
        <div className="projects-project-main-image">
          <img src={libAdminAddAppointment} alt="liberty adminAddAppointment" />
        </div>
      ) : projOneImage === "adminMessenger" ? (
        <div className="projects-project-main-image">
          <img src={libAdminMessenger} alt="liberty adminMessenger" />
        </div>
      ) : null;

    const projTwoMain =
      projTwoImage === "finerHome" ? (
        <div className="projects-project-main-image">
          <img src={finerHome} alt="finer things home" />
        </div>
      ) : projTwoImage === "finerLibrary" ? (
        <div className="projects-project-main-image">
          <img src={finerLibrary} alt="finer things library" />
        </div>
      ) : projTwoImage === "finerBrowse" ? (
        <div className="projects-project-main-image">
          <img src={finerBrowse} alt="finer things browse" />
        </div>
      ) : projTwoImage === "finerFriends" ? (
        <div className="projects-project-main-image">
          <img src={finerFriends} alt="finer things friends" />
        </div>
      ) : projTwoImage === "finerFriendsChat" ? (
        <div className="projects-project-main-image">
          <img src={finerFriendsChat} alt="finer things chat" />
        </div>
      ) : projTwoImage === "finerResponsive" ? (
        <div className="projects-project-main-image">
          <img src={finerResponsive} alt="finer things responsive" />
        </div>
      ) : null;

    const projThreeMain =
      projThreeImage === "ksWigHome1" ? (
        <div className="projects-project-main-image">
          <img src={ksWigHome1} alt="" />
        </div>
      ) : projThreeImage === "ksWigHome2" ? (
        <div className="projects-project-main-image">
          <img src={ksWigHome2} alt="" />
        </div>
      ) : projThreeImage === "ksWigHome3" ? (
        <div className="projects-project-main-image">
          <img src={ksWigHome3} alt="" />
        </div>
      ) : null;

    return (
      <div className="window-projects">
        <i className="fas fa-arrow-up" onClick={() => toggleView()} />
        <div className="projects-main">
          <div className="projects-header">
            <h1>PROJECTS</h1>
          </div>
          {/* ///////////////////////////////////////////////////////////////////////////////////////// */}
          <div className="projects-project">
            <h2>
              <a href="">K's Wig Shop</a>
            </h2>
            <div className="projects-project-images">
              {projThreeMain}
              <div className="projects-project-all-images">
                <img
                  src={ksWigHome1}
                  alt=""
                  onClick={() =>
                    this.handleChangeImage("projThreeImage", "ksWigHome1")
                  }
                />
                <img
                  src={ksWigHome2}
                  alt=""
                  onClick={() =>
                    this.handleChangeImage("projThreeImage", "ksWigHome2")
                  }
                />
                <img
                  src={ksWigHome3}
                  alt=""
                  onClick={() =>
                    this.handleChangeImage("projThreeImage", "ksWigHome3")
                  }
                />
              </div>
            </div>
            <div className="projects-project-details">
              <p>
                Under Construction
                <p />
                <p />
                <p>
                  <a href="">K's Wig Shop</a>
                </p>
                <p>
                  <a href="https://github.com/jcpage02/ks-wig-shop">Github</a>
                </p>
              </p>
            </div>
          </div>
          {/* ///////////////////////////////////////////////////////////////////////////////////////// */}
          <div className="projects-project">
            <h2>
              <a href="https://finerthings.jamesc.page">The Finer Things</a>
            </h2>
            <div className="projects-project-images">
              {projTwoMain}
              <div className="projects-project-all-images">
                <img
                  src={finerHome}
                  alt=""
                  onClick={() =>
                    this.handleChangeImage("projTwoImage", "finerHome")
                  }
                />
                <img
                  src={finerLibrary}
                  alt=""
                  onClick={() =>
                    this.handleChangeImage("projTwoImage", "finerLibrary")
                  }
                />
                <img
                  src={finerBrowse}
                  alt=""
                  onClick={() =>
                    this.handleChangeImage("projTwoImage", "finerBrowse")
                  }
                />
                <img
                  src={finerFriends}
                  alt=""
                  onClick={() =>
                    this.handleChangeImage("projTwoImage", "finerFriends")
                  }
                />
                <img
                  src={finerFriendsChat}
                  alt=""
                  onClick={() =>
                    this.handleChangeImage("projTwoImage", "finerFriendsChat")
                  }
                />
                <img
                  src={finerResponsive}
                  alt=""
                  onClick={() =>
                    this.handleChangeImage("projTwoImage", "finerResponsive")
                  }
                />
              </div>
            </div>
            <div className="projects-project-details">
              <p>
                Group developed social book club web app that provides a way for
                the user to connect with friends, add book titles to their
                personal library, and create "book clubs" for them and their
                friends. The user is able to chat with individual friends as
                well as the people in a book club about the books they are
                reading. Built using React, Node, Express, Massive, PostgreSQL,
                Bcrypt.js, Socket.io.
                <p>APIs - NY Times Best Sellers and Google Books.</p>
                <p>Learned Socket.io.</p>
                <p>
                  <a href="https://finerthings.jamesc.page">The Finer Things</a>
                </p>
                <p>
                  <a href="https://github.com/finerpeople/finer-things">
                    Github
                  </a>
                </p>
              </p>
            </div>
          </div>
          {/* ///////////////////////////////////////////////////////////////////////////////////////// */}
          <div className="projects-project">
            <h2>
              <a href="https://www.libertyroofing.page">Liberty Roofing</a>
            </h2>
            <div className="projects-project-images">
              {projOneMain}
              <div className="projects-project-all-images">
                <img
                  src={libHome}
                  alt=""
                  onClick={() => this.handleChangeImage("projOneImage", "home")}
                />
                <img
                  src={libScheduler2}
                  alt=""
                  onClick={() =>
                    this.handleChangeImage("projOneImage", "scheduler2")
                  }
                />
                <img
                  src={libScheduler3}
                  alt=""
                  onClick={() =>
                    this.handleChangeImage("projOneImage", "scheduler3")
                  }
                />
                <img
                  src={libCustomerLogin}
                  alt=""
                  onClick={() =>
                    this.handleChangeImage("projOneImage", "customerLogin")
                  }
                />
                <img
                  src={libCustomerDash}
                  alt=""
                  onClick={() =>
                    this.handleChangeImage("projOneImage", "customerDash")
                  }
                />
                <img
                  src={libCustomerDashStripe}
                  alt=""
                  onClick={() =>
                    this.handleChangeImage("projOneImage", "customerDashStripe")
                  }
                />
                <img
                  src={libEmployeeLogin}
                  alt=""
                  onClick={() =>
                    this.handleChangeImage("projOneImage", "employeeLogin")
                  }
                />
                <img
                  src={libAdminDash}
                  alt=""
                  onClick={() =>
                    this.handleChangeImage("projOneImage", "adminDash")
                  }
                />
                <img
                  src={libAdminAppointments}
                  alt=""
                  onClick={() =>
                    this.handleChangeImage("projOneImage", "adminAppointments")
                  }
                />
                <img
                  src={libAdminAddAppointment}
                  alt=""
                  onClick={() =>
                    this.handleChangeImage(
                      "projOneImage",
                      "adminAddAppointment"
                    )
                  }
                />
                <img
                  src={libAdminMessenger}
                  alt=""
                  onClick={() =>
                    this.handleChangeImage("projOneImage", "adminMessenger")
                  }
                />
              </div>
            </div>
            <div className="projects-project-details">
              <p>
                Personally developed web app that allows customers to request
                appointments and pay bills. Allows the administrator of a
                company to manage customer appointment requests and job,
                customer, and employee information. - Built using React, Node,
                Express, Massive, PostgreSQL. - Won "Best Business Solution". -
                Learned Stripe Checkout, Twilio, Nodemailer, SASS, and CSS Grid.
                <p>
                  <a href="https://www.libertyroofing.page">
                    Liberty Roofing ( other views: /customer/dash & /admin/dash
                    )
                  </a>
                </p>
                <p>
                  <a href="https://github.com/jcpage02/liberty-roofing-pp">
                    Github
                  </a>
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
