import React from 'react';
import './App.sass';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Login from './components/Auth/Login/login';
import NewsFeed from './components/Dashboard/NewsFeed/news-feed';
import {Authenticated} from "./shared/constants";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login}/>
        {!Authenticated && <Redirect from="/" to="/login"/>}
        <Route path="/" component={NewsFeed}/>
        {!Authenticated && <Redirect from="/" to="/dashboard"/>}
      </Switch>
    </Router>
  );
}

export default App;
