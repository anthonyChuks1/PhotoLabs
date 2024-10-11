import React, { useState } from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import photos from "mocks/photos";
import topics from "mocks/topics";
// const favPhotos = [];
// Note: Rendering a single component to build components in isolation
const App = () => {
  const [favPhotos, setFavPhotos] = useState([]);
  const handleFavList = (selected, photo) => {
    if (selected) {
      setFavPhotos((prevFavPhotos) => {
        const updatedFavPhotos = [...prevFavPhotos, photo];
        console.log("photo object:", photo);
        console.log("fav photo list:", updatedFavPhotos);
        return updatedFavPhotos;
      });
    }
  };
  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        handleFavList={handleFavList}
      />
    </div>
  );
};

export default App;
