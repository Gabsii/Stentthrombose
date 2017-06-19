import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="row 2">
        <div className="col-12 header">
          <h1>
            <Link to='/' className="links">Stentthrombose</Link>
          </h1>
        </div>
      </div>
    )
  }
}

export default Header;
