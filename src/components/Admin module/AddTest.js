import React, { Component } from 'react';
import TestService from '../../Services/TestService';
import {withRouter} from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from 'axios';

class AddTest extends Component {
    constructor(props)
    {
        super(props);
        this.state={
           
            diagnosticTest:[]
                // testName:'',
                // testPrice:'',
                // normalValue:'',
                // units:'',
                // diagnosticCenters:[
                //     {
                //     name:''}
                // ]
             
        }
        this.changeTestNameHandler=this.changeTestNameHandler.bind(this);
        this.changeTestPriceHandler=this.changeTestPriceHandler.bind(this);
        this.changeNormalValueHandler=this.changeNormalValueHandler.bind(this);
        this.changeUnitsHandler=this.changeUnitsHandler.bind(this);
        this.saveTest=this.saveTest.bind(this);
    }
    changeTestNameHandler = (e) =>
    {
        this.setState({testName : e.target.value});
        
    }
    changeTestPriceHandler = (e) =>
    {
        this.setState({testPrice : e.target.value});
    }
    changeNormalValueHandler = (e) =>
    {
        this.setState({normalValue : e.target.value});
    }
    changeUnitsHandler = (e) =>
    {
        this.setState({units : e.target.value});
    }
    saveTest = (e) =>
    {
        e.preventDefault();
        let test={testName:this.state.diagnosticTest.testName, testPrice:this.state.diagnosticTest.testPrice,normalValue:this.state.diagnosticTest.normalValue,units:this.state.diagnosticTest.units};
        console.log('test => '+JSON.stringify(test));

        const { history } = this.props;

        TestService.addTest(test).then(res => {
            history.push("/viewtest");
        });
    }
    cancel(){
        //preventDefault();
        this.props.history.push("/adminpage");
    }

    componentDidMount(){
        axios.get("http://localhost:8080/health/tests/getAllTests").then(response =>
        {
            this.setState({
                diagnosticTest:response.data
            });
        })
    }

    render() {
        
        return (
            
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text=center"><center><b>Add Test</b></center></h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label> Test Name : </label>
                                    <input placeholder="Test Name" name="testName" className="form-control" required name="testName"
                                    value={this.state.testName} onChange={this.changeTestNameHandler}/>
                                </div>
                                <div className="form-group">
                                    <label> Test Price : </label>
                                    <input placeholder="Test Price" name="testPrice" className="form-control" required name="testPrice"
                                    value={this.state.testPrice} onChange={this.changeTestPriceHandler}/>
                                </div>
                                <div className="form-group">
                                    <label> Normal Value : </label>
                                    <input placeholder="Normal Value" name="normalValue" className="form-control" required name="normalValue"
                                    value={this.state.normalValue} onChange={this.changeNormalValueHandler}/>
                                </div>
                                <div className="form-group">
                                    <label> Units : </label>
                                    <input placeholder="Units" name="units" className="form-control" required name="units"
                                    value={this.state.units} onChange={this.changeUnitsHandler}/>
                                </div>
                                {/* <div className="form-group">
                                    <label> Units : </label>
                                    <select value={ this.state.diagnosticCenters.map(
                                    test =><option value={this.test.name}></option>
                                    }
                                  
                                </div> */}

                                
                            <div>
                                <table>
                                    <tr>
                                        <td>
                                        <label> Diagnostic Center : </label>
                                        {/* <select className="form-group" >
                                            <option value="select center"> Select Center</option> */}
                                            
                                             {/* //   <option value={this.state.diagnosticCenters}>{this.state.diagnosticCenters.name}</option> */}
                                            {/* </select> */}

                                            
                             <select>
                                 
                                {
                                 this.state.diagnosticTest.map(dtest => <option key={dtest.diagnosticCenter.id} value={ dtest.diagnosticCenter.id }>{ dtest.diagnosticCenter.name }</option>)
                                    
                                }
                            </select>
                                        </td>
                                        
                                    </tr>
                                    <tr>
                                    <td>
                                            <label>Test center not found? Add now</label>
                                            </td><td>
                                            <button className="btn btn-primary"  style={{ marginLeft: "10px" }}>
                                    <Link to="/addCenter" style={{ color: "white" }}>
                                    Add Test Center
                                    </Link>
                            </button>
                                        </td>
                                    </tr>
                                </table>
                            
                            
                            </div>
                                   


                                <button className="btn btn-success" onClick={this.saveTest}>Save</button>
                                {/* <button className="btn btn-danger" onClick={this.change.bind(this)} style={{margin:"10px"}}>Cancel</button> */}
                                <button className="btn btn-danger"  style={{ marginLeft: "10px" }}>
                                    <Link to="/adminpage" style={{ color: "white" }}>
                                    Cancel
                                    </Link>
                            </button>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(AddTest);
