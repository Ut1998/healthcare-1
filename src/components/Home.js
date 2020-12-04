import React, { Component } from "react";
import FooterComponent from "./FooterComponent";
import { Link } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
              <div className="navbar-brand"><h2>Health Care Management System</h2> </div>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <Link className="nav-link btn btn-info " to="/signup">Sign Up</Link>
                  </li> &nbsp;
                                    <li class="nav-item active">
                    <Link className="nav-link btn btn-info" to="/login">Login</Link>
                  </li>
                </ul>
              </ div>
            </nav>
          </header>
        </div>
        {/* <img src={health3} height="650px" width="1550px" />
         */}
        <br />
        <br />
        <React.Fragment>
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    src="https://www.eyeassociatesofsouthtexas.com/wp-content/uploads/2019/03/diagnostic-testing-cover-new.jpg"
                    class="card-img-top"
                    alt="..."
                    height="200px"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Diagnostic Test Center</h5>
                    <p class="card-text">
                      Specialist doctors and highly trained staff at diagnostic
                      centres ensure that each person visiting the center for
                      medical assistance gets proper attention and care.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Login to avail services
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    src="https://www.news-medical.net/image.axd?picture=2017%2f12%2fshutterstock_625415198edit_a162cd7c30ee4621bfdbe251d09705e6-310x240.jpg"
                    class="card-img-top"
                    alt="..."
                    height="200px"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Diagnostic Test</h5>
                    <p class="card-text">
                      Diagnostic Tests and Medical Procedures. From biopsies to
                      bypass surgery, you'll find information on more than 110
                      tests and procedures.{" "}
                    </p>
                    <a href="#" class="btn btn-primary">
                      Login to avail services
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    src="http://www.medifee.com/blog/wp-content/uploads/2016/04/pathlab-tests.jpg"
                    class="card-img-top"
                    alt="..."
                    height="200px"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Appoinments</h5>
                    <p class="card-text">
                      SFind the latest news and updates from Cleveland Clinic
                      including testing information, treatment, visiting hours
                      and service changes.Required masks.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Login to avail services
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
        <FooterComponent />
      </div>
    );
  }
}

export default Home;
