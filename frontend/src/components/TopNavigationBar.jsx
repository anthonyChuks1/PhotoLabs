import React from "react";

import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

const TopNavigation = ({
  topics,
  isFavPhotoExist,
  handleSelectedTopicId,
  handleAddNewPhotoClick,
}) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList
        topics={topics}
        handleSelectedTopicId={handleSelectedTopicId}
      />
      <button type="button" style={{ border: "0px", backgroundColor: "white" }} onClick={handleAddNewPhotoClick}>
        ADD NEW PHOTO
      </button>
      <FavBadge isFavPhotoExist={isFavPhotoExist} selected={isFavPhotoExist} />
    </div>
  );
};

export default TopNavigation;
