import React, { useState } from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import "./styles/PhotoDetailsModal.scss";
import photos from "mocks/photos";
import topics from "mocks/topics";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
// Note: Rendering a single component to build components in isolation

const App = () => {
  //The array that holds the id for the favorite photographs
  const [favPhotos, setFavPhotos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalDetail, setModalDetail] = useState('Photo Is not available');

  //const [favFlag, setFavFlag] = useState(false);
  //handles the array that keeps track of the favorite photo
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

  //handles the favbadge icon on the nav bar
  const handleFavListFlag = () => {
    return favPhotos.length ? true : false;
  };

  const handleModal = (photo) => {
    const isModalOpenNew = !isModalOpen;
    setIsModalOpen(isModalOpenNew);
    //isModalOpenNew && console.log("Image clicked");
    const {urls:full} = photo;
    console.log(full);
    setModalDetail(full)
  };

  
  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        handleFavList={handleFavList}
        isFavPhotoExist={handleFavListFlag()}
        handleModal={handleModal}

      >
      </HomeRoute>
      {isModalOpen && <PhotoDetailsModal handleModal = {handleModal} modalDetail = {modalDetail}/>}
    </div>
  );
};

export default App;
