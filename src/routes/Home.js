import React from "react";
import "./routes.css";
import Navbar from "../components/Navbar/Navbar";
import ICA from "../components/assets/ICA.png";
import coop from "../components/assets/coop.png";
import hemkop from "../components/assets/hemkop.png";
import citygross from "../components/assets/citygross.png";
import pressbyran from "../components/assets/pressbyran.png";
import willys from "../components/assets/willys.png";
import lidl from "../components/assets/lidl.png";
import seveneleven from "../components/assets/seveneleven.png";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <input id="search" />
      <h1 style={{ color: "#0D6932" }}>Våra tillgängliga butiker</h1>
      <div className="storeGrid">
        <img src={ICA} />
        <img src={coop} />
        <img src={hemkop} />
        <img src={citygross} />
        <img src={pressbyran} />
        <img src={willys} />
        <img src={lidl} />
        <img src={seveneleven} />
      </div>
    </div>
  );
};
