import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

import "./Subscribe.css";

import Dashboard from "../components/Modal/Dashboard.js";
import Navbar from "../components/Navbar/Navbar";
import hemkop from "../components/assets/hemkop.png";
import vector from "../components/assets/vector.png";
import logga2 from "../components/assets/logga2.png";

export const Subscribe = () => {
  const { id } = useParams();
  /* const [post, SetPost] = useState({}); */
  const [store, setStore] = useState({});

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
        <Link to="/">
          <img src={vector} id="vector"></img>
        </Link>
      </div>

      <article>
        <div className="container">
          <img className="logoImg" src={logga2} />
          <img className="storeImg" src={store.img} />
        </div>
      </article>

      {/* <div className="container">
        <img className="logoImg" src={logga2} />
        <img className="storeImg" src={hemkop} />
      </div> */}

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

/* export default Dashboard; */
