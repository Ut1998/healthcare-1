import Axios from 'axios';
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
 
class ViewAppointmentAll extends React.Component {
    constructor(props) {
        super(props);
    const tokenAdmin = localStorage.getItem("tokenAdmin");
    let loggedIn= true;
    if(tokenAdmin == null){
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
        if(this.state.loggedIn === false){
            return <Redirect to="/login" />
        }
        return (<div>
            <br />
            <center><h2>Appointment List</h2></center>
            <Link to="/logout">Logout</Link>
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