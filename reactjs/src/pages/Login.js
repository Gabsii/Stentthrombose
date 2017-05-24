import React, { Component } from 'react';
import './Login.css';
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

class App extends Component {
  render() {
      return (
         <div>
            <Login/>
         </div>
      );
   }
}
class Header extends Component {
  render (){
    return(
      <div className="row">
         <div className="col-12 header">
            <h1>Stenttrombose</h1>
         </div>
      </div>
    )
  }
}
class Login extends Component {
  render (){
    return(

  <div>
      <Header />
      <div className="row">
        <div className="col-3"></div>
        <div className="col-3 teamLogin">
          <form>
              TEAMS<br/>
              <input type="text" placeholder="Token" className="inputField"/><br/>
              <input type="submit" value="Sign in"/>
          </form>
        </div>
        <div className="col-1"></div>
        <div className="col-5 leaderLogin">
          <form>
            PROJECTLEADER<br/>
            <input type="text" placeholder="E-Mail" className="inputField"/><br/>
            <input type="text" placeholder="Passwort" className="inputField"/><br/>
            <input type="submit" value="Sign in"/><br/>
            <input type="submit" value="not registered?"/>
          </form>
          </div>

      </div>
    </div>

    )
  }
}

export default App;
