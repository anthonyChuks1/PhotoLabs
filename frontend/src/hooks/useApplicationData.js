import { useState } from "react";

const useApplicationData = () => {
  const [favPhotos, setFavPhotos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalDetail, setModalDetail] = useState();
  const handleFavList = (selected, photo) => {
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
  const handleFavListFlag = () => {
    return favPhotos.length ? true : false;
  };

  const handleModal = (photo) => {
    const isModalOpenNew = !isModalOpen;
    setIsModalOpen(isModalOpenNew);
    setModalDetail(photo);
  };
  return {
    state: { favPhotos, isModalOpen, modalDetail },
    handleFavList,
    handleFavListFlag,
    handleModal,
  };
};

export default useApplicationData;