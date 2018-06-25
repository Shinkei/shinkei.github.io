import React from 'react';
import './Header.css';

const Header = () => (
  <header className="header_area">
    <div className="container">
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <h1 className="my-name"><strong>JORGE RAMIREZ</strong></h1>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li className="active">
              <a href="#about">ABOUT ME </a>
            </li>
            <li>
              <a href="#skill">SKILL</a>
            </li>
            <li>
              <a href="#experience">EXPERIENCE</a>
            </li>
            <li>
              <a href="#education">EDUCATION</a>
            </li>
            <li>
              <a href="#portfolio">PROJECTS</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
