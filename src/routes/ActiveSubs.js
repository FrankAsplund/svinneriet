import React, { useState, useEffect } from "react";
import "./activesubs.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import vector from "../components/assets/vector.png";
import logga2 from "../components/assets/logga2.png";
import confirm from "../components/assets/confirm.png";
import add from "../components/assets/add.png";

export const ActiveSubs = () => {
  const [subs, setSubs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    SubsGet();
  }, []);

  /* Fetching the JSON-database of the active subscriptions */

  const SubsGet = () => {
    const fetch = async () => {
      try {
        const { data } = await axios.get("http://localhost:8000/activeSubs");
        setSubs(data);
        const dbArray = Object.keys(data).length;
        console.log("db length: " + dbArray);

        /* Checks if the database is empty, and displays a text if it's true */
        if (dbArray === 0 || null || undefined) {
          console.log("Du har inga aktiva prenumerationer för tillfället.");
          document.getElementById("emptydb").innerHTML =
            "Du har inga aktiva prenumerationer för tillfället.";
        } else {
          document.getElementById("emptydb").innerHTML = "";
        }

        /* dbCheck(); */
      } catch (err) {
        console.error(err, "Error message");
        /* alert("The API/database wasn't loaded, or something else went wrong."); */
      }
    };
    fetch();
  };

  /*  function dbCheck() {
    document.getElementById("emptydb").innerHTML = "";
    const data = fetch("http://localhost:8000/activeSubs");
    const dbArray = Object.keys(data).length;
    console.log("db length: " + dbArray);

    if (dbArray === 0 || null || undefined) {
      console.log("Du har inga aktiva prenumerationer för tillfället.");
      document.getElementById("emptydb").innerHTML =
        "Du har inga aktiva prenumerationer för tillfället.";
    } else {
      document.getElementById("emptydb").innerHTML = "";
    }
  } */

  /* Deletes an entry in the database */
  const deleteData = (id) => {
    axios
      .delete(`http://localhost:8000/activeSubs/${id}`)
      .then(function (response) {
        console.log("Deleted", response);
        SubsGet();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="activesubStyle">
      <Navbar />

      <div>
        <button onClick={() => navigate(-1)}>
          <img src={vector} id="vector" alt="back button"></img>
        </button>
      </div>

      <div className="h1Style">
        <h1>
          Aktiva <br />
          Prenumerationer
        </h1>
      </div>

      <div className="emptydbClass">
        <p id="emptydb"></p>
      </div>

      <div className="subGrid">
        {subs.map((sub) => (
          <article key={sub.id}>
            <div className="centerSub">
              <div className="subContainer">
                <img className="logoImgSub" src={logga2} alt="logo" />
                <img className="storeImgSub" src={sub.img} alt="store" />
                <p id="confirmTextSub">
                  Prenumeration på
                  <br />
                  {sub.title}
                </p>
                <p id="confirmTextSub1">99kr/mån</p>
                <p id="dateText">Start: 09/12-22</p>
                {
                  <button id="cancelText" onClick={() => deleteData(sub.id)}>
                    AVBRYT
                  </button>
                }
                <img className="confirmImgSub" src={confirm} alt="confirm" />
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="addClass">
        <Link to="/Home">
          <img src={add} id="add" alt="add store"></img>
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
