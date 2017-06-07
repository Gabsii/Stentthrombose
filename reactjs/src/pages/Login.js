import React, { Component } from 'react';
import './Login.css';
import axios from 'axios';
import Header from './Header.js';
import {Link} from 'react-router-dom';

class Login extends Component {
  render() {
      return (
         <div className="row bad">
            <Header/>
            <Logins/>
         </div>
      );
   }
}

class Logins extends Component {
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
    axios.get('http://localhost:80/Stentthrombose/api/user/login.php', {
        email: this.state.mail,
        password: this.state.password
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }else{
      console.log("enter user and password")
    }
  }

  signTeam(){
    if(this.state.mail == null && this.state.password == null && this.state.token !== null && this.state.token !== ""){
      console.log(this.state);
      axios.get('http://localhost:80/Stentthrombose/api/team/login.php', {
          email: this.state.mail,
          password: this.state.password
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }else{
      console.log("enter token")
    }
  }

  render (){
    return(

      <div className="row">
        <div className="col-3"></div>
        <div className="col-3 teamLogin">
          <form>
            TEAMS<br/>
              <input type="text" placeholder="Token" className="inputField" onChange={this.setToken.bind(this)} required /><br/>
              <input type="submit" className="btn" onClick={this.signTeam.bind(this)}/>
          </form>
        </div>
        <div className="col-1"></div>
        <div className="col-5 leaderLogin">
          <form>
            LEADER<br/>
            <input type="email" placeholder="E-Mail" className="inputField" onChange={this.setMail.bind(this)} required /><br/>
            <input type="password" placeholder="Passwort" className="inputField" onChange={this.setPassword.bind(this)} required /><br/>
            <input type="submit" className="btn" onClick={this.signLeader.bind(this)}/>
            <br/>
            <Link className="btn links" to={'/register'}>Register</Link>
          </form>
          </div>

        </div>

    )
  }
}

export default Login;
