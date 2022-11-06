import React from "react";
import "./activesubs.css";

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import hemkop from "../components/assets/hemkop.png";
import vector from "../components/assets/vector.png";
import logga2 from "../components/assets/logga2.png";
import confirm from "../components/assets/confirm.png";
import add from "../components/assets/add.png";

export const ActiveSubs = () => {
  return (
    <div className="activesubStyle">
      <Navbar />

      <div>
        <Link to="/">
          <img src={vector} id="vector"></img>
        </Link>
      </div>

      <div className="h1Style">
        <h1>
          Aktiva <br />
          Prenumerationer
        </h1>
      </div>

      <div className="centerSub">
        <div className="subContainer">
          <img className="logoImgSub" src={logga2} />
          <img className="storeImgSub" src={hemkop} />
          <p id="confirmTextSub">Prenumeration på Hemköp</p>
          <p id="confirmTextSub1">99kr/mån</p>
          <p id="dateText">Start: 09/12-22</p>
          <p id="cancelText">AVBRYT</p>
          <img className="confirmImgSub" src={confirm} />
        </div>
      </div>

      <div className="addClass">
        <Link to="/">
          <img src={add} id="add"></img>
        </Link>
      </div>

      <div className="textSub">
        <div>
          <Link to="/">
            <p className="startSub">Ta mig till startsidan</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
