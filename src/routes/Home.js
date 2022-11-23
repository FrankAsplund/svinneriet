import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import axios from "axios";

import "./Home.css";

import Navbar from "../components/Navbar/Navbar";
import { StoreCard } from "../components/StoreCard/StoreCard";
import vector from "../components/assets/vector.png";

export const Home = () => {
  /* Axios GET request */

  const [stores, setStores] = useState([]);

  /* Fetching the JSON-database of the stores, for displaying all the stores on the page */
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get("http://localhost:8000/stores");
        setStores(data);
      } catch (err) {
        console.error(err, "Error message");
        /* alert("The API/database wasn't loaded, or something else went wrong."); */
      }
    };
    fetch();
  }, []);

  return (
    <div className="homeStyle">
      <Navbar />

      <Link to="/Start">
        <img src={vector} id="vector" alt="back button" />
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
