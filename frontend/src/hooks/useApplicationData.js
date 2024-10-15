import { useReducer } from "react";

export const ACTIONS = {
  ADD_FAV_PHOTO: "ADD_FAV_PHOTO",
  REMOVE_FAV_PHOTO: "REMOVE_FAV_PHOTO",
  OPEN_MODAL_DIV: "OPEN_MODAL_DIV",
  IS_FAV_LIST: "IS_FAV_LIST",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_FAV_PHOTO:
      return {
        ...state,
        favPhotos: [...state.favPhotos, action.value.photo.id],
      };
    case ACTIONS.REMOVE_FAV_PHOTO:
      return {
        ...state,
        favPhotos: state.favPhotos.filter(
          (valId) => valId !== action.value.photo.id
        ),
      };
    case ACTIONS.OPEN_MODAL_DIV:
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
        modalDetail: action.value.photo,
      };
    case ACTIONS.IS_FAV_LIST:
      return {
        ...state,
        isFavList: state.favPhotos.length > 0,
      };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const useApplicationData = () => {
  // const [favPhotos, setFavPhotos] = useState([]);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [modalDetail, setModalDetail] = useState();
  const initialState = {
    favPhotos: [],
    isModalOpen: false,
    modalDetail: null,
    isFavList: false,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleFavList = (selected, photo) => {
    if (selected) {
      dispatch({ type: "ADD_FAV_PHOTO", value: { photo } });
    } else {
      dispatch({ type: "REMOVE_FAV_PHOTO", value: { photo } });
    }
  };

  //handles the favbadge icon on the nav bar
  const handleFavListFlag = () => {
    return state.favPhotos.length ? true : false;
  };

  const handleModal = (photo) => {
    dispatch({ type: "OPEN_MODAL_DIV", value: { photo } });
  };
  return {
    state: { 
      favPhotos: state.favPhotos, 
      isModalOpen: state.isModalOpen, 
      modalDetail: state.modalDetail 
    },
    handleFavList,
    handleFavListFlag,
    handleModal,
  };
};

export default useApplicationData;
