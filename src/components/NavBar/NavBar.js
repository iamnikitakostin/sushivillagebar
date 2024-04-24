import { GiCrossedAirFlows } from 'react-icons/gi';
import logo from '../../assets/logo.png';
import './NavBar.css';
import React from 'react';

function NavBar() {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="navbar navbar-expand-lg navbar-custom z-2 sticky-top ">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Company Logo" className="logo"/>
          Village Sushi Bar
        </a>
        <div className='app__navbar-smallscreen'>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setToggleMenu(true)} >
          <span className="navbar-toggler-icon"></span>
        </button>
        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay row justify-content-center align-items-center slide-right'>
            <GiCrossedAirFlows
              fontSize={27}
              className='overlay__close'
              onClick={() => setToggleMenu(false)}
              color='black'
              />
            <ul className='app__navbar-smallscreen_links'>
              <li><a href='#about'  className="nav-link animate-link" onClick={() => setToggleMenu(false)}>About Us</a></li>
              <li><a href='#gallery'  className="nav-link animate-link" onClick={() => setToggleMenu(false)}>Gallery</a></li>
              <li><a href='#contact'  className="nav-link animate-link" onClick={() => setToggleMenu(false)}>Contact Us</a></li>
            </ul>
          </div>
        )}
      </div>
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
          
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
