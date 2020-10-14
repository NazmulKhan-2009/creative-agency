import React, { createContext, useState } from 'react';



import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
// import PrivateRouter from './Components/PrivateRouter/PrivateRouter';

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

          
          <Route path="*">
            <h1>Not Found "404"</h1>
          </Route>
          
        </Switch>
      </Router>

    </userContext.Provider>
   
  );
}

export default App;
