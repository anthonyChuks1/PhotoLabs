import React from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import "./styles/PhotoDetailsModal.scss";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import useApplicationData from "./hooks/useApplicationData";
// Note: Rendering a single component to build components in isolation

const App = () => {
  const {
    state: { isModalOpen, modalDetail, favPhotos, photoData, topicData},
    handleFavList,
    handleFavListFlag,
    handleModal,
    handleSelectedTopicId,
    isFavourite,
    handleFavClick
  } = useApplicationData();

  /*All app render here*/
  return (
    <div className="App">
      <HomeRoute
        topics={topicData}
        photos={photoData}
        handleSelectedTopicId={handleSelectedTopicId}
        handleFavList={handleFavList}
        isFavPhotoExist={handleFavListFlag()}
        handleModal={handleModal}
        isFavourite={isFavourite}
        handleFavClick = {handleFavClick}
      ></HomeRoute>

      {/* opens the modal when a photo is clicked */}
      {isModalOpen && (
        <PhotoDetailsModal
          handleModal={handleModal}
          photo={modalDetail}
          favPhotos={favPhotos}
          handleFavList={handleFavList}
          isFavourite={isFavourite}
          handleFavClick={handleFavClick}
        />
      )}
    </div>
  );
};

export default App;
