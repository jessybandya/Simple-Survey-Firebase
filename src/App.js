import './App.css';
import {BrowserRouter as Router, Link, Route, Switch, Redirect} from 'react-router-dom';
import { useState,useEffect } from 'react';
import Home from './components/Home';
import Login from "./components/Login"



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/signIn" component={Login}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
