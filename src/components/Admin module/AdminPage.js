import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class AdminPage extends React.Component {
  constructor(props) {
    super(props);
    const tokenAdmin = localStorage.getItem("tokenAdmin");
    let loggedIn = true;
    if (tokenAdmin == null) {
      loggedIn = false;
    }
    this.state = {
      loggedIn,
    };
  }

  render() {
    if (this.state.loggedIn === false) {
      return <Redirect to="/login" />;
    }
    return (
      <div
        style={{
          backgroundImage: "linear-gradient(45deg, #ff4b2b, #ff416c)",
        }}
      >
        <nav
          className="navbar navbar-dark bg-dark"
          style={{
            backgroundImage:
              "linear-gradient(223.88deg, #848484 8.89%, #000000 94.31%)",
          }}
        >
          <Link
            to="/adminpage"
            className="navbar-brand"
            style={{ color: "white", fontSize: "30px", textDecoration: "none" }}
          >
            Admin
          </Link>
          <form className="form-inline">
            <Link
              to="/logout"
              className="nav-link text-black mr-5"
              style={{ color: "white", fontSize: "25px" }}
            >
              Logout
            </Link>
          </form>
        </nav>
        <br />
        <React.Fragment>
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    src="https://th.bing.com/th/id/OIP.Gxsu8WCbINivp-55GJ_UtwHaD_?w=288&h=180&c=7&o=5&dpr=1.25&pid=1.7"
                    class="card-img-top"
                    alt="..."
                    height="200px"
                  />
                  <div class="card-body">
                    <div class="card-body">
                      <Link to="/addCenter" class="btn btn-primary">
                        Add Diagnostic Center
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    src="https://th.bing.com/th/id/OIP.hOnRR5-It5ifZAocjcCkvgHaD_?w=274&h=180&c=7&o=5&dpr=1.25&pid=1.7"
                    class="card-img-top"
                    alt="..."
                    height="200px"
                  />
                  <div class="card-body">
                    <div class="card-body">
                      <Link to="/centerlist" class="btn btn-primary">
                        View Diagnostic Centers
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    src="https://th.bing.com/th/id/OIP.zitOMmmOeGRTnFgAfKtavQHaCu?w=330&h=128&c=7&o=5&dpr=1.25&pid=1.7"
                    class="card-img-top"
                    alt="..."
                    height="200px"
                  />
                  <div class="card-body">
                    <div class="card-body">
                      <Link to="/location" class="btn btn-primary">
                        View Centers By location
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 my-4">
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    src="https://th.bing.com/th/id/OIP.kwRLgRPxwcK0tfHeuWkBNwHaEQ?w=270&h=180&c=7&o=5&dpr=1.25&pid=1.7"
                    class="card-img-top"
                    alt="..."
                    height="200px"
                  />
                  <div class="card-body">
                    <div class="card-body">
                      <Link class="btn btn-primary" to="/addtest">
                        Add Diagnostic Tests
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 my-4">
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    src="https://th.bing.com/th/id/OIP.CvJO4bNgqoGHkEWAGX6GqAHaFj?w=215&h=180&c=7&o=5&dpr=1.25&pid=1.7"
                    class="card-img-top"
                    alt="..."
                    height="200px"
                  />
                  <div class="card-body">
                    <div class="card-body">
                      <Link to="/viewtest" class="btn btn-primary">
                        View Diagnostic Tests
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 my-4">
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    src="https://th.bing.com/th/id/OIP.fdFuUs54QTNx_5dka-4TAAHaDw?w=302&h=177&c=7&o=5&dpr=1.25&pid=1.7"
                    class="card-img-top"
                    alt="..."
                    height="200px"
                  />
                  <div class="card-body">
                    <div class="card-body">
                      <Link to="/viewallappointment" class="btn btn-primary">
                        View Appointments
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 my-4">
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    src="https://th.bing.com/th/id/OIP.fdFuUs54QTNx_5dka-4TAAHaDw?w=302&h=177&c=7&o=5&dpr=1.25&pid=1.7"
                    class="card-img-top"
                    alt="..."
                    height="200px"
                  />
                  <div class="card-body">
                    <div class="card-body">
                      <Link to="/viewappointment" class="btn btn-primary">
                        View Appointment By Username
                      </Link>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default AdminPage;
