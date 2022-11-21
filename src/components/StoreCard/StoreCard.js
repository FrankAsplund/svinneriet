import React from "react";
import "./storecard.css";

export const StoreCard = ({ store }) => {
  return (
    <div className="storeCard-title" key={store.id}>
      <img src={store.img} alt="store" />
    </div>
  );
};
