import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import "./Home.css";

import Navbar from "../components/Navbar/Navbar";
import { StoreCard } from "../components/StoreCard/StoreCard";

import vector from "../components/assets/vector.png";

export const Home = () => {
  /* Axios GET request */

  const [stores, setStores] = useState([]);
  /* const [error, setError] = useState(null); */

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get("http://localhost:8000/stores");
        setStores(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);

  return (
    <div className="homeStyle">
      <Navbar />

      <Link to="/Start">
        <img src={vector} id="vector" />
      </Link>

      <div className="search">
        <input id="searchbar" />
      </div>
      <h1 style={{ color: "#0D6932" }}>
        Våra tillgängliga <br></br> butiker
      </h1>

      <div className="storeGrid">
        {stores.map((store) => (
          <article key={store.id}>
            <Link to={`/Subscribe/${store.id}`}>
              <StoreCard store={store} />
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};
