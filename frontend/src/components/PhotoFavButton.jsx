import React from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton({ photo, isFavourite, handleFavClick }) {
  const handleClick = () => {
    handleFavClick(photo);
  };
  const newSelected = isFavourite(photo);
  // console.log("In photo fav button :",newSelected);
  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={newSelected} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
