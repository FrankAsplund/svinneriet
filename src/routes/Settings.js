import React from "react";
import "./routes.css";
import "./settings.css";
import creditcardsmall from "../components/assets/credit-card-small.png";
import homesymbol from "../components/assets/home-symbol.png";

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import vector from "../components/assets/vector.png";

export const Settings = () => {
  return (
    <div className="subStyle">
      <Navbar />

      <div>
        <Link to="/">
          <img src={vector} id="vector"></img>
        </Link>
        <div className="settings-header">
          <h1> Inställningar </h1>
        </div>
        <div className="settings-info">
          <h1 className="settingsh1"> Betalningsmetod </h1>
          <a href="/Pay">ÄNDRA </a>
          <div className="test">
            <img src={creditcardsmall} id="creditcardsmall"></img>
            <p className="credit-info"> **** **** **** 4747 </p>
          </div>
          <h1 className="settingsh2"> Address </h1>
          <a href="/Pay">ÄNDRA </a>
          <p className="address-info">
            Frank Asplund Randomgata 15 Stockholm Våning 7 Nr 7
          </p>
        </div>
      </div>
    </div>
  );
};