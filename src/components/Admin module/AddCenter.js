import React, { Component } from "react";
import { Link,Redirect } from "react-router-dom";
import DiagnosticCenterService from "../../Services/DiagnosticCenterService";

const initialState = {
  name: "",
  contactNo: "",
  contactEmail: "",
  address: "",
  servicesOffered: "",
  resp: "",
  emailError: "",
  contactNoError: "",
  nameError: "",
};
class AddCenter extends React.Component {
  constructor(props) {
    super(props);
        const tokenAdmin = localStorage.getItem("tokenAdmin");
        let loggedIn= true;
        if(tokenAdmin == null){
            loggedIn = false;
        }
        this.state ={
            loggedIn,
            initialState
        }

    this.state = initialState;
    this.onInputChangeHandler = this.onInputChangeHandler.bind(this);
    this.saveCenter = this.saveCenter.bind(this);
  }

  onInputChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  validate = () => {
    const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneValidator = /^\d{10}$/;
    let nameError = "";
    let emailError = "";
    let contactNoError = "";
    if (!this.state.name) {
      nameError = "Name cannot be empty";
    }
    if (!this.state.contactNo.match(phoneValidator)) {
      contactNoError = "Enter valid contact number";
    }
    if (this.state.contactEmail == "") {
      emailError = "Email Cannot be empty";
    } else if (!this.state.contactEmail.match(emailValidator)) {
      emailError = "Enter a valid email";
    }
    if (emailError || contactNoError || nameError) {
      this.setState({ emailError, contactNoError, nameError });
      return false;
    }
    return true;
  };

  saveCenter = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      let diagnosticCenter = {
        id: this.state.id,
        name: this.state.name,
        contactNo: this.state.contactNo,
        address: this.state.address,
        contactEmail: this.state.contactEmail,
        servicesOffered: this.state.servicesOffered,
      };
      console.log("diagnosticCenter => " + JSON.stringify(diagnosticCenter));
      this.setState(initialState);

      const { history } = this.props;
      DiagnosticCenterService.addDiagnosticCenter(diagnosticCenter).then(
        (res) => {
          history.push("/centerlist");
        }
      );
    }
  };

  render() {
    if(this.state.loggedIn === false){
      return <Redirect to="/login" />
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
              className="nav-link text-black mr-5"
              style={{ color: "white", fontSize: "25px" }}
            >
              Logout
            </Link>
          </form>
        </nav>
        <br />
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <div className="card-body">
                <h1>Add Center</h1>
                <form onSubmit={this.saveEmployee}>
                  <div className="form-group">
                    <label> Center Name: </label>
                    <input
                      name="name"
                      className="form-control"
                      value={this.state.name}
                      onChange={this.onInputChangeHandler}
                      required
                    />
                    <p style={{ color: "red" }}>{this.state.nameError}</p>
                  </div>
                  <div className="form-group">
                    <label> Contact Number: </label>
                    <input
                      type="number"
                      name="contactNo"
                      className="form-control"
                      value={this.state.contactNo}
                      onChange={this.onInputChangeHandler}
                      required="true"
                    />
                    <p style={{ color: "red" }}>{this.state.contactNoError}</p>
                  </div>

                  <div className="form-group">
                    <label> Email Id: </label>
                    <input
                      name="contactEmail"
                      className="form-control"
                      value={this.state.contactEmail}
                      onChange={this.onInputChangeHandler}
                      required
                    />
                    <p style={{ color: "red" }}>{this.state.emailError}</p>
                  </div>
                  <div className="form-group">
                    <label> Address: </label>
                    <input
                      name="address"
                      className="form-control"
                      value={this.state.address}
                      onChange={this.onInputChangeHandler}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label> Services Offered: </label>
                    <input
                      name="servicesOffered"
                      className="form-control"
                      value={this.state.servicesOffered}
                      onChange={this.onInputChangeHandler}
                      required
                    />
                  </div>

                  <button
                    className="btn btn-success"
                    type="submit"
                    onClick={this.saveCenter}
                    style={{ marginLeft: "10px", fontSize: "20px" }}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-info ml-2"
                    style={{ fontSize: "20px" }}
                  ><Link to="/addtest" style={{ color: "white", textDecoration: "none" }}>Add Test</Link>
                  </button>
                  <button
                    type="reset"
                    className="btn btn-danger ml-2"
                    style={{ fontSize: "20px" }}
                  >
                    <Link
                      to="/adminpage"
                      style={{ color: "white", textDecoration: "none" }}
                    >
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

export default AddCenter;
