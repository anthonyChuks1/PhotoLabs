import React from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import photos from "mocks/photos";
import topics from "mocks/topics";
const favPhotos = [];
// Note: Rendering a single component to build components in isolation
const App = () => {

  
  const handleFavList = (selected, photo) => {
    selected && [...favPhotos, photo];
    console.log('photo object:',photo);
    console.log('fav photo list:',favPhotos);
  }
  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} handleFavList= {handleFavList} />
    </div>
  );
};

export default App;
