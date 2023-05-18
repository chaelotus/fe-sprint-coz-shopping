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
const Bookmarkreducer = (state = InitialData, action) => {
  switch (action.type) {
    case ADD_TO_BOOKMARK:
      return {
        bookmarkItem: [...state.bookmarkItem, action.payload],
      };
    case REMOVE_FROM_BOOKMARK:
      let remove = state.bookmarkItem.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        bookmarkItem: [...remove],
      };
    default:
      return state;
  }
};
export default Bookmarkreducer;
