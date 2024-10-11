import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";


const TopicList = ({topics}) => {
  return (
    <div className="top-nav-bar__topic-list">
      {/* Insert React components here */}
      {topics.map((topic) => (
        <TopicListItem key={topic.id} id={topic.id} title={topic.title} />
      ))}
    </div>
  );
};

export default TopicList;
