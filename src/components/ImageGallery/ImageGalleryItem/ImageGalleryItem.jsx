import React from "react";

export class ImageGalleryItem extends React.Component {
  render() {
    return (
      <li className="ImageGalleryItem" id={this.props.specid}>
        <img
          src={this.props.url}
          alt="Picture"
          className="ImageGalleryItem-image"
          id="image"
          onClick={(ev) => this.props.openModal(ev, this.props.modalURL)}
        />
      </li>
    );
  }
}
