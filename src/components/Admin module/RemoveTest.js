import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

 class RemoveTest extends Component {
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
                <h2>Remove Test</h2>
                <Link to="/logout">Logout</Link>
            </div>
        )
    }
}
export default RemoveTest;
