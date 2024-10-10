import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = ({photo}) => {
  /* Insert React */
  const {imageSource, profile, username, location} = photo
  return <div className = "photolist_item">
    <img src = {imageSource}></img>
    <img src = {profile}></img>
    <p>{username}</p>
    <p>{location.city}, {location.country}</p>
  </div>
};

export default PhotoListItem;
