import React from 'react';
// import { Container } from 'react-bootstrap';
import { Link,Redirect } from 'react-router-dom';
import ViewTest from './ViewTest';

import { Switch, Route } from 'react-router-dom';

class TestPage extends React.Component{ 
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

            
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <Link className="navbar-brand text-white text-uppercase ml-5" href="#"><b>Test Details</b></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
   aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
   

    {/* <span className="navbar-toggler-icon"></span> */}
    <span>
      <i className="fas fa-bars" style={{color:"#fff"}}/>
    </span>


  </button>
  

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav m-auto">
      <li className="nav-item active">
        <Link className="nav-link text-white text-uppercase ml-5" to="/adminpage">Home&nbsp;
        <i className="fas fa-home "></i> <span class="sr-only">(current)</span></Link>
      </li>

      <li className="nav-item">
       
          <Link className="nav-link text-white text-uppercase ml-5" to="/addtest">Add Test</Link>
          
        
      </li>

      <li className="nav-item">
        <Link className="nav-link text-white text-uppercase ml-5" to="/updatetest">Update Test</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link text-white text-uppercase ml-5" to="/removetest">Remove Test</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link text-white text-uppercase ml-5" to="/viewtest">View Test</Link>
        {/* <div className="container"><ViewTest/></div> */}
        {/* <div><Switch><Route path="/viewtest"component={ViewTest}/></Switch></div> */}
      </li>

      <li className="nav-item">
      <button className="btn btn-danger"  style={{ marginLeft: "60px" }}>
        <Link to="/logout" style={{ color: "white" }}>Sign Out</Link>
      </button>
      </li>
      




      {/* <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" href="#">Action</Link>
          <Link className="dropdown-item" href="#">Another action</Link>
          <div className="dropdown-divider"></div>
          <Link className="dropdown-item" href="#">Something else here</Link>
        </div>
      </li> */}


      {/* <li className="nav-item">
        <Link className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</Link>
      </li> */}



    </ul>
    {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
    </form> */}
  </div>
</nav>
        )
    }
  }
    export default  TestPage;
    