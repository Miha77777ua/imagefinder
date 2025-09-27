import React from "react";
import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";

export class ImageGallery extends React.Component {
  render() {
    return (
      <>
        {(!this.props.notLoaded && <ul className="ImageGallery">
          {this.props.data.map((el, id) => (
            <ImageGalleryItem
              url={el.webformatURL}
              key={id}
              specid={el.id}
              modalURL={el.largeImageURL}
              openModal={this.props.openModal}
            />
          ))}
        </ul>) || <p className="notloaded">Nothing yet!</p>}
      </>
    );
  }
}
