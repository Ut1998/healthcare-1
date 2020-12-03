import React, { Component } from "react";
import { Link,Redirect } from "react-router-dom";
import Axios from "axios";
import DiagnosticCenterService from "../../Services/DiagnosticCenterService";
import { withRouter } from "react-router-dom";

class UpdateCenter extends React.Component {
  constructor(props) {
    super(props);
        const tokenAdmin = localStorage.getItem("tokenAdmin");
        let loggedIn= true;
        if(tokenAdmin == null){
            loggedIn = false;
        }
        this.state ={
            loggedIn
        }

    this.state = {
      centerId: this.props.match.params.centerId,
      name: "",
      contactNo: "",
      contactEmail: "",
      address: "",
      servicesOffered: "",
      loggedIn
    };
    this.onInputChangeHandler = this.onInputChangeHandler.bind(this);
    this.updateCenter = this.updateCenter.bind(this);
  }

  onInputChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  updateCenter = (event) => {
    event.preventDefault();
    let center = {
      centerId: this.state.centerId,
      name: this.state.name,
      contactNo: this.state.contactNo,
      address: this.state.address,
      contactEmail: this.state.contactEmail,
      servicesOffered: this.state.servicesOffered,
    };
    console.log("center => " + JSON.stringify(center));

    const { history } = this.props;
    DiagnosticCenterService.updateDiagnosticCenter(
      center,
      this.state.centerId
    ).then((res) => {
      history.push("/centerlist");
    });
  };

  componentDidMount = () => {
    DiagnosticCenterService.getCenterById(this.state.centerId).then((res) => {
      let center = res.data;
      this.setState({
        name: center.name,
        contactNo: center.contactNo,
        address: center.address,
        contactEmail: center.contactEmail,
        servicesOffered: center.servicesOffered,
      });
    });
  };

  render() {
    if(this.state.loggedIn === false){
      return <Redirect to="/login" />
  }
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <div className="card-body">
                <h1>Update Center</h1>
                <form onSubmit={this.saveEmployee}>
                  <div className="form-group">
                    <label> Center Name: </label>
                    <input
                      name="name"
                      className="form-control"
                      value={this.state.name}
                      onChange={this.onInputChangeHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Contact Number: </label>
                    <input
                      name="contactNo"
                      className="form-control"
                      value={this.state.contactNo}
                      onChange={this.onInputChangeHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label> Email Id: </label>
                    <input
                      name="contactEmail"
                      className="form-control"
                      value={this.state.contactEmail}
                      onChange={this.onInputChangeHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Address: </label>
                    <input
                      name="address"
                      className="form-control"
                      value={this.state.address}
                      onChange={this.onInputChangeHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Services Offered: </label>
                    <input
                      name="servicesOffered"
                      className="form-control"
                      value={this.state.servicesOffered}
                      onChange={this.onInputChangeHandler}
                    />
                  </div>

                  <button
                    className="btn btn-success"
                    type="submit"
                    onClick={this.updateCenter}
                  >
                    Save
                  </button>
                  <button
                    type="reset"
                    className="btn btn-danger"
                    style={{ marginLeft: "10px" }}
                  >
                    <Link to="/centerlist" style={{ color: "white" }}>
                      Cancel
                    </Link>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateCenter;
