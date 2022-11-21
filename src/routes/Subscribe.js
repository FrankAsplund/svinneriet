import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

import "./Subscribe.css";

import Dashboard from "../components/Modal/Dashboard.js";
import Navbar from "../components/Navbar/Navbar";
import vector from "../components/assets/vector.png";
import logga2 from "../components/assets/logga2.png";

export const Subscribe = () => {
  /* fetch the correct store page based on the id */
  const { id } = useParams();
  const [store, setStore] = useState({});

  const navigate = useNavigate();

  /* Fetching the JSON-database of the current store */
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8000/stores/${id}`);
        setStore(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);

  return (
    <div className="subStyle">
      <Navbar />

      <div>
        <button onClick={() => navigate(-1)}>
          <img src={vector} id="vector" alt="back button"></img>
        </button>
      </div>

      <article>
        <div className="container">
          <img className="logoImg" src={logga2} alt="site logo" />
          <img className="storeImg" src={store.img} alt="store logo" />
        </div>
      </article>

      <div className="text">
        <p className="textBlack">
          Prenumererar du på Hemköp genom oss så får du förtur på alla
          svinnvaror, notiser om varor med kort datum, och
          <p className="textGreen">
            bidrar till ett mer hållbart samhälle med mindre slöseri.
          </p>
        </p>
        <p className="text1">99kr/mån</p>
        <Dashboard />
        <div>
          <Link to="/">
            <p className="avbryt">AVBRYT</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
