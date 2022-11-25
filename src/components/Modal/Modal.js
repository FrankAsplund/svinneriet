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
        storeID = data.id;
        console.log("STOREGET - storeID: ", storeID);
      } catch (err) {
        console.error(err);
      }
    };

    fetch();
  };

  const SubsGet = () => {
    const fetch = async () => {
      try {
        const { data } = await axios.get("http://localhost:8000/activeSubs");
        setSubs(data);
        console.log("subs:", data);
        console.log("SUBSGET - storeID", storeID);

        for (var i = 0; i < data.length; i++) {
          if (data[i].id == storeID) {
            console.log("The id matches.");
            match = true;
            return;
          } else {
            console.log("The id didn't match.");
            return;
          }
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  };

  /* Creates an entry into the "activesubs" JSON-database based on the current ID of the page 
  (which is the same id as the store)
  , and then takes you to the Done/${id}-page, which is also based on the current ID of the page. */
  const postData = (e) => {
    if ((match = true)) {
      console.log("Denna affären finns redan i dina prenumerationer.");
      return;
    } else {
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
        <div className="buttonClass">
          <button onClick={postData} className="ja">
            Ja
          </button>
          <button className="nej" type="button" onClick={handleClose}>
            Nej
          </button>
        </div>
        ;
      </section>
    </div>
  );
};

export default Modal;
