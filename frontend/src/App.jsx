import React from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import "./styles/PhotoDetailsModal.scss";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import useApplicationData from "./hooks/useApplicationData";
import AddPhoto from "./routes/AddPhoto";
// Note: Rendering a single component to build components in isolation

const App = () => {
  const {
    state: {
      isModalOpen,
      modalDetail,
      favPhotos,
      photoData,
      topicData,
      isAddPhoto,
    },
    handleFavList,
    handleFavListFlag,
    handleModal,
    handleSelectedTopicId,
    isFavourite,
    handleFavClick,
    handleAddNewPhotoClick,
  } = useApplicationData();

  /*All app render here*/
  return (
    <div className="App">
      {/*When add new photo is clicked*/}
      {isAddPhoto ? (
        <AddPhoto
          handleAddNewPhotoClick={handleAddNewPhotoClick}
          topics={[]}
          isFavPhotoExist={handleFavListFlag()}
          handleSelectedTopicId={handleSelectedTopicId}
        />
         
      ) : (
        <HomeRoute
          topics={topicData}
          photos={photoData}
          handleSelectedTopicId={handleSelectedTopicId}
          handleFavList={handleFavList}
          isFavPhotoExist={handleFavListFlag()}
          handleModal={handleModal}
          isFavourite={isFavourite}
          handleFavClick={handleFavClick}
          handleAddNewPhotoClick={handleAddNewPhotoClick}
        />
      )}

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
