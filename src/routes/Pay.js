import React from "react";
import "./routes.css";
import "./pay.css";

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import hemkop from "../components/assets/hemkop.png";
import vector from "../components/assets/vector.png";
import logga2 from "../components/assets/logga2.png";
import creditcard from "../components/assets/creditcard.png";

export const Pay = () => {
  return (
    <div className="subStyle">
      <Navbar />

      <div>
        <Link to="/">
          <img src={vector} id="vector"></img>
        </Link>
      </div>
      <div className="pay-content">
        <div className="pay-header">
          <h1> Kredit / Betalkort </h1>
        </div>
        <div className="card-image">
          <img src={creditcard} alt="creditcard" />
        </div>
        <div className="inputInfo">
          <form>
            <label className="name">
              Name on card
              <input
                type="text"
                name="name"
                placeholder="Frank Asplund"
                id="inputName"
              />
            </label>
            <label className="card">
              Card Number
              <input
                type="text"
                name="card"
                placeholder="4747 4747 4747 4747"
                id="inputCard"
              />
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};
