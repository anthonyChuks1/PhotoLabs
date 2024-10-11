import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ photo, key, handleFavList }) => {
  /* Insert React */
  const {
    imageSource,
    profile,
    username,
    location: { city, country },
  } = photo;
  return (
    <div className="photo-list__item">
      <PhotoFavButton key={key} photo={photo} handleFavList={handleFavList} />
      <img src={imageSource} className="photo-list__image" />

      <div className="photo-list__user-details">
        <img src={profile} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <p>{username}</p>
          <p className="photo-list__user-location">
            {city}, {country}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
