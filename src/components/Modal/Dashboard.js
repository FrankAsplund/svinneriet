import React, { Component } from "react";
import Modal from "./Modal.js";

class Dashboard extends Component {
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
        <Modal show={this.state.show} handleClose={this.hideModal}>
          {/* <div className="modalClass">
            <p className="modalText1">
              Är du säker på att du vill prenumerera på denna tjänst?
            </p>
            <p className="modalText2">
              99:- kommer dras på autogiro varje månad, är du säker?
            </p>
          </div> */}
        </Modal>
        <button type="button" className="text2" onClick={this.showModal}>
          Prenumerera!
        </button>
      </main>
    );
  }
}

export default Dashboard;
