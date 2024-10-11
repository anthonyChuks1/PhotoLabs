import React from "react";
import "./App.scss";
import PhotoList from "components/PhotoList";
import TopicList from "components/TopicList";
import TopNavigation from "components/TopNavigationBar";


// const sampleDataForTopicListItem = {
//   id: "1",
//   slug: "topic-1",
//   label: "Nature",
// };

// const topics = [
//   sampleDataForTopicListItem,
//   sampleDataForTopicListItem,
//   sampleDataForTopicListItem,
// ]
// const photos = [
//   sampleDataForPhotoListItem,
//   sampleDataForPhotoListItem,
//   sampleDataForPhotoListItem,
// ];

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      {/* {photos.map((photo, index) => (
        <div key={index} className="photo-list__fav-icon-svg">
          <PhotoListItem photo={photo}></PhotoListItem>
        </div>
      ))} */}
    
      {/* {topics.map((topic, index) => (
        <TopicListItem key = {index} topic = {topic} />
      ))} */}
      <TopNavigation/>      
      <PhotoList/>
    </div>
  );
};

export default App;

