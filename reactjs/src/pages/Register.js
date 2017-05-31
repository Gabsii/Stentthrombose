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
            <div className="col-5"></div>
            <div className="col-2 leaderLogin">
              <form>
                LEADER<br/>
                <input type="email" placeholder="Name" className="inputField" onChange={this.setMail.bind(this)} required/><br/>
                <input type="email" placeholder="E-Mail" className="inputField" onChange={this.setMail.bind(this)} required/><br/>
                <input type="password" placeholder="Passwort" className="inputField" onChange={this.setPassword.bind(this)} required/><br/>
                <button className="btn" onClick={this.signTeam.bind(this)}>
                Submit
                </button><br/>
              </form>
            </div>
            <div className="col-5"></div>
          </div>
        </div>

    )
  }
}
