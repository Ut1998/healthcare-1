import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import TestService from '../../Services/TestService';
class RemoveTest extends React.Component{
constructor(props)
{
    super(props);
    const tokenAdmin = localStorage.getItem("tokenAdmin");
    let loggedIn= true;
    if(tokenAdmin == null){
        loggedIn = false;
    }
    this.state={
        tests:[],
        loggedIn
    }
    this.removeTest = this.removeTest.bind(this);
}

removeTest = (id) => {
    TestService.removeTest(id).then((res) => {
      this.setState({
        tests: this.state.tests.filter(
          (test) => test.id !== id
        ),
      });
    });
  };

componentDidMount(){
    TestService.getAllTest().then((res) =>
    {
        this.setState({ tests : res.data });
    });
}
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
              to="/viewtest"
              className="nav-link text-black mr-5"
              style={{ color: "white", fontSize: "25px" }}
            >
              View Tests
            </Link>
            <Link
              to="/addtest"
              className="nav-link text-black mr-5"
              style={{ color: "white", fontSize: "25px" }}
            >
              Add test
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

            <div className="row" style={{margin:"20px"}}>
                <table className="table table-striped table-bordered" >
                    <thead><tr><th>Test Name</th><th>Test Price</th><th>Normal Value</th><th>Units</th><th>Actions</th></tr></thead>
                    <tbody>
                        {
                            this.state.tests.map(
                                test =>
                                <tr key={test.id}>
                                    <td>{test.testName}</td>  
                                    <td>{test.testPrice}</td>
                                    <td>{test.normalValue}</td>
                                    <td>{test.units}</td>
                                    {/* <td>{test.diagnosticCenter.name}</td> */}
                                    <td>
                                    <button
                    onClick={() => this.removeTest(test.id)}
                    className="btn btn-danger ml-2"
                  >
                    Delete
                  </button>
                                    </td>

                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
}
export default RemoveTest;
