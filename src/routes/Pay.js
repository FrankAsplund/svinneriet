import React from "react";
import "./routes.css";
import "./pay.css";

import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import vector from "../components/assets/vector.png";
import creditcard from "../components/assets/creditcard.png";

export const Pay = () => {
  const navigate = useNavigate();

  return (
    <div className="payStyle">
      <Navbar />

      <div>
        <button onClick={() => navigate(-1)}>
          <img src={vector} id="vector" alt="back button"></img>
        </button>
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
        <div className="secondForm">
          <form>
            <label className="date">
              Expiry date
              <input
                type="text"
                name="date"
                placeholder="04/23"
                id="inputDate"
              />
            </label>
            <label className="CVC">
              CVC
              <input type="text" name="cvc" placeholder="315" id="inputCVC" />
            </label>
          </form>

          <button type="button" id="submit">
            Lägg till
          </button>
        </div>
      </div>
    </div>
  );
};
