import React, { Component } from "react";
import { Link,Redirect } from "react-router-dom";
//import health1 from "./health1.jpg";

class UserMainPage extends React.Component {
  constructor(props) {
    super(props);
        const tokenPatient = localStorage.getItem("tokenPatient");
        let loggedInAsPatient = true;
        if(tokenPatient == null){
            loggedInAsPatient = false
        }
        this.state ={
            loggedInAsPatient
        }
  }

  render() {
    if(this.state.loggedInAsPatient === false){
        return <Redirect to="/login" />
    }
    return (
    <div>
        <br/>
        {/* <br/> */}
        <h1><b><center>Welcome User</center></b></h1>
        {/* <br/> */}
        {/* <br/> */}
        <hr/>
        <Link to="/logout">Logout</Link>
        <br/>
        <div className="container">
            <center>
            <div className="row">
                        <div className="col-sm">
                            <div class="card" style={{width: "20rem"}}>
                                <img src="https://www.globetown.org/website/F84123/files/appointment_1.jpg" 
                                class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Make an Appointment</h5>
                                    <p class="card-text">Schedule an appointment at your convenience. 
                                    Select the day, time and location you would like to visit. Plan to arrive 10 minutes early. Bring all the necessary documents to
                                    get tested.</p>
                                    <Link to="/addappointment" class="btn btn-primary">Make Appointment</Link>
                                </div>
                            </div>

                        </div>
                        <div className="col-sm">
                            <div class="card" style={{width: "20rem"}}>
                                <img src="https://www.globetown.org/website/F84123/files/appointment_1.jpg" 
                                class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">View my Appointments</h5>
                                    <p class="card-text">View your scheduled appointments</p>
                                    <Link to="viewappointment" class="btn btn-primary">View My Appointment</Link>
                                </div>
                            </div>

                        </div>
                    </div>
            </center>
        </div>
    </div>

    );
}}
export default UserMainPage;