import React from "react";

import "../styles/HomeRoute.scss";
import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

const HomeRoute = ({ topics, photos, handleFavList, favFlag}) => {
  return (
    <div className="home-route">
      {/* Insert React */}
      <TopNavigation topics={topics} favFlag = {favFlag}/>
      <PhotoList photos={photos} handleFavList = {handleFavList} />
    </div>
  );
};

export default HomeRoute;
