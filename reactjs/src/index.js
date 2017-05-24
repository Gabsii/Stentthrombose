import React from 'react';
import ReactDOM from 'react-dom';
import {Route, IndexRoute, HashRouter} from 'react-router-dom';
import {Login, Header} from './pages/Login';
import './index.css';

const root = document.getElementById('root');

class App extends Component {
  render() {
      return (
         <div>
            <Header/>
            <Login/>
         </div>
      );
   }
}

ReactDOM.render(
  <HashRouter>
      <Route path="/" component={App}></Route>
  </HashRouter>, root
);
