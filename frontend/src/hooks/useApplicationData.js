import { useEffect, useReducer } from "react";

export const ACTIONS = {
  ADD_FAV_PHOTO: "ADD_FAV_PHOTO",
  REMOVE_FAV_PHOTO: "REMOVE_FAV_PHOTO",
  OPEN_MODAL_DIV: "OPEN_MODAL_DIV",
  IS_FAV_LIST: "IS_FAV_LIST",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_SELECTED_TOPIC_ID: "SET_SELECTED_TOPIC_ID",
  GET_PHOTOS_BY_TOPICS: "GET_PHOTOS_BY_TOPICS",
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
        isFavList: state.favPhotos.length ? true : false,
      };

    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload,
      };
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload,
      };
    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      return {
        ...state,
        photoData: action.payload,
      };
      
    case ACTIONS.SET_SELECTED_TOPIC_ID:
      return {
        ...state,
        selectedTopicId: action.payload,
      };


    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

//destruct actions
const {
  ADD_FAV_PHOTO,
  REMOVE_FAV_PHOTO,
  IS_FAV_LIST,
  OPEN_MODAL_DIV,
  SET_PHOTO_DATA,
  SET_TOPIC_DATA,
  GET_PHOTOS_BY_TOPICS,
  SET_SELECTED_TOPIC_ID
} = ACTIONS;

const useApplicationData = () => {
  const initialState = {
    favPhotos: [],
    isModalOpen: false,
    modalDetail: null,
    isFavList: false,
    photoData: [],
    topicData: [],
    photoTopicData: [],
    selectedTopicId: null,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { selectedTopicId } = state;

  useEffect(() => {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: SET_PHOTO_DATA, payload: data }));
  }, []);

  useEffect(() => {
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type: SET_TOPIC_DATA, payload: data }));
  }, []);

  useEffect(() => {
    if (selectedTopicId) {
      fetch(`/api/topics/photos/${selectedTopicId}`)
        .then((response) => response.json())
        .then((data) => dispatch({ type: GET_PHOTOS_BY_TOPICS, payload: data }))
        .catch((error) => console.error("Error fetching photos:", error));
    }
  }, [selectedTopicId]);

  const handleFavList = (selected, photo) => {
    if (photo && photo.id) {
      dispatch({
        type: selected ? ADD_FAV_PHOTO : REMOVE_FAV_PHOTO,
        value: { photo },
      });
    } else {
      console.error("Invalid photo object: missing id property");
    }
  };

  const handleFavListFlag = () => {
    return state.favPhotos.length ? true : false;
  };

  const handleModal = (photo) => {
    dispatch({ type: OPEN_MODAL_DIV, value: { photo } });
  };
  const handleSelectedTopicId = (pId) => {
    dispatch({type: SET_SELECTED_TOPIC_ID, payload: pId})
  };

  return {
    state,
    handleFavList,
    handleFavListFlag,
    handleModal,
    handleSelectedTopicId,
  };
};

export default useApplicationData;
