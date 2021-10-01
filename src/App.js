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
import Buyresearchaudience from './components/Buyresearchaudience';
import Registerstudentcomplete from './components/Registerstudentcomplete';
import { auth } from "./components/firebase"
import {useDispatch} from "react-redux"





function App() {
   const dispatch = useDispatch()

   useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if(user){
        const idTokenResult = await user.getIdTokenResult()
        console.log("user", user)
        dispatch({
          type: 'LOGGED_IN_USER',
          payload: {
            email: user.email,
            token: idTokenResult.token,
          }

        })
      }
    });
    //cleanup
    return () => unsubscribe();
   }, [])

  
  return (
    <div className="App">
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
          <Route exact path="/buyresearchaudience" component={Buyresearchaudience}/>
          <Route exact path="/registerstudent/complete" component={Registerstudentcomplete}/>

          
        </Switch>
    </div>
  );
}

export default App;
