import React, { Component } from 'react';
import './Login.css';

class App extends Component {
  render() {
      return (
         <div>
            <Login/>
         </div>
      );
   }
}

class Header extends React.Component {
   render() {
      return (
         <div className="header">
            <h1>Stenttrombose</h1>

         </div>
      );
   }
}

class Login extends Component {
  render (){
    return(
      <div>
        <div className="teamlogin">
          <Header/>
          <form>
            TEAMS<br/>
              <input type="text" placeholder="Token" className="inputField"/><br/>
              <input type="submit" value="Sign in"/>
          </form>
        </div>
        <div className="leaderlogin">
          <form>
            PROJECTLEADER<br/>
            <input type="text" placeholder="E-Mail" className="inputField"/><br/>
            <input type="text" placeholder="Passwort" className="inputField"/><br/>
            <input type="submit" value="Sign in"/><br/>
            <input type="submit" value="not registered?"/>
          </form>
          </div>
      </div>

    )
  }
}

export default App;