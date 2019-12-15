import React from 'react';
import './App.sass';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Login from './components/login/login';

const Authenticated = false;

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/login" component={Login}/>
          {!Authenticated && <Redirect from="/" to="/login"/>}
        </Switch>
    </Router>
  );
}

export default App;
