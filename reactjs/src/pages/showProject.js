import React, { Component } from 'react';
import Header from './Header.js';
import axios from 'axios';
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


      <div className="body">
              <div className="sidebar">
                <div className="sidebarelement">Projekt erstellen</div>
                <div className="sidebarelement">Projekte</div>
                <div className="logout">Logout</div>
              </div>
              <div className="col-2"></div>
              <div className="content col-9">
                  <table className="projecttable" cellSpacing={0}>
                    <tr height="50px" className="tableheader">
                      <th width='50%'>Project Stentthrombose</th>
                      <th width='50%'>ein akuter thrombotischer Verschluss einer Arterie </th>
                    </tr>
                    <tr>
                      <th colSpan={2} className="subheading">Fragen (expandable)</th>
                    </tr>
                    <tr>
                      <td width='75%'><b>Bezeichnung</b></td>
                      <td width='25%'><b>Relevanz</b></td>
                    </tr>
                    <tr>
                      <td>War das Video verständlich?</td>
                      <td>7</td>
                    </tr>
                    <tr className="element">
                      <td>Ist der Versuch korrekt durchgeführt?</td>
                      <td>2</td>
                    </tr>
                    <tr>
                    <th colSpan={2} className="subheading">Teams (expandable)</th>
                    </tr>
                    <tr>
                      <td width='75%'><b>Team Name</b></td>
                      <td width='25%'><b>Kürzel</b></td>
                    </tr>
                    <tr>
                      <td>Team Mystic</td>
                      <td>TIN</td>
                    </tr>
                    <tr>
                      <td>Team Instinct</td>
                      <td>TMY</td>
                    </tr>
                    <tr>
                      <td>Team Valor</td>
                      <td>TVA</td>
                    </tr>
                  </table>
                  <table className="projecttable" cellSpacing={0}>
                    <tr height="50px" className="tableheader">
                      <th width='50%'>Project Stentthrombose</th>
                      <th width='50%'>ein akuter thrombotischer Verschluss einer Arterie </th>
                    </tr>
                    <tr>
                      <th colSpan={2} className="subheading">Fragen (expandable)</th>
                    </tr>
                    <tr>
                      <td width='75%'><b>Bezeichnung</b></td>
                      <td width='25%'><b>Relevanz</b></td>
                    </tr>
                    <tr>
                      <td>War das Video verständlich?</td>
                      <td>7</td>
                    </tr>
                    <tr className="element">
                      <td>Ist der Versuch korrekt durchgeführt?</td>
                      <td>2</td>
                    </tr>
                    <tr>
                    <th colSpan={2} className="subheading">Teams (expandable)</th>
                    </tr>
                    <tr>
                      <td width='75%'><b>Team Name</b></td>
                      <td width='25%'><b>Kürzel</b></td>
                    </tr>
                    <tr>
                      <td>Team Mystic</td>
                      <td>TIN</td>
                    </tr>
                    <tr>
                      <td>Team Instinct</td>
                      <td>TMY</td>
                    </tr>
                    <tr>
                      <td>Team Valor</td>
                      <td>TVA</td>
                    </tr>
                  </table>
                  <table className="projecttable" cellSpacing={0}>
                    <tr height="50px" className="tableheader">
                      <th width='50%'>Project Stentthrombose</th>
                      <th width='50%'>ein akuter thrombotischer Verschluss einer Arterie </th>
                    </tr>
                    <tr>
                      <th colSpan={2} className="subheading">Fragen (expandable)</th>
                    </tr>
                    <tr>
                      <td width='75%'><b>Bezeichnung</b></td>
                      <td width='25%'><b>Relevanz</b></td>
                    </tr>
                    <tr>
                      <td>War das Video verständlich?</td>
                      <td>7</td>
                    </tr>
                    <tr className="element">
                      <td>Ist der Versuch korrekt durchgeführt?</td>
                      <td>2</td>
                    </tr>
                    <tr>
                    <th colSpan={2} className="subheading">Teams (expandable)</th>
                    </tr>
                    <tr>
                      <td width='75%'><b>Team Name</b></td>
                      <td width='25%'><b>Kürzel</b></td>
                    </tr>
                    <tr>
                      <td>Team Mystic</td>
                      <td>TIN</td>
                    </tr>
                    <tr>
                      <td>Team Instinct</td>
                      <td>TMY</td>
                    </tr>
                    <tr>
                      <td>Team Valor</td>
                      <td>TVA</td>
                    </tr>
                  </table>
                  <table className="projecttable" cellSpacing={0}>
                    <tr height="50px" className="tableheader">
                      <th width='50%'>Project Stentthrombose</th>
                      <th width='50%'>ein akuter thrombotischer Verschluss einer Arterie </th>
                    </tr>
                    <tr>
                      <th colSpan={2} className="subheading">Fragen (expandable)</th>
                    </tr>
                    <tr>
                      <td width='75%'><b>Bezeichnung</b></td>
                      <td width='25%'><b>Relevanz</b></td>
                    </tr>
                    <tr>
                      <td>War das Video verständlich?</td>
                      <td>7</td>
                    </tr>
                    <tr className="element">
                      <td>Ist der Versuch korrekt durchgeführt?</td>
                      <td>2</td>
                    </tr>
                    <tr>
                    <th colSpan={2} className="subheading">Teams (expandable)</th>
                    </tr>
                    <tr>
                      <td width='75%'><b>Team Name</b></td>
                      <td width='25%'><b>Kürzel</b></td>
                    </tr>
                    <tr>
                      <td>Team Mystic</td>
                      <td>TIN</td>
                    </tr>
                    <tr>
                      <td>Team Instinct</td>
                      <td>TMY</td>
                    </tr>
                    <tr>
                      <td>Team Valor</td>
                      <td>TVA</td>
                    </tr>
                  </table>

              </div>
              <div className="col-1"></div>
            </div>

    )
  }
}

export default Project;
