import React, { Component } from 'react';
import Header from './Header.js';
import axios from 'axios';
import './Register.css';

class Register extends Component {
  render() {
      return (
         <div className="row super">
          <Header/>
          <Registers/>
         </div>
      );
   }
}

class Registers extends Component {
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
    if(chpassword != null && password != null && chpassword == password){
      return true;
    } else {
      return false;
    }
  }

  register(){
    if(this.checkPassword){
      console.log("registered");
      console.log(this.state);
    }else{
      console.log("error");
    }
  }

  render (){
    return(
      <div className="row">
        <div className="col-4"/>
        <div className="col-5 register">
          <form>
            REGISTER<br/>
            <input type="email" placeholder="E-Mail" className="inputField" onChange={this.setMail.bind(this)} required/><br/>
            <input type="password" placeholder="Password" className="inputField" onChange={this.setPassword.bind(this)} required/><br/>
            <input type="confirm-password" placeholder="Confirm password" className="inputField" onChange={this.setChPassword.bind(this)} required/><br/>
            <input type="submit" value="Register" className="btn" onClick={this.register.bind(this)} />
          </form>
        </div>
      </div>
    )
  }
}


export default Register;
