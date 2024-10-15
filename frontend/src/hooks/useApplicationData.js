import { useReducer, useState } from "react";

export const ACTIONS = {
  ADD_FAV_PHOTO: "ADD_FAV_PHOTO",
  OPEN_MODAL_DIV: "OPEN_MODAL_DIV",
  IS_FAV_LIST: "IS_FAV_LIST"
};


function reducer(state, action) {
  switch (action.type) {
    case FAV_PHOTO_ADDED:
      return {

       }
    case OPEN_MODAL_DIV: 
    return{

    }
    case IS_FAV_LIST: return{

    }

    
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const useApplicationData = () => {
  const [favPhotos, setFavPhotos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalDetail, setModalDetail] = useState();
  const [state, dispatch] = useReducer(reducer, 0);
  const handleFavList = (selected, photo) => {
    if (selected) {
      setFavPhotos((prevFavPhotos) => {
        const updatedFavPhotos = [...prevFavPhotos, photo.id];
        return updatedFavPhotos;
      });
    } else {
      setFavPhotos((prevFavPhotos) => {
        const updatedFavPhotos = prevFavPhotos.filter(
          (valId) => valId !== photo.id
        );
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
