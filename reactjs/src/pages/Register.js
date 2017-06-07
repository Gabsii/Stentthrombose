import React, { Component } from 'react';
import Header from './Header.js';
import axios from 'axios';
import './Register.css';

class Register extends Component {
  render() {
      return (
         <div className="row">
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
      mail: null,
      name: null,
      password: null,
      chpassword: null
    }
  }

  setName(e){
    this.setState({ name: e.target.value });
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
    var chpassword = this.state.chpassword;
    var password = this.state.password;
    if(chpassword === password){
      return true;
    } else {
      return false;
    }
  }

  register(e){
    e.preventDefault();
    if(this.checkPassword && this.state.password !== null && this.state.mail !== null && this.state.name !== null){
      console.log(this.state);
      axios.post('http://localhost:8080/Stentthrombose/api/user/create.php', {
          name: this.state.name,
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
      console.log("error");
    }
  }

  render (){
    return(
      <div className="row">
        <div className="col-5"/>
        <div className="col-3 register">
          <form>
            REGISTER<br/>
            <input type="text" placeholder="Name" className="inputField" onChange={this.setName.bind(this)} required/><br/>
            <input type="email" placeholder="E-Mail" className="inputField" onChange={this.setMail.bind(this)} required/><br/>
            <input type="password" placeholder="Password" className="inputField" onChange={this.setPassword.bind(this)} required/><br/>
            <input type="password" placeholder="Confirm password" className="inputField" onChange={this.setChPassword.bind(this)} required/><br/>
            <input type="submit" value="Register" className="btn" onClick={this.register.bind(this)} />
          </form>
        </div>
        <div className="col-4"/>
      </div>
    )
  }
}


export default Register;
