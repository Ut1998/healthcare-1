import React from "react";
import TestService from "../../Services/TestService";
import { withRouter } from "react-router-dom";
import { Link,Redirect } from "react-router-dom";
import axios from "axios";

class AddTest extends React.Component {
  constructor(props) {
    super(props);
    const tokenAdmin = localStorage.getItem("tokenAdmin");
    let loggedIn = true;
    if (tokenAdmin == null) {
      loggedIn = false;
    }
    this.state = {
      loggedIn,
      testName: "",
      testPrice: "",
      normalValue: "",
      units: "",
      diagnosticCenterId: [],
      selectedCenter: 0,
    };
    this.changeTestNameHandler = this.changeTestNameHandler.bind(this);
    this.changeTestPriceHandler = this.changeTestPriceHandler.bind(this);
    this.changeNormalValueHandler = this.changeNormalValueHandler.bind(this);
    this.changeUnitsHandler = this.changeUnitsHandler.bind(this);
    this.saveTest = this.saveTest.bind(this);
  }
  changeTestNameHandler = (e) => {
    this.setState({ testName: e.target.value });
  };
  changeTestPriceHandler = (e) => {
    this.setState({ testPrice: e.target.value });
  };
  changeNormalValueHandler = (e) => {
    this.setState({ normalValue: e.target.value });
  };
  changeUnitsHandler = (e) => {
    this.setState({ units: e.target.value });
  };
  saveTest = (e) => {
    e.preventDefault();
    let test = {
      testName: this.state.testName,
      testPrice: this.state.testPrice,
      normalValue: this.state.normalValue,
      units: this.state.units,
    };
    console.log("test => " + JSON.stringify(test));

    const { history } = this.props;

    TestService.addTest(test).then((res) => {
      history.push("/viewtest");
    });
  };
  cancel() {
    this.props.history.push("/tests");
  }

  componentDidMount() {
    var url1 = "http://localhost:8080/health/tests/viewCenters";
    console.log(url1);
    axios.get(url1).then((k) => {
      this.setState({ diagnosticCenterId: k.data });
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
              to="/viewtest"
              className="nav-link text-black mr-5"
              style={{ color: "white", fontSize: "25px" }}
            >
              View Tests
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
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text=center">
                <center>
                  <b>Add Test</b>
                </center>
              </h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Test Name : </label>
                    <input
                      placeholder="Test Name"
                      name="testName"
                      className="form-control"
                      value={this.state.testName}
                      onChange={this.changeTestNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Test Price : </label>
                    <input
                      placeholder="Test Price"
                      name="testPrice"
                      className="form-control"
                      value={this.state.testPrice}
                      onChange={this.changeTestPriceHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Normal Value : </label>
                    <input
                      placeholder="Normal Value"
                      name="normalValue"
                      className="form-control"
                      value={this.state.normalValue}
                      onChange={this.changeNormalValueHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Units : </label>
                    <input
                      placeholder="Units"
                      name="units"
                      className="form-control"
                      value={this.state.units}
                      onChange={this.changeUnitsHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label> Diagnostic Center Name </label>
                    <select
                      value={this.state.selectedCenter}
                      onChange={(e) =>
                        this.setState({ selectedCenter: e.target.value })
                      }
                      className="form-control"
                    >
                      {this.state.diagnosticCenterId.map((m) => (
                        <option key={m.centerId} value={m.centerId}>
                          {m.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button className="btn btn-success" onClick={this.saveTest}>
                    Save
                  </button>

                  <button
                  
                    className="btn btn-danger"
                    style={{ marginLeft: "10px" }}
                  >
                    <Link to="/adminpage" style={{ color: "white" }}>
                      Cancel
                    </Link>
                  </button>

                  <div>
                    <label>Test center not found? Add now</label>

                    <button
                      type="reset"
                      className="btn btn-primary"
                      style={{ marginLeft: "10px" }}
                    >
                      <Link to="/addCenter" style={{ color: "white" }}>
                        Add Test Center
                      </Link>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(AddTest);
