import React from "react";
import "./Navbar.css";
import logo_text from "../static/logo_text.png";

const Navbar = () => (
  <div className="navbar">
    <div className="container">
      <div className="navbar__logo">
        <img
          alt="TeamBuild logo"
          className="navbar__logo__img"
          src={logo_text}
        />
      </div>
      <div className="navbar__links">
        <a className="navbar__links__link link link--emphasis" href="#">
          Apply for membership
        </a>
        <a className="navbar__links__link link link--default" href="#">
          View Projects
        </a>
      </div>
      <div className="navbar__login">
        <a className="navbar__login__link link link--default" href="#">
          Log in
        </a>
      </div>
    </div>
  </div>
);

export default Navbar;
