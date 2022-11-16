import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./Done.css";

import Navbar from "../components/Navbar/Navbar";
import hemkop from "../components/assets/hemkop.png";
import vector from "../components/assets/vector.png";
import logga2 from "../components/assets/logga2.png";
import confirm from "../components/assets/confirm.png";

export const Done = () => {
  /* fetch the correct store page based on the id */
  const { id } = useParams();
  const [store, setStore] = useState({});

  const navigate = useNavigate();

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
    <div className="doneStyle">
      <Navbar />

      <div>
        <button onClick={() => navigate(-1)}>
          <img src={vector} id="vector"></img>
        </button>
      </div>

      <div className="center">
        <div className="confirmContainer">
          <img className="logoImg1" src={logga2} alt="site logo" />
          <img className="storeImg1" src={store.img} alt="store logo" />
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
