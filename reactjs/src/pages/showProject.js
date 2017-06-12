import React, { Component } from 'react';
import Header from './Header.js';
import axios from 'axios';
import '../index.css';
import './showProject.css';


class Project extends React.Component {
  render() {
      return (
         <div className="row">
            <Header/>
            <Sidebar/>
         </div>
      );
   }
}

class Sidebar extends Component {

  render (){
    return(

      <div>
        <div className="sidebar col-1">
          <div className="sidebar-element">Projekt erstellen</div>
          <div className="sidebar-element">Projekte</div>
          <div className="logout">Logout</div>
        </div>
        <div className="col-2"></div>
        <div className="content col-9">
            <table className="projecttable" cellSpacing={0}>
              <tr height="50px" className="tableheader">
                <th>Projekttitel</th> <th colSpan={2}>Projektbezeichnung</th>
              </tr>
              <tr><th colSpan={3} className="subheading">Fragen</th></tr>
              <tr>
                <td width="50%">Bezeichnung</td>
                <td width="25%">Relevanz</td>
                <td width="25%">Antwort</td>
              </tr>
              <tr><th colSpan={3} className="subheading">Teams</th></tr>
              <tr>
                <td colSpan={2}>Name</td>
                <td>Kürzel</td>
              </tr>
            </table>
        </div>
        <div className="col-1"></div>
      </div>


    )
  }
}

export default Project;
