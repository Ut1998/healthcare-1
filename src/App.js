import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login Module/Login';
import SignUp from './components/Login Module/SignUp';
import AddTest from './components/Admin module/AddTest';
import ViewTest from './components/Admin module/ViewTest';
import UpdateTest from './components/Admin module/UpdateTest';
import RemoveTest from './components/Admin module/RemoveTest';
import Logout from './components/Login Module/Logout';
import UserMainPage from './components/Patient Module/UserMainPage';
import AddAppointmentDropDown from './components/Patient Module/AddAppointmentDropDown';
import ViewAppointmentName from './components/Patient Module/ViewAppointmentName';
import ViewAppointmentAll from './components/Admin module/ViewAppointmentAll';
import Home from './components/Home';
import AdminPage from './components/Admin module/AdminPage';
import AddCenter from './components/Admin module/AddCenter';
import ListCenters from './components/Admin module/ListCenters';
import UpdateCenter from './components/Admin module/UpdateCenter';

function App() {
  return (
    <div>
       <Switch> 
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/logout" component={Logout} />
          <Route path="/adminpage" component={AdminPage} />
          <Route path="/addtest" component={AddTest} />
          <Route path="/viewtest" component={ViewTest} />
          <Route path="/updatetest/:testId" component={UpdateTest} />
          <Route path="/removetest" component={RemoveTest} />
          <Route path="/addCenter" component={AddCenter} />
          <Route path="/centerlist" component={ListCenters} />
          <Route exact path="/updatecenter/:centerId" component={UpdateCenter} />
          <Route path="/viewallappointment" component={ViewAppointmentAll} />
          <Route path="/usermainpage" component={UserMainPage} />
          <Route path="/addappointment" component={AddAppointmentDropDown} />
          <Route path="/viewappointment" component={ViewAppointmentName} />
       </Switch>
    </div>
  );
}

export default App;
