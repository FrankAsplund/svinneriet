import "./Hamburger.css";
import React from "react";

import dog from "../assets/dog.png";
import close from "../assets/close.png";

const Hamburger = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="hamburger-main">
        <div className="user">
          <img src={dog} id="dog"></img>
          <p id="mail">
            Frank_asplund <br></br>@hotmail.com
          </p>
          <img src={close} id="close" onClick={handleClose}></img>
        </div>
        {children}
      </section>
    </div>
  );
};

export default Hamburger;
