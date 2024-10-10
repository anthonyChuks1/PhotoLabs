import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ( {topic}) => {
  const {title} = topic;
  return (
    <div className="topic-list__item">
      <span>{title}</span>
    </div>
  );
};

export default TopicListItem;
