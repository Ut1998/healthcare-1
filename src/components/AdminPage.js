import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class AdminPage extends Component {
    constructor(props){
        super(props);
        const tokenAdmin = localStorage.getItem("tokenAdmin");
        let loggedIn= true;
        if(tokenAdmin == null){
            loggedIn = false;
        }
        this.state ={
            loggedIn
        }
    }
    render() {
        if(this.state.loggedIn === false){
            return <Redirect to="/login" />
        }
        return (
            <div>
                <h1>This is an admin page. Only auth people can see this</h1>
                <Link to="/logout">Logout</Link>
            </div>
        );
    }
}

export default AdminPage;