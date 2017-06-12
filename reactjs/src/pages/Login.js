import React, {Component} from 'react';
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

  constructor() {
    super();
    this.state = {
      token: null,
      mail: null,
      password: null,
      response: ""
    }
  }

  setToken(e) {
    this.setState({token: e.target.value});
  }

  setMail(e) {
    this.setState({mail: e.target.value});
  }

  setPassword(e) {
    this.setState({password: e.target.value});
  }

  setResponse(error) {
    this.setState({response: error.data.responseMessage});
  }

  signLeader(e) {
    e.preventDefault();
    if (this.state.mail !== null && this.state.password !== null && this.state.token == null) {
      //console.log(this.state);
      axios.post('http://localhost:8080/Stentthrombose/api/user/login.php', {
        email: this.state.mail,
        password: this.state.password
      }).then((response) => {
        console.log(response);
        if (response.data.responseCode === 0) {
          window.location.assign("/project");
        } else {
          this.setResponse(response);
        }
      }).catch(function(error) {
        console.log(error);
      });
    } else {
      console.log("enter user and password")
    }

  }

  signTeam() {
    if (this.state.mail == null && this.state.password == null && this.state.token !== null && this.state.token !== "") {
      console.log(this.state);
      axios.post('http://localhost:80/Stentthrombose/api/team/login.php', {token: this.state.token}).then(function(response) {
        console.log(response);
      }).catch(function(error) {
        console.log(error.data);
      });
    } else {
      console.log("enter token")
    }
  }

  render() {
    return (

      <div>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-3 teamLogin">
            <form>
              TEAMS<br/>
              <input type="text" placeholder="Token" className="inputField" onChange={this.setToken.bind(this)} required/><br/>
              <input type="submit" className="btn" onClick={this.signTeam.bind(this)}/>
            </form>
          </div>
          <div className="col-1 verticalline"></div>
          <div className="col-5 leaderLogin">
            <form>
              LEADER<br/>
              <input type="email" placeholder="E-Mail" className="inputField" onChange={this.setMail.bind(this)} required/><br/>
              <input type="password" placeholder="Passwort" className="inputField" onChange={this.setPassword.bind(this)} required/><br/>
              <input type="submit" className="btn" onClick={this.signLeader.bind(this)}/>
              <br/>
              <Link className="btn links" to={'/register'}>Register</Link>
            </form>
            <div className="response">{this.state.response}</div>
          </div>

        </div>
      </div>

    )
  }
}

export default Login;
