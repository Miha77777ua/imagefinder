import React from "react";

export class Modal extends React.Component {
  closeModalCallback = (ev) => {
    if (ev.key === "Escape" || ev.target.id === "overlay") {
      this.props.closeModal(ev, this.props.currentModalPicture);
    }
  }

  componentDidMount() {
    window.addEventListener("keydown", this.closeModalCallback);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.closeModalCallback);
  }

  render() {
    return (
      <>
        <div className="Overlay" onClick={this.closeModalCallback} id="overlay">
          <div className="Modal">
            <img src={this.props.currentModalPicture} alt="Picture" />
          </div>
        </div>
      </>
    );
  }
}
