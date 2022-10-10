import React, { Component } from "react";
import { NavLinks } from "./NavLinks";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logga2 from "../assets/logga2.png";
import hamburger from "../assets/hamburger.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarItems">
        <img className="logga" src={logga2} />
        <h2>Svinneriet</h2>
        <img className="hamburger" src={hamburger} />
      </div>
    </div>
  );
};

export default Navbar;
