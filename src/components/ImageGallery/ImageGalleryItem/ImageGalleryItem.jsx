export const ImageGalleryItem = ({ specid, url, openModal, modalURL }) => {
  return (
    <li className="ImageGalleryItem" id={specid}>
      <img
        src={url}
        alt="Picture"
        className="ImageGalleryItem-image"
        id="image"
        onClick={(ev) => openModal(ev, modalURL)}
      />
    </li>
  );
}
