import React, { Component } from 'react';
import axios from 'axios';
import '../index.css';
import './createProject.css';


class App extends React.Component {
  render() {
      return (
         <div className="row">
            <Header/>
            <Sidebar/>
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

class Sidebar extends Component {

  render (){
    return(
      <div class="row">
        <div class="col-12 header">
            <h1>Stenttrombose</h1>
        </div>
    </div>
    <div class="sidebar col-1">
        <div class="sidebar-element">Projekt erstellen</div>
        <div class="sidebar-element">Projekte</div>
        <div class="logout">Logout</div>
    </div>


    )
  }
}

export default App;
