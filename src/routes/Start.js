import React from "react";

import { Link } from "react-router-dom";
import logga3 from "../components/assets/logga3.png";
import earth from "../components/assets/earth.png";
import recycle from "../components/assets/recycle.png";
import circlecutlery from "../components/assets/circlecutlery.png";
import "./Start.css";

export const Start = () => {
  return (
    <div className="startBG">
      <div className="container1">
        <img id="logga" src={logga3} />
        <h1 id="logoName">Svinneriet</h1>
      </div>
      <div className="border">
        <h1 id="vinn">Vinn med svinn</h1>
        <p id="text1">
          Rädda klimatet, spara pengar, och få en utsökt måltid på en och samma
          gång!
        </p>
        <div className="symbolGrid">
          <img id="earth" src={earth}></img>
          <img id="recycle" src={recycle}></img>
          <img id="circlecutlery" src={circlecutlery}></img>
        </div>

        <Link to="/">
          <h5 id="subText2">Kom igång!</h5>
        </Link>
      </div>
    </div>
  );
};
