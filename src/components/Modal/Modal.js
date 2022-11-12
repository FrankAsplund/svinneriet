import React from "react";
import { Link } from "react-router-dom";
/* import { useNavigate } from "react-router-dom"; */
import { useEffect, useState } from "react";
import axios from "axios";

import "./Modal.css";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const [stores, setStores] = useState([]);

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

  /* const navigate = useNavigate(); */

  /* const Confirm = () => {
    return (
      stores.map((store) => (
        <article key={store.id}>
          <Link to={`/Done/${store.id}`} className="ja">
            Ja
          </Link>
        </article>
      ));
    
    )
  }; */

  /* const Confirm = () => {
    navigate(`/Done/${store.id}`);
  }; */

  /* return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <div className="buttonClass">
          <button onClick={Confirm} />
          <button className="nej" type="button" onClick={handleClose}>
            Nej
          </button>
        </div>
        ;
      </section>
    </div>
  );
}; */

  return (
    <div className={showHideClassName}>
      {stores.map((store) => (
        <section className="modal-main">
          {children}
          <div className="buttonClass" key={store.id}>
            <Link to={`/Done/${store.id}`} className="ja">
              Ja
            </Link>
            <button className="nej" type="button" onClick={handleClose}>
              Nej
            </button>
          </div>
          ;
        </section>
      ))}
    </div>
  );
};

export default Modal;
