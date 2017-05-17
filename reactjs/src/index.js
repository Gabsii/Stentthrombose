import React from 'react';
import ReactDOM from 'react-dom';
import {Route, /*IndexRoute,*/ HashRouter} from 'react-router-dom';
import App from './pages/Login';
import './index.css';

const root = document.getElementById('root');

ReactDOM.render(
  <HashRouter>
      <Route path="/" component={App}></Route>
  </HashRouter>, root
);
