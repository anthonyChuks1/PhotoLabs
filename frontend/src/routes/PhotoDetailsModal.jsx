import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoFavButton from "components/PhotoFavButton";

const PhotoDetailsModal = ({ handleModal, photo, favPhotos }) => {
  const {
    urls: { full, regular } = {},
    user: { id, profile, username, name } = {},
    location: { city, country } = {},
    similar_photos = {},
  } = photo || {};

  const similar_photos_array = Object.values(similar_photos).flat();

  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={handleModal}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div>
        <PhotoFavButton />
        <img className="photo-details-modal__image" src={regular} />
        <div className="photo-details-modal__photographer-details">
          <img
            src={profile}
            className="photo-details-modal__photographer-profile"
          />
          <div className="photo-details-modal__photographer-info">
            <p>{name}</p>
            <p className="photo-details-modal__photographer-location">
              {city}, {country}
            </p>
          </div>

          <div></div>
        </div>
        <p className="photo-details-modal__header ">Similar Photos</p>
        <div >
          {console.log("In Photo details modal", similar_photos_array)}
          {similar_photos_array.map((photo) => (
            <div key={photo.id} className="photo-details-modal__images">
              <PhotoFavButton />
              <img 
                src={photo.urls.regular}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
