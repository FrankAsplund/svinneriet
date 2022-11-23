import React, { Component } from "react";
import Hamburger from "./Hamburger.js";
import hamburger from "../assets/hamburger.png";
import home from "../assets/home-symbol.png";
import shops from "../assets/shops.png";
import subs from "../assets/subscription.png";
import settings from "../assets/settings.png";
import bicycle from "../assets/bicycle.png";
import { Link } from "react-router-dom";

class Menu extends Component {
  /* Toggle show modal */
  constructor() {
    super();
    this.state = {
      show: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  /* changes the state of the modal, from false to true */
  showModal = () => {
    this.setState({ show: true });
  };

  /* keeps the state of the modal false */
  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <main>
        <Hamburger show={this.state.show} handleClose={this.hideModal}>
          <div className="hamClass">
            <div className="boxContainer">
              <Link to="/">
                <div className="box">
                  <img src={home} className="boxImg" alt="home"></img>
                  <p className="boxText">Hem</p>
                </div>
              </Link>
            </div>
            <div className="boxContainer">
              <Link to="/Home">
                <div className="box">
                  <img src={shops} className="boxImg" alt="shops"></img>
                  <p className="boxText">Butiker</p>
                </div>
              </Link>
            </div>
            <Link to="/ActiveSubs">
              <div className="box">
                <img src={subs} className="boxImg" alt="subscriptions"></img>
                <p className="boxText">Prenumerationer</p>
              </div>
            </Link>
            <div className="boxContainer">
              <Link to="/Settings">
                <div className="box">
                  <img src={settings} className="boxImg" alt="settings"></img>
                  <p className="boxText">Inställningar</p>
                </div>
              </Link>
            </div>
            <div className="boxContainer">
              <Link to="/Pickup">
                <div className="box">
                  <img
                    src={bicycle}
                    className="boxImg"
                    alt="pick up your order"
                  ></img>
                  <p className="boxText">Upphämtning</p>
                </div>
              </Link>
            </div>
          </div>
        </Hamburger>
        <img
          className="hamburger"
          src={hamburger}
          onClick={this.showModal}
          alt="hamburger menu"
        />
      </main>
    );
  }
}

export default Menu;
