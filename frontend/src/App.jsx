import React from "react";

import PhotoListItem from "./components/PhotoListItem";
import PhotoFavButton from "components/PhotoFavButton";
import "./App.scss";

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

const photos = [
  sampleDataForPhotoListItem,
  sampleDataForPhotoListItem,
  sampleDataForPhotoListItem,
];

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      {photos.map((photo, index) => (
        <div key={index} className="photo-list__fav-icon-svg">
          <PhotoListItem photo={photo}></PhotoListItem>
        </div>
      ))}
    </div>
  );
};

export default App;
