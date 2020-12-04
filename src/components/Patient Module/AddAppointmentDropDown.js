import Axios from 'axios';
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
 
class AddAppointmentDropDown extends React.Component {
    constructor(props) {
        super(props);
        const tokenPatient = localStorage.getItem("tokenPatient");
        let loggedInAsPatient = true;
        if(tokenPatient == null){
            loggedInAsPatient = false
        }
        this.state = {
            loggedInAsPatient,
            appointmentDate: '',
            approvalStatus: 1,
            diagnosis: '',
            symptoms: '',
            diagnosticTestId: [],
            selectedTest: 0,
            // username: '',
          //  diagnosticCenterId: 0,
          diagnosticCenterId: [],
          selectedCenter :0,
            resp:''
        }
        this.onSub = this.onSub.bind(this);
    }

    
    componentDidMount() {
        Axios.get('http://localhost:8080/health/appointment/retrievealltest').then(j => {
            this.setState({ diagnosticTestId: j.data });
        });
    }

    getSelectedTests = (e) => {
        let val = e.target.value;
        var url1 ='http://localhost:8080/health/appointment/retrieveallcenter/' + val;
        console.log(url1); 
        Axios.get(url1).then(k => {
                    this.setState({ selectedTest: val, diagnosticCenterId: k.data });
                });

    }

    getSelectedCenter = (e) => {
        let val = e.target.value;
        this.setState({ selectedCenter: val})
    }
 
    onSub(e) {
        e.preventDefault();
        var url='http://localhost:8080/health/appointment/addAppointmentbydropdown/' + this.state.appointmentDate + '/' + this.state.approvalStatus + '/' + this.state.diagnosis + '/' + this.state.symptoms + '/' + this.state.selectedTest + '/' + this.state.selectedCenter;
        console.log(url);
        Axios.post(url).then(j => this.setState({ resp: JSON.stringify(j.data) }));
        alert("Appointment added Successfully");
 
    }
 
    render() {
        if(this.state.loggedInAsPatient === false){
            return <Redirect to="/login" />
        }
        return (
            <div>
                <div>
                <nav
          className="navbar navbar-dark bg-dark"
          style={{
            backgroundImage:
              "linear-gradient(223.88deg, #848484 8.89%, #000000 94.31%)",
          }}
        >
          <Link
            to="/usermainpage"
            className="navbar-brand"
            style={{ color: "white", fontSize: "30px", textDecoration: "none" }}
          >
            User
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
            <br></br>
            <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Appointment</h3>
                            <div className = "card-body">
                                <form onSubmit={this.onSub}>
                                    {/* <div className = "form-group">
                                        <label> User Name </label>
                                        <input type='text' placeholder="Enter User Name" name="username" className="form-control" 
                                            onChange={(e) => this.setState({ username: e.target.value})}/>
                                    </div> */}
                                    <div className = "form-group">
                                        <label> Appointment Date </label>
                                        <input type="date" name="appointmentDate" className="form-control" 
                                            onChange={(e) => this.setState({ appointmentDate: e.target.value })} />
                                    </div>
                                    <div className = "form-group">
                                        <label> Diagnosis </label>
                                        <input placeholder="Enter Diagnosis" type="text" name="diagnosis" onChange={(e) => this.setState({ diagnosis: e.target.value })}  className="form-control" />
                                    </div>
                                    <div className = "form-group">
                                        <label> Symptom </label>
                                        <input placeholder="Enter Symptom" type="text" name="symptoms" onChange={(e) => this.setState({ symptoms: e.target.value })}  className="form-control" />
                                    </div>
                                    <div className = "form-group">
                                    <label> Diagnostic Test Name </label>
                                        <select
                                        onChange={this.getSelectedTests} className="form-control">
                                        <option>Select Test</option>
                                        {
                                            this.state.diagnosticTestId.map(n => <option key={n.id} value={n.id}>{n.testName}</option>)
                                        }
                                        </select>
                                    </div>
                                    <div className = "form-group">
                                    <label> Diagnostic Center Name </label>
                                        <select
                                            onChange={this.getSelectedCenter} className="form-control">
                                            <option>Select Center</option>
                                            {
                                                this.state.diagnosticCenterId.map(m => <option key={m.centerId} value={m.centerId}>{m.name}</option>)
                                            }
                                        </select>
                                    </div>
                                    <pre>                  <input type="submit" value="Save" className="btn btn-success" />            <button type="reset" className="btn btn-primary"  style={{ marginLeft: "10px" }}>
                                    <Link to="/usermainpage" style={{ color: "white" }}>
                                    Cancel
                                    </Link>
                            </button></pre>
                                </form>
                                {/* <div className="alert alert-danger">{this.state.resp}</div> */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
 
export default AddAppointmentDropDown;