import React from "react";

function NavBar() {
  return (
    <nav
      className="navbar is-black is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width={112}
            height={28}
          />
        </a>
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="#port">
            <span className="icon">
              <i className="fas fa-info" />
            </span>
            Portfolio
          </a>
          <a className="navbar-item" href="#exp">
            <span className="icon">
              <i className="fas fa-book" />
            </span>
            Expertise
          </a>
          <a className="navbar-item" href="#exp">
            <span className="icon">
              <i className="fas fa-book" />
            </span>
            About me
          </a>
          <a className="navbar-item" href="#edu">
            <span className="icon">
              <i className="fas fa-chart-pie" />
            </span>
            <span>Education</span>
          </a>
          <a className="navbar-item" href="#results">
            <span className="icon">
              <i className="fas fa-chart-pie" />
            </span>
            <span>Results</span>
          </a>
          <a className="navbar-item" href="#achieve">
            <span className="icon">
              <i className="fas fa-chart-pie" />
            </span>
            <span>Personal Achievements</span>
          </a>
          <a className="navbar-item" href="#contact">
            <span className="icon">
              <i className="fas fa-envelope" />
            </span>
            <span>Contact</span>
          </a>
        </div>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <a className="button is-black">
              <strong>Sign up</strong>
            </a>
            <a className="button is-light">Log in</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;