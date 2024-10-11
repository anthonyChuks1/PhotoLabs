import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";


const TopicList = ({topics}) => {
  const topicList = [...topics];
  return (
    <div className="top-nav-bar__topic-list">
      {/* Insert React components here */}
      {topicList.map((topic) => (
        <TopicListItem key={topic.id} id={topic.id} title={topic.title} />
      ))}
    </div>
  );
};

export default TopicList;
