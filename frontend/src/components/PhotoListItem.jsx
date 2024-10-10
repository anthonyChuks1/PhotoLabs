import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {
  /* Insert React */
  return <div className = "photolist_item">
    <img src = {props.imageSource}></img>
    <img src = {props.profile}></img>
    <p>{props.username}</p>
    <p>{props.location}</p>
  </div>
};

export default PhotoListItem;
