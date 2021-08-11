import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md">
          <div className="container">
            <Link className="navbar-brand" to="/"><img src="../img/logo.png" alt="Logo" /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/About">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Services">Service</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Blog">Blog</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>



      </div>
    )
  }
}


export default Header;