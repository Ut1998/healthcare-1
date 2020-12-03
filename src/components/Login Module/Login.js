import React, { Component } from 'react';
import Axios from 'axios';
import { Link, Redirect } from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        const tokenAdmin = localStorage.getItem("tokenAdmin");
        const tokenPatient = localStorage.getItem("tokenPatient");
        let loggedInAsAdmin = true;
        let loggedInAsPatient = true;
        if (tokenAdmin == null) {
            loggedInAsAdmin = false;
        }
        if (tokenPatient == null) {
            loggedInAsPatient = false
        }
        this.state = {
            userName: '',
            password: '',
            role: '',
            loggedInAsAdmin,
            loggedInAsPatient,
            resp: {}
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
    }

    changeUserNameHandler = (event) => {
        this.setState({ userName: event.target.value });
    }

    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    }
    async onSubmit(e) {
        // debugger;
        e.preventDefault();
        // let resp = null;
        try {
            await Axios.get(`http://localhost:8080/health/login/signIn/${this.state.userName}/${this.state.password}`)
                .then(response => {
                    // debugger
                    console.log('RESPONSE', response.data);
                    this.setState({
                        resp: response.data
                    });
                    if (this.state.resp.userName === this.state.userName && this.state.resp.password === this.state.password && this.state.resp.role === "admin") {
                        localStorage.setItem("tokenAdmin", "admin")
                        this.setState({ loggedInAsAdmin: true });
                    }
                    if (this.state.resp.userName === this.state.userName && this.state.resp.password === this.state.password && this.state.resp.role === "user") {
                        localStorage.setItem("tokenPatient", "patient")
                        this.setState({ loggedInAsPatient: true });
                    }
                });
            // debugger;
        } catch (err) {
            alert("Invalid user Id or password.");
        }
    }
    render() {
        console.log(this.state.loggedIn);
        if (this.state.loggedInAsAdmin) {
            return <Redirect to="/adminpage" />
        }
        if (this.state.loggedInAsPatient) {
            return <Redirect to="/usermainpage" />
        }
        return (
            <div>
                <div>
                    <header>
                        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                            <div className="navbar-brand">Health Care Management </div>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <Link className="nav-link " to="/">Home</Link>
                                    </li>
                                    <li class="nav-item active">
                                        <Link className="nav-link " to="/signup">Sign Up</Link>
                                    </li>
                                </ul>
                            </ div>
                        </nav>
                    </header>
                </div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                <h3 className="text-center">Login</h3>
                            }
                            <div className="card-body">
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <label> User Name : </label>
                                        <input placeholder="Enter your username" name="userName" className="form-control"
                                            value={this.state.userName} onChange={this.changeUserNameHandler} autoComplete="off" required />
                                    </div>
                                    <div className="form-group">
                                        <label> Password : </label>
                                        <input type="password" placeholder="Enter your password" name="password" className="form-control"
                                            value={this.state.password} onChange={this.changePasswordHandler} required />
                                    </div>
                                    <input type="submit" className="btn btn-success btn-lg btn-block" value="Login" />
                                                    </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;