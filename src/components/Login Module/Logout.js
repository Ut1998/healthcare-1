import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class Logout extends Component {
    constructor(props) {
        super(props);
        localStorage.removeItem("tokenAdmin");
        localStorage.removeItem("tokenPatient");
    }
    render() {
        return (
            <div>
                <Redirect to="/login" />
            </div>
        );
    }
}

export default Logout;