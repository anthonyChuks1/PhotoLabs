import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";



const PhotoList = ({photos, handleFavList}) => {
  return (
    <ul className="photo-list">
      {/* Insert React */}
      {photos.map((photo) => (
        <PhotoListItem
          className="photo-list__fav-icon-svg"
          key={photo.id}
          photo={photo}
          handleFavList={handleFavList}
        ></PhotoListItem>
      ))}
    </ul>
  );
};

export default PhotoList;
