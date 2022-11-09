import "./Modal.css";
import React from "react";
import { Link } from "react-router-dom";

const Modal = ({ handleClose, show, children, postData }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <div className="buttonClass">
          <button id="tempBtn" onClick={postData}>
            Temporär ja-knapp
          </button>
          <Link to="/Done">
            <button className="ja">Ja</button>
          </Link>
          <button className="nej" type="button" onClick={handleClose}>
            Nej
          </button>
        </div>
      </section>
    </div>
  );
};

export default Modal;
