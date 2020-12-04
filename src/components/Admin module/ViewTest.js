import React, { Component } from "react";
import TestService from "../../Services/TestService";
import { Link, Redirect } from "react-router-dom";

class ViewTest extends Component {
  constructor(props) {
    super(props);
    const tokenAdmin = localStorage.getItem("tokenAdmin");
    let loggedIn = true;
    if (tokenAdmin == null) {
      loggedIn = false;
    }
    this.state = {
      tests: [],
      loggedIn,
    };
  }
  componentDidMount() {
    TestService.getAllTest().then((res) => {
      this.setState({ tests: res.data });
    });
  }
  render() {
    if (this.state.loggedIn === false) {
      return <Redirect to="/login" />;
    }
    return (
      <div>
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
              to="/addtest"
              className="nav-link text-black mr-5"
              style={{ color: "white", fontSize: "25px" }}
            >
              Add Tests
            </Link>
            <Link
              to="/removetest"
              className="nav-link text-black mr-5"
              style={{ color: "white", fontSize: "25px" }}
            >
              Remove test
            </Link>
            <Link
              to="/logout"
              className="nav-link text-black mr-5"
              style={{ color: "white", fontSize: "25px" }}
            >
              Logout
            </Link>
          </form>
        </nav>
        <h2 className="text=center mt-2">
          <center>
            <b>View All Tests</b>
          </center>
        </h2>
        <div className="row" style={{ margin: "20px" }}>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Test Name</th>
                <th>Test Price</th>
                <th>Normal Value</th>
                <th>Units</th>
              </tr>
            </thead>
            <tbody>
              {this.state.tests.map((test) => (
                <tr key={test.id}>
                  <td>{test.testName}</td>
                  <td>{test.testPrice}</td>
                  <td>{test.normalValue}</td>
                  <td>{test.units}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default ViewTest;
