import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as HashRouter, Link} from 'react-router-dom';
import App from './pages/Login';
import Register from './pages/Register';
import './index.css';

const root = document.getElementById('root');

ReactDOM.render(
  <HashRouter>
    <div>
      <Route path="/" component={App}/>
      <Route path="/register" component={Register} />
    </div>
  </HashRouter>, root
);
