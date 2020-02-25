import {
  CHANGE_SCREEN,
  SET_SELECTED,
  SET_LOADING,
  SET_USERNAME,
  SET_USERS,
  SET_PROJECTS
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_SELECTED:
      return { ...state, selected: action.payload };
    case CHANGE_SCREEN:
      return { ...state, screen: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_USERNAME:
      return { ...state, username: action.payload };
    case SET_USERS:
      return { ...state, users: action.payload };
    case SET_PROJECTS:
      return { ...state, projects: action.payload };
    default:
      return state;
  }
};
