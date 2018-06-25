import React from 'react';

const Footer = () => (
  <footer className="footer_area">
    <div className="footer_inner">
      <div className="container">
        <ul className="social_icon">
          <li>
            <a href="https://www.linkedin.com/in/jorgeivanramirezh/">
              <i className="fa fa-linkedin" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/Shinkei1">
              <i className="fa fa-twitter" />
            </a>
          </li>
          <li>
            <a href="https://github.com/Shinkei">
              <i className="fa fa-github" />
            </a>
          </li>
          <li>
            <a href="https://gitlab.com/shinkei">
              <i className="fa fa-gitlab" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="footer_copyright">
      <div className="container">
        <div className="pull-left">
          <h5>
            <p>
              Copyright &copy;
              All rights reserved | This page is based on Colorlib Template. Made with
              <i className="fa fa-heart-o" aria-hidden="true" /> by
              Shinkei
            </p>
          </h5>
        </div>
        <div className="pull-right">
          <ul className="nav navbar-nav navbar-right">
            <li className="active">
              <a href="#about">ABOUT ME </a>
            </li>
            <li>
              <a href="#skill">Skill</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#services">SERVICES</a>
            </li>
            <li>
              <a href="#portfolio">PORTFOLIO</a>
            </li>
            <li>
              <a href="#news">News</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
