import Axios from 'axios';
import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class ViewAppointmentAll extends React.Component {
    constructor(props) {
        super(props);
        const tokenAdmin = localStorage.getItem("tokenAdmin");
        let loggedIn = true;
        if (tokenAdmin == null) {
            loggedIn = false;
        }
        this.state = {
            loggedIn,
            arr: []
        }
    }

    componentDidMount() {
        Axios.get('http://localhost:8080/health/appointment/retrieveallappointment').then(j => {
            this.setState({ arr: j.data })
        });
    }
    render() {
        if (this.state.loggedIn === false) {
            return <Redirect to="/login" />
        }
        return (<div>
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
                            to="/logout"
                            className="nav-link text-black mr-5"
                            style={{ color: "white", fontSize: "25px" }}
                        >
                            Logout
            </Link>
                    </form>
                </nav>
            </div>
            <br />
            <center><h2>Appointment List</h2></center>
            <br />
            <table className="table table-bordered">
                <tr><th>Appointment Id</th><th>Patient UserName</th><th>Appointment Date</th><th>Diagnosis</th><th>Symptoms</th><th>Diagnostic Test Name</th><th>Diagnostic Center Name</th></tr>
                {
                    this.state.arr.map(n => <tr><td>{n.id}</td><td>{n.patient.userName}</td><td>{n.appointmentDate}</td><td>{n.diagnosis}</td><td>{n.symptoms}</td><td>{n.diagnosticTest.testName}</td><td>{n.diagnosticCenter.name}</td></tr>)
                }
            </table>
        </div>
        );
    }

}

export default ViewAppointmentAll; //call TestCompA in App.js