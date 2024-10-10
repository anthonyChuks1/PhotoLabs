import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = ({photo}) => {
  /* Insert React */
  const {imageSource, profile, username, location:{city, country}} = photo
  return (
    <div className = "photo-list__item">
      <img src = {imageSource} className="photo-list__image"></img>
      <div className = "photo-list__user-details">
        <img src = {profile} className = "photo-list__user-profile"></img>
        <div className = "photo-list__user-info">
          <p>{username}</p>
          <p className = "photo-list__user-location">{city}, {country}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
