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
         <div id="header">
            <h1>Stenttrombose</h1>
         </div>
      );
   }
}

class Login extends Component {
  render (){
    return(
      <div>
        <Header/>

      </div>

    )
  }
}

export default App;
