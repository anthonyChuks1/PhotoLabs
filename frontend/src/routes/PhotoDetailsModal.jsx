import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";

const PhotoDetailsModal = ({ handleModal, modalDetail }) => {
  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={handleModal}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <img
        className="photo-details-modal__images photo-details-modal__image"
        src={modalDetail.full}
      />
    </div>
  );
};

export default PhotoDetailsModal;
