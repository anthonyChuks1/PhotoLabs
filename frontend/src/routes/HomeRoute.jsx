import React from "react";

import "../styles/HomeRoute.scss";
import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

const HomeRoute = ({
  topics,
  photos,
  handleFavList,
  isFavPhotoExist,
  handleModal,
}) => {
  return (
    <div className="home-route">
      {/* Insert React */}
      <TopNavigation topics={topics} isFavPhotoExist={isFavPhotoExist} />
      <PhotoList
        photos={photos}
        handleFavList={handleFavList}
        handleModal={handleModal}
      />
    </div>
  );
};

export default HomeRoute;
