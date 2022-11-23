import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logga3 from "../assets/logga3.png";
import Menu from "../Hamburger/Menu.js";

const Navbar = () => {
  return (
    <div className="navContainer">
      <div className="navbar">
        <div className="navbarItems">
          <Link to="/Home">
            <img className="logga" src={logga3} alt="logo" />
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
