import React from 'react';
import logo from '../../assets/logo.png';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom z-1">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Company Logo" className="logo"/>
          Village Sushi Bar
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link animate-link" aria-current="page" href="#about">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link animate-link" href="#gallery">Gallery</a>
            </li>
            <li className="nav-item">
              <a className="nav-link animate-link" href="#contact">Contact Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link animate-link" href="#reservation">Reservation</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;