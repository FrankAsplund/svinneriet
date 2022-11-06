import React, { Component } from "react";
import { NavLinks } from "./NavLinks";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logga2 from "../assets/logga2.png";
import logga3 from "../assets/logga3.png";
import hamburger from "../assets/hamburger.png";
import Menu from "../Hamburger/Menu.js";

const Navbar = () => {
  return (
    <div className="navContainer">
      <div className="navbar">
        <div className="navbarItems">
          <Link to="/">
            <img className="logga" src={logga3} />
          </Link>
          <h2 class="logoName">Svinneriet</h2>
          <div className="hamburgerNav">
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
