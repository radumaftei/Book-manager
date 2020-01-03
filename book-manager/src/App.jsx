import React from 'react';
import './App.sass';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from './components/Auth/Login/login';

import Header from './components/Header/header';
import isAuthenticated from './components/Auth/auth';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/" component={isAuthenticated(Header)}/>
      </Switch>
    </Router>
  );
}

export default App;
