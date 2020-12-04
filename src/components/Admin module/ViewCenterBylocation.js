import Axios from "axios";
import React from "react";
import { Link, Redirect } from "react-router-dom";

class ViewCenterByLocation extends React.Component {
  constructor(props) {
    super(props);
    const tokenAdmin = localStorage.getItem("tokenAdmin");
    let loggedIn = true;
    if (tokenAdmin == null) {
      loggedIn = false;
    }
    this.state = {
      loggedIn,
      address: "",
      arr: [],
    };
    this.onSub = this.onSub.bind(this);
  }

  onSub(e) {
    e.preventDefault();
    var url =
      "http://localhost:8080/health/retrievecenters/location/" +
      this.state.address;
    Axios.get(url).then((j) => this.setState({ arr: j.data }));
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
            <input
              className="form-control mr-sm-2"
              type="search"
              name="address"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => this.setState({ address: e.target.value })}
            />
            <input
              type="submit"
              value="Search"
              className="btn btn-success"
              onClick={this.onSub}
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
        <h1 className="text-center mt-2">View Center List</h1>
        <table className="table table-bordered mt-2">
          <tr>
            <th>Diagnostic Center Id</th>
            <th>Diagnostic Center Name</th>
            <th>Contact Details</th>
            <th>Center Address</th>
            <th>Contact Email</th>
            <th>Services Offered</th>
          </tr>
          {this.state.arr.map((n) => (
            <tr>
              <td>{n.centerId}</td>
              <td>{n.name}</td>
              <td>{n.contactNo}</td>
              <td>{n.address}</td>
              <td>{n.contactEmail}</td>
              <td>{n.servicesOffered}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default ViewCenterByLocation;
