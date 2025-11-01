import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({ notLoaded, data, openModal }) => {
  return (
    <>
      {(!notLoaded && <ul className="ImageGallery">
        {data.map((el, id) => (
          <ImageGalleryItem
            url={el.webformatURL}
            key={id}
            specid={el.id}
            modalURL={el.largeImageURL}
            openModal={openModal}
          />
        ))}
      </ul>) || <p className="notloaded">Nothing yet!</p>}
    </>
  );
}
