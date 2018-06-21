import React from 'react';
import './Header.css';

const Header = () => (
  <header className="header_area">
    <div className="container">
      <nav className="navbar navbar-default">

        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href="index.html"><img src="img/logo.png" alt="" /></a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li className="active"><a href="#about">ABOUT ME </a></li>
            <li><a href="#skill">Skill</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#service">SERVICES</a></li>
            <li><a href="#portfolio">PORTFOLIO</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
