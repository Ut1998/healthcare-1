import Axios from 'axios';
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
 
class ViewAppointmentName extends React.Component {
    constructor(props) {
        super(props);
        const tokenPatient = localStorage.getItem("tokenPatient");
        let loggedInAsPatient = true;
        if(tokenPatient == null){
            loggedInAsPatient = false
        }
        this.state = {
            loggedInAsPatient,
            userName: '',
            arr: []
        }
        this.onSub = this.onSub.bind(this);
    }
 
    onSub(e) {
        e.preventDefault();
        var url='http://localhost:8080/health/appointment/retrieveappointmentpatientName/' + this.state.userName;
        Axios.get(url).then(j => this.setState({ arr: j.data }));
        }
    
    render() {
        if(this.state.loggedInAsPatient === false){
            return <Redirect to="/login" />
        }
        return (
        <div>
            <form onSubmit={this.onSub}>
            <br />
            <h3 className = "text-center"> View Appointment Details</h3><br />
            <Link to="/logout">Logout</Link>
           <pre>                                                    <b>Enter UserName to Search: </b><input type="text" name="userName" onChange={(e) => this.setState({ userName: e.target.value })} />            <input type="submit" value="Search" className="btn btn-success" /></pre>
            </form>  
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
 
export default ViewAppointmentName; //call TestCompA in App.js