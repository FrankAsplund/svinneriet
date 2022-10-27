import React from "react";

import { Link } from "react-router-dom";
import "./Home.css";

import Navbar from "../components/Navbar/Navbar";

import ICA from "../components/assets/ICA.png";
import coop from "../components/assets/coop.png";
import hemkop from "../components/assets/hemkop.png";
import citygross from "../components/assets/citygross.png";
import pressbyran from "../components/assets/pressbyran.png";
import willys from "../components/assets/willys.png";
import lidl from "../components/assets/lidl.png";
import seveneleven from "../components/assets/seveneleven.png";
import vector from "../components/assets/vector.png";
import { Subscribe } from "./Subscribe.js";

export const Home = () => {
  return (
    <div className="homeStyle">
      <Navbar />

      <Link to="/Start">
        <img src={vector} id="vector" />
      </Link>

      <div className="search">
        <input id="searchbar" />
      </div>
      <h1 style={{ color: "#0D6932" }}>
        Våra tillgängliga <br></br> butiker
      </h1>
      <div className="storeContainer">
        <div className="storeGrid">
          <img src={ICA} />
          <img src={coop} />
          <Link to="/Subscribe">
            <img src={hemkop} id="hemkop"></img>
          </Link>
          <img src={citygross} />
          <img src={pressbyran} />
          <img src={willys} />
          <img src={lidl} />
          <img src={seveneleven} />
        </div>
      </div>
    </div>
  );
};
