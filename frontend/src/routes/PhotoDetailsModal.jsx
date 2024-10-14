import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoFavButton from "components/PhotoFavButton";
import PhotoList from "components/PhotoList";

const PhotoDetailsModal = ({ handleModal, photo, favPhotos, handleFavList}) => {
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
      <PhotoFavButton photoId={id} photo = {photo} favPhotos={favPhotos} handleFavList={handleFavList}/>

        <img className="photo-details-modal__image" src={full} />
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
        <div>
          <div className="photo-details-modal__images">
            <PhotoList photos={similar_photos_array} favourites={favPhotos} handleFavList={handleFavList}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
