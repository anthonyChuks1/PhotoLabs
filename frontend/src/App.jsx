import React, { useState } from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import photos from "mocks/photos";
import topics from "mocks/topics";
// Note: Rendering a single component to build components in isolation
const App = () => {
  const [favPhotos, setFavPhotos] = useState([]);
  //const [favFlag, setFavFlag] = useState(false);
  const handleFavList = (selected, photo) => {
    if (selected) {
      setFavPhotos((prevFavPhotos) => {
        const updatedFavPhotos = [...prevFavPhotos, photo.id];

        console.log("fav photo list:", updatedFavPhotos);
        return updatedFavPhotos;
      });
    } else {
      setFavPhotos((prevFavPhotos) => {
        const updatedFavPhotos = prevFavPhotos.filter(
          (valId) => valId !== photo.id
        );
        console.log("fav photo list:", updatedFavPhotos);
        return updatedFavPhotos;
      });
    }
  };
  const handleFavListFlag = () => {
    return favPhotos.length ? true : false;
  };

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        handleFavList={handleFavList}
        favFlag={handleFavListFlag()}
      />
    </div>
  );
};

export default App;
