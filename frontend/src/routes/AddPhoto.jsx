import TopNavigation from "components/TopNavigationBar";
import React from "react";
// front page for adding your own photos
const AddPhoto = ({
  handleAddNewPhotoClick,
  topics,
  isFavPhotoExist,
  handleSelectedTopicId,
}) => {
  return (
    <div>
      <TopNavigation
        topics={topics}
        isFavPhotoExist={isFavPhotoExist}
        handleSelectedTopicId={handleSelectedTopicId}
        handleAddNewPhotoClick={handleAddNewPhotoClick}
      />
      <p>Create a new photo entry</p>
      <form>
        <label htmlFor="photoUrl"> Photo FILE</label>
        <input type="file" id="photoUrl" placeholder="Your image file" />

        <button onClick={handleAddNewPhotoClick}>Submit</button>
      </form>
    </div>
  );
};

export default AddPhoto;
