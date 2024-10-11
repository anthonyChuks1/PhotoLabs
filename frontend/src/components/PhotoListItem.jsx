import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ photo, handleFavList }) => {
  /* Insert React */
  const {
    urls: { full, regular },
    user: {id, profile,username, name },
    location: { city, country },
  } = photo;
  return (
    <div className="photo-list__item">
      <PhotoFavButton photo={photo} handleFavList={handleFavList} />
      <img src={regular} className="photo-list__image" />

      <div className="photo-list__user-details">
        <img src={profile} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <p>{name}</p>
          <p className="photo-list__user-location">
            {city}, {country}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
