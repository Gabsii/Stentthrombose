import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter, browserHistory} from 'react-router-dom';
import App from './pages/Login';
import Register from './pages/Register';
import './index.css';

const root = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter history={browserHistory}>
    <div>
      <Route path="/" component={App}/>
      <Route path="/register" component={Register} />
    </div>
  </BrowserRouter>, root
);
