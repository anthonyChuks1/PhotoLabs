import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoFavButton from "components/PhotoFavButton";
import PhotoList from "components/PhotoList";

const PhotoDetailsModal = ({
  handleModal,
  photo,
  favPhotos,
  handleFavList,
  isFavourite,
  handleFavClick,
}) => {
  const {
    urls: { full, regular } = {},
    user: { id, profile, username, name } = {},
    location: { city, country } = {},
    similar_photos = {},
  } = photo || {};

  const similar_photos_array = Object.values(similar_photos).flat();

  return (
    <div className="photo-details-modal">
      {/* Top Close Button */}
      <div>
        <button
          className="photo-details-modal__close-button"
          onClick={handleModal}
        >
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>

      {/* Image Section */}
      <div style={{marginLeft : '5%'}}>
        <PhotoFavButton
          photoId={id}
          photo={photo}
          favPhotos={favPhotos}
          handleFavList={handleFavList}
          isFavourite={isFavourite} 
          handleFavClick={handleFavClick}  
        />
        <img src={full} className="photo-details-modal__image"alt="Selected photo" />
      </div>

      {/* Photographer Details */}
      <div className="photo-details-modal__photographer-details" style={{marginLeft : '4%'}}>
        <img
          src={profile}
          className="photo-details-modal__photographer-profile"
          alt="Photographer profile"
        />
        <div className="photo-details-modal__photographer-info">
          <p>{name}</p>
          <p className="photo-details-modal__photographer-location">
            {city}, {country}
          </p>
        </div>
      </div>

      {/* Top Bar for Flex Layout */}
      <div className="photo-details-modal__top-bar"></div>

      {/* Related Photos Section */}
      <div>
        <div className="photo-details-modal__images">
          <p className="photo-details-modal__header">Related Photos</p>
          <PhotoList
            photos={similar_photos_array}
            favourites={favPhotos}
            handleFavClick={handleFavClick}
            isFavourite={isFavourite}
            handleModal={handleModal}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
