import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';



function PhotoFavButton({photo, handleFavList, handleFavButtonDisplay, handleFavClick}) {
  //const [selected, setSelected] = useState(false);
  
  const handleClick = () => {
    handleFavClick();
   // const newSelected = !selected;
    // changed the selected state
    //setSelected(newSelected);
    // add to list 
    handleFavList(handleFavButtonDisplay(photo), photo);
  }

  
  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg" >
       <FavIcon selected = {() => handleFavButtonDisplay(photo)} />    
      </div>
    </div>
  );
}

export default PhotoFavButton;