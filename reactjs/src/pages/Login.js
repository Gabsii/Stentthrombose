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
    if(this.state.mail !== null && this.state.password !== null && this.state.token == null){
      console.log(this.state);
    }else{
      console.log("enter user and password")
    }
  }

  signTeam(){
    if(this.state.mail == null && this.state.password == null && this.state.token !== null && this.state.token !== ""){
      console.log(this.state);
    }else{
      console.log("enter token")
    }  }

  register(){
    console.log("Registrieren wurde noch nicht hinzugefügt.");
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
            <input type="email" placeholder="E-Mail" className="inputField" onChange={this.setMail.bind(this)} required/><br/>
            <input type="password" placeholder="Passwort" className="inputField" onChange={this.setPassword.bind(this)} required/><br/>
            <input type="submit" value="Sign in" onClick={this.signLeader.bind(this)}/><br/>
            <input type="submit" value="not registered?" onClick={this.register.bind(this)} />
          </form>
          </div>
      </div>

    )
  }
}

export default App;
