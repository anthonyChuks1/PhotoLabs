import React from "react";

import "../styles/HomeRoute.scss";
import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

/**Front page of the app */
const HomeRoute = ({
  topics,
  photos,
  handleFavList,
  isFavPhotoExist,
  handleModal,
  handleSelectedTopicId,
  handleFavClick,
  handleFavButtonDisplay,
}) => {
  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        isFavPhotoExist={isFavPhotoExist}
        handleSelectedTopicId={handleSelectedTopicId}
      />
      <PhotoList
        photos={photos}
        handleFavList={handleFavList}
        handleModal={handleModal}
        handleFavButtonDisplay={handleFavButtonDisplay}
        handleFavClick = {handleFavClick}
      />
    </div>
  );
};

export default HomeRoute;
