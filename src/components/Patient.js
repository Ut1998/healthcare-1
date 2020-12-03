import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class Patient extends Component {
    constructor(props){
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
                <h1>This is the patient page. Only auth people can see this</h1>
                <Link to="/patienttwo">Second Patient Page</Link> <br />
                <Link to="/logout">Logout</Link>
            </div>
        );
    }
}

export default Patient;