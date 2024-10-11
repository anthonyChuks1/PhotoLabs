import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';



function PhotoFavButton({photo, handleFavList}) {
  const [selected, setSelected] = useState(false);
  
  const handleClick = () => {
    const newSelected = !selected;
    setSelected(newSelected);
    handleFavList(photo, newSelected);
  }
  return (
    <div className="photo-list__fav-icon" onClick = {handleClick}>
      <div className="photo-list__fav-icon-svg" >
       <FavIcon selected = {selected} />    
      </div>
    </div>
  );
}

export default PhotoFavButton;