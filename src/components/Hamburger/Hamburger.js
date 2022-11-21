import "./Hamburger.css";
import React from "react";

import dog from "../assets/dog.png";
import close from "../assets/close.png";

const Hamburger = ({ handleClose, show, children }) => {
  /* Display or hide modal by switching css-classes */
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="hamburger-main">
        <div className="user">
          <img src={dog} id="dog" alt="profile"></img>
          <p id="mail">
            Frank_asplund <br></br>@hotmail.com
          </p>
          <img
            src={close}
            id="close"
            onClick={handleClose}
            alt="close menu button"
          ></img>
        </div>
        {children}
      </section>
    </div>
  );
};

export default Hamburger;
