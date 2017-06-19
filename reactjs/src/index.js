import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter, browserHistory, Switch} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Project from './pages/showProject';
import './index.css';

const root = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter history={browserHistory}>
  <Switch>
    <Route path="/register" component={Register}/>
    <Route path="/project" component={Project}/>
    <Route path="/" component={Login}/>
  </Switch>
</BrowserRouter>, root);
