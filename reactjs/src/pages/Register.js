import React, { Component } from 'react';
import axios from 'axios';
import './Login.css';

class Register extends Component {
  constructor(){
    super();
    this.state = {
      token: null,
      mail: null,
      password: null,
      chpassword: null
    }
  }

  setMail(e){
    this.setState({ mail: e.target.value });
  }

  setPassword(e){
    this.setState({ password: e.target.value });
  }

  setChPassword(e){
    this.setState({ chpassword: e.target.value });
  }

  checkPassword(){
    const chpassword = this.state.chpassword;
    const password = this.state.password;
    if(chpassword === password){
      return true;
    } else {
      return false;
    }
  }

  register(){
    if(this.checkPassword){
      console.log("registered");
    }else{
      console.log("error");
    }
  }
  
  render (){
    return(
  <div>
      <Header/>
      <div className="row">
        <div className="col-4 leaderLogin">
          <form>
            REGISTER<br/>
            <input type="email" placeholder="E-Mail" className="inputField" onChange={this.setMail.bind(this)} required/><br/>
            <input type="password" placeholder="Password" className="inputField" onChange={this.setPassword.bind(this)} required/><br/>
            <input type="confirm-password" placeholder="Confirm password" className="inputField" onChange={this.setChPassword.bind(this)} required/><br/>
            <input type="submit" value="Register" onClick={this.register.bind(this)} />
          </form>
          </div>

      </div>
    </div>
    )
  }
}


export default Register;
