import React, { Component } from 'react';
import axios from 'axios';


class App extends React.Component {
  render() {
      return (
         <div className="row">
            <Header/>
         </div>
      );
   }
}

class Login extends Component {

  render (){
    return(

  <div>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-3 teamLogin">
          <form>
            TEAMS<br/>
              <input type="text" placeholder="Token" className="inputField" onChange={this.setToken.bind(this)} required/><br/>
              <button className="btn" onClick={this.signTeam.bind(this)}>
              Sign up
              </button>

          </form>
        </div>
        <div className="col-1 verticalline"></div>
        <div className="col-5 leaderLogin">
          <form>
            LEADER<br/>
            <input type="email" placeholder="Name" className="inputField" onChange={this.setMail.bind(this)} required/><br/>
            <input type="email" placeholder="E-Mail" className="inputField" onChange={this.setMail.bind(this)} required/><br/>
            <input type="password" placeholder="Passwort" className="inputField" onChange={this.setPassword.bind(this)} required/><br/>
            <button className="btn" onClick={this.signTeam.bind(this)}>
            Sign up
            </button><br/>
            <button className="btn" onClick={this.signTeam.bind(this)}>
            Not registered?
            </button>
          </form>
          </div>

      </div>
    </div>

    )
  }
}
