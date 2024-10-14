export const handleFavList = (selected, photo) => {
  if (selected) {
    setFavPhotos((prevFavPhotos) => {
      const updatedFavPhotos = [...prevFavPhotos, photo.id];

      // console.log("fav photo list:", updatedFavPhotos);
      return updatedFavPhotos;
    });
  } else {
    setFavPhotos((prevFavPhotos) => {
      const updatedFavPhotos = prevFavPhotos.filter(
        (valId) => valId !== photo.id
      );
      //console.log("fav photo list:", updatedFavPhotos);
      return updatedFavPhotos;
    });
  }
};

//handles the favbadge icon on the nav bar
export const handleFavListFlag = () => {
  return favPhotos.length ? true : false;
};

export const handleModal = (photo) => {
  const isModalOpenNew = !isModalOpen;
  setIsModalOpen(isModalOpenNew);
  setModalDetail(photo);
};

