import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import "./Modal.css";

const Modal = ({ handleClose, show, children }) => {
  /* Display or hide modal by switching css-classes */
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  /* fetch the correct store page based on the id */
  const { id } = useParams();
  const [store, setStore] = useState({});
  const [subs, setSubs] = useState({});
  var storeID = "";
  var match = false;
  var subsArray = [];

  const navigate = useNavigate();

  /* Fetching the JSON-database of the current store */

  useEffect(() => {
    StoreGet();
    SubsGet();
  }, []);

  const StoreGet = () => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8000/stores/${id}`);
        setStore(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  };

  /* Fetching the active subcriptions */
  const SubsGet = () => {
    const fetch = async () => {
      try {
        const { data } = await axios.get("http://localhost:8000/activeSubs");
        setSubs(data);
        console.log("subs:", data);
        subsArray = data;
        console.log("subsArray", subsArray);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  };

  /* Checks if the the store already is in your subscriptions. If it is, it changes "match" to false */
  function matchCheck() {
    console.log("matchCheck");
    console.log("subs: ", subs);

    storeID = store.id;
    console.log("StoreID: ", storeID);

    if (subs.length !== 0) {
      for (var i = 0; i < subs.length; i++) {
        if (subs[i].id === storeID) {
          console.log("The id matches. ", subs[i].id);
          match = true;

          console.log(match);
        } else if (subs[i].id !== storeID || null || "" || []) {
          console.log("The id didn't match. ", subs[i].id);
          match = false;

          console.log(match);
        }
      }
    }
  }

  /* Creates an entry into the "activesubs" JSON-database based on the current ID of the page 
  (which is the same id as the store)
  , and then takes you to the Done/${id}-page, which is also based on the current ID of the page. */
  const postData = (e) => {
    matchCheck();
    console.log("postData", match);
    if (match === true) {
      console.log("Denna affären finns redan i dina prenumerationer.");

      var elem1 = document.getElementById("jaButton");
      document.getElementById("nejButton").innerHTML = "Stäng";
      var elem3 = document.getElementById("modalText2ID");
      elem1.remove();
      elem3.remove();

      document.getElementById("modalText2ID").innerHTML =
        "Denna affären finns redan i dina prenumerationer.";

      return;
    } else if (match === false) {
      e.preventDefault();
      axios
        .post("http://localhost:8000/activeSubs", {
          id: store.id,
          title: store.title,
          img: store.img,
        })
        .then(function (response) {
          console.log(
            response,
            "Denna affären har lagts till i dina prenumerationer."
          );
          navigate(`/Done/${store.id}`);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <div className="modalClass">
          <p className="modalText1" id="modalText2ID">
            Är du säker på att du vill prenumerera på denna tjänst?
          </p>
          <p className="modalText2" id="modalText2ID">
            99:- kommer dras på autogiro varje månad, är du säker?
          </p>
        </div>
        <div className="buttonClass">
          {/* <button onClick={matchCheck} className="ja" id="jaButton">
            Check
          </button> */}
          <button onClick={postData} className="ja" id="jaButton">
            Ja
          </button>
          <button
            className="nej"
            type="button"
            onClick={handleClose}
            id="nejButton"
          >
            Nej
          </button>
        </div>
        ;
      </section>
    </div>
  );
};

export default Modal;
