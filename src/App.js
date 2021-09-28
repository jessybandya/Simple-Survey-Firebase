import './App.css';
import {BrowserRouter as Router, Link, Route, Switch, Redirect} from 'react-router-dom';
import { useState,useEffect } from 'react';
import Home from './components/Home';
import Login from "./components/Login"

import Test from "./components/Test"
import Registerinstitution from './components/Registerinstitution';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/signIn" component={Login}/>
          <Route exact path="/test" component={Test}/>
          <Route exact path="/registerInstitution" component={Registerinstitution}/>

          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
