import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ( {id, title, handleSelectedTopicId}) => {
 
  return (
    <div className="topic-list__item"  onClick={()=>handleSelectedTopicId(id)}>
      <span>{title}</span>
    </div>
  );
};

export default TopicListItem;
