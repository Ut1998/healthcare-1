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
        <nav class="navbar navbar-dark bg-dark">
          <h1
            class="navbar-brand"
            style={{
              fontFamily: "ARIAL",
              fontWeight: "bold",
              fontSize: 30,
              width: "500px",
              color: "white",
              borderRadius: "15px",
            }}
          >
            HealthCare Management System
          </h1>
          <form class="form-inline">
            <button class="btn btn-primary mr-sm-2" type="submit">
              <Link
                to="/signup"
                style={{ color: "white", fontSize: 20, textDecoration: "none" }}
              >
                SignUp
              </Link>
            </button>
            <button class="btn btn-success my-2 my-sm-0" onClick={this.onClick}>
              <Link
                to="/login"
                style={{ color: "white", fontSize: 20, textDecoration: "none" }}
              >
                Log In
              </Link>
            </button>
          </form>
        </nav>
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
