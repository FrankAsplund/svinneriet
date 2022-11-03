import React, { Component } from "react";
import Hamburger from "./Hamburger.js";
import hamburger from "../assets/hamburger.png";
import home from "../assets/home-symbol.png";
import shops from "../assets/shops.png";
import subs from "../assets/subscription.png";
import settings from "../assets/settings.png";
import bicycle from "../assets/bicycle.png";
import dog from "../assets/dog.png";
import close from "../assets/close.png";
import { Link } from "react-router-dom";

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <main>
        <Hamburger show={this.state.show} handleClose={this.hideModal}>
          <div className="hamClass">
            <div className="boxContainer">
              <Link to="/Start">
                <div className="box">
                  <img src={home} className="boxImg"></img>
                  <p className="boxText">Hem</p>
                </div>
              </Link>
            </div>
            <div className="boxContainer">
              <Link to="/">
                <div className="box">
                  <img src={shops} className="boxImg"></img>
                  <p className="boxText">Butiker</p>
                </div>
              </Link>
            </div>
            <div className="box">
              <img src={subs} className="boxImg"></img>
              <p className="boxText">Prenumerationer</p>
            </div>
            <div className="boxContainer">
              <Link to="/Settings">
                <div className="box">
                  <img src={settings} className="boxImg"></img>
                  <p className="boxText">Inställningar</p>
                </div>
              </Link>
            </div>
            <div className="box">
              <img src={bicycle} className="boxImg"></img>
              <p className="boxText">Upphämtning</p>
            </div>
          </div>
        </Hamburger>
        <button type="button" className="hamTest" onClick={this.showModal}>
          <img className="hamburger" src={hamburger} />
        </button>
      </main>
    );
  }
}

export default Menu;
