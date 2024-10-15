import React from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import "./styles/PhotoDetailsModal.scss";
import photos from "mocks/photos";
import topics from "mocks/topics";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "./hooks/useApplicationData";
// Note: Rendering a single component to build components in isolation

const App = () => {
  const {
    state: { isModalOpen, modalDetail, favPhotos },
    handleFavList,
    handleFavListFlag,
    handleModal,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        handleFavList={handleFavList}
        isFavPhotoExist={handleFavListFlag()}
        handleModal={handleModal}
      ></HomeRoute>
      {isModalOpen && (
        <PhotoDetailsModal
          handleModal={handleModal}
          photo={modalDetail}
          favPhotos={favPhotos}
          handleFavList={handleFavList}
        />
      )}
    </div>
  );
};

export default App;
