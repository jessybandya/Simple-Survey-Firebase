import './App.css';
import {BrowserRouter as Router, Link, Route, Switch, Redirect} from 'react-router-dom';
import { useState,useEffect } from 'react';
import Home from './components/Home';
import Login from "./components/Login"

import Test from "./components/Test"
import Registerinstitution from './components/Registerinstitution';
import Registerstudent from './components/Registerstudent';
import Registerindividual from './components/Registerindividual';
import Ongoingsurvey from './components/Ongoingsurvey';
import Researchfindings from './components/Researchfindings';
import Recommendedbooks from './components/Recommendedbooks';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/signIn" component={Login}/>
          <Route exact path="/test" component={Test}/>
          <Route exact path="/registerInstitution" component={Registerinstitution}/>
          <Route exact path="/registerstudent" component={Registerstudent}/>
          <Route exact path="/registerindividual" component={Registerindividual}/>
          <Route exact path="/ongoingsurveys" component={Ongoingsurvey}/>
          <Route exact path="/researchfindings" component={Researchfindings}/>
          <Route exact path="/recommendedbooks" component={Recommendedbooks}/>

          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
