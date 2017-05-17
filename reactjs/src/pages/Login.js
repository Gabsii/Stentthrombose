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
  constructor(){
    super();
    this.state = {
      token: null,
      mail: null,
      password: null
    }
  }

  setToken(e){
    this.setState({ token: e.target.value });
  }

  setMail(e){
    this.setState({ mail: e.target.value });
  }

  setPassword(e){
    this.setState({ password: e.target.value });
  }

  signLeader(){
    console.log(this.state);
  }

  signTeam(){
    console.log(this.state);
  }

  render (){
    return(
      <div>
        <div className="teamlogin">
          <Header/>
          <form>
            TEAMS<br/>
              <input type="text" placeholder="Token" className="inputField" onChange={this.setToken.bind(this)} required/><br/>
              <input type="submit" value="Sign in" onClick={this.signTeam.bind(this)}/>
          </form>
        </div>
        <div className="leaderlogin">
          <form>
            PROJECTLEADER<br/>
            <input type="text" placeholder="E-Mail" className="inputField" onChange={this.setMail.bind(this)} required/><br/>
            <input type="text" placeholder="Passwort" className="inputField" onChange={this.setPassword.bind(this)} required/><br/>
            <input type="submit" value="Sign in" onClick={this.signLeader.bind(this)}/><br/>
            <input type="submit" value="not registered?"/>
          </form>
          </div>
      </div>

    )
  }
}

export default App;
