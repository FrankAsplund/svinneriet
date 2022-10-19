import React from "react";
import "./routes.css";

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import hemkop from "../components/assets/hemkop.png";
import vector from "../components/assets/vector.png";
import logga2 from "../components/assets/logga2.png";

export const Subscribe = () => {
  return (
    <div className="subStyle">
      <Navbar />

      <div>
        <Link to="/">Bakåt</Link>
        <img src={vector} id="vector"></img>
      </div>

      <div className="container">
        <img className="logoImg" src={logga2} />
        <img className="storeImg" src={hemkop} />
      </div>

      <div className="text">
        <p className="textBlack">
          Prenumererar du på Hemköp genom oss så får du förtur på alla
          svinnvaror, notiser om varor med kort datum, och{" "}
          <p className="textGreen">
            bidrar till ett mer hållbart samhälle med mindre slöseri.
          </p>
          <p className="subText1">99kr/mån</p>
          <p className="subText2">Prenumerera</p>
        </p>
      </div>
    </div>
  );
};
