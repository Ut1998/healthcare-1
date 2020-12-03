import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            userName: '',
            password:'',
            phoneNo:'',
            age:'',
            gender:'',
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changePhoneNoHandler = this.changePhoneNoHandler.bind(this);
        this.changeAgeHandler = this.changeAgeHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.addUser = this.addUser.bind(this);
    }

    addUser = async (e) => {
        e.preventDefault();
        let user = {firstName: this.state.firstName, lastName: this.state.lastName, userName: this.state.userName, password:this.state.password,
                        age:this.state.age, phoneNo:this.state.phoneNo, gender:this.state.gender};
        let resp = null;   
        try {
            resp = await axios.post("http://localhost:8080/health/patient/addpatient", user);
            console.log('user => ' + JSON.stringify(user));
            alert("user added successfully");
        } catch (error) {
            alert("Username already exists, please enter a different user name.");
        }             
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeUserNameHandler= (event) => {
        this.setState({userName: event.target.value});
    }

    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }

    changeAgeHandler= (event) => {
        this.setState({age: event.target.value});
    }

    changePhoneNoHandler= (event) => {
        this.setState({phoneNo: event.target.value});
    }

    changeGenderHandler= (event) => {
        this.setState({gender: event.target.value});
    }
  
    render() {
        return (
            <div>
                <div>
                <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div className="navbar-brand">Health Care System </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link " to="/">Home</Link>
                            </li>
                            <li class="nav-item active">
                                <Link className="nav-link " to="/login">Login</Link>
                            </li>
                        </ul>
                    </ div>
                </nav>    
                </header>
            </div>
        
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    <h3 className="text-center">Sign Up</h3>
                                }
                                <div className = "card-body">
                                    <form onSubmit={this.addUser}>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="Tony" name="firstName" className="form-control" pattern="[A-Z][A-Za-z]{1,}" title="First letter should be capital and should not contain spaces"
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler} autoComplete="off" required/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Stark" name="lastName" className="form-control" pattern="[A-Z][A-Za-z]{1,}" title="First letter should be capital and should not contain spaces"
                                                value={this.state.lastName} onChange={this.changeLastNameHandler} autoComplete="off" required/>
                                        </div>
                                        <div className = "form-group">
                                            <label> User Name: </label>
                                            <input placeholder="Enter something unique" name="userName" className="form-control" 
                                                value={this.state.userName} onChange={this.changeUserNameHandler} autoComplete="off" required/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Password: </label>
                                            <input type="password" placeholder="PassWord123" name="password" className="form-control" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" value={this.state.password} onChange={this.changePasswordHandler} required/>       
                                        </div>
                                        <div className = "form-group">
                                            <label> Age </label>
                                            <input type="text" placeholder="23" name="age" className="form-control" pattern="[0-9]{1,3}" title="Must be a number"
                                                value={this.state.age} onChange={this.changeAgeHandler} autoComplete="off" required/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Phone Number </label>
                                            <input type="text" placeholder="9616787297" name="phoneNo" className="form-control" pattern="[6-9][0-9]{9}" autoComplete="off"
                                               title="Should start with 6-9 and must be 10 digits." value={this.state.phoneNo} onChange={this.changePhoneNoHandler} required/>
                                        </div>
                                        <label> Gender: </label> &nbsp;
                                        <div className = "form-check form-check-inline">
                                            <input type="radio" name="gender" className="form-check-input" id="male"
                                                value="Male" onChange={this.changeGenderHandler}required/>
                                            <label class="form-check-label" for="male">Male</label>
                                        </div>
                                        <div className = "form-check form-check-inline">
                                            <input type="radio" name="gender" className="form-check-input" id="female"
                                                value="Female" onChange={this.changeGenderHandler}required/>
                                            <label class="form-check-label" for="female">Female</label>
                                        </div>
                                        <div className = "form-check form-check-inline">
                                            <input type="radio" name="gender" className="form-check-input" id="other"
                                                value="Other" onChange={this.changeGenderHandler}required/>
                                            <label class="form-check-label" for="other">Other</label>
                                        </div>
                                        <br /> <br />
                                        <input type="submit" className="btn btn-success btn-lg btn-block" value="Submit" />
                                    </form>
                                    {/* <div className="alert alert-success">{this.state.resp}</div> */}
                                </div>
                            </div>
                        </div>
                   </div>
            </div>
        )
    }
}

export default SignUp;
