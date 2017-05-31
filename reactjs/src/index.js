import React from 'react';
import ReactDOM from 'react-dom';
import {Route, IndexRoute, HashRouter} from 'react-router-dom';
import App from './pages/Login';
import Register from './pages/Register';
import './index.css';

const root = document.getElementById('root');

ReactDOM.render(
  <HashRouter>
      <Route path="/" component={App} />
  </HashRouter>, root
);
