import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import "./Modal.css";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

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

  const postData = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/activeSubs", {
        id: store.id,
        title: store.title,
        img: store.img,
      })
      .then(function (response) {
        console.log(response);
        navigate(`/Done/${store.id}`);
      })
      .catch(function (error) {
        console.log(error);
      });
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
