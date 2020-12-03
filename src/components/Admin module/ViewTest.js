import React, { Component } from 'react';
import TestService from '../../Services/TestService';
import { Link, Redirect } from 'react-router-dom';

class ViewTest extends Component {
    constructor(props)
    {
        super(props);
        const tokenAdmin = localStorage.getItem("tokenAdmin");
        let loggedIn= true;
        if(tokenAdmin == null){
            loggedIn = false;
        }
        this.state={
            tests:[],
            loggedIn
        }
    }
    componentDidMount(){
        TestService.getAllTest().then((res) =>
        {
            this.setState({ tests : res.data });
        });
    }
    render() {
        if(this.state.loggedIn === false){
            return <Redirect to="/login" />
        }
        return (
            <div>
                <h2 className="text=center"><center><b>View Test</b></center></h2>
                <Link to="/logout">Logout</Link>
                <div className="row" style={{margin:"20px"}}>
                    <table className="table table-striped table-bordered" >
                        <thead><tr><th>Test Name</th><th>Test Price</th><th>Normal Value</th><th>Units</th><th>Centers</th></tr></thead>
                        <tbody>
                            {
                                this.state.tests.map(
                                    test =>
                                    <tr key={test.id}>
                                        <td>{test.testName}</td>  
                                        <td>{test.testPrice}</td>
                                        <td>{test.normalValue}</td>
                                        <td>{test.units}</td>
                                        <td>{test.diagnosticCenter.name}</td>

                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default  ViewTest;
