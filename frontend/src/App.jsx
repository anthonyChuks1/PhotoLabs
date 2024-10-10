import React from "react";

import PhotoListItem from "./components/PhotoListItem";
import PhotoFavButton from "components/PhotoFavButton";
import "./App.scss";
import PhotoList from "components/PhotoList";



// const photos = [
//   sampleDataForPhotoListItem,
//   sampleDataForPhotoListItem,
//   sampleDataForPhotoListItem,
// ];

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      {/* {photos.map((photo, index) => (
        <div key={index} className="photo-list__fav-icon-svg">
          <PhotoListItem photo={photo}></PhotoListItem>
        </div>
      ))} */}
      <PhotoList/>
    </div>
  );
};

export default App;
