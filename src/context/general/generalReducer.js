import {
  LOAD_CONFIG,
  LOAD_USER,
  CHANGE_STEPS,
  CHANGE_LANGUAGE
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case CHANGE_STEPS:
      return { ...state, steps: action.payload };
    case LOAD_CONFIG:
      return { ...state, config: action.payload };
    case LOAD_USER:
      return { ...state, selectedUser: action.payload };
    case CHANGE_LANGUAGE:
      return { ...state, language: action.payload };

    default:
      return state;
  }
};
