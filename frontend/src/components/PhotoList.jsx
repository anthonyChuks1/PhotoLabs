import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";



const PhotoList = ({photos}) => {
const photoList = [...photos]
  return (
    <ul className="photo-list">
      {/* Insert React */}
      {photoList.map((photo) => (
        <PhotoListItem
          className="photo-list__fav-icon-svg"
          key={photo.id}
          photo={photo}
        ></PhotoListItem>
      ))}
    </ul>
  );
};

export default PhotoList;
