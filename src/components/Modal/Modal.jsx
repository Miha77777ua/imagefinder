import { useEffect } from "react";

export const Modal = ({ closeModal, currentModalPicture }) => {
  const closeModalCallback = (ev) => {
    if (ev.key === "Escape" || ev.target.id === "overlay") {
      closeModal(ev, currentModalPicture);
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", closeModalCallback);

    return () => {
      window.removeEventListener("keydown", closeModalCallback);
    };
  }, []);

  return (
    <>
      <div className="Overlay" onClick={closeModalCallback} id="overlay">
        <div className="Modal">
          <img src={currentModalPicture} alt="Picture" />
        </div>
      </div>
    </>
  );
}
