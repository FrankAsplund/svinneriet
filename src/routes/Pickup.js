import React from "react";
import "./pickup.css";

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import hemkop from "../components/assets/hemkop.png";
import vector from "../components/assets/vector.png";
import logga2 from "../components/assets/logga2.png";
import confirm from "../components/assets/confirm.png";
import greenbag from "../components/assets/greenbag.png";

export const Pickup = () => {
  return (
    <div className="doneStyle">
      <Navbar />

      <div>
        <Link to="/Subscribe">
          <img src={vector} id="vector" alt="back button"></img>
        </Link>
      </div>

      <div className="center">
        <div className="pickupContainer">
          <img className="logoImgPickup" src={logga2} alt="logo" />
          <img className="storeImgPickup" src={hemkop} alt="store" />
          <div className="mysteryBag">
            <p id="mysteryText">
              En mystery shopping bag är nu tillgänglig för upphämtning!
            </p>
          </div>
          <img className="confirmImgPickup" src={confirm} alt="confirm" />
        </div>
      </div>
      <div className="mysteryInfo">
        <p className="mysteryInfoText">
          Du betalar för denna vara som vanligt i butiken, efter uppvisande av
          prenumeration.
        </p>
      </div>
      <div className="greenBagCenter">
        <img className="greenBag" src={greenbag} alt="paper/plastic bag" />
      </div>

      <div className="buttonCenter">
        <Link to="/">
          <p className="startPage">Ta mig till startsidan</p>
        </Link>
      </div>
    </div>
  );
};
