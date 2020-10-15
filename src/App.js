import React, { createContext, useState } from 'react';



import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AddService from './Components/Dashboard/AddService/AddService';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import MakeAdmin from './Components/Dashboard/MakeAdmin/MakeAdmin';
import Order from './Components/Dashboard/Order/Order';
import Review from './Components/Dashboard/Review/Review';
import ServiceList from './Components/Dashboard/ServiceList/ServiceList';

import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import PrivateRouter from './Components/PrivateRouter/PrivateRouter';

export const userContext=createContext()


function App() {
  const [loggedInuser, setloggedInUser]=useState({})
  
  

  return (
    <userContext.Provider value={[loggedInuser, setloggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route exact path="/home">
            <Home/>
          </Route>

          <Route path="/login">
            <Login/>
          </Route>

          {/* <Route path="/dashboard">
            <Dashboard/>
          </Route> */}

          

          <PrivateRouter path="/order/:productKey">
            <Order/>
          </PrivateRouter>

          <Route path="/order">
            <Order/>
          </Route>


          <Route path="/service">
            <ServiceList/>
          </Route>

          <Route path="/review">
            <Review/>
          </Route>

          <Route path="/addService">
            <AddService/>
          </Route>

          <Route path="/makeAdmin">
            <MakeAdmin/>
          </Route>

          
          <Route path="*">
            <h1>Not Found "404"</h1>
          </Route>
          
        </Switch>
      </Router>

    </userContext.Provider>
   
  );
}

export default App;
