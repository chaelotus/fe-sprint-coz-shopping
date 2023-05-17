import InitialData from "./data/InitialData";
// action types
export const ADD_TO_BOOKMARK = "ADD_TO_BOOKMARK";
export const REMOVE_FROM_BOOKMARK = "REMOVE_FROM_BOOKMARK";

export const addToBookmark = (item) => {
  return {
    type: ADD_TO_BOOKMARK,
    payload: item,
  };
};
export const removeFromBookmark = (item) => {
  return {
    type: REMOVE_FROM_BOOKMARK,
    payload: item,
  };
};
export const reducer = (state = InitialData.bookmark, action) => {
  switch (action.type) {
    case ADD_TO_BOOKMARK:
      return {
        item: [...state.item, action.payload],
      };
    case REMOVE_FROM_BOOKMARK:
      let remove = state.item.filter((item) => item.id !== action.payload.id);
      return {
        item: [...remove],
      };
    default:
      return {
        ...state,
      };
  }
};
export default reducer;
