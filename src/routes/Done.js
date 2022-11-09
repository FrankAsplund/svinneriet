import React from "react";
import "./Done.css";

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import hemkop from "../components/assets/hemkop.png";
import vector from "../components/assets/vector.png";
import logga2 from "../components/assets/logga2.png";
import confirm from "../components/assets/confirm.png";

export const Done = () => {
  return (
    <div className="doneStyle">
      <Navbar />

      <div>
        <Link to="/Subscribe">
          <img src={vector} id="vector" alt="back symbol"></img>
        </Link>
      </div>

      <div className="center">
        <div className="confirmContainer">
          <img className="logoImg1" src={logga2} alt="logo" />
          <img className="storeImg1" src={hemkop} alt="store logo" />
          <p id="confirmText1">Prenumeration på Hemköp</p>
          <p id="confirmText2">99kr/mån</p>
          <img className="confirmImg1" src={confirm} alt="confirm symbol" />
        </div>
      </div>

      <div className="textDone">
        <p id="textTack">Tack för ditt köp!</p>
        <p id="textFrom">
          Från och med nu kommer du få en notifikation från denna app när du har
          fått förtur på svinnvaror från Hemköp!
        </p>
        <p id="textStacken">
          Vi alla är ansvariga för att dra vårt strå till stacken. Med detta köp
          så har du bidragit till ett mer hållbart samhälle med mindre slöseri.
          Laga nu något riktigt gott - du förtjänar det!
        </p>
        <div>
          <Link to="/">
            <p className="start">Ta mig till startsidan</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
