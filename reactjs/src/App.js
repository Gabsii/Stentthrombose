import React, { Component } from 'react';
import './App.css';


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
        <div className="Inputlogin">
          <Header/>
          <form>
            TEAMS<br/>
              <input type="text" placeholder="Token"/>
          </form>
          <form>
            PROJEKTLEITER<br/>
            <input type="text" placeholder="E-Mail"/>
            <input type="text" placeholder="Passwort"/>
          </form>
        </div>
      </div>

    )
  }
}

export default App;
