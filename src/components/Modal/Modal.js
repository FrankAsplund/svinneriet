import "./Modal.css";
import React from "react";
import { Link } from "react-router-dom";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <div className="buttonClass">
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
