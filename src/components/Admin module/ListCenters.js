import React, { Component } from "react";
import DiagnosticCenterService from "../../Services/DiagnosticCenterService";
import { Link, withRouter,Redirect } from "react-router-dom";

class ListCenters extends React.Component {
  constructor(props) {
    super(props);
    const tokenAdmin = localStorage.getItem("tokenAdmin");
    let loggedIn= true;
    if(tokenAdmin == null){
        loggedIn = false;
    }
    this.state = {
      loggedIn,
      centers: [],
      searchTerm: "",
    };
    this.updateCenter = this.updateCenter.bind(this);
    this.deleteCenter = this.deleteCenter.bind(this);
    this.editSearch = this.editSearch.bind(this);
  }

  editSearch = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  componentDidMount() {
    DiagnosticCenterService.viewAllCenters().then((res) => {
      this.setState({ centers: res.data });
    });
  }

  updateCenter = (centerId) => {
    this.props.history.push(`/updatecenter/${centerId}`);
  };

  deleteCenter = (centerId) => {
    DiagnosticCenterService.deleteDiagnosticCenter(centerId).then((res) => {
      this.setState({
        centers: this.state.centers.filter(
          (center) => center.centerId !== centerId
        ),
      });
    });
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
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={this.editSearch}
            />
            <Link
              to="/addcenter"
              className="nav-link text-black mr-5"
              style={{ color: "white", fontSize: "25px" }}
            >
              Add Center
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
        <h1 className="text-center">Diagnostic Center List</h1>
        <div className="row"></div>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>DiagnosticCenter Name</th>
              <th>DiagnosticCenter Contact</th>
              <th>DiagnosticCenter Address</th>
              <th>DiagnosticCenter Email</th>
              <th>Service offered</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.centers.map((center) => (
              <tr key={center.centerId}>
                <td>{center.name}</td>
                <td>{center.contactNo}</td>
                <td>{center.address}</td>
                <td>{center.contactEmail}</td>
                <td>{center.servicesOffered}</td>
                <td>
                  <button
                    onClick={() => this.updateCenter(center.centerId)}
                    className="btn btn-info"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => this.deleteCenter(center.centerId)}
                    className="btn btn-danger ml-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default withRouter(ListCenters);
