import "./Hamburger.css";
import React from "react";
import { Link } from "react-router-dom";

const Hamburger = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="hamburger-main">
        {children}
        <div className="buttonClass1">
          <button className="nej" type="button" onClick={handleClose}>
            Close
          </button>
        </div>
      </section>
    </div>
  );
};

export default Hamburger;
