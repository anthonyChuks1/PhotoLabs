import { useEffect, useReducer } from "react";

export const ACTIONS = {
  ADD_FAV_PHOTO: "ADD_FAV_PHOTO",
  REMOVE_FAV_PHOTO: "REMOVE_FAV_PHOTO",
  OPEN_MODAL_DIV: "OPEN_MODAL_DIV",
  IS_FAV_LIST: "IS_FAV_LIST",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_SELECTED_TOPIC_ID: "SET_SELECTED_TOPIC_ID",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  GET_PHOTOS_BY_TOPICS: "GET_PHOTOS_BY_TOPICS",
  SET_SELECTED_FAV: "SET_SELECTED_FAV",
  OPEN_ADD_PHOTO: "OPEN_ADD_PHOTO",
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

      case ACTIONS.OPEN_ADD_PHOTO:
        return{
          ...state,
          isAddPhoto: !state.isAddPhoto,
        }
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

    case ACTIONS.SET_SELECTED_FAV:
      return {
        ...state,
        selected: !state.selected,
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
  GET_PHOTOS_BY_TOPICS,
  SET_SELECTED_TOPIC_ID,
  SET_TOPIC_DATA,
  SET_SELECTED_FAV,
  OPEN_ADD_PHOTO,
} = ACTIONS;

const useApplicationData = () => {
  //Initial state for the states
  const initialState = {
    favPhotos: [],
    isModalOpen: false,
    modalDetail: null,
    isFavList: false,
    photoData: [],
    topicData: [],
    photoTopicData: [],
    selectedTopicId: null,
    selected: false,
    isAddPhoto: false,
  };

  //useReducer initializer
  const [state, dispatch] = useReducer(reducer, initialState);

  //Get the returned selectedTopicId state to use
  const { selectedTopicId, selected } = state;

  // fetches all photos
  useEffect(() => {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: SET_PHOTO_DATA, payload: data }));
  }, []);

  // fetches the topics
  useEffect(() => {
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type: SET_TOPIC_DATA, payload: data }));
  }, []);

  // fetches the photos by the topic id
  useEffect(() => {
    if (selectedTopicId) {
      fetch(`/api/topics/photos/${selectedTopicId}`)
        .then((response) => response.json())
        .then((data) => dispatch({ type: GET_PHOTOS_BY_TOPICS, payload: data }))
        .catch((error) => console.error("Error fetching photos:", error));
    }
  }, [selectedTopicId]);

  useEffect(() => {
    console.log("Selected state updated:", selected);
  }, [selected]);

  useEffect(() => {
    console.log("Fav Photos:", state.favPhotos);
  }, [state.favPhotos]);
  
  useEffect(()=> {
    console.log("Is add new photo:", state.isAddPhoto);
  }, [state.isAddPhoto]);

  // Adds the photo to the favourite list anytime the fav button is clicked
  const handleFavList = (photo, isSelected) => {
    // if (photo && photo.id) {
      dispatch({
        type: isSelected ? ADD_FAV_PHOTO : REMOVE_FAV_PHOTO,
        value: { photo },
      });
   // } else {
    //   console.error("Invalid photo object: missing id property");
    // }
  };

  //when fav button is clicked
  const handleFavClick = (photo) => {
    // dispatch({ type: SET_SELECTED_FAV });

    handleFavList(photo, !state.favPhotos.includes(photo.id)); // Pass the opposite of current selected state
    // if (state.favPhotos.includes(photo.id)) {
    //   dispatch({ type: SET_SELECTED_FAV });
    // }
  };

  //Handles the fav icon when the the page is reloaded
  const isFavourite = (photo) => {
    return state.favPhotos.includes(photo.id);
  };

  //returns a boolean depending on if there is any photo in favPhoto list
  const handleFavListFlag = () => {
    return state.favPhotos.length ? true : false;
  };

  // handels the component for the content of the modal window
  const handleModal = (photo) => {
    dispatch({ type: OPEN_MODAL_DIV, value: { photo } });
  };
  // Handles the topic selection
  const handleSelectedTopicId = (pId) => {
    dispatch({ type: SET_SELECTED_TOPIC_ID, payload: pId });
  };

  const handleAddNewPhotoClick = () => {
    dispatch({type: OPEN_ADD_PHOTO})
    console.log("You can now add a photo");
  }

  return {
    state,
    handleFavList,
    handleFavListFlag,
    handleModal,
    handleSelectedTopicId,
    isFavourite,
    handleFavClick,
    handleAddNewPhotoClick,
  };
};

export default useApplicationData;
